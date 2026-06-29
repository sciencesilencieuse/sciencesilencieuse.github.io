Web VPython 3.2

L,H,W = 10,5,5

posM1 = vec(-3.8,2.8,0)
posM2 = vec(2.5,-4.2,0)
scene.width = 500
scene.height = 500
scene.align = 'left'

aquarium = box(pos=vector(0,-H/2,0),length=L, height=H, width=W, color=vec(86,193,255)/255, opacity=0.5)
M1 = sphere(pos=posM1,radius=0.1)
M2 = sphere(pos=posM2,radius=0.1)

# indices optiques des milieux 1 et 2
n1 = 1
n2 = 1.33
c = 1

nb = 20
PtsInterface = [vec(-L/2+L/(nb-1)*i,0,0) for i in range(nb)]
Balles = [sphere(pos=posM1,v=hat(PtsInterface[i]-posM1)*c/n1,radius=0.05,color=vec(29,177,0)/255, make_trail=True, trail_type="points", trail_radius=0.02, interval=100) for i in range(nb)]
TpsParcours = [0 for i in range(nb)]

def f(x):
  return ((sqrt(posM1.y** 2 + (x-posM1.x)**2)/(c/n1)) + (sqrt(posM2.y** 2 + (x-posM2.x)**2)/(c/n2)))

Nb = 10000
X = [-L/2+L/(Nb-1)*i for i in range(Nb)]
Y = []
for x in X:
  Y.append(f(x))
xmin = X[Y.index(min(Y))]

g1 = graph(width=scene.width, height=scene.height/2, fast=False, align='left',  ytitle='t (s)', xtitle='angle (°)')
graphAngle1 = gcurve(graph=g1,color=vec(29,177,0)/255, markers=True)
graphMin1 = gdots(graph=g1, color=vec(1,0,0), radius=5)
g2 = graph(width=scene.width, height=scene.height/2, fast=False, align='left',  ytitle='t (s)', xtitle='angle (°)')
graphAngle2 = gcurve(graph=g2,color=vec(0,118,186)/255, markers=True)
graphMin2 = gdots(graph=g2, color=vec(1,0,0), radius=5)

t = 0
dt = 1e-3
test = True
compte = 0 # compte les billes arrivées
k = 0
while test:
  rate(4/dt)
  for i in range(nb):
    if mag(Balles[i].pos-posM2) > 2e-3:
      Balles[i].pos += Balles[i].v*dt
      TpsParcours[i] += dt
      if (Balles[i].pos-Balles[i].v*dt).y*Balles[i].pos.y < 0:
        Balles[i].v = hat(posM2-PtsInterface[i])*c/n2
    else:
      Balles[i].v = vec(0,0,0)
      compte += 1
  if compte == nb:
    test = False
  t += dt
  compte = 0

  
normale = vec(0,1,0)
Angles1 = [diff_angle(normale,posM1-PtsInterface[i])/pi*180 if PtsInterface[i].x>posM1.x else -diff_angle(normale,posM1-PtsInterface[i])/pi*180 for i in range(nb)]
Angles2 = [diff_angle(-normale,posM2-PtsInterface[i])/pi*180 if PtsInterface[i].x<posM2.x else -diff_angle(-normale,posM2-PtsInterface[i])/pi*180 for i in range(nb)]
for i in range(nb):
  graphAngle1.plot(Angles1[i],TpsParcours[i])
  graphAngle2.plot(Angles2[i],TpsParcours[i])

tmin = min(TpsParcours)
tmax = max(TpsParcours)

angle1min = diff_angle(normale,posM1-vec(xmin,0,0))/pi*180
angle2min = diff_angle(-normale,posM2-vec(xmin,0,0))/pi*180
graphMin1.plot(angle1min,tmin)
graphMin2.plot(angle2min,tmin)

g1.ymin = tmin - (tmax-tmin)/10
g1.ymax = tmax + (tmax-tmin)/10
g2.ymin = tmin - (tmax-tmin)/10
g2.ymax = tmax + (tmax-tmin)/10

for i in range(nb):
  Balles[i].clear_trail()
Couleurs = [vec((-t+tmax)/(tmax-tmin),0,0.3) for t in TpsParcours]
Chemins = [curve(pos=[posM1, PtsInterface[i], posM2], color=Couleurs[i]) for i in range(nb)]
curve(pos=[posM1, vec(xmin,0,0), posM2], color=vec(1,1,0))

print()
print(f"i1_min = {angle1min:.1f}°")
print(f"i2_min = {angle2min:.1f}°")
print(f"n1 × sin i1_min = {n1*sin(angle1min/180*pi):.5f}")
print(f"n2 × sin i2_min = {n2*sin(angle2min/180*pi):.5f}")