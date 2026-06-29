GlowScript 2.9 VPython

scene.width=600
scene.height=500

running = False

# Nettoie un contour avant triangulation : retire les points dupliqués et les
# points colinéaires qui font planter poly2tri ("Intersecting Constraints").
def contour_propre(poly):
    # 1) retirer les points consécutifs identiques. Pas de "not pts" ni de pts[-1] :
    #    GlowScript traite [] comme VRAI (sémantique JS), donc on teste len().
    pts = []
    for q in poly:
        m = len(pts)
        if m == 0 or q[0] != pts[m-1][0] or q[1] != pts[m-1][1]:
            pts.append([q[0], q[1]])
    # 2) retirer les points colinéaires (cyclique). Pas de dépaquetage "x,y = ..."
    #    (autre construction qui peut appeler __getitem__ sur un tableau brut).
    n = len(pts)
    if n >= 4:
        out = []
        for i in range(n):
            a0 = pts[(i-1+n) % n]
            a1 = pts[i]
            a2 = pts[(i+1) % n]
            aire = (a1[0]-a0[0])*(a2[1]-a0[1]) - (a1[1]-a0[1])*(a2[0]-a0[0])
            if abs(aire) >= 1e-7:
                out.append([a1[0], a1[1]])
        pts = out
    # 3) refermer le contour : extrusion exige premier point == dernier
    k = len(pts)
    if k >= 1 and (pts[k-1][0] != pts[0][0] or pts[k-1][1] != pts[0][1]):
        pts.append([pts[0][0], pts[0][1]])
    return pts


def Run(b):
    global running
    running = not running
    if running: b.text = "Pause"
    else: b.text = "Run"
    
bbutton=button(text="Run", pos=scene.title_anchor, bind=Run)

def Reset(c):
    global  t, ball1, ball2
    t=0
    ball.pos=p[0].pos+vec(0,Rball,-0.05)
    ball.v=vector(0,0,0)
    tlabel.text='{:.3f} s'.format(t)
    
cbutton = button(text="Reset", pos=scene.title_anchor, bind=Reset)

N=12

rcylinder=0.006
rball=0.02
g=vector(0,-9.8,0)

start=vector(-0.5,0.5,0)
end=vector(2,-0.5,0)

scene.center = (end+start)/2

dx = abs((end-start).x)/(N-1)
dy = abs((end-start).y)/(N-1)

def solve_theta(x_over_h, tol=1e-6, maxiter=100):
    a, b = 1e-6, 2*pi - 1e-6
    fa = (a - sin(a)) / (1 - cos(a)) - x_over_h
    fb = (b - sin(b)) / (1 - cos(b)) - x_over_h
    if fa * fb > 0:
        print("Impossible de trouver une racine dans (0, 2π).")
    for _ in range(maxiter):
        m = 0.5 * (a + b)
        fm = (m - sin(m)) / (1 - cos(m)) - x_over_h
        if abs(fm) < tol:
            return m
        if fa * fm <= 0:
            b, fb = m, fm
        else:
            a, fa = m, fm

    return 0.5 * (a + b)

def brachistochrone(P0, P1, N=200):
    x0, y0, z0 = P0.x, P0.y, P0.z
    x1, y1, z1 = P1.x, P1.y, P1.z
    X = x1 - x0
    H = y0 - y1
    # angle terminal de la cycloïde
    theta1 = solve_theta(X / H)
    # paramètre a de la cycloïde
    a = 2 * H / (1 - cos(theta1))

    points = []
    for i in range(N + 1):
        theta = theta1 * i / N
        xi = x0 + a * (theta - sin(theta)) / 2
        yi = y0 - a * (1 - cos(theta)) / 2
        points.append(vec(xi, yi, 0))
    return points

Pts_brachi = brachistochrone(start, end)
Liste_y = [] 
for pt in Pts_brachi:
  Liste_y.append(pt.y)
Miny = min(Liste_y)-0.1
Brachi = curve(pos=Pts_brachi,color=vec(1,1,0))


#these are two empty lists.  one for the balls, one for the lines
p=[]
track=[]
socle=[]

p=p+[sphere(pos=start, radius=rball, color=vec(0.2,0.4,0.7))]
for i in range(N-2):
    p=p+[sphere(pos=start+vec(dx*(i+1),-dy*(i+1),0), radius=rball)]
p=p+[sphere(pos=end, radius=rball, color=vec(0.2,0.4,0.7))]
p[0].visible=False
p[N-1].visible=False

colorsocle=vec(0,118,186)/255
for i in range(N):
  socle.append([p[i].pos.x,p[i].pos.y])
socle.append([end.x,Miny])
socle.append([start.x,Miny])
# (le point de fermeture est ajouté par contour_propre, qui referme le contour)
ex=extrusion(path=[vec(0,0,0), vec(0,0,-0.1)], shape=contour_propre(socle),color=colorsocle)


track=track+[cylinder(pos=p[0].pos, axis=p[1].pos-p[0].pos, radius=rcylinder)]

for j in range(1,N-1,1):
    track=track+[cylinder(pos=p[j].pos, axis=p[j+1].pos-p[j].pos, radius=rcylinder)]

Rball = rball*2
ball=sphere(pos=p[0].pos+vec(0,Rball,-0.05), radius=Rball, color=vec(212,24,118)/255)
ball.v=vector(0,0,0)

t=0
dt=0.0002

tlabel=label(pos=p[-1].pos+vec(0,0,0), text='{:.3f} s'.format(t), xoffset=0, yoffset=30, line=False, color=vec(255,149,202)/255)


#this is stuff so you can drag the balls
drag=False
R=vector(0,0,0)
scene.bind("mousedown", def():
    global drag
    drag=True
    
    scene.bind("mouseup", def():
        global drag
        drag=False
    )
)
t=0


while True:
    rate(1000)
    
    if drag:
        
        R=scene.mouse.pos
        for k in range(N-2):
            if R.x>(p[k+1].pos.x-dx/2) and R.x<(p[k+1].pos.x+dx/2):
                if R.y> Miny:
                  p[k+1].pos.y=min(R.y,start.y)
                else :
                  p[k+1].pos.y=max(R.y,end.y-0.099)
                socle[k+1]=[p[k+1].pos.x,p[k+1].pos.y]
                track[k].axis=p[k+1].pos-p[k].pos
                track[k+1].pos.y=p[k+1].pos.y
                track[k+1].axis=p[k+2].pos-p[k+1].pos

        ex.visible=False
        ex = extrusion(path=[vec(0,0,0), vec(0,0,-0.1)], shape=contour_propre(socle),color=colorsocle)

        
    if running:
        
        for j in range(N-1):
            if ball.pos.x>=(p[j].pos.x):
               ball.v=mag(ball.v)*norm(p[j+1].pos-p[j].pos)
               a=dot(g,norm(p[j+1].pos-p[j].pos))*norm(p[j+1].pos-p[j].pos)
               
        ball.v=ball.v+a*dt
        

        if ball.pos.x>=p[-1].pos.x*.999:
            ball.v=vector(0,0,0)
        else:
            ball.pos=ball.pos+ball.v*dt
            t=t+dt
            tlabel.text='{:.3f} s'.format(t)
