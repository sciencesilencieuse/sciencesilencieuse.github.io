# Pictogrammes des cartes, en style « plein-vide » : des formes pleines dont les
# détails sont découpés (masque SVG), si bien que le fond de la carte apparaît dans
# les creux. Une seule couleur (currentColor) ; « ton » donne une forme plus légère.
# Usage : python3 outils/icones_cartes.py          (réécrit les pictogrammes des pages)
#         python3 outils/icones_cartes.py planche.html   (planche de contrôle seulement)
import re, sys, glob, math

N = [0]
def icone(*couches):
    """couches : suites (plein, découpes) ; chaque couche a son propre masque."""
    defs, corps = '', ''
    for plein, coupes in couches:
        if coupes:
            N[0] += 1; mid = f'pv{N[0]}'
            defs += f'<mask id="{mid}" maskUnits="userSpaceOnUse" x="0" y="0" width="48" height="48"><rect width="48" height="48" fill="#fff"/>{coupes}</mask>'
            corps += f'<g mask="url(#{mid})">{plein}</g>'
        else:
            corps += plein
    return f'<svg class="pv" viewBox="0 0 48 48">' + (f'<defs>{defs}</defs>' if defs else '') + corps + '</svg>'

# éléments pleins
def tr(d, w=3, ton=False):            # trait plein
    return f'<path d="{d}" fill="none" stroke="currentColor" stroke-width="{w}" stroke-linecap="round" stroke-linejoin="round"{" opacity=\".4\"" if ton else ""}/>'
def pl(d, ton=False):                 # surface pleine
    return f'<path d="{d}"{" opacity=\".4\"" if ton else ""}/>'
def ro(x, y, r, ton=False):           # disque plein
    return f'<circle cx="{x}" cy="{y}" r="{r}"{" opacity=\".4\"" if ton else ""}/>'
def re_(x, y, w, h, rx=0, ton=False):
    return f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{rx}"{" opacity=\".4\"" if ton else ""}/>'
# découpes (en noir dans le masque)
def ct(d, w=2.6):                     # trait découpé
    return f'<path d="{d}" fill="none" stroke="#000" stroke-width="{w}" stroke-linecap="round" stroke-linejoin="round"/>'
def cf(d):                            # surface découpée
    return f'<path d="{d}" fill="#000"/>'
def cr(x, y, r):                      # disque découpé
    return f'<circle cx="{x}" cy="{y}" r="{r}" fill="#000"/>'
def an(x, y, r, w=2.2):               # anneau découpé (liseré vide autour d'un nœud)
    return f'<circle cx="{x}" cy="{y}" r="{r}" fill="none" stroke="#000" stroke-width="{w}"/>'
def creux(x, y, r, e=2.4):            # nœud « vide » : disque plein évidé
    return ro(x, y, r), cr(x, y, r - e)

def graphe(noeuds, aretes, w=2.6, gap=2.2, vides=()):
    """nœuds pleins (ou évidés), arêtes pleines, liseré vide autour des nœuds."""
    p = ''.join(tr(f'M{noeuds[a][0]} {noeuds[a][1]}L{noeuds[b][0]} {noeuds[b][1]}', w) for a, b in aretes)
    p += ''.join(ro(x, y, r) for x, y, r in noeuds)
    c = ''.join(an(x, y, r + gap / 2 + 0.3, gap) for x, y, r in noeuds)
    c += ''.join(cr(noeuds[k][0], noeuds[k][1], noeuds[k][2] - 2.3) for k in vides)
    return p, c

def tuile_rect(): return re_(4, 4, 40, 40, 11)
def tuile_rond(): return ro(24, 24, 21)

I = {}
# ------------------------------------------------------------------ Informatique
I[('info', 'Algorithmique')] = icone((
    re_(12, 3, 24, 10, 3) + pl('M24 15.5L36 24 24 32.5 12 24z') + re_(12, 35, 24, 10, 3) + re_(22.5, 12, 3, 24) + tr('M36 24h6v16h-6', 3),
    ct('M18 8h12M18 40h8') + cr(24, 24, 2.6) + ct('M12 13.2h24M12 34.8h24', 1.8)))
