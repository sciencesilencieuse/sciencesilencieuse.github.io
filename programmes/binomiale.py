def binom(n, k):
    if k > n - k:  # on profite de la symétrie
        k = n - k
    result = 1
    for i in range(1, k + 1):
        result = result * (n - i + 1) // i
    return result

def loibinom(n,p,k):
  assert p <= 1
  assert k <= n
  return p**k * (1-p)**(n-k) * binom(n,k)
  
def bino_repart(n,p,k):
  F = 0
  for i in range(k+1):
    F += loibinom(n,p,i)
  return F

def intervalle(n,p,seuil=0.05):
  F_old = 0
  borne_inf = seuil/2
  test_inf = True
  borne_sup = 1 - seuil/2
  test_sup = True
  k = 0
  while test_sup and k <= n:
    F_new = F_old + loibinom(n,p,k)
    if test_inf and F_new >= borne_inf:
      #a = F_old
      if k == 0:
        ia = 0
      else:
        ia = k
      test_inf = False
    if test_sup and F_new >= borne_sup:
      #b = F_new
      ib = k
      test_sup = False
    k += 1
    F_old = F_new
  return (ia,ib)

print("")
n = int(input("Taille de la population : "))
p = float(input("Proportion : ").replace(",","."))
seuil = 5/100
rep = input("Voulez-vous un autre seuil que 95% : taper O ou N")
while rep not in ("O","o","N","n"):
  rep = input("Voulez-vous un autre seuil que 95% : taper O ou N")
if rep in ("O","o"):
  seuil = input("Quel seuil voulez vous ? (taper un nombre entre 0 et 1)")
  seuil = float(seuil.replace(",","."))
  while seuil > 1:
    seuil = input("Voulez-vous un autre seuil que 5% : taper O ou N")
    seuil = float(seuil.replace(",","."))

ia,ib = intervalle(n,p)
print("\nL'intervalle de fluctuation au seuil de {:.1f} % pour une proportion p = {:.1f} % dans un echantillon de taille {} est :\n[{:.1f} % ; {:.1f} %]\n(soit entre {} et {} individus)".format((1-seuil)*100,p*100,n,ia/n*100,ib/n*100,ia,ib))