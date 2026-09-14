GlowScript 3.1 VPython

h = 0.2
N = 6
R = 2
r = 0.5
vit = 30

scene.width,scene.height = 600,500
scene.axis = vec(0,-1,-2)
scene.range = 6
scene.background = vec(97,75,150)/255

# Socle
Socle = box(pos=vector(0,-0.1,0),length=8, height=h, width=8)

Tiges = [cylinder(pos=vec(-R,0,R),axis=vec(0,R,0),radius=h)]
Tiges += cylinder(pos=vec(0,0,-R),axis=vec(0,R,0),radius=h)
Tiges += cylinder(pos=vec(R,0,R),axis=vec(0,R,0),radius=h)

# Disques troués
disques = [[],[],[]]
for i in range(N) :
  outer = shapes.circle(radius=R-(R-r)*i/N)
  inner = shapes.circle(radius=0.2)
  disque = extrusion(path=[vec(-2,h*i,2), vec(-2,i*h+h,2)], shape=[outer, inner])
  disques[0] += disque

disques[0][0].color=vec(174,40,92)/255
disques[0][1].color=vec(4,63,97)/255
disques[0][2].color=vec(61,116,133)/255
disques[0][3].color=vec(66,144,80)/255
disques[0][4].color=vec(183,172,89)/255
disques[0][5].color=vec(255,42,16)/255

def deplacement(tige_depart,tige_arrivee) :
  M = disques[tige_depart].pop()
  dt = 0.001
  while M.pos.y <= 3 :
    rate(vit/dt)
    M.pos.y += dt 
  while mag(M.pos-vec(0,3,0)-Tiges[tige_arrivee].pos) >1e-2:
    rate(vit/2/dt)
    M.pos += 3*hat(Tiges[tige_arrivee].pos-Tiges[tige_depart].pos)*dt
  while M.pos.y > len(disques[tige_arrivee])*h+h/2 :
    rate(vit/dt)
    M.pos.y -= dt
  disques[tige_arrivee].append(M)

def Hanoi(n, depart, cible, inter):
    if n == 1:
      deplacement(depart,cible)
    else :
      Hanoi(n-1,depart,inter,cible)
      Hanoi(1,depart,cible,inter)
      Hanoi(n-1,inter,cible,depart)

#scene.pause()

Hanoi(N, 0, 2,1)