I[('info', 'Ordinateur')] = icone((
    re_(11, 11, 26, 26, 4) + ''.join(re_(x - 1.6, 4, 3.2, 8, 1.6) + re_(x - 1.6, 36, 3.2, 8, 1.6) + re_(4, x - 1.6, 8, 3.2, 1.6) + re_(36, x - 1.6, 8, 3.2, 1.6) for x in (17, 24, 31)),
    ct('M17.5 17.5h13v13h-13z', 2.4) + cr(24, 24, 2.2)))
pts = {'a': (8, 13, 3.6), 'b': (8, 35, 3.6), 'c': (24, 8, 3.6), 'd': (24, 24, 3.6), 'e': (24, 40, 3.6), 'f': (40, 17, 4.2), 'g': (40, 31, 4.2)}
L = list(pts.values()); idx = {k: i for i, k in enumerate(pts)}
I[('info', 'Intelligence artificielle')] = icone(graphe(L, [(idx[a], idx[b]) for a, b in ('ac', 'ad', 'ae', 'bc', 'bd', 'be', 'cf', 'cg', 'df', 'dg', 'ef', 'eg')], w=1.8, vides=(idx['d'],)))
I[('info', 'Cours de prépa TSI')] = icone((re_(3, 7, 42, 34, 8), ct('M17 16l-7 8 7 8M31 16l7 8-7 8', 3.2) + ct('M27 13l-6 22', 3)))
# ------------------------------------------------------------------ Algorithmique
I[('info/algorithmique', 'Rechercher')] = icone((ro(20, 20, 15) + tr('M31 31l11 11', 7), an(20, 20, 11.3, 2.4) + ct('M14 20h12M20 14v12', 2.6)))
I[('info/algorithmique', 'Complexité')] = icone((tuile_rect(), ct('M10 11v27h28', 2.4) + ct('M13 35L36 30', 2.6) + ct('M13 35C22 33 30 27 36 20', 2.6) + ct('M13 35C21 31 27 22 30 11', 2.6)))
s = lambda a, b, c: cf(f'M{a[0]} {a[1]}L{b[0]} {b[1]}L{c[0]} {c[1]}z')
A, B, C = (24, 3), (45, 41), (3, 41)
m = lambda p, q: ((p[0] + q[0]) / 2, (p[1] + q[1]) / 2)
cut = s(m(A, B), m(B, C), m(C, A))
for (P, Q, R) in ((A, m(A, B), m(A, C)), (m(A, C), m(B, C), C), (m(A, B), B, m(B, C))):
    cut += s(m(P, Q), m(Q, R), m(R, P))
I[('info/algorithmique', 'Récursivité')] = icone((pl(f'M{A[0]} {A[1]}L{B[0]} {B[1]}L{C[0]} {C[1]}z'), cut))
I[('info/algorithmique', 'Trier')] = icone((re_(4, 31, 8, 13, 2, True) + re_(14, 24, 8, 20, 2) + re_(24, 15, 8, 29, 2) + re_(34, 5, 8, 39, 2), ct('M38 9v5', 2.2)))
G = [(8, 10, 4), (24, 17, 4.6), (40, 9, 4), (12, 37, 4), (36, 38, 4)]
I[('info/algorithmique', 'Graphes')] = icone(graphe(G, [(0, 1), (0, 3), (1, 2), (1, 3), (1, 4), (2, 4), (3, 4)], vides=(1,)))
cases = ''.join(re_(5 + 10 * i, 6 + 9 * j, 8.4, 7.4, 1.6) for i in range(4) for j in range(4) if (i, j) not in ((0, 0), (1, 1), (2, 2), (3, 3)))
cases += ''.join(re_(5 + 10 * i, 6 + 9 * i, 8.4, 7.4, 1.6, True) for i in range(4))
I[('info/algorithmique', 'Gloutons et programmation dynamique')] = icone((cases + tr('M9.2 9.7L39.2 36.7', 2.6), ''))
T = [(20, 7, 4.4), (9, 22, 4), (31, 22, 4), (4.5, 39, 3.6), (15, 39, 3.6), (31, 39, 3.6)]
I[('info/algorithmique', 'Explorer et revenir en arrière')] = icone(graphe(T, [(0, 1), (0, 2), (1, 3), (1, 4), (2, 5)], vides=(1, 2)), (tr('M38 35l7 7M45 35l-7 7', 3), ''))
I[('info/algorithmique', 'Prouver un algorithme')] = icone((pl('M8 4h22l10 10v30H8z'), cf('M30 4v10h10z') + ct('M30 4v10h10', 2) + ct('M14 16h11M14 22h16M14 28h9', 2.4) + ct('M24 36l4 4 8-9', 3)))
I[('info/algorithmique', 'Les nombres en machine')] = icone((re_(3, 10, 42, 28, 6), ct('M11 18v12M20 18h4v12h-4zM31 18v12M38 18v12', 2.8)))
# ------------------------------------------------------------------ Logique
I[('logique', 'Calcul des propositions')] = icone((tuile_rect(), ct('M10 32l6.5-17 6.5 17M25 15l6.5 17 6.5-17', 3.2)))
I[('logique', 'Logique modale')] = icone((re_(3, 14, 20, 20, 3) + pl('M35 11l11 13-11 13-11-13z'), cf('M35 18.5l5.4 5.5-5.4 5.5-5.4-5.5z')))
I[('logique', 'Calcul des prédicats')] = icone((tuile_rond(), ct('M13 12l11 24 11-24M17.2 21h13.6', 3.2)))
I[('logique', 'Prouvabilité et incomplétude')] = icone((re_(5, 5, 38, 38, 9), ct('M14 25l7 7 13-15', 3.6)))
I[('logique', 'Paradoxes')] = icone((tr('M10 19a15 15 0 0 1 25-7', 4.5) + pl('M30 4l11 8-12 5z') + tr('M38 29a15 15 0 0 1-25 7', 4.5) + pl('M18 44L7 36l12-5z'), ''))
I[('logique', 'Bayésianisme')] = icone((pl('M3 41c9 0 11-12 16-12s8 12 26 12z', True) + pl('M17 41c6 0 7-32 12-32s6 32 12 32z'), ct('M3 41h42', 2) + ct('M29 13v26', 1.8)))
# logique modale
I[('logique/modale', 'Syntaxe et sémantique')] = icone(graphe([(24, 9, 5), (9, 37, 5), (39, 37, 5)], [(0, 1), (0, 2), (1, 2)], w=3, vides=(1,)))
I[('logique/modale', 'Systèmes logiques')] = icone((pl('M5 9h4v30H5zM9 22.2h12v3.6H9z') + re_(26, 14, 20, 20, 3), cr(36, 24, 3)))
I[('logique/modale', 'Différentes logiques modales')] = icone(graphe([(9, 24, 5.5), (38, 9, 4.4), (38, 24, 4.4), (38, 39, 4.4)], [(0, 1), (0, 2), (0, 3)], w=2.8, vides=(0,)))
# paradoxes
I[('logique/paradoxes', 'Paradoxe de Berry')] = icone((pl('M4 9a5 5 0 0 1 5-5h30a5 5 0 0 1 5 5v22a5 5 0 0 1-5 5H18l-9 8v-8a5 5 0 0 1-5-5z'), ct('M11 13h26M11 20h18M11 27h9', 2.8)))
I[('logique/paradoxes', 'Paradoxe de Hempel')] = icone((pl('M3 33l10-5c2-10 9-15 17-15 5 0 8 2 9 6l7 2-7 3c-1 10-9 17-19 17H9l4-6z'), cr(33, 19.5, 2) + ct('M17 30c5 2 10 1 14-3', 2.2)))
I[('logique/paradoxes', 'Paradoxe de Newcomb')] = icone((re_(2, 14, 20, 20, 3) + re_(26, 14, 20, 20, 3), cf('M6 18h12v12H6z') + ct('M32.5 20.5a3.5 3.5 0 1 1 4.5 3.4c-1 .4-1 1.1-1 2.1', 2.4) + cr(36, 29.5, 1.5)))
# prédicats
I[('logique/predicats', 'Langage et sens')] = icone((tuile_rect(), ct('M13 12l11 24 11-24M17.2 21h13.6', 3.2)))
I[('logique/predicats', 'Démontrer au premier ordre')] = icone((tuile_rond(), ct('M16 12v24M16 24h17', 3.4)))
# propositions
I[('logique/propositions', 'Syntaxe')] = icone(graphe([(24, 7, 4.6), (13, 22, 4.2), (35, 22, 4.2), (7, 39, 3.8), (19, 39, 3.8)], [(0, 1), (0, 2), (1, 3), (1, 4)], vides=(0, 1)))
I[('logique/propositions', 'Sémantique')] = icone((tuile_rect(), ct('M16 12v24M16 20h17M16 28h17', 3.2)))
I[('logique/propositions', 'Preuve')] = icone((tuile_rect(), ct('M16 12v24M16 24h17', 3.4)))
# ------------------------------------------------------------------ Mathématiques
I[('maths', 'Fondements')] = icone((ro(17, 24, 14) + ro(31, 24, 14), an(31, 24, 14, 2.6) + an(17, 24, 14, 2.6)), (pl('M24 12.1a14 14 0 0 1 0 23.8a14 14 0 0 1 0-23.8z'), an(17, 24, 14, 2.6) + an(31, 24, 14, 2.6)))
dots = ''
prem = {2, 3, 5, 7}
for k in range(9):
    x, y = 9 + 15 * (k % 3), 9 + 15 * (k // 3)
    dots += ro(x, y, 6)
cuts = ''.join(cr(9 + 15 * (k % 3), 9 + 15 * (k // 3), 3.6) for k in range(9) if (k + 1) not in prem)
I[('maths', 'Arithmétique')] = icone((dots, cuts))
I[('maths', 'Algèbre')] = icone((pl('M4 5h10v4H8.5v30H14v4H4zM44 5H34v4h5.5v30H34v4h10z') + ro(18, 17, 4.4) + ro(30, 17, 4.4) + ro(18, 31, 4.4) + ro(30, 31, 4.4), cr(30, 17, 2.2) + cr(18, 31, 2.2)))
I[('maths', 'Géométrie')] = icone((ro(24, 24, 21), ct('M3.8 24h40.4L14 6z', 2.6) + cr(24, 24, 2.4)))
I[('maths', 'Probabilités')] = icone((pl('M2 42c11 0 13-34 22-34s11 34 22 34z'), ct('M24 10v32', 2.2) + ct('M15.5 27v15M32.5 27v15', 2)))
I[('maths', 'Statistiques')] = icone((re_(4, 26, 10, 18, 2) + re_(19, 12, 10, 32, 2) + re_(34, 20, 10, 24, 2), ct('M2 32L46 14', 2.6)))
I[('maths', 'Théorie des jeux')] = icone(graphe([(24, 7, 4.8), (12, 23, 4.4), (36, 23, 4.4), (6, 40, 4), (18, 40, 4), (36, 40, 4)], [(0, 1), (0, 2), (1, 3), (1, 4), (2, 5)], vides=(1, 2)))
# ------------------------------------------------------------------ Physique
I[('physique', 'Mécanique')] = icone((re_(2, 42, 44, 4, 2) + ''.join(ro(x, 40 - 24 * (1 - ((x - 28) / 22) ** 2), r) for x, r in ((6.5, 1.6), (12, 2.1), (18, 2.6), (24.5, 3.1))) + ro(34, 16.5, 6.5), ct('M31 14a4 4 0 0 1 4-1', 1.8)))
I[('physique', 'Électromagnétisme')] = icone((pl('M29 2L9 27h12l-4 19 22-27H27z'), ct('M25.5 9.5L16 22', 1.8)))
I[('physique', 'Optique')] = icone((tr('M2 14h22l22 10M2 34h22l22-10', 2.4), ''), (pl('M24 4c6 6 6 34 0 40c-6-6-6-34 0-40z'), ct('M24 9v30', 1.6)))
I[('physique', 'Relativité restreinte')] = icone((pl('M7 3h34L24 24zM7 45h34L24 24z'), ct('M7 4.5c0 3 34 3 34 0', 2.2) + ct('M7 43.5c0-3 34-3 34 0', 2.2) + an(24, 24, 5, 2.4)), (ro(24, 24, 3), ''))
I[('physique', 'Relativité générale')] = icone((pl('M2 16c11 0 14 26 22 26s11-26 22-26v-4H2z', True) + pl('M2 22c10 0 13 22 22 22s12-22 22-22v-6c-11 0-14 26-22 26S13 16 2 16z'), '') , (ro(24, 23, 6), an(24, 23, 6, 0.01)))
I[('physique', 'Mécanique quantique')] = icone((''.join(f'<ellipse cx="24" cy="24" rx="21" ry="7.5" transform="rotate({a} 24 24)" fill="none" stroke="currentColor" stroke-width="2.8"/>' for a in (0, 60, -60)) + ro(24, 24, 5), an(24, 24, 7, 2.4)))
I[('physique', 'Théorie quantique des champs')] = icone((tr('M4 6l13 18L4 42M44 6L31 24l13 18', 3.2) + tr('M17 24c1.5-4.5 3-4.5 3.5 0s2 4.5 3.5 0 2-4.5 3.5 0 2 4.5 3.5 0', 2.4) + ro(17, 24, 4.2) + ro(31, 24, 4.2), an(17, 24, 5.6, 2) + an(31, 24, 5.6, 2) + cr(17, 24, 1.8) + cr(31, 24, 1.8)))
I[('physique', 'Thermodynamique et physique statistique')] = icone((re_(3, 3, 42, 42, 9), ''.join(cr(x, y, 3.6) for x, y in ((14, 15), (32, 11), (24, 26), (12, 35), (35, 34))) + ct('M14 15l-5-4M32 11l6 3M24 26l5 6M12 35l-3 4M35 34l4-5', 2.2)))
I[('physique', 'Chaos')] = icone((tr('M24 24c-5-10-19-13-20-3s13 10 20 3c7-7 19-10 20 1s-14 11-20-1', 5), ct('M20.5 18.5l3 5.5', 3.4)), (tr('M21 17.8l3 6.2', 5), ''))
I[('physique', 'Curiosités')] = icone((pl('M24 45L9 21a15 7 0 0 1 30 0z') + re_(22, 2, 4, 12, 2), ct('M10.5 23.5c4 3 23 3 27 0', 2.4) + ct('M13.5 29c3 2.4 18 2.4 21 0', 2)))
# mécanique
I[('physique/meca', 'Énergie cinétique et travail')] = icone((pl('M3 15l42 29H3z') + ro(17, 11, 6.5), an(17, 11, 6.5 + 1.5, 2.6) + ct('M14 8.5a4 4 0 0 1 4-1', 1.8)))
I[('physique/meca', 'Principe de moindre action')] = icone((tr('M7 37c9-10 25-10 34 0', 2.2, True) + tr('M7 37c6-18 28-18 34 0', 2.2, True) + tr('M7 37C13 8 35 8 41 37', 3.4) + ro(7, 37, 4.6) + ro(41, 37, 4.6), an(7, 37, 6, 2) + an(41, 37, 6, 2)))
I[('physique/meca', 'De Newton à Hamilton')] = icone((f'<ellipse cx="24" cy="24" rx="21" ry="14"/>', '<ellipse cx="24" cy="24" rx="16" ry="9.5" fill="#000"/>'), (f'<ellipse cx="24" cy="24" rx="10" ry="5"/>', ''), (pl('M19 7l9 3-9 4z'), ''))
I[('physique/meca', 'Chute libre et paraboles')] = icone((re_(2, 42, 44, 4, 2) + tr('M5 41Q24-5 43 41', 2.2, True) + ''.join(ro(x, y, 4) for x, y in ((9.5, 29.5), (24, 18), (38.5, 29.5))), ''.join(an(x, y, 5.4, 1.8) for x, y in ((9.5, 29.5), (24, 18), (38.5, 29.5)))))
I[('physique/meca', 'Force de Coriolis')] = icone((ro(22, 26, 19) + tr('M33 4.5a21 21 0 0 1 12 12', 2.6) + pl('M46 11l0 8-7-4z'), ct('M22 26c5-1 10-5 12-12', 2.8) + cr(22, 26, 3)))
I[('physique/meca', 'Curiosités en mécanique terrestre')] = icone((ro(20, 28, 17) + ro(40, 9, 5.5), ct('M3 28h34M20 11c-7 6-7 28 0 34M20 11c7 6 7 28 0 34', 2) + an(40, 9, 7, 2.4)))
# phistat
I[('physique/phistat', 'Physique statistique')] = icone((re_(4, 4, 40, 40, 6), ''.join(cr(x, y, 3) for x, y in ((13, 13), (30, 11), (22, 23), (36, 30), (12, 34), (25, 37), (37, 19))) + ct('M22 23l6 3M13 13l-3-3', 2)))
I[('physique/phistat', 'Entropie et information')] = icone((re_(4, 30, 7, 13, 1.5) + re_(14, 18, 7, 25, 1.5) + re_(24, 8, 7, 35, 1.5) + re_(34, 22, 7, 21, 1.5) + re_(2, 44, 44, 3, 1.5), ct('M27.5 13v4', 2)))
I[('physique/phistat', 'Démon de Maxwell et principe de Landauer')] = icone((re_(2, 9, 44, 30, 5), ct('M24 9v9M24 30v9', 3) + ''.join(cr(x, y, r) for x, y, r in ((9, 17, 2.4), (13, 30, 2.4), (18, 22, 2.4), (31, 16, 3.4), (38, 28, 3.4), (33, 32, 3.4)))))
I[('physique/phistat', 'Phase et transition')] = icone((tuile_rect(), ct('M9 39C16 37 21 33 24 28', 2.6) + ct('M24 28C23 22 22 16 21 9', 2.6) + ct('M24 28C29 25 34 21 38 15', 2.6) + cr(24, 28, 3) + cr(38, 15, 2.4)))
I[('physique/phistat', 'Effusivité')] = icone((pl('M16 30V9a6 6 0 0 1 12 0v21a10 10 0 1 1-12 0z') + re_(33, 10, 10, 3, 1.5) + re_(33, 17, 10, 3, 1.5) + re_(33, 24, 10, 3, 1.5), ct('M22 34V12', 3) + cr(22, 36.5, 4.4)), (ro(22, 36.5, 2.6) + re_(21, 14, 2, 22), ''))
# quantique
I[('physique/quantique', 'Notions fondamentales')] = icone((ro(24, 24, 21), '<ellipse cx="24" cy="24" rx="21" ry="6.5" fill="none" stroke="#000" stroke-width="2"/>' + ct('M24 24l9-13', 3) + cr(33, 11, 3.6)))
I[('physique/quantique', 'Théorie-jouet de Spekkens')] = icone((re_(4, 4, 19, 19, 3) + re_(25, 25, 19, 19, 3) + re_(25, 4, 19, 19, 3) + re_(4, 25, 19, 19, 3), cf('M29 8h11v11H29zM8 29h11v11H8z')))
I[('physique/quantique', 'Épistémique vs ontique')] = icone((pl('M2 42c9 0 10-28 17-28s8 28 17 28z') + re_(2, 42, 44, 3, 1.5), ct('M12 42c9 0 10-22 17-22s8 22 17 22', 2.6)))
I[('physique/quantique', 'Paradoxe EPR')] = icone((ro(24, 24, 6) + pl('M3 24l9-7v4.5h5v5h-5V31zM45 24l-9-7v4.5h-5v5h5V31z'), an(24, 24, 7.6, 2.2) + cr(24, 24, 2.4)), (tr('M7 12V6M41 36v6', 3), ''))
I[('physique/quantique', 'Limites de la non-localité')] = icone((re_(9, 13, 30, 22, 5) + re_(15.5, 3, 4, 12, 2) + re_(28.5, 3, 4, 12, 2) + re_(15.5, 33, 4, 12, 2) + re_(28.5, 33, 4, 12, 2), ct('M9 24h30', 2.2) + ct('M17.5 13v-1M30.5 13v-1', 0)))
I[('physique/quantique', 'Contextualité')] = icone((''.join(re_(4 + 14 * i, 4 + 14 * j, 12, 12, 2.5) for i in range(3) for j in range(3)), ''.join(cf(f'M{8 + 14 * i} {8 + 14 * i}h4v4h-4z') for i in range(3)) + cf('M36 8h4v4h-4zM8 36h4v4H8z')))
I[('physique/quantique', 'Une ontologie à 3N dimensions')] = icone((pl('M16 14l14-8 14 8-14 8z', True) + pl('M16 14v18l14 8V22z') + pl('M44 14v18l-14 8V22z', True), '') , (tr('M4 44l10-10', 3) + pl('M2 46l2.5-8 5.5 5.5z'), ''))
I[('physique/quantique', 'ER = EPR')] = icone((pl('M3 4h14c-5 8-5 32 0 40H3zM45 4H31c5 8 5 32 0 40h14z'), ct('M10 4c-4 8-4 32 0 40M38 4c4 8 4 32 0 40', 2)), (tr('M17 17h14M16 24h16M17 31h14', 2.6, True), ''))
I[('physique/quantique', 'Décohérence et darwinisme quantique')] = icone((tr('M24 45V27M24 27L10 11M24 27L38 11M24 27V8', 3.4) + ro(10, 10, 5) + ro(38, 10, 5) + ro(24, 7, 5), an(10, 10, 6.4, 2) + an(38, 10, 6.4, 2) + an(24, 7, 6.4, 2) + cr(24, 7, 2.2)))
# tqc
I[('physique/tqc', 'Oscillateur harmonique')] = icone((pl('M5 4c2 24 9 38 19 38S41 28 43 4z'), ct('M17 35h14M12 27h24M9 19h30M7 11h34', 2.4)))
I[('physique/tqc', 'Notes de lecture')] = icone((pl('M3 9c7-3 14-2 21 3 7-5 14-6 21-3v31c-7-3-14-2-21 3-7-5-14-6-21-3z'), ct('M24 12v31', 2.4) + ct('M8 17c4-1 8-1 11 1M8 24c4-1 8-1 11 1M29 18c3-2 7-2 11-1M29 25c3-2 7-2 11-1', 2)))
I[('physique/tqc', 'La lumière selon Feynman')] = icone((tr('M4 8l12 16L4 40M44 8L32 24l12 16', 3.2) + pl('M8.5 11.5l1.2 6-5.6-2.4zM39.5 11.5l-1.2 6 5.6-2.4z') + tr('M16 24q2-5.5 4 0t4 0 4 0 4 0', 2.4) + ro(16, 24, 4.2) + ro(32, 24, 4.2), an(16, 24, 5.6, 2) + an(32, 24, 5.6, 2)))

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
            return m.group(1) + I[cle] + m.group(2)
        s2 = re.sub(r'(<span class="math-icon"[^>]*>)<svg.*?</svg>(</span>\s*<h3><a href="[^"]*">([^<]*)</a>)', rep, s, flags=re.S)
        if s2 != s: open(f, 'w').write(s2)
    print(nb, 'pictogrammes remplacés')

if len(sys.argv) > 1:
    cases = ''.join(f'<div class="c"><span class="math-icon">{v}</span><small>{k[1]}</small></div>' for k, v in I.items())
    open(sys.argv[1], 'w').write(f'''<!doctype html><meta charset="utf-8"><style>
body{{margin:0;padding:10px;display:grid;grid-template-columns:repeat(10,104px);gap:6px;font:10px sans-serif;background:#fff}}
.c{{text-align:center;padding:8px 2px;border-radius:10px;background:linear-gradient(#d9f0ff,#fff 80%);color:#0b4f7a}}
.c small{{display:block;color:#333;height:2.4em;overflow:hidden}}
.math-icon{{display:inline-flex;width:64px;height:64px;align-items:center;justify-content:center}}
svg.pv{{width:60px;height:60px;fill:currentColor;stroke:none}}</style>{cases}''')
    print(len(I), 'pictogrammes dans la planche')
else:
    remplacer()
