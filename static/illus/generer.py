# Génère des illustrations SVG sans fond (120×120) pour les cartes des chapitres de maths.
# Usage : python3 static/illus/generer.py static/illus
import math, random, os, sys
OUT = sys.argv[1]
G1, G2, G3, G4 = '#dde1e6', '#c4cad2', '#98a1ac', '#4b5563'
BLEU, BLEU2 = '#2F86E8', '#8EC5F5'
CANARD = '#2BC4B0'
VERT, VERT2, VERT3 = '#58C23A', '#9BE07A', '#2F8A1F'
ORANGE, JAUNE = '#F59E0B', '#FBCF4C'
CORAIL = '#EF5A3C'
ROSE, MAG = '#EC5FA3', '#C2185B'

def svg(corps, defs=''):
    d = f'<defs>{defs}</defs>' if defs else ''
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120">{d}{corps}</svg>\n'
def f(x): return f'{x:.1f}'.rstrip('0').rstrip('.')
def pts(L): return ' '.join(f'{f(x)},{f(y)}' for x, y in L)
def fleche(id, coul): return f'<marker id="{id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="{coul}"/></marker>'
R = {}

# --- Fondements ---
R['illlog'] = svg(f'<circle cx="44" cy="60" r="32" fill="{G1}"/><circle cx="76" cy="60" r="32" fill="{G1}"/>'
                  f'<circle cx="76" cy="60" r="32" fill="{ORANGE}" clip-path="url(#g)"/>'
                  f'<circle cx="44" cy="60" r="32" fill="none" stroke="{G3}" stroke-width="1.5"/><circle cx="76" cy="60" r="32" fill="none" stroke="{G3}" stroke-width="1.5"/>',
                  '<clipPath id="g"><circle cx="44" cy="60" r="32"/></clipPath>')
# nombres : une bande de cases (comme des chiffres) et des marques en dessous
cases = ['#1f2933', '#ffffff', '#1f2933', CANARD, G3, G4, G2]
c = f'<circle cx="46" cy="47" r="21" fill="none" stroke="{G2}" stroke-width="1.2"/><path d="M46 47V26M46 47h21" stroke="{G2}" stroke-width="1.2"/>'
for k, col in enumerate(cases):
    x = 11 + k * 14
    c += f'<rect x="{x}" y="47" width="14" height="14" fill="{col}" stroke="{G4}" stroke-width="1"/>'
    for j in range([1, 3, 2, 4, 1, 2, 3][k]):
        c += f'<path d="M{x + 3} {70 + j * 5}h8" stroke="{G4}" stroke-width="1.6" stroke-linecap="round"/>'
R['illnomb'] = svg(f'<g transform="translate(60 60) scale(1.12) translate(-60 -60)">{c}</g>')
# infini : carrés emboîtés qui tournent
c, cols = '', ['#1f2933', G2, CORAIL, '#ffffff', G4, G1]
s = 104
for k in range(16):
    a = math.radians(k * 9)
    P = [(60 + s / 2 * math.sqrt(2) * math.cos(a + math.pi / 4 + j * math.pi / 2), 60 + s / 2 * math.sqrt(2) * math.sin(a + math.pi / 4 + j * math.pi / 2)) for j in range(4)]
    c += f'<polygon points="{pts(P)}" fill="{cols[k % 6]}"/>'
    s *= 0.86
R['illinf'] = svg(f'<g transform="translate(60 60) scale(0.78) translate(-60 -60)">{c}</g>')

# --- Arithmétique ---
c = ''
for x in (14, 34):    # dizaines : chevrons
    c += f'<path d="M{x} 60L{x + 24} 40M{x} 60L{x + 24} 80" stroke="{G2}" stroke-width="2.4" stroke-linecap="round"/><path d="M{x - 2} 60L{x + 14} 48L{x + 14} 72z" fill="{CANARD}"/>'
for x, y in ((70, 26), (90, 26), (80, 50)):   # unités : clous
    c += f'<path d="M{x} {y + 6}V{y + 66 - (y - 26)}" stroke="{G2}" stroke-width="2.4" stroke-linecap="round"/><path d="M{x - 9} {y}H{x + 9}L{x} {y + 15}z" fill="{CANARD}"/>'
R['presnum'] = svg(c)
c = ''
for k in range(2):
    P = []
    for i in range(80):
        t = 0.35 + i / 79 * 2.25 * math.pi
        r = 7 + 7.6 * t
        P.append((60 + r * math.cos(t + k * math.pi), 60 + r * math.sin(t + k * math.pi)))
    c += f'<polyline points="{pts(P)}" fill="none" stroke="{ROSE}" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>'
R['presnb'] = svg(f'<g transform="translate(60 60) scale(0.8) translate(-60 -60)">{c}</g>')
# complexes : spirale de disques qui rapetissent, façon « vallée des hippocampes »
c = ''
for k in range(2):
    for i in range(46):
        t = i * 0.3
        r = 50 * math.exp(-0.16 * t)
        x, y = 60 + r * math.cos(t + k * math.pi), 60 + r * math.sin(t + k * math.pi)
        u = i / 45
        col = BLEU if k == 0 else '#5AA9F0'
        c += f'<circle cx="{f(x)}" cy="{f(y)}" r="{f(max(0.8, r * 0.15))}" fill="{col}" fill-opacity="{f(0.95 - 0.35 * u)}"/>'
R['prescompl'] = svg(c)

# --- Algèbre ---
c = f'<path d="M60 40L53 104H67z" fill="{G3}"/><rect x="12" y="52" width="96" height="4.5" rx="2" fill="{G4}"/>'
c += f'<path d="M14 44h30M76 44h30" stroke="{G4}" stroke-width="3" stroke-linecap="round"/><path d="M29 44v8M91 44v8" stroke="{G4}" stroke-width="2"/>'
for (x, y) in ((19, 38.5), (29, 38.5), (39, 38.5), (24, 29), (34, 29)):
    c += f'<circle cx="{x}" cy="{y}" r="5" fill="{BLEU}"/>'
for (x, y) in ((81, 38.5), (91, 38.5), (101, 38.5), (86, 29), (96, 29), (91, 19.5)):
    c += f'<circle cx="{x}" cy="{y}" r="5" fill="{G3}"/>'
R['presequations'] = svg(c)
c = ''
for k in range(6):
    c += f'<path d="M{18 + 16.8 * k} 18V102M18 {18 + 16.8 * k}H102" stroke="{G1}" stroke-width="1.4"/>'
M = ((0.92, 0.38), (-0.34, 0.88))
T = lambda x, y: (60 + M[0][0] * (x - 60) + M[0][1] * (y - 60), 60 + M[1][0] * (x - 60) + M[1][1] * (y - 60))
for k in range(6):
    v = 18 + 16.8 * k
    a, b = T(v, 18), T(v, 102); c += f'<path d="M{f(a[0])} {f(a[1])}L{f(b[0])} {f(b[1])}" stroke="{JAUNE}" stroke-width="1.8"/>'
    a, b = T(18, v), T(102, v); c += f'<path d="M{f(a[0])} {f(a[1])}L{f(b[0])} {f(b[1])}" stroke="{JAUNE}" stroke-width="1.8"/>'
o = T(51.6, 68.4); e1 = T(51.6 + 16.8 * 1.5, 68.4); e2 = T(51.6, 68.4 - 16.8 * 1.5)
c += f'<path d="M{f(o[0])} {f(o[1])}L{f(e1[0])} {f(e1[1])}M{f(o[0])} {f(o[1])}L{f(e2[0])} {f(e2[1])}" stroke="{ORANGE}" stroke-width="3" stroke-linecap="round" marker-end="url(#fo)"/>'
c = c.replace('marker-end="url(#fo)"/>', '/>')
c += f'<path d="M{f(o[0])} {f(o[1])}L{f(e1[0])} {f(e1[1])}" stroke="{ORANGE}" stroke-width="3" marker-end="url(#fo)"/><path d="M{f(o[0])} {f(o[1])}L{f(e2[0])} {f(e2[1])}" stroke="{ORANGE}" stroke-width="3" marker-end="url(#fo)"/>'
R['presalglin'] = svg(c, fleche('fo', ORANGE))
c = (f'<path d="M14 62C12 38 30 26 46 32C62 38 66 52 60 70C54 90 34 98 22 88C16 82 15 74 14 62z" fill="{G4}"/>'
     f'<path d="M26 60C26 50 34 46 42 50C50 54 50 66 44 72C36 78 26 72 26 60z" fill="{VERT}"/>'
     f'<path d="M80 36C90 22 113 28 113 50C113 70 103 82 91 80C77 78 72 48 80 36z" fill="{G1}"/>')
for (x0, y0, x1, y1, cx, cy, col) in ((40, 56, 92, 48, 64, 28, VERT3), (52, 46, 98, 42, 74, 22, G4), (48, 80, 96, 64, 76, 84, G4), (56, 64, 90, 58, 74, 54, G4)):
    c += f'<path d="M{x0} {y0}Q{cx} {cy} {x1} {y1}" fill="none" stroke="{col}" stroke-width="1.6" marker-end="url(#{"fv" if col == VERT3 else "fg"})"/>'
    c += f'<circle cx="{x1 + 2}" cy="{y1}" r="2" fill="{G4}"/>'
R['presgroupes'] = svg(c, fleche('fv', VERT3) + fleche('fg', G4))
noeuds = [(42, 24, 8), (76, 18, 5), (100, 34, 4.5), (92, 60, 9), (22, 52, 6), (20, 86, 5), (48, 98, 8), (82, 96, 5.5)]
c = ''
for (x, y, r) in noeuds:
    dx, dy = x - 58, y - 60; L = math.hypot(dx, dy)
    a = (58 + dx / L * 10, 60 + dy / L * 10); b = (x - dx / L * (r + 3), y - dy / L * (r + 3))
    c += f'<path d="M{f(a[0])} {f(a[1])}L{f(b[0])} {f(b[1])}" stroke="{MAG}" stroke-width="1.6" marker-end="url(#fm)"/>'
c += f'<path d="M48 22Q62 8 70 17" fill="none" stroke="{MAG}" stroke-width="1.4" marker-end="url(#fm)"/><path d="M27 90Q34 100 39 99" fill="none" stroke="{MAG}" stroke-width="1.4" marker-end="url(#fm)"/>'
for (x, y, r) in noeuds:
    c += f'<circle cx="{x}" cy="{y}" r="{r}" fill="{G2}"/>'
c += f'<circle cx="58" cy="60" r="8" fill="{ROSE}"/>'
R['presgraphes'] = svg(c, fleche('fm', MAG))
Y = [26, 48, 70, 92]
c = ''.join(f'<path d="M8 {y}H110" stroke="{G2}" stroke-width="1.6" marker-end="url(#fg2)"/>' for y in Y)
for (i, j) in ((0, 2), (1, 3)):
    c += f'<path d="M26 {Y[i]}L46 {Y[j]}M26 {Y[j]}L46 {Y[i]}" stroke="{G3}" stroke-width="1.4"/>'
for (i, j) in ((0, 1), (2, 3)):
    c += f'<path d="M64 {Y[i]}L84 {Y[j]}M64 {Y[j]}L84 {Y[i]}" stroke="{G3}" stroke-width="1.4"/>'
for x in (50, 88):
    for y in Y:
        c += f'<rect x="{x}" y="{y - 7}" width="9" height="14" rx="2" fill="#FFD9D3" stroke="{CORAIL}" stroke-width="1.6"/>'
R['presfft'] = svg(c, fleche('fg2', G2))

# --- Géométrie ---
def ajuste(P, marge=8):
    xs = [p[0] for p in P]; ys = [p[1] for p in P]
    s = (120 - 2 * marge) / max(max(xs) - min(xs), max(ys) - min(ys))
    ox = 60 - s * (max(xs) + min(xs)) / 2; oy = 60 - s * (max(ys) + min(ys)) / 2
    return lambda p: (ox + s * p[0], oy + s * p[1])
A, B = (0, 0), (5, 0); C = (5 * math.cos(math.radians(36.87)) ** 2, -5 * math.cos(math.radians(36.87)) * math.sin(math.radians(36.87)))
def carre(P, Q):   # carré extérieur construit sur [PQ], à gauche du vecteur PQ
    dx, dy = Q[0] - P[0], Q[1] - P[1]
    return [P, Q, (Q[0] + dy, Q[1] - dx), (P[0] + dy, P[1] - dx)]
S1, S2, S3 = carre(B, A), carre(A, C), carre(C, B)
tr = ajuste(S1 + S2 + S3 + [A, B, C])
c = ''.join(f'<polygon points="{pts(map(tr, S))}" fill="{G1}" stroke="{G3}" stroke-width="1.2" stroke-linejoin="round"/>' for S in (S1, S2, S3))
c += f'<polygon points="{pts(map(tr, (A, B, C)))}" fill="{BLEU}" stroke="#1E62B0" stroke-width="1.2" stroke-linejoin="round"/>'
R['prestriangle'] = svg(c)
O = (60, 60); r = 48
pc = lambda d: (60 + r * math.cos(math.radians(d)), 60 - r * math.sin(math.radians(d)))
P, A, B = pc(212), pc(62), pc(-12)
c = f'<circle cx="60" cy="60" r="{r}" fill="{G1}"/><polygon points="{pts((P, A, B))}" fill="{JAUNE}"/><polygon points="{pts((O, A, B))}" fill="{ORANGE}"/>'
c += f'<circle cx="60" cy="60" r="2.6" fill="{G4}"/>' + ''.join(f'<circle cx="{f(x)}" cy="{f(y)}" r="2.6" fill="{G4}"/>' for (x, y) in (P, A, B))
R['prescercle'] = svg(c)
v1, v2, v3 = VERT2, VERT, VERT3
c = (f'<path d="M14 28l14-8 14 8-14 8z" fill="{v1}"/><path d="M14 28v18l14 8V36z" fill="{v2}"/><path d="M42 28v18l-14 8V36z" fill="{v3}"/>'
     f'<path d="M70 26v24a14 5 0 0 0 28 0V26z" fill="{v2}"/><path d="M84 26v29a14 5 0 0 0 14-5V26z" fill="{v3}" opacity="0.55"/><ellipse cx="84" cy="26" rx="14" ry="5" fill="{v1}"/>'
     f'<path d="M30 70L52 62L66 88L44 96z" fill="{v3}"/><path d="M30 70L52 62L48 60L26 68z" fill="{v1}" opacity="0"/><path d="M14 96L30 70L44 96z" fill="{v2}"/>'
     f'<path d="M86 66l-16 30 18 6z" fill="{v2}"/><path d="M86 66l2 36 16-12z" fill="{v3}"/>')
R['presaire'] = svg(c)
random.seed(7); c = ''
for k in range(18):
    a = k * 2 * math.pi / 18 + random.uniform(-0.12, 0.12); L = random.uniform(30, 52)
    c += f'<path d="M60 60L{f(60 + L * math.cos(a))} {f(60 + L * math.sin(a))}" stroke="{MAG}" stroke-width="1.5" marker-end="url(#fm2)"/>'
