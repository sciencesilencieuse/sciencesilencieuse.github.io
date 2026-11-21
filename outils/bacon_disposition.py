# Recalcule la disposition du graphe acteurs–films de static/data/bacon.json,
# pour faire apparaître sa structure au lieu d'une pelote uniforme.
#  1. Communautés de la composante géante (méthode de Leiden) : des grappes
#     d'acteurs et de films qui se fréquentent beaucoup, souvent d'une même époque.
#  2. Chaque communauté reçoit un disque d'aire proportionnelle à sa taille ; les
#     disques sont placés selon leurs liens (Fruchterman-Reingold pondéré), puis
#     écartés jusqu'à ne plus se chevaucher.
#  3. À l'intérieur d'un disque, le cœur de la grappe (sans ses sommets de degré 1)
#     est disposé par Fruchterman-Reingold ; les sommets « épluchés » sont semés
#     près de leur parent, en nuage flou (pas d'anneaux réguliers).
#  4. Les îlots (petites composantes) sont semés tout autour.
# Ajoute au fichier : « groupe » (communauté de chaque sommet, -1 hors géante) et
# « grappes » (centre, rayon et acteur le plus connecté des grandes communautés).
# Usage : python3 outils/bacon_disposition.py static/data/bacon.json
import json, math, random, sys
import igraph as ig, numpy as np

chemin = sys.argv[1]
d = json.load(open(chemin))
F, A = len(d['films']), len(d['acteurs']); N = F + A
voisins = [[] for _ in range(N)]
for f, c in enumerate(d['casting']):
    for a in c: voisins[f].append(F + a); voisins[F + a].append(f)
random.seed(42); np.random.seed(42); ig.set_random_number_generator(random)
rng = random.Random(7)
g = ig.Graph(n=N, edges=[(f, F + a) for f, c in enumerate(d['casting']) for a in c])
comp = np.array(g.connected_components().membership)
geante = int(np.bincount(comp).argmax())

# 1. communautés de la géante
dans = np.where(comp == geante)[0]; idx = {v: k for k, v in enumerate(dans)}
gg = g.induced_subgraph(dans.tolist())
memb = np.array(gg.community_leiden(objective_function='modularity', resolution=1.0, n_iterations=10).membership)
groupe = np.full(N, -1); groupe[dans] = memb
# les très petites communautés rejoignent celle de leur voisin le plus fréquent
tailles = np.bincount(memb)
for v in dans:
    c = groupe[v]
    if tailles[c] < 25:
        cnt = {}
        for u in voisins[v]:
            if tailles[groupe[u]] >= 25: cnt[groupe[u]] = cnt.get(groupe[u], 0) + 1
        if cnt: groupe[v] = max(cnt, key=cnt.get)
cs = sorted(set(groupe[dans].tolist())); ren = {c: k for k, c in enumerate(cs)}
groupe[dans] = [ren[c] for c in groupe[dans]]; K = len(cs)
taille = np.bincount(groupe[dans], minlength=K)
print('communautés', K, sorted(taille.tolist(), reverse=True)[:20])

# 2. disques des communautés
poids = {}
for f, c in enumerate(d['casting']):
    for a in c:
        x, y = groupe[f], groupe[F + a]
        if x >= 0 and x != y: k = (min(x, y), max(x, y)); poids[k] = poids.get(k, 0) + 1
mg = ig.Graph(n=K, edges=list(poids.keys()))
# force d'association : liens rapportés aux tailles, pour que les petites grappes se
# placent près de leurs partenaires plutôt que d'être écrasées par les grandes
w = np.array([v / math.sqrt(taille[i] * taille[j]) for (i, j), v in poids.items()])
C = np.array(mg.layout_fruchterman_reingold(weights=w / w.max(), niter=3000).coords)
rayon = 0.9 * np.sqrt(taille / taille.max())
C -= (C * taille[:, None]).sum(0) / taille.sum()
C *= 2.0 * rayon.max() / np.abs(C).max()
ordreT = np.argsort(-taille)
for it in range(4000):                                   # écarter les disques qui se chevauchent
    bouge = False
    for a in range(K):
        for b in range(a + 1, K):
            i, j = ordreT[a], ordreT[b]
            dx, dy = C[j] - C[i]; dd = math.hypot(dx, dy) or 1e-6; m = (rayon[i] + rayon[j]) * 1.06 - dd
            if m > 1e-4:
                bouge = True; u = np.array([dx, dy]) / dd
                wi = taille[j] / (taille[i] + taille[j])
                C[i] -= m * wi * u; C[j] += m * (1 - wi) * u
    if not bouge: break
    G = 0.004 * (taille / taille.max())[:, None] ** 0.5     # gravité, plus forte pour les grandes grappes
    C -= G * C
print('disques écartés en', it, 'tours')

# 3. intérieur de chaque disque
pos = np.zeros((N, 2)); place = np.zeros(N, bool)
deg = np.array([len(v) for v in voisins]); parent = np.full(N, -1); retire = np.zeros(N, bool); ordre = []
file = [i for i in range(N) if deg[i] <= 1]
for i in file:
    if retire[i] or deg[i] > 1: continue
    retire[i] = True; ordre.append(i)
    for v in voisins[i]:
        if not retire[v]:
            parent[i] = v; deg[v] -= 1
            if deg[v] <= 1: file.append(v)
for c in range(K):
    m = [v for v in dans if groupe[v] == c and not retire[v]]
    if not m: continue
    ix = {v: k for k, v in enumerate(m)}
    sg = ig.Graph(n=len(m), edges=[(ix[u], ix[v]) for u in m for v in voisins[u] if v in ix and u < v])
    L = np.array(sg.layout_fruchterman_reingold(niter=600, grid=len(m) > 1000).coords) if len(m) > 1 else np.zeros((1, 2))
    L -= np.median(L, 0); rr = np.hypot(L[:, 0], L[:, 1]); R = np.percentile(rr, 96) or 1
    k = rr > R; L[k] *= (R * (1 + 0.1 * np.tanh((rr[k] - R) / R)) / rr[k])[:, None]
    L *= rayon[c] * 0.82 / R
    for k, v in enumerate(m): pos[v] = C[c] + L[k]; place[v] = True
echelle_feuille = rayon.max() * 0.035
for i in reversed(ordre):
    p = parent[i]
    if p >= 0 and place[p] and comp[i] == geante:
        a = rng.uniform(0, 2 * math.pi); r = (abs(rng.gauss(0, 1)) * 0.9 + 0.25) * echelle_feuille
        pos[i] = pos[p] + r * np.array([math.cos(a), math.sin(a)]); place[i] = True

# 4. îlots, semés autour
cx = pos[place].mean(0); Rg = np.percentile(np.hypot(*(pos[place] - cx).T), 99)
ilots = {}
for i in range(N):
    if comp[i] != geante: ilots.setdefault(comp[i], []).append(i)
for c, membres in ilots.items():
    ix = {v: k for k, v in enumerate(membres)}
    sg = ig.Graph(n=len(membres), edges=[(ix[u], ix[v]) for u in membres for v in voisins[u] if u < v])
    Q = np.array(sg.layout_fruchterman_reingold(niter=200).coords) if len(membres) > 1 else np.zeros((1, 2))
    Q -= Q.mean(0); e = np.abs(Q).max() or 1
    Q *= echelle_feuille * 0.5 * math.sqrt(len(membres)) / e
    a = rng.uniform(0, 2 * math.pi); r = Rg * (1.06 + abs(rng.gauss(0, 1)) * 0.12)
    for k, v in enumerate(membres): pos[v] = cx + r * np.array([math.cos(a), math.sin(a)]) + Q[k]; place[v] = True
print('non placés', int((~place).sum()))

# mise à l'échelle 0..E
E = 4000
mn, mx = pos.min(0), pos.max(0); s = (E * 0.98) / (mx - mn).max(); o = (mn + mx) / 2
pos = (pos - o) * s + E / 2
d['pos'] = [round(float(x), 1) for x in pos.reshape(-1)]
d['echelle'] = E
d['groupe'] = groupe.tolist()
gr = []
for c in np.argsort(-taille)[:14]:
    acteurs = [v for v in dans if groupe[v] == c and v >= F]
    star = max(acteurs, key=lambda v: len(voisins[v]))
    xs = pos[[v for v in dans if groupe[v] == c]]
    gr.append({'x': round(float(np.median(xs[:, 0])), 1), 'y': round(float(np.median(xs[:, 1])), 1), 'r': round(float(rayon[c] * s), 1), 'n': int(taille[c]), 'star': int(star - F)})
d['grappes'] = gr
json.dump(d, open(chemin, 'w'), ensure_ascii=False, separators=(',', ':'))
print('écrit', chemin, [d['acteurs'][q['star']] for q in gr])
