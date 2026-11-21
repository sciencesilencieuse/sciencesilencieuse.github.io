# Pictogrammes des cartes, dans le style des illustrations des chapitres de maths :
# traits fins, formes gris clair, une couleur d'accent vive (--acc, et sa variante
# claire --acc2, fixées par la classe de couleur de la carte), parfois une seconde.
# Usage : python3 outils/icones_cartes.py              (réécrit les pictogrammes des pages)
#         python3 outils/icones_cartes.py planche.html (planche de contrôle seulement)
import re, sys, glob, math

A, B = 'var(--acc)', 'var(--acc2)'                    # accent et accent clair
G1, G2, G3, G4 = '#E3E7EC', '#C9CFD7', '#9AA3AE', '#4B5563'
ROUGE, BLEU, VERT, JAUNE = '#EE220C', '#0076BA', '#1DB100', '#FEAE00'

def st(f=None, s=None, w=None, o=None, extra=''):
    t = []
    t.append(f'fill:{f}' if f else 'fill:none')
    if s: t.append(f'stroke:{s};stroke-width:{w or 1.6};stroke-linecap:round;stroke-linejoin:round')
    if o is not None: t.append(f'opacity:{o}')
    return f' style="{";".join(t)}{extra}"'
def P(d, f=None, s=None, w=None, o=None): return f'<path d="{d}"{st(f, s, w, o)}/>'
def C(x, y, r, f=None, s=None, w=None, o=None): return f'<circle cx="{x}" cy="{y}" r="{r}"{st(f, s, w, o)}/>'
def R(x, y, w_, h, rx=0, f=None, s=None, w=None, o=None): return f'<rect x="{x}" y="{y}" width="{w_}" height="{h}" rx="{rx}"{st(f, s, w, o)}/>'
def E(x, y, rx, ry, f=None, s=None, w=None, rot=0, o=None):
    t = f' transform="rotate({rot} {x} {y})"' if rot else ''
    return f'<ellipse cx="{x}" cy="{y}" rx="{rx}" ry="{ry}"{t}{st(f, s, w, o)}/>'
def L(d, s=G3, w=1.6, o=None): return P(d, None, s, w, o)
def fl(x0, y0, x1, y1, s=G3, w=1.6, t=4):            # flèche
    a = math.atan2(y1 - y0, x1 - x0); u = (math.cos(a), math.sin(a)); v = (-u[1], u[0])
    bx, by = x1 - t * u[0], y1 - t * u[1]
    return L(f'M{x0} {y0}L{bx:.1f} {by:.1f}', s, w) + P(f'M{x1} {y1}L{bx + t * .55 * v[0]:.1f} {by + t * .55 * v[1]:.1f}L{bx - t * .55 * v[0]:.1f} {by - t * .55 * v[1]:.1f}z', s)
def svg(*e): return '<svg class="il" viewBox="0 0 48 48">' + ''.join(e) + '</svg>'

def graphe(noeuds, aretes, cn=None, ca=None, w=1.4):
    cn = cn or {}; ca = ca or {}
    out = ''.join(L(f'M{noeuds[a][0]} {noeuds[a][1]}L{noeuds[b][0]} {noeuds[b][1]}', ca.get((a, b), G3), w + (0.6 if (a, b) in ca else 0)) for a, b in aretes)
    out += ''.join(C(x, y, r, cn.get(k, G2), '#fff', 1.2) for k, (x, y, r) in enumerate(noeuds))
    return out