R['presdim'] = svg(c + f'<circle cx="60" cy="60" r="3" fill="{MAG}"/>', fleche('fm2', MAG))
V = [(60, 12), (8, 102), (112, 102)]
c = f'<polygon points="{pts(V)}" fill="{G1}" stroke="{G3}" stroke-width="1.2" stroke-linejoin="round"/>'
bugs = [list(v) for v in V]; traces = [[tuple(b)] for b in bugs]
for n in range(1, 400):
    nb = []
    for i in range(3):
        a, b = bugs[i], bugs[(i + 1) % 3]; dx, dy = b[0] - a[0], b[1] - a[1]; L = math.hypot(dx, dy)
        nb.append(a if L < 1 else [a[0] + dx / L * 0.5, a[1] + dy / L * 0.5])
    bugs = nb
    for i in range(3): traces[i].append(tuple(bugs[i]))
    if n % 6 == 0 and math.hypot(bugs[0][0] - bugs[1][0], bugs[0][1] - bugs[1][1]) > 4:
        c += f'<polygon points="{pts(bugs)}" fill="none" stroke="{G3}" stroke-width="0.7" stroke-linejoin="round"/>'
for i in range(3):
    c += f'<polyline points="{pts(traces[i][::3] + [traces[i][-1]])}" fill="none" stroke="{CORAIL}" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"/>'
R['prespoursuite'] = svg(c)
cols = [VERT2, '#F49AC8', '#F7A072', '#7CB8F2', '#6EDDCB', JAUNE]
c = ''
for k in range(6):
    a = math.radians(-90 + 60 * k); rr = 50 if k % 2 == 0 else 40
    P0 = (60, 60); P1 = (60 + rr * math.cos(a), 60 + rr * math.sin(a)); P2 = (60 + rr * 0.8 * math.cos(a + 0.95), 60 + rr * 0.8 * math.sin(a + 0.95))
    c += f'<polygon points="{pts((P0, P1, P2))}" fill="{cols[k]}" fill-opacity="0.75" stroke="{cols[k]}" stroke-width="1.5" stroke-linejoin="round"/>'
R['simplices'] = svg(c)

# --- Probabilités ---
def de(cx, cy, s, rot, n):
    o = {1: [(0, 0)], 3: [(-1, -1), (0, 0), (1, 1)], 5: [(-1, -1), (1, -1), (0, 0), (-1, 1), (1, 1)], 4: [(-1, -1), (1, -1), (-1, 1), (1, 1)]}[n]
    g = f'<g transform="rotate({rot} {cx} {cy})"><rect x="{cx - s / 2}" y="{cy - s / 2}" width="{s}" height="{s}" rx="{s * 0.2}" fill="#eef1f4" stroke="{G2}" stroke-width="1.5"/>'
    g += ''.join(f'<circle cx="{f(cx + i * s * 0.27)}" cy="{f(cy + j * s * 0.27)}" r="{f(s * 0.085)}" fill="{BLEU}"/>' for i, j in o)
    return g + '</g>'
R['preslois'] = svg(de(80, 36, 40, 12, 3) + de(42, 80, 46, -10, 5))
N = {'A': (14, 62), 'B': (34, 40), 'C': (62, 38), 'D': (88, 30), 'E': (108, 20), 'F': (36, 82), 'G': (64, 86), 'H': (90, 96), 'I': (110, 106)}
c = ''
for u, v in ('AB', 'BC', 'CD', 'DE', 'AF', 'FG', 'GH', 'HI', 'BG', 'CH', 'FC'):
    (x0, y0), (x1, y1) = N[u], N[v]; dx, dy = x1 - x0, y1 - y0; L = math.hypot(dx, dy)
    c += f'<path d="M{f(x0 + dx / L * 7)} {f(y0 + dy / L * 7)}L{f(x1 - dx / L * 9)} {f(y1 - dy / L * 9)}" stroke="{G3}" stroke-width="1.4" marker-end="url(#fg3)"/>'
c += f'<path d="M10 56C2 44 22 42 17 55" fill="none" stroke="{G3}" stroke-width="1.4" marker-end="url(#fg3)"/><path d="M32 88C24 100 44 102 40 89" fill="none" stroke="{G3}" stroke-width="1.4" marker-end="url(#fg3)"/>'
c += ''.join(f'<circle cx="{x}" cy="{y}" r="6" fill="{JAUNE}" stroke="{ORANGE}" stroke-width="2"/>' for (x, y) in N.values())
R['presmarkov'] = svg(c, fleche('fg3', G3))
R['prescuriosites'] = svg(f'<rect x="22" y="58" width="76" height="46" rx="2" fill="{G1}"/><rect x="15" y="42" width="90" height="18" rx="2" fill="{G2}"/>'
                          f'<rect x="54" y="42" width="12" height="62" fill="{CORAIL}"/>'
                          f'<path d="M60 40C50 18 30 22 36 34C40 42 52 42 60 40C68 42 80 42 84 34C90 22 70 18 60 40z" fill="none" stroke="{CORAIL}" stroke-width="5.5" stroke-linejoin="round"/>')
T_, L_, R_, F_ = (54, 14), (18, 96), (82, 104), (104, 64)
R['simplexepres'] = svg(f'<polygon points="{pts((T_, L_, R_))}" fill="{G1}"/><polygon points="{pts((T_, R_, F_))}" fill="#7FDCCB"/>'
                        f'<path d="M{L_[0]} {L_[1]}L{F_[0]} {F_[1]}" stroke="{G3}" stroke-width="1" stroke-dasharray="3 3"/>'
                        f'<polygon points="{pts((T_, L_, R_, F_))}" fill="none" stroke="{G3}" stroke-width="1.5" stroke-linejoin="round"/><path d="M{T_[0]} {T_[1]}L{R_[0]} {R_[1]}" stroke="{G3}" stroke-width="1.5"/>')

# --- Statistique ---
a_, b_ = 66, 30; P = (12 + a_, 92); Q = (P[0], 92 - math.sqrt(a_ * b_)); O = (60, 92)
ux, uy = (Q[0] - O[0]) / 48, (Q[1] - O[1]) / 48; t = (P[0] - O[0]) * ux + (P[1] - O[1]) * uy; H = (O[0] + t * ux, O[1] + t * uy)
c = f'<path d="M12 92A48 48 0 0 1 108 92" fill="none" stroke="{G2}" stroke-width="1.6"/><path d="M8 92H112" stroke="{G2}" stroke-width="1.6"/>'
c += f'<path d="M{f(O[0])} {f(O[1])}L{f(Q[0])} {f(Q[1])}" stroke="{BLEU2}" stroke-width="2.4"/><path d="M{f(P[0])} {f(P[1])}L{f(Q[0])} {f(Q[1])}" stroke="{BLEU}" stroke-width="2.4"/>'
c += f'<path d="M{f(P[0])} {f(P[1])}L{f(H[0])} {f(H[1])}" stroke="#1E62B0" stroke-width="2.4"/><path d="M12 92H{f(P[0])}" stroke="{BLEU}" stroke-width="3"/>'
c += ''.join(f'<circle cx="{f(x)}" cy="{f(y)}" r="2.4" fill="{G4}"/>' for (x, y) in (O, P, Q))
R['presmoy'] = svg(c)
random.seed(3); c = f'<path d="M14 14H106V106H14z" fill="none" stroke="{G2}" stroke-width="1.2"/><path d="M14 14A92 92 0 0 1 106 106" fill="none" stroke="{G3}" stroke-width="1.4"/>'
for _ in range(150):
    x, y = random.uniform(17, 103), random.uniform(17, 103)
    dedans = math.hypot(x - 14, y - 106) <= 92
    c += f'<circle cx="{f(x)}" cy="{f(y)}" r="2.3" fill="{CORAIL if dedans else G2}"/>'
