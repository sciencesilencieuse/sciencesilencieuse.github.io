GlowScript 2.9 VPython

scene = canvas(width=450, height=550, align='')
floor = box(pos=vec(0,-0.05,0), size=vec(1,0.05,1), color=color.green)

# parametres
y0 = 1.5                          # m
k = 5e3                           # N/m 
masse = 0.25                      # kg
v0 = 0                            # m/s
g = vector(0,-9.8,0)              # m/s2
C = 0.5
R = 5                             # Ns/m
rho = 1.2                         # kg/m3
rayon = 0.1
A = pi*rayon**2                   # m2


# initialisation
ball = sphere(pos=vec(0,y0, 0), radius=rayon, color=color.red) 
ball.mass = masse
ball.velocity = vector(0,v0,0) 
ball.p = ball.velocity*ball.mass
dt = 0.000001 
t = 0
Ep0 = ball.mass*g.mag*y0
Ec0 = 0.5*ball.mass*ball.velocity.mag**2
Ep = Ep0
Ef = 0
Ek = 0
Emax = Ep0+Ec0
Epb = box(pos=vec(1,0.5*y0*Ep0/Emax,0), size=vec(0.2,y0*Ep0/Emax,0.2), color=vec(0.2,0.3,0.7))
Ecb = box(pos=vec(1,y0*Ep0/Emax+0.5*y0*Ec0/Emax,0), size=vec(0.2,0,0.2), color=vec(0.8,0.3,0.2))
Efb = box(pos=vec(1,y0-0.5*y0*Ef/Emax,0), size=vec(0.2,0,0.2), color=vec(0.8,0.6,0.2))
Ekb = box(pos=vec(1,y0*Ep0/Emax+y0*Ec0/Emax+y0*Ek/Emax,0), size=vec(0.2,0,0.2), color=vec(0.6,0.1,0.6))
scene.camera.pos = vec(0.25,y0/2,0)
scene.camera.axis = vec(0,0,-1)
scene.range = 0.7

#g1=graph(width=500, height=600, align='right', fast = True, xtitle ='<i>t<i>', ytitle='<i>E</i>')
#g2=graph(width=800, height=400, align='right',xtitle='<i>t</i>',ytitle='<i>v</i><sub>y</sub>')
#Epgraph = gcurve(graph=g1,color=vec(0.2,0.3,0.7))
#Ecgraph = gcurve(graph=g1,color=vec(0.8,0.3,0.2))
#Ekgraph = gcurve(graph=g1,color=vec(0.2,0,0.2))
#Emgraph = gcurve(graph=g1,color=vec(0.3,0.7,0.2))
#vgraph = gcurve(graph=g2,color=color.green)

while t<10:
  
    rate(1/dt)
    # pour le rebond
    radSep = ball.pos - floor.pos
    touchSep = ball.radius * radSep.norm()
    
    # forces :
    Poids = g*ball.mass
    Ffro = -.5*rho*C*A*(ball.velocity).mag**2 * norm(ball.velocity)
    Fnet = Poids + Ffro 
    Freb = vec(0,0,0)
    
    # pendant le rebond
    if (radSep.mag < touchSep.mag):
      Freb = -k * (radSep - touchSep)
      Ffreb = -R * (ball.velocity)
      Fnet += Freb + Ffreb
      Ffro += Ffreb
    else :
      Ek = 0
    
    # Newton  
    ball.pos += (ball.velocity)*dt 
    ball.velocity += Fnet/ball.mass*dt
    ball.acc = Fnet / ball.mass
    
    # Ec et W(F)
    Ec = 0.5*ball.mass*ball.velocity.mag**2
    Ep += dot(Poids,-ball.velocity)*dt
    Ef += dot(Ffro,-ball.velocity)*dt
    Ek += dot(Freb,-ball.velocity)*dt
    
    # representation graphique de l'energie
    Epb.pos.y = 0.5*y0*Ep/Emax
    Epb.size.y = y0*Ep/Emax
    Ecb.pos.y = y0*Ep/Emax+0.5*y0*Ec/Emax
    Ecb.size.y = y0*Ec/Emax
    Efb.pos.y = y0-0.5*y0*Ef/Emax
    Efb.size.y = y0*Ef/Emax
    Ekb.pos.y = y0*Ep/Emax+y0*Ec/Emax+0.5*y0*Ek/Emax
    Ekb.size.y = y0*Ek/Emax
 
    t = t + dt
    
#    if ball.pos.y < (floor.pos.y + ball.radius): 
#        ball.p = -ball.p
    #Epgraph.plot(pos=(t, Ep))
    #Ecgraph.plot(pos=(t, Ec))
    #Ekgraph.plot(pos=(t, Ek))
    #Emgraph.plot(pos=(t, Ec+Ep))