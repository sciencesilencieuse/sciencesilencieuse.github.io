GlowScript 3.0 VPython

from random import random

# Paramètres initiaux
scene.width, scene.height = 800, 600
M_S = 1
G = 1
mu = 1/200
M_p = mu*M_S/(1-mu) 
R = 100
M = M_S + M_p
omega = sqrt(G*M/R**3)
m = M_S*mu
vec_omega = vec(0,0,1)*omega
N = 50
rayon_troyen = 0.5

# Vue par défaut (rotation globale)
scene.center = vec(R*mu/2,0,0)
scene.background = vec(0,31,54)/255
scene.range = 5*R/4

# Création des sphères pour P et S
P = sphere(pos=vec((1-mu)*R,0,0), color=vec(0,0.8,1), radius = 3)
S = sphere(pos=vec(-mu*R,0,0), color=vec(1,1,0.5), radius = 10)

# Création des nuages de troyens T1 et T2
T1 = []
T2 = []
for i in range(N):
    T1.append(sphere(pos=vec(50+2*random(),85+2*random(),0),
                     color=vec(0,1,0), radius = rayon_troyen, v = vec(0,0,0), emissive=True))
    T2.append(sphere(pos=vec(50+2*random(),-85-2*random(),0),
                     color=vec(0,1,0), radius = rayon_troyen, v = vec(0,0,0), emissive=True))
t = 0 
dt = 0.5



# Boucle principale de la simulation
while True:
    rate(100000/dt)
    for i in range(len(T1)):
        # Calcul des forces pour T1
        Fnet1 = (G*M*m*(1-mu)/mag(S.pos-T1[i].pos)**3)*(S.pos-T1[i].pos) \
                + (G*M*m*mu/ mag(P.pos-T1[i].pos)**3)*(P.pos-T1[i].pos) \
                - m*cross(vec_omega, cross(vec_omega, T1[i].pos)) \
                - 2*m*cross(vec_omega, T1[i].v)
        # Calcul des forces pour T2
        Fnet2 = (G*M*m*(1-mu)/mag(S.pos-T2[i].pos)**3)*(S.pos-T2[i].pos) \
                + (G*M*m*mu/ mag(P.pos-T2[i].pos)**3)*(P.pos-T2[i].pos) \
                - m*cross(vec_omega, cross(vec_omega, T2[i].pos)) \
                - 2*m*cross(vec_omega, T2[i].v)
        
        # Mise à jour de la vitesse et de la position
        T1[i].v += Fnet1/m * dt 
        T1[i].pos += T1[i].v * dt
        T1[i].rotate(angle=omega*dt, axis=vec(0,0,1), origin=vec(0,0,0))
        
        T2[i].v += Fnet2/m * dt 
        T2[i].pos += T2[i].v * dt
        T2[i].rotate(angle=omega*dt, axis=vec(0,0,1), origin=vec(0,0,0))
    
    # Rotation des corps P et S
    P.rotate(angle=omega*dt, axis=vec(0,0,1), origin=vec(0,0,0))
    S.rotate(angle=omega*dt, axis=vec(0,0,1), origin=vec(0,0,0))
    t += dt
    