R['presmontecarlo'] = svg(c)
c = f'<path d="M20 100L94 26" stroke="{VERT2}" stroke-width="10" stroke-linecap="round" opacity="0.7" marker-end="url(#fvv)"/>'
random.seed(11)
for (cx, cy) in ((40, 76), (78, 42)):
    c += f'<ellipse cx="{cx}" cy="{cy}" rx="26" ry="11" transform="rotate(32 {cx} {cy})" fill="{G1}" fill-opacity="0.8" stroke="{G2}" stroke-width="1.2"/>'
    for k in range(6):
        t = -18 + k * 7.2; x = cx + t * math.cos(math.radians(32)) + random.uniform(-2, 2); y = cy + t * math.sin(math.radians(32)) + random.uniform(-4, 4)
        c += f'<path d="M{f(x - 2.6)} {f(y - 2.6)}l5.2 5.2m0-5.2l-5.2 5.2" stroke="{VERT3}" stroke-width="1.8" stroke-linecap="round"/>'
R['pressimpson'] = svg(c, '<marker id="fvv" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="2.6" markerHeight="2.6" orient="auto"><path d="M0 0L10 5L0 10z" fill="' + VERT2 + '"/></marker>')
R['prestesthyp'] = svg(f'<text x="60" y="44" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="40" fill="{CANARD}">p</text>'
                       f'<text x="60" y="72" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="26" fill="{G3}">&lt;</text>'
                       f'<text x="60" y="106" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="30" fill="{G3}">0,05</text>')
random.seed(5); c = ''; th = math.radians(-32)
cols = ['#2B5F8E', '#3E8E9E', '#58B39A', '#93CF7E', '#D7E37A']
P_ = []
for _ in range(64):
    u, v = random.gauss(0, 1), random.gauss(0, 1)
    x, y = 24 * u, 8 * v
    P_.append((u, 60 + x * math.cos(th) - y * math.sin(th), 60 + x * math.sin(th) + y * math.cos(th)))
for (u, x, y) in P_:
    c += f'<circle cx="{f(x)}" cy="{f(y)}" r="3" fill="{cols[max(0, min(4, int((u + 2) / 4 * 5)))]}"/>'
c += f'<path d="M{f(60 - 50 * math.cos(th))} {f(60 - 50 * math.sin(th))}L{f(60 + 52 * math.cos(th))} {f(60 + 52 * math.sin(th))}" stroke="{G4}" stroke-width="2" marker-end="url(#fg4)"/>'
c += f'<path d="M{f(60 + 22 * math.sin(th))} {f(60 - 22 * math.cos(th))}L{f(60 - 24 * math.sin(th))} {f(60 + 24 * math.cos(th))}" stroke="{G4}" stroke-width="2" marker-end="url(#fg4)"/>'
R['presacp'] = svg(c, fleche('fg4', G4))
c = (f'<rect x="14" y="16" width="34" height="88" fill="{BLEU}"/><rect x="14" y="16" width="34" height="26" fill="{BLEU2}"/>'
     f'<rect x="52" y="16" width="54" height="88" fill="{G1}"/><rect x="52" y="84" width="54" height="20" fill="{ROSE}"/>'
     f'<path d="M14 42H48M52 84H106" stroke="#fff" stroke-width="2"/>')
R['presbayes'] = svg(c)
c = (f'<path d="M6 66L12 62L22 96L33 28H114" fill="none" stroke="{G4}" stroke-width="2" stroke-linejoin="round"/>'
     f'<text x="74" y="54" text-anchor="middle" font-family="Georgia, \'Times New Roman\', serif" font-style="italic" font-size="17" fill="{G4}">Σ(x<tspan font-size="11" dy="4">i</tspan><tspan dy="-4"> − m)</tspan><tspan font-size="11" dy="-7">2</tspan></text>'
     f'<path d="M38 62H110" stroke="{G4}" stroke-width="1.6"/><rect x="50" y="68" width="48" height="22" rx="11" fill="{ROSE}"/>'
     f'<text x="74" y="84" text-anchor="middle" font-family="Georgia, \'Times New Roman\', serif" font-style="italic" font-size="16" fill="#fff">n − 1</text>')
R['presecarttype'] = svg(c)

for k, v in R.items():
    open(os.path.join(OUT, k + '.svg'), 'w').write(v)
print(len(R), 'illustrations')