I = {}
# ------------------------------------------------------------------ Informatique
I[('info', 'Algorithmique')] = svg(R(13, 4, 22, 8, 2.5, G1, G3, 1.2), L('M24 12v4M24 32v4'), P('M24 16l10 8-10 8-10-8z', A), R(13, 36, 22, 8, 2.5, G1, G3, 1.2), L('M34 24h7v16h-6', B, 1.8), P('M35 37.5l-3 2.5 3 2.5z', B))
I[('info', 'Ordinateur')] = svg(*[L(f'M{x} 5v7M{x} 36v7M5 {x}h7M36 {x}h7', G3, 1.6) for x in (17, 24, 31)], R(11, 11, 26, 26, 3.5, G2), R(16.5, 16.5, 15, 15, 2, A), *[R(19 + 6 * i, 19 + 6 * j, 4, 4, 0.8, B) for i in range(2) for j in range(2)])
pts = [(8, 13, 3), (8, 35, 3), (24, 8, 3), (24, 24, 3), (24, 40, 3), (40, 17, 3.6), (40, 31, 3.6)]
ar = [(a, b) for a in (0, 1) for b in (2, 3, 4)] + [(a, b) for a in (2, 3, 4) for b in (5, 6)]
I[('info', 'Intelligence artificielle')] = svg(graphe(pts, ar, {0: G3, 1: G3, 2: B, 3: B, 4: B, 5: A, 6: A}, {(3, 5): A, (0, 3): A}, 0.9))
I[('info', 'Cours de prépa TSI')] = svg(R(4, 8, 40, 32, 4, G1, G3, 1.2), P('M4 12a4 4 0 0 1 4-4h32a4 4 0 0 1 4 4v3H4z', G2), C(9, 11.5, 1.2, '#fff'), C(13, 11.5, 1.2, '#fff'), L('M18 22l-5 5 5 5M30 22l5 5-5 5', A, 2.2), L('M26.5 20l-5 14', B, 2.2))
# ------------------------------------------------------------------ Algorithmique
I[('info/algorithmique', 'Rechercher')] = svg(C(20, 20, 14, '#fff', G4, 2.2), *[R(9 + 6 * k, 17, 5, 6, 1, A if k == 2 else G1) for k in range(4)], L('M30 30l12 12', G4, 4.5))
I[('info/algorithmique', 'Complexité')] = svg(L('M6 5v37h38', G3, 1.4), L('M8 40L42 32', G2, 2), L('M8 40C22 37 32 30 42 20', B, 2), L('M8 40C20 36 28 24 32 6', A, 2.2))
def tri(a, b, c, f): return P(f'M{a[0]} {a[1]}L{b[0]} {b[1]}L{c[0]} {c[1]}z', f)
m = lambda p, q: ((p[0] + q[0]) / 2, (p[1] + q[1]) / 2)
TA, TB, TC = (24, 4), (44, 41), (4, 41)
sier = tri(TA, TB, TC, G1)
for (p, q, r) in ((TA, m(TA, TB), m(TA, TC)), (m(TA, TC), m(TB, TC), TC), (m(TA, TB), TB, m(TB, TC))):
    sier += tri(p, q, r, B)
    for (a, b, c) in ((p, m(p, q), m(p, r)), (m(p, r), m(q, r), r), (m(p, q), q, m(q, r))): sier += tri(a, b, c, A)
I[('info/algorithmique', 'Récursivité')] = svg(sier)
I[('info/algorithmique', 'Trier')] = svg(L('M3 44h42', G3, 1.2), R(5, 32, 7, 12, 1.5, G2), R(15, 25, 7, 19, 1.5, B), R(25, 17, 7, 27, 1.5, B), R(35, 6, 7, 38, 1.5, A), L('M18.5 21c3-6 7-6 10-2', G4, 1.3), P('M28.5 16l1 4-4-1z', G4))
G = [(8, 10, 3.6), (24, 18, 4.4), (40, 9, 3.6), (11, 37, 3.6), (37, 38, 3.6)]
I[('info/algorithmique', 'Graphes')] = svg(graphe(G, [(0, 1), (0, 3), (1, 2), (1, 3), (1, 4), (2, 4), (3, 4)], {1: A, 0: B, 4: B}, {(0, 1): A, (1, 4): A}))
cel = ''
for i in range(4):
    for j in range(4):
        f = A if (i, j) == (3, 3) else B if (i, j) in ((0, 0), (1, 1), (1, 2), (2, 2), (3, 2)) else G1
        cel += R(5 + 10 * i, 5 + 10 * j, 8.6, 8.6, 1.6, f)
I[('info/algorithmique', 'Gloutons et programmation dynamique')] = svg(cel)
T = [(20, 7, 3.6), (10, 22, 3.4), (30, 22, 3.4), (5, 39, 3.2), (15, 39, 3.2), (30, 39, 3.2)]
I[('info/algorithmique', 'Explorer et revenir en arrière')] = svg(graphe(T, [(0, 1), (0, 2), (1, 3), (1, 4), (2, 5)], {0: A, 1: A, 4: A, 2: G2, 5: G2}, {(0, 1): A, (1, 4): A}), L('M39 35l6 6M45 35l-6 6', ROUGE, 2))
I[('info/algorithmique', 'Prouver un algorithme')] = svg(P('M9 4h21l9 9v31H9z', G1, G3, 1.2), P('M30 4v9h9', None, G3, 1.2), L('M14 16h11M14 22h16M14 28h9', G3, 1.6), C(33, 36, 8, A), L('M29 36l3 3 5-6', '#fff', 2))
I[('info/algorithmique', 'Les nombres en machine')] = svg(*[R(3 + 5.4 * k, 12, 4.6, 24, 1.4, A if b == '1' else G1, None if b == '1' else G2, 1) for k, b in enumerate('10110010')], L('M3 41h42', G3, 1.2), L('M3 7h11', B, 2.2))
# ------------------------------------------------------------------ Logique
I[('logique', 'Calcul des propositions')] = svg(L('M6 36l8-24 8 24', A, 3), L('M26 12l8 24 8-24', G4, 3))
I[('logique', 'Logique modale')] = svg(R(4, 15, 18, 18, 2, G2), P('M35 10l11 14-11 14-11-14z', A))
I[('logique', 'Calcul des prédicats')] = svg(L('M12 5l12 26 12-26M16.6 15h14.8', A, 3), *[C(x, 41, 2.4, G2) for x in (12, 20, 28, 36)])
I[('logique', 'Prouvabilité et incomplétude')] = svg(R(6, 6, 36, 36, 6, G1, G3, 1.2), L('M14 25l7 7 13-15', A, 3.2))
def arc_fleche(cx, cy, r, a0, a1, col, w=2.6, h=7.5, l=4.4):
    """arc de cercle de l'angle a0 à a1 (degrés, sens trigonométrique), terminé par une
    pointe dont l'axe suit la corde de la fin de l'arc : elle prolonge exactement le trait."""
    Pt = lambda a: (cx + r * math.cos(math.radians(a)), cy - r * math.sin(math.radians(a)))
    sg = 1 if a1 > a0 else -1
    ab = a1 - sg * math.degrees(h / r)                       # base de la pointe, sur le cercle
    (x0, y0), (xb, yb), (xt, yt) = Pt(a0), Pt(ab), Pt(a1)
    ux, uy = xt - xb, yt - yb; n = math.hypot(ux, uy); ux, uy = ux / n, uy / n
    grand = 1 if abs(ab - a0) > 180 else 0
    arc = L(f'M{x0:.2f} {y0:.2f}A{r} {r} 0 {grand} {0 if sg > 0 else 1} {xb + ux * 0.6:.2f} {yb + uy * 0.6:.2f}', col, w).replace('stroke-linecap:round', 'stroke-linecap:butt')
    pointe = P(f'M{xt:.2f} {yt:.2f}L{xb - uy * l:.2f} {yb + ux * l:.2f}L{xb + uy * l:.2f} {yb - ux * l:.2f}z', col)
    return arc + pointe
I[('logique', 'Paradoxes')] = svg(arc_fleche(24, 24, 16, 212, 28, A), arc_fleche(24, 24, 16, 8, -152, G3))
I[('logique', 'Bayésianisme')] = svg(P('M3 41c9 0 11-13 16-13s9 13 26 13z', G1, G3, 1.2), P('M16 41c6 0 8-32 13-32s7 32 13 32z', B, A, 1.6, None), L('M3 41h42', G3, 1.2))
# logique modale
I[('logique/modale', 'Syntaxe et sémantique')] = svg(fl(24, 10, 12, 30, G3, 1.4), fl(24, 10, 36, 30, G3, 1.4), fl(13, 35, 34, 35, G3, 1.4), C(24, 8, 5, A), C(9, 35, 5, G1, G3, 1.2), C(39, 35, 5, B))
I[('logique/modale', 'Systèmes logiques')] = svg(L('M6 9v30M6 24h14', G4, 2.6), R(26, 14, 20, 20, 2.5, A))
I[('logique/modale', 'Différentes logiques modales')] = svg(L('M11 24L37 9M11 24h26M11 24l26 15', G3, 1.4), C(10, 24, 5.5, A), C(38, 9, 4, B), C(38, 24, 4, G2), C(38, 39, 4, B))
# paradoxes
I[('logique/paradoxes', 'Paradoxe de Berry')] = svg(P('M4 9a5 5 0 0 1 5-5h30a5 5 0 0 1 5 5v22a5 5 0 0 1-5 5H18l-9 8v-8a5 5 0 0 1-5-5z', G1, G3, 1.2), L('M11 13h26M11 20h18', G3, 1.8), L('M11 27h9', A, 2.4))
I[('logique/paradoxes', 'Paradoxe de Hempel')] = svg(P('M2 31l10-5c2-10 9-15 16-15 5 0 8 2 9 6l7 2-7 3c-1 10-9 16-18 16H8l4-6z', G4), C(31.5, 17.5, 1.4, '#fff'), C(39, 37, 6, A), L('M39 31c0-3 1-5 3-6', G4, 1.4), P('M40 28c2-2 5-2 6 0-2 1-4 1-6 0z', VERT))
I[('logique/paradoxes', 'Paradoxe de Newcomb')] = svg(R(2, 14, 20, 20, 2.5, G1, G3, 1.2), C(9, 27, 3, B), C(15, 27, 3, B), C(12, 22, 3, B), R(26, 14, 20, 20, 2.5, A), L('M32.5 20.5a3.5 3.5 0 1 1 4.5 3.4c-1 .4-1 1.1-1 2.1', '#fff', 2), C(36, 29.5, 1.3, '#fff'))
# prédicats
I[('logique/predicats', 'Langage et sens')] = svg(L('M12 5l12 26 12-26M16.6 15h14.8', A, 3), *[C(x, 41, 2.4, G2 if k % 2 else B) for k, x in enumerate((12, 20, 28, 36))])
I[('logique/predicats', 'Démontrer au premier ordre')] = svg(L('M6 13h16M26 13h16', G4, 1.6), L('M10 26h28', G4, 1.6), L('M14 39h20', A, 2.6), *[L(f'M{x} {y}h{l}', G3, 1.4) for x, y, l in ((8, 8, 12), (28, 8, 12), (15, 21, 18), (18, 34, 12))])
# propositions
I[('logique/propositions', 'Syntaxe')] = svg(graphe([(24, 7, 4.4), (13, 22, 4), (35, 22, 4), (7, 39, 3.6), (19, 39, 3.6)], [(0, 1), (0, 2), (1, 3), (1, 4)], {0: A, 1: B, 2: B}))
I[('logique/propositions', 'Sémantique')] = svg(*[R(5 + 13.5 * i, 5 + 9.5 * j, 11.5, 7.5, 1.5, (A if (i == 2 and j in (0, 3)) else B if i == 2 else G1) if j else G2) for i in range(3) for j in range(4)])
I[('logique/propositions', 'Preuve')] = svg(L('M4 14h18M26 14h18M9 28h30', G4, 1.6), L('M15 42h18', A, 2.6), *[L(f'M{x} {y}h{l}', G3, 1.4) for x, y, l in ((7, 9, 12), (29, 9, 12), (15, 23, 18))], R(17, 33, 14, 4, 2, A))
# ------------------------------------------------------------------ Mathématiques
I[('maths', 'Fondements')] = svg('<clipPath id="pvF"><circle cx="17" cy="24" r="13"/></clipPath>', C(17, 24, 13, G1), C(31, 24, 13, G1), C(31, 24, 13, A).replace('/>', ' clip-path="url(#pvF)"/>'), C(17, 24, 13, None, G3, 1.2), C(31, 24, 13, None, G3, 1.2))
prem = {2, 3, 5, 7}
I[('maths', 'Arithmétique')] = svg(*[C(9 + 15 * (k % 3), 9 + 15 * (k // 3), 5.4, A if (k + 1) in prem else G2) for k in range(9)])
I[('maths', 'Algèbre')] = svg(L('M13 6H8v36h5M35 6h5v36h-5', G4, 2), C(18, 17, 4, A), C(30, 17, 4, G2), C(18, 31, 4, G2), C(30, 31, 4, A))
O = (24, 24); pc = lambda d: (24 + 19 * math.cos(math.radians(d)), 24 - 19 * math.sin(math.radians(d)))
p1, p2, p3 = pc(212), pc(62), pc(-12)
I[('maths', 'Géométrie')] = svg(C(24, 24, 19, G1, G3, 1.2), tri(p1, p2, p3, B), tri(O, p2, p3, A), *[C(round(x, 1), round(y, 1), 1.8, G4) for x, y in (O, p1, p2, p3)])
I[('maths', 'Probabilités')] = svg(P('M3 41c11 0 13-32 21-32s10 32 21 32z', B, A, 1.8), L('M24 9v32', A, 1.2), L('M2 41h44', G3, 1.2))
I[('maths', 'Statistiques')] = svg(R(5, 26, 9, 18, 1.5, G2), R(19, 12, 9, 32, 1.5, B), R(33, 20, 9, 24, 1.5, G2), L('M3 44h42', G3, 1.2), L('M4 31L44 15', A, 2), *[C(x, y, 2.2, A) for x, y in ((9.5, 29), (23.5, 23.5), (37.5, 18))])
I[('maths', 'Théorie des jeux')] = svg(graphe([(24, 7, 4.4), (12, 23, 4), (36, 23, 4), (6, 40, 3.6), (18, 40, 3.6), (36, 40, 3.6)], [(0, 1), (0, 2), (1, 3), (1, 4), (2, 5)], {0: A, 1: B, 2: B}, {(0, 1): A, (1, 4): A}))
# ------------------------------------------------------------------ Physique
par = lambda x: 40 - 26 * (1 - ((x - 26) / 21) ** 2)
I[('physique', 'Mécanique')] = svg(L('M3 43h42', G3, 1.4), L('M5 40Q26 -12 47 40', G2, 1.4, None).replace('stroke-linejoin:round', 'stroke-linejoin:round;stroke-dasharray:2 3'), C(15, round(par(15), 1), 5, A), fl(15, par(15), 25, par(15) - 6, G4, 1.4))
I[('physique', 'Électromagnétisme')] = svg(L('M6 10c8 6 8 22 0 28M42 10c-8 6-8 22 0 28', G2, 1.4), P('M28 3L12 26h10l-3 19 17-25H26z', A))
I[('physique', 'Optique')] = svg(L('M3 14h21l20 10M3 34h21l20-10', G3, 1.3), L('M3 24h41', G2, 1), P('M24 5c6 6 6 32 0 38c-6-6-6-32 0-38z', B, A, 1.4), C(44, 24, 2, A))
I[('physique', 'Relativité restreinte')] = svg(P('M8 4h32L24 24zM8 44h32L24 24z', G1), E(24, 5, 16, 3, None, G3, 1.2), E(24, 43, 16, 3, None, G3, 1.2), L('M8 4L40 44M40 4L8 44', G3, 1.2), L('M20 44C21 34 27 30 26 4', A, 2.2))
I[('physique', 'Relativité générale')] = svg(*[L(f'M2 {12 + 7 * k}c{10} 0 {13} {12 - 3 * k} 22 {12 - 3 * k}s{12}-{12 - 3 * k} 22-{12 - 3 * k}', G3 if k else G2, 1.1) for k in range(4)], C(24, 25, 5.5, A))
I[('physique', 'Mécanique quantique')] = svg(*[E(24, 24, 20, 7, None, G3, 1.3, a) for a in (0, 60, -60)], C(24, 24, 4.5, A), C(40.5, 13.5, 2.4, B))
I[('physique', 'Théorie quantique des champs')] = svg(fl(4, 6, 11.5, 16, G4, 1.6), L('M11.5 16L17 24L4 42', G4, 1.6), fl(44, 6, 36.5, 16, G4, 1.6), L('M36.5 16L31 24l13 18', G4, 1.6), L('M17 24c1.5-4.5 3-4.5 3.5 0s2 4.5 3.5 0 2-4.5 3.5 0 2 4.5 3.5 0', A, 1.8), C(17, 24, 2.6, A), C(31, 24, 2.6, A))
I[('physique', 'Thermodynamique et physique statistique')] = svg(R(4, 4, 40, 40, 6, G1, G3, 1.2), *[C(x, y, 3, A if k % 2 else B) for k, (x, y) in enumerate(((14, 15), (32, 11), (24, 26), (12, 35), (35, 34)))], L('M14 15l-5-4M32 11l6 3M24 26l5 6M12 35l-3 4M35 34l4-5', G3, 1.2))
I[('physique', 'Chaos')] = svg(L('M24 24c-5-10-19-13-20-3s13 10 20 3', A, 1.6), L('M24 24c7-7 19-10 20 1s-14 11-20-1', B, 1.6), L('M24 24c-4-8-14-10-15-3s10 8 15 3c6-6 15-8 15 1s-11 9-15-1', A, 1, 0.6))
I[('physique', 'Curiosités')] = svg(E(24, 44, 10, 2, G1), P('M24 42L10 21a14 6.5 0 0 1 28 0z', B), P('M11.5 23.5c4 3.5 21 3.5 25 0l-2.4 3.6c-4 2.6-16 2.6-20.2 0z', A), R(22.5, 3, 3, 13, 1.5, G4))
# mécanique
I[('physique/meca', 'Énergie cinétique et travail')] = svg(P('M3 42h42L3 14z', G1, G3, 1.2), R(13, 13, 10, 10, 1.5, A).replace('/>', ' transform="rotate(33.7 18 18)"/>'), fl(21, 25, 36, 35, G4, 1.6))
I[('physique/meca', 'Principe de moindre action')] = svg(L('M7 37c9-10 25-10 34 0', G2, 1.3), L('M7 37c6-18 28-18 34 0', G2, 1.3), L('M7 37C13 6 35 6 41 37', A, 2.4), C(7, 37, 3.4, G4), C(41, 37, 3.4, G4))
I[('physique/meca', 'De Newton à Hamilton')] = svg(E(24, 24, 20, 13, None, G3, 1.2), E(24, 24, 14, 8.5, None, A, 2), E(24, 24, 7, 4, None, G3, 1.2), P('M22 13l5 2.5-5 2.5z', A), C(38, 24, 2.6, A))
I[('physique/meca', 'Chute libre et paraboles')] = svg(L('M3 43h42', G3, 1.4), L('M6 40Q14 4 26 40', G2, 1.4), L('M6 40Q22 -2 42 40', A, 2), L('M6 40Q28 22 46 40', B, 1.4), C(6, 40, 2.6, G4))
I[('physique/meca', 'Force de Coriolis')] = svg(C(22, 26, 19, G1, G3, 1.2), L('M22 26c5-1 10-5 12-12', A, 2).replace('stroke-linejoin:round', 'stroke-linejoin:round;stroke-dasharray:3 2.5'), C(34, 14, 2.6, A), C(22, 26, 2, G4), L('M33 4.5a21 21 0 0 1 12 12', G3, 1.4), P('M46 11v7l-6-4z', G3))
I[('physique/meca', 'Curiosités en mécanique terrestre')] = svg(C(20, 28, 17, G1, G3, 1.2), L('M3 28h34M20 11c-7 6-7 28 0 34M20 11c7 6 7 28 0 34', G3, 1), C(40, 9, 5, A), fl(26, 22, 34, 14, G4, 1.4))
# phistat
I[('physique/phistat', 'Physique statistique')] = svg(*[fl(9 + 10 * i, (14 if (i + j) % 3 else 6) + 10 * j, 9 + 10 * i, (6 if (i + j) % 3 else 14) + 10 * j, A if (i + j) % 3 else G3, 1.8, 3.5) for i in range(4) for j in range(4)])
I[('physique/phistat', 'Entropie et information')] = svg(*[R(4 + 8.4 * k, 44 - h, 7, h, 1.2, A if k == 4 else B if k in (3, 5) else G2) for k, h in enumerate((8, 14, 22, 30, 36, 28, 18, 10)[:5])], L('M3 44h42', G3, 1.2))
I[('physique/phistat', 'Démon de Maxwell et principe de Landauer')] = svg(R(2, 9, 44, 30, 4, G1, G3, 1.2), L('M24 9v9M24 30v9', G4, 2), *[C(x, y, 2.4, BLEU) for x, y in ((9, 17), (13, 30), (18, 22))], *[C(x, y, 2.4, ROUGE) for x, y in ((31, 16), (38, 28), (33, 32))], C(24, 24, 3, A))
I[('physique/phistat', 'Phase et transition')] = svg(P('M5 43V5h17c-1 10-1 17 2 22L5 43z', G1), P('M24 27L43 11V5H22c-1 10-1 17 2 22z', B), L('M5 43L24 27L43 11M24 27c-3-5-3-12-2-22', G4, 1.5), L('M5 5v38h38', G3, 1.2), C(24, 27, 2.8, A), C(43, 11, 2.4, A))
I[('physique/phistat', 'Effusivité')] = svg(R(3, 14, 21, 26, 2, '#FFB3A8'), R(24, 14, 21, 26, 2, '#A9DCF8'), L('M24 10v34', A, 2.4), L('M8 22h10M8 28h10M30 22h10M30 28h10', '#fff', 1.4))
# quantique
I[('physique/quantique', 'Notions fondamentales')] = svg(C(24, 24, 19, G1, G3, 1.2), E(24, 24, 19, 6, None, G3, 1).replace('stroke-linejoin:round', 'stroke-linejoin:round;stroke-dasharray:2 2'), fl(24, 24, 33, 10, A, 2.2), C(24, 24, 1.8, G4))
I[('physique/quantique', 'Théorie-jouet de Spekkens')] = svg(*[R(4 + 10.4 * i, 4 + 10.4 * j, 9, 9, 1.6, A if (i, j) == (1, 1) else B if i < 2 and j < 2 else G1) for i in range(4) for j in range(4)])
I[('physique/quantique', 'Épistémique vs ontique')] = svg(P('M3 42c8 0 9-26 15-26s8 26 15 26z', G2, None, None, 0.8), P('M15 42c8 0 9-26 15-26s8 26 15 26z', B, None, None, 0.8), L('M3 42c8 0 9-26 15-26s8 26 15 26M15 42c8 0 9-26 15-26s8 26 15 26', G4, 1), L('M2 42h44', G3, 1.2), P('M18.5 42c2-6 4-9 5.5-9s3.5 3 5.5 9z', A))
I[('physique/quantique', 'Paradoxe EPR')] = svg(fl(18, 24, 5, 24, G3, 1.6), fl(30, 24, 43, 24, G3, 1.6), C(24, 24, 5, A), C(9, 24, 3, B), C(39, 24, 3, B), fl(9, 18, 9, 8, A, 1.6, 3.5), fl(39, 30, 39, 40, A, 1.6, 3.5))
I[('physique/quantique', 'Limites de la non-localité')] = svg(L('M17 3v12M31 3v12M17 33v12M31 33v12', G3, 1.6), R(9, 13, 30, 22, 4, B, A, 1.6), L('M24 13v22', '#fff', 1.4), C(17, 6, 2.2, A), C(31, 42, 2.2, A))
I[('physique/quantique', 'Contextualité')] = svg(*[R(4 + 14 * i, 4 + 14 * j, 12, 12, 2, A if (i == 2 and j == 1) else B if (i == 2 or j == 1) else G1) for i in range(3) for j in range(3)])
I[('physique/quantique', 'Une ontologie à 3N dimensions')] = svg(L('M16 33V5M16 33h29M16 33L4 45', G3, 1.4), *[C(x, y, 2, A if k % 3 == 0 else B) for k, (x, y) in enumerate(((24, 20), (29, 15), (33, 24), (22, 27), (36, 13), (27, 29), (40, 20)))])
I[('physique/quantique', 'ER = EPR')] = svg(L('M3 6c10 6 13 10 13 18s-3 12-13 18M45 6c-10 6-13 10-13 18s3 12 13 18', G3, 1.4), E(24, 24, 8, 3.5, B, A, 1.4), C(7, 10, 2.6, A), C(41, 10, 2.6, A), L('M10 10h28', A, 1.2).replace('stroke-linejoin:round', 'stroke-linejoin:round;stroke-dasharray:2 2.5'))
I[('physique/quantique', 'Décohérence et darwinisme quantique')] = svg(L('M24 45V27M24 27L10 11M24 27L38 11M24 27V8', G3, 1.8), L('M24 27L38 11', A, 2.2), C(10, 10, 4, G2), C(38, 10, 4, A), C(24, 7, 4, B))
# tqc
I[('physique/tqc', 'Oscillateur harmonique')] = svg(L('M6 4c2 25 9 39 18 39S40 29 42 4', G4, 1.6), L('M15 35h18M11 27h26M8.5 19h31', G2, 1.4), L('M7 11h34', A, 2.2), L('M13 31c3-4 6 4 11 0s8 4 11 0', B, 1.2))
I[('physique/tqc', 'Notes de lecture')] = svg(P('M3 10c7-3 14-2 21 3 7-5 14-6 21-3v30c-7-3-14-2-21 3-7-5-14-6-21-3z', G1, G3, 1.2), L('M24 13v30', G3, 1.2), L('M8 18c4-1 8-1 11 1M8 25c4-1 8-1 11 1M29 19c3-2 7-2 11-1M29 26c3-2 7-2 11-1', G3, 1.2), P('M33 7h6v14l-3-2.5-3 2.5z', A))
fv, x, y = '', 8, 42
for k in range(6):
    a = math.radians(15 + 28 * k); nx, ny = x + 9 * math.cos(a), y - 9 * math.sin(a)
    fv += fl(round(x, 1), round(y, 1), round(nx, 1), round(ny, 1), B, 1.6, 3.2); x, y = nx, ny
I[('physique/tqc', 'La lumière selon Feynman')] = svg(fv, fl(8, 42, round(x, 1), round(y, 1), A, 2.4, 5), C(8, 42, 2, G4))

def couleur_carte(bloc):
    m = re.search(r'class="math-card ([^"]*)"', bloc)
    return m.group(1) if m else ''

def remplacer():
    nb = 0
    for f in sorted(glob.glob('content/**/_index.md', recursive=True)):
        page = f.replace('content/', '').replace('/_index.md', '')
        s = open(f).read()
        def rep(m):
            nonlocal nb
            cle = (page, m.group(3))
            if cle not in I: print('manque', cle); return m.group(0)
            nb += 1
            return m.group(1) + I[cle].replace('id="pvF"', f'id="pvF{nb}"').replace('url(#pvF)', f'url(#pvF{nb})') + m.group(2)
        s2 = re.sub(r'(<span class="math-icon"[^>]*>)<svg.*?</svg>(</span>\s*<h3><a href="[^"]*">([^<]*)</a>)', rep, s, flags=re.S)
        if s2 != s: open(f, 'w').write(s2)
    print(nb, 'pictogrammes remplacés')

if len(sys.argv) > 1:
    # planche : chaque pictogramme dans la couleur de sa carte
    coul = {}
    for f in sorted(glob.glob('content/**/_index.md', recursive=True)):
        page = f.replace('content/', '').replace('/_index.md', '')
        for m in re.finditer(r'class="math-card ([^"]*)".*?<h3><a href="[^"]*">([^<]*)</a>', open(f).read(), re.S):
            coul[(page, m.group(2))] = m.group(1)
    css = open('static/css/cartes.css').read()
    acc = re.search(r'/\* ACCENTS.*?\*/(.*?)/\* FIN ACCENTS \*/', css, re.S)
    cases = ''.join(f'<div class="math-card c {coul.get(k, "")}"><span class="math-icon">{v}</span><small>{k[1]}</small></div>' for k, v in I.items())
    open(sys.argv[1], 'w').write(f'''<!doctype html><meta charset="utf-8"><style>{acc.group(1) if acc else ''}
body{{margin:0;padding:10px;display:grid;grid-template-columns:repeat(10,104px);gap:6px;font:10px sans-serif;background:#fff}}
.c{{text-align:center;padding:8px 2px;border-radius:10px;background:linear-gradient(#eef3f8,#fff 80%)}}
.c small{{display:block;color:#333;height:2.4em;overflow:hidden}}
.math-icon{{display:inline-flex;width:64px;height:64px;align-items:center;justify-content:center}}
svg.il{{width:64px;height:64px}}</style>{cases}''')
    print(len(I), 'pictogrammes dans la planche')
else:
    remplacer()
