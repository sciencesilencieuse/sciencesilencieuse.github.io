/* Le voyageur de commerce sur une carte de France : Held-Karp (programmation
   dynamique) contre la force brute (tous les circuits). Held-Karp calcule, pour
   chaque ensemble S de villes visitées depuis Paris et chaque ville d'arrivée i,
   le plus court chemin C(S, i), à partir des chemins plus courts déjà connus.
   Cliquer une ville l'ajoute ou la retire. Distances à vol d'oiseau.
   Contour de la France : Admin Express (IGN), Licence ouverte, via france-geojson.
   Conteneur attendu : <div class="anim" data-anim="tsp-france"></div>              */
(function () {
  'use strict';
  const root = document.querySelector('.anim[data-anim="tsp-france"]');
  if (!root) return;

  const FRANCE = 'M849,365L844,366L841,365L839,366L840,370L836,372L836,374L834,376L831,379L834,379L839,379L843,379L843,382L841,384L839,385L836,386L837,391L832,395L830,399L826,402L824,403L822,406L819,408L820,410L817,412L815,415L812,416L807,418L802,422L803,426L803,430L801,432L801,435L800,440L798,440L795,444L791,446L787,450L783,454L780,456L780,459L779,464L778,467L776,469L777,471L775,473L778,474L783,478L779,484L778,486L780,490L777,490L773,491L771,493L768,495L770,496L768,502L770,501L774,501L777,500L780,501L783,499L787,494L790,493L792,491L789,490L787,487L788,485L790,480L792,478L795,478L798,481L799,479L803,478L806,475L808,476L811,475L815,474L821,474L825,476L824,480L825,482L827,484L830,487L830,490L826,495L825,499L826,501L833,503L832,505L831,510L835,508L836,510L839,514L841,517L842,520L843,523L840,525L839,528L836,529L833,531L827,531L826,533L826,537L827,542L829,546L833,548L835,550L837,550L840,551L838,556L839,562L840,565L843,565L847,568L848,572L850,573L852,574L851,577L849,580L848,582L848,585L849,589L847,591L844,594L841,593L837,594L837,597L833,598L833,601L829,602L827,600L824,599L822,601L818,601L814,604L817,608L817,613L821,613L823,615L824,618L823,621L823,624L826,627L830,630L834,630L838,630L840,631L841,634L840,636L841,639L843,643L845,647L841,646L839,646L837,648L837,652L835,656L834,659L831,660L830,662L831,665L833,668L835,671L832,673L833,678L834,680L837,684L839,687L840,690L842,693L845,692L848,693L850,695L854,697L856,698L859,701L863,700L864,703L869,703L871,702L875,701L878,700L882,700L884,697L887,698L886,700L886,703L889,707L888,711L886,712L886,715L885,718L882,719L879,721L878,724L875,727L874,729L875,735L874,738L871,739L868,742L866,743L863,744L860,746L857,746L855,749L853,749L851,750L848,756L848,759L844,759L841,760L838,760L836,763L836,767L834,770L832,772L830,772L828,773L825,774L821,774L820,778L820,781L817,783L811,787L814,789L817,789L819,788L817,791L817,794L815,796L814,799L812,796L809,796L805,800L803,799L799,800L796,801L796,806L794,806L790,803L788,804L785,803L782,806L781,809L782,812L779,811L780,807L776,806L773,807L771,805L767,804L764,804L765,806L762,808L761,810L758,807L758,804L755,803L752,801L750,801L748,797L745,796L743,799L741,797L739,794L733,794L729,794L726,794L728,790L727,788L727,784L724,779L720,781L717,782L714,782L705,782L704,779L700,775L700,772L697,772L693,774L692,778L694,779L692,782L687,780L683,780L679,780L674,779L672,776L674,775L673,772L669,770L665,769L661,770L649,769L645,768L642,766L643,762L640,760L637,759L634,760L631,761L627,763L623,766L619,771L614,773L612,776L606,779L603,783L600,788L597,787L594,786L591,787L588,788L583,792L581,794L577,798L574,802L571,808L570,811L567,819L567,822L567,831L567,835L567,842L567,847L567,852L568,856L568,860L570,863L574,864L574,867L575,869L576,871L573,871L570,872L568,869L565,868L562,868L561,867L559,869L555,869L552,871L551,873L547,872L545,873L542,875L542,881L538,880L535,879L533,882L530,881L528,879L525,877L520,874L517,872L513,871L509,873L506,873L504,877L501,879L497,879L495,879L493,876L493,873L491,870L488,870L485,868L482,866L479,866L477,866L477,863L477,860L481,858L477,856L478,854L474,853L471,852L467,852L465,850L461,850L459,852L458,855L456,852L455,850L453,848L451,845L449,843L446,844L442,842L438,844L436,842L436,839L434,838L432,837L426,836L424,834L422,836L417,832L413,831L409,830L407,829L403,831L404,835L402,837L405,844L400,845L394,845L391,845L388,846L386,845L383,843L380,844L380,847L376,845L374,843L370,841L367,843L364,843L361,845L357,847L354,846L353,843L351,843L347,835L342,834L339,831L336,830L334,831L333,834L331,835L327,835L323,832L322,835L320,837L319,834L316,832L313,829L311,827L308,826L308,823L306,818L304,819L298,820L296,819L293,820L289,817L283,815L281,813L278,811L273,809L271,811L268,808L269,806L270,803L267,804L265,806L265,812L259,810L257,807L261,802L260,800L261,797L263,790L261,788L255,787L250,786L249,790L246,787L243,784L239,785L237,781L235,778L245,774L248,772L250,767L253,762L255,758L257,753L259,749L259,744L261,735L263,724L266,710L267,702L270,683L272,668L272,664L271,660L273,657L275,653L276,649L279,650L284,651L288,650L287,647L285,644L282,641L278,637L277,640L274,644L273,647L272,651L272,644L274,630L275,616L276,604L278,585L278,579L278,574L279,571L278,568L280,564L282,561L285,559L286,561L286,564L289,566L291,569L294,571L296,574L300,577L303,580L305,586L306,590L307,596L311,607L313,610L316,613L317,611L314,608L313,604L312,598L311,593L310,587L308,582L307,578L306,574L303,569L300,565L294,560L292,559L290,557L288,554L286,553L284,551L281,550L278,548L275,545L272,537L275,535L280,535L278,531L280,529L282,528L284,524L284,521L282,516L285,516L285,510L282,506L280,502L277,501L275,500L274,498L275,496L277,493L279,491L281,489L280,484L278,483L275,483L275,486L275,488L270,484L265,481L262,481L257,481L256,477L252,474L247,474L240,470L237,468L236,466L233,465L233,463L230,454L228,452L224,446L221,443L215,437L211,433L210,426L212,426L213,423L216,420L218,414L222,412L220,409L218,408L217,406L212,404L210,404L206,403L205,400L209,398L209,394L208,392L209,388L203,389L202,391L200,391L197,389L195,387L190,389L185,387L186,382L184,379L182,378L187,374L189,372L189,370L186,369L186,366L190,365L188,364L185,362L182,364L179,363L175,361L173,365L171,364L166,366L162,365L160,362L157,361L160,359L161,361L164,360L168,361L170,360L171,357L168,354L168,351L166,353L163,354L159,355L159,357L156,355L151,358L150,357L145,359L142,362L143,365L143,368L141,365L141,362L142,360L142,357L141,354L138,353L137,349L138,347L143,344L140,341L139,345L136,348L137,350L133,347L132,345L128,344L125,345L122,345L117,342L116,339L115,337L116,334L114,331L115,335L114,339L109,338L106,337L101,334L99,336L96,336L93,335L89,331L87,327L84,324L83,327L84,330L80,330L78,329L74,329L71,330L71,327L70,331L70,335L68,336L64,336L62,335L58,335L56,333L59,332L58,329L57,325L56,322L53,319L51,317L48,314L45,314L40,313L38,313L34,312L33,309L36,309L40,308L43,307L46,306L49,306L53,305L57,304L61,306L63,302L64,300L62,297L60,294L57,294L51,291L48,292L47,296L44,298L45,294L44,292L44,289L41,289L44,286L43,283L45,281L45,286L47,285L51,286L54,287L59,286L61,285L64,285L67,285L63,284L60,284L61,281L57,281L52,282L52,280L55,276L53,277L48,277L46,279L41,281L36,279L34,282L29,282L30,279L29,276L28,274L29,270L30,268L29,265L30,263L32,259L36,258L39,257L42,256L44,253L47,252L53,251L55,249L59,247L61,248L64,250L67,250L68,248L70,246L75,246L79,246L80,244L83,244L85,243L85,247L86,250L89,249L90,251L93,252L92,250L93,246L95,245L97,245L101,244L103,246L106,246L107,248L111,248L111,243L113,242L111,238L115,235L115,232L119,233L122,235L124,235L127,233L129,231L133,231L135,229L137,232L140,230L143,229L146,232L148,233L150,233L151,235L148,236L151,238L155,239L155,243L159,245L160,248L163,250L164,254L167,256L171,259L171,262L172,264L173,262L177,262L179,260L182,256L186,254L188,250L190,250L195,249L199,248L199,252L202,251L206,257L209,256L212,255L211,252L213,251L215,251L218,253L219,256L222,262L221,256L218,252L221,249L222,246L225,246L227,246L231,246L230,248L231,253L236,255L244,254L250,252L254,253L256,253L259,252L262,250L256,246L252,242L250,240L250,235L247,231L249,228L250,225L252,222L251,215L248,213L247,207L247,204L248,202L247,195L249,192L246,194L244,191L243,188L240,182L236,179L234,178L232,175L232,170L230,164L228,163L230,160L231,158L231,153L230,150L227,149L224,148L224,145L226,143L228,144L231,144L232,146L236,147L240,147L242,148L246,149L253,149L256,148L257,145L260,145L264,144L268,146L271,145L273,150L273,154L271,156L269,157L268,160L272,167L276,172L278,174L277,177L281,179L284,176L287,176L290,175L293,175L298,178L301,179L308,180L313,180L317,181L320,180L322,180L327,181L329,181L333,183L337,185L342,187L346,186L351,185L358,182L363,178L366,176L370,174L373,172L378,172L381,171L377,170L373,170L366,169L364,167L363,164L363,161L365,157L367,153L369,150L369,146L371,144L375,143L377,141L380,141L382,139L388,136L394,133L397,130L402,129L407,128L412,127L415,126L418,126L422,124L424,123L428,123L434,121L441,118L444,115L450,110L453,108L458,104L460,98L462,95L465,93L468,96L473,98L472,94L470,93L468,91L465,89L464,87L465,80L469,79L467,77L465,75L466,71L467,63L469,61L467,59L466,51L465,45L468,42L468,39L468,36L467,30L471,27L474,23L477,21L481,20L484,19L487,18L490,17L499,15L503,14L505,13L509,13L511,12L513,11L519,9L523,10L533,6L534,9L535,14L537,16L539,20L536,23L538,29L539,34L545,34L546,37L549,40L552,43L554,43L556,45L559,45L560,41L562,40L566,38L569,37L572,36L575,37L578,42L579,44L581,44L583,47L581,49L582,53L584,57L584,62L589,65L594,64L597,62L600,63L599,65L604,65L606,65L609,69L611,76L611,82L613,85L615,81L623,80L626,82L631,80L635,79L642,85L642,88L648,88L646,91L644,95L644,98L642,101L647,101L647,104L649,107L645,110L643,113L644,116L647,118L649,119L654,118L657,120L664,121L666,120L670,118L673,117L680,115L681,110L682,105L685,104L686,101L690,99L694,100L693,103L693,105L690,110L690,113L688,118L692,120L694,124L692,129L693,131L693,134L692,136L697,136L699,135L702,135L706,139L710,141L711,144L714,144L716,146L719,146L725,150L723,151L724,154L726,152L729,153L732,156L733,160L733,163L735,165L739,163L743,163L746,160L750,161L753,161L755,159L760,161L760,163L762,165L767,165L769,166L770,170L773,169L776,169L779,168L782,165L789,164L791,167L796,169L799,168L803,169L809,173L810,176L810,181L812,182L813,185L816,189L818,191L819,193L821,194L820,196L822,199L825,198L828,200L830,197L830,195L830,193L832,194L835,193L837,195L840,196L842,196L843,201L844,204L847,201L851,203L854,203L857,202L859,203L862,201L865,200L865,198L870,197L874,198L874,201L875,203L876,205L879,207L883,208L886,210L888,210L893,210L894,208L900,212L903,211L906,211L908,212L912,214L915,216L918,217L924,217L922,219L918,226L917,228L915,234L913,236L910,238L907,239L906,243L901,249L898,251L897,253L895,256L895,263L893,266L892,269L890,275L890,277L891,281L888,284L886,293L883,297L881,299L881,302L880,304L879,307L879,312L881,315L883,318L880,322L880,325L878,327L879,330L876,336L878,341L875,345L876,349L879,352L881,355L875,361L876,363L875,365L870,365L871,367L869,370L866,372L863,371L859,372L857,373L854,372L852,371L853,366L849,365ZM207,420L205,418L202,419L200,416L200,414L203,412L205,414L205,417L209,420L210,424L208,422L207,420ZM7,271L7,268L9,267L11,268L9,270L7,271ZM138,378L141,379L142,382L145,383L147,384L146,386L140,386L138,386L134,383L134,380L136,377L138,378ZM256,494L258,492L260,494L264,494L267,496L270,499L268,501L265,499L262,497L257,495L254,496L250,491L254,489L256,492L254,493L256,494ZM272,530L271,527L269,525L265,522L262,519L262,515L261,510L263,511L268,516L272,516L272,519L273,522L276,526L275,530L276,532L273,535L272,530ZM1005,929L1005,933L1005,935L1006,938L1005,946L1003,947L1003,951L1001,953L997,954L998,957L999,955L1003,955L1001,959L998,960L997,963L996,965L995,969L993,971L993,973L992,978L990,978L988,976L984,975L985,972L983,971L980,968L977,966L975,966L972,966L970,964L967,962L965,960L964,958L962,956L963,952L967,950L969,948L972,947L967,945L965,944L962,944L963,941L958,943L956,940L958,939L957,935L962,934L963,928L964,926L962,923L960,923L955,925L951,925L951,922L950,920L953,918L954,914L956,912L960,911L958,909L958,905L956,904L953,903L948,899L948,896L947,891L951,890L956,889L954,885L952,884L952,881L949,880L947,882L948,877L951,876L951,873L954,873L955,867L954,864L957,862L958,859L961,858L963,859L964,855L969,854L971,852L973,852L978,851L982,848L983,844L986,842L989,841L991,843L998,848L1000,845L1001,841L1001,838L1001,835L999,832L1000,828L1000,825L1001,824L1002,821L1001,816L1006,814L1009,816L1009,819L1010,821L1010,824L1011,829L1011,836L1010,838L1008,848L1010,853L1013,857L1014,863L1014,866L1015,869L1015,872L1014,877L1014,881L1016,887L1016,891L1016,895L1016,901L1015,905L1014,906L1010,914L1008,916L1006,919L1006,922L1005,928Z';
  const VILLES = [
    ['Paris', 2.3522, 48.8566, 1], ['Rennes', -1.6778, 48.1173, 1], ['Toulouse', 1.4442, 43.6047, 1],
    ['Clermont-Ferrand', 3.0870, 45.7772, 1, 'b'], ['Strasbourg', 7.7521, 48.5734, 1], ['Lille', 3.0573, 50.6292, 1],
    ['Lyon', 4.8357, 45.7640, 0], ['Marseille', 5.3698, 43.2965, 0], ['Bordeaux', -0.5792, 44.8378, 0],
    ['Nantes', -1.5536, 47.2184, 0], ['Brest', -4.4861, 48.3904, 0], ['Dijon', 5.0415, 47.3220, 0],
    ['Nice', 7.2620, 43.7102, 0], ['Caen', -0.3707, 49.1829, 0], ['Limoges', 1.2611, 45.8336, 0], ['Montpellier', 3.8767, 43.6108, 0, 'b']
  ];
  const K = Math.cos(46.5 * Math.PI / 180), P = (lon, lat) => [(lon + 5.2) * K * 100, (51.15 - lat) * 100];
  const hav = (a, b) => {
    const r = Math.PI / 180, p1 = a[2] * r, p2 = b[2] * r, dp = p2 - p1, dl = (b[1] - a[1]) * r;
    return 2 * 6371 * Math.asin(Math.sqrt(Math.sin(dp / 2) ** 2 + Math.cos(p1) * Math.cos(p2) * Math.sin(dl / 2) ** 2));
  };
  const MAX_BRUTE = 10;

  root.innerHTML = `
<div class="tf-grille">
  <svg class="tf-carte" viewBox="-10 -10 1040 1000" role="img" aria-label="Carte de France avec des villes ; l'algorithme explore des chemins partant de Paris"></svg>
  <div class="tf-panneau">
    <p class="tf-titre" data-o="titre"></p>
    <p class="tf-etat" data-o="etat" aria-live="polite"></p>
    <p class="tf-compte" data-o="compte"></p>
    <p class="tf-meilleur" data-o="meilleur"></p>
  </div>
</div>
<div class="anim-ctrl">
  <label>Méthode <select data-k="m"><option value="hk">Held-Karp</option><option value="fb">Force brute</option></select></label>
  <button type="button" data-k="pas">Une étape</button>
  <button type="button" class="sec" data-k="go">Lancer</button>
  <button type="button" class="sec" data-k="reset">Recommencer</button>
  <label>Vitesse <input type="range" min="0" max="7" step="1" value="2" data-k="v"></label>
  <span class="anim-astuce">Cliquer une ville de la carte pour l'ajouter au voyage ou l'en retirer (Paris est le point de départ).</span>
</div>`;
  const $ = s => root.querySelector(s);
  const svg = $('svg'), selM = $('[data-k="m"]'), btnGo = $('[data-k="go"]'), inV = $('[data-k="v"]');
  const VIT = [1, 2, 4, 8, 20, 60, 250, 2000];
  let actives, C, n, D, gen, ev, total, fait, meilleur, timer = 0, credit = 0, dernierT = 0;

  const fmt = x => Math.round(x).toLocaleString('fr-FR');
  const fact = k => { let f = 1; for (let i = 2; i <= k; i++) f *= i; return f; };

  // ---------------------------------------------------------------- les deux explorations
  function* heldKarp() {
    const N = 1 << n, cout = new Float64Array(N * n).fill(Infinity), pred = new Int8Array(N * n).fill(-1);
    cout[1 * n + 0] = 0;
    const etats = [];
    for (let m = 1; m < N; m += 2) for (let i = 1; i < n; i++) if (m & (1 << i)) etats.push([m, i]);
    const bits = m => { let c = 0; while (m) { c += m & 1; m >>= 1; } return c; };
    etats.sort((a, b) => bits(a[0]) - bits(b[0]) || a[0] - b[0] || a[1] - b[1]);
    const chemin = (m, i) => { const c = []; while (i >= 0) { c.push(i); const j = pred[m * n + i]; m &= ~(1 << i); i = j; } return c.reverse(); };
    for (const [m, i] of etats) {
      const reste = m & ~(1 << i), cand = [];
      for (let j = 0; j < n; j++) if (reste & (1 << j) && (j > 0 || reste === 1) && cout[reste * n + j] < Infinity) {
        const v = cout[reste * n + j] + D[j][i]; cand.push([j, v]);
        if (v < cout[m * n + i]) { cout[m * n + i] = v; pred[m * n + i] = j; }
      }
      fait++;
      yield { t: 'etat', m, i, v: cout[m * n + i], chemin: chemin(m, i), cand };
    }
    const tout = N - 1; let best = null;
    for (let i = 1; i < n; i++) {
      const v = cout[tout * n + i] + D[i][0], c = chemin(tout, i).concat(0);
      if (!best || v < best.v) best = { v, chemin: c };
      fait++;
      yield { t: 'boucle', i, v, chemin: c, best };
    }
    yield { t: 'fin', best };
  }
  function* forceBrute() {
    const autres = [...Array(n - 1).keys()].map(k => k + 1), perm = autres.slice();
    let best = null;
    function* parcourir(k) {
      if (k === perm.length) {
        if (perm[0] > perm[perm.length - 1]) return;               // le même circuit à l'envers : déjà vu
        const c = [0, ...perm, 0]; let v = 0;
        for (let t = 1; t < c.length; t++) v += D[c[t - 1]][c[t]];
        fait++;
        if (!best || v < best.v) best = { v, chemin: c };
        yield { t: 'circuit', v, chemin: c, best };
        return;
      }
      for (let i = k; i < perm.length; i++) { [perm[k], perm[i]] = [perm[i], perm[k]]; yield* parcourir(k + 1); [perm[k], perm[i]] = [perm[i], perm[k]]; }
    }
    if (n <= 2) { const c = n === 2 ? [0, 1, 0] : [0, 0]; best = { v: n === 2 ? 2 * D[0][1] : 0, chemin: c }; fait++; yield { t: 'circuit', v: best.v, chemin: c, best }; }
    else yield* parcourir(0);
    yield { t: 'fin', best };
  }

  // ---------------------------------------------------------------- préparation
  function preparer() {
    clearInterval(timer); timer = 0; btnGo.textContent = 'Lancer';
    C = actives.map(k => VILLES[k]); n = C.length;
    D = C.map(a => C.map(b => hav(a, b)));
    fait = 0; ev = null; meilleur = null;
    const hk = selM.value === 'hk';
    total = hk ? (n - 1) * 2 ** (n - 2) + (n - 1) : Math.max(1, fact(n - 1) / 2);
    if (!hk && n > MAX_BRUTE) gen = null;
    else gen = hk ? heldKarp() : forceBrute();
    $('[data-o="titre"]').innerHTML = hk
      ? `<b>Held-Karp</b> : ${n} villes, ${fmt((n - 1) * 2 ** (n - 2))} états C(S, i) à calculer, puis ${n - 1} façons de boucler le circuit.`
      : `<b>Force brute</b> : ${n} villes, ${fmt(total)} circuits différents à mesurer, soit ${n - 1}!/2.`;
    $('[data-o="etat"]').innerHTML = gen ? 'Prêt.' : `Avec ${n} villes, il y aurait ${fmt(total)} circuits : trop pour les montrer un à un. Retirez des villes, ou choisissez Held-Karp.`;
    $('[data-o="meilleur"]').innerHTML = '';
    compter(); dessiner();
  }
  function compter() {
    const hk = selM.value === 'hk';
    const autre = hk ? `Par force brute, il faudrait mesurer ${fmt(Math.max(1, fact(n - 1) / 2))} circuits.` : `Held-Karp calculerait ${fmt((n - 1) * 2 ** (n - 2))} états.`;
    $('[data-o="compte"]').innerHTML = `${hk ? 'États calculés' : 'Circuits mesurés'} : <b>${fmt(fait)}</b> / ${fmt(total)}. ${autre}`;
  }

  // ---------------------------------------------------------------- un pas
  function avancer() {
    if (!gen) return false;
    const r = gen.next(); if (r.done) { gen = null; return false; }
    ev = r.value;
    if (ev.best) meilleur = ev.best;
    if (ev.t === 'fin') { meilleur = ev.best; gen = null; }
    return ev.t !== 'fin';
  }
  function decrire() {
    const nom = k => C[k][0], liste = c => c.map(nom).join(' → ');
    const el = $('[data-o="etat"]');
    if (!ev) return;
    if (ev.t === 'etat') {
      const S = []; for (let k = 1; k < n; k++) if (ev.m & (1 << k) && k !== ev.i) S.push(nom(k));
      el.innerHTML = (S.length ? `Partir de Paris, visiter ${S.join(', ')} et finir à <b>${nom(ev.i)}</b>&nbsp;: ` : `Aller directement de Paris à <b>${nom(ev.i)}</b>&nbsp;: `) +
        (ev.cand.length > 1 ? `on compare ${ev.cand.length} chemins déjà connus, prolongés jusqu'à ${nom(ev.i)} (${ev.cand.map(([j, v]) => `par ${nom(j)} : ${fmt(v)} km`).join(', ')}). ` : '') +
        `Meilleur : ${liste(ev.chemin)}, <b>${fmt(ev.v)} km</b>.`;
    } else if (ev.t === 'boucle') el.innerHTML = `Toutes les villes visitées, arrivée à ${nom(ev.i)}, retour à Paris : <b>${fmt(ev.v)} km</b>.`;
    else if (ev.t === 'circuit') el.innerHTML = `Circuit ${liste(ev.chemin)} : <b>${fmt(ev.v)} km</b>.`;
    else if (ev.t === 'fin') el.innerHTML = `Terminé : le circuit vert est le plus court.`;
    if (meilleur) $('[data-o="meilleur"]').innerHTML = (ev.t === 'fin' ? 'Plus court circuit : ' : 'Meilleur circuit trouvé jusqu\'ici : ') + `<b>${fmt(meilleur.v)} km</b>, ${liste(meilleur.chemin)}.`;
    compter();
  }

  // ---------------------------------------------------------------- dessin
  function dessiner() {
    const pts = VILLES.map(v => P(v[1], v[2]));
    let h = `<path d="${FRANCE}" class="tf-terre"/>`;
    const ligne = (c, cls) => { if (!c || c.length < 2) return ''; return `<polyline points="${c.map(k => pts[actives[k]].join(',')).join(' ')}" class="${cls}"/>`; };
    if (meilleur && (selM.value === 'fb' || (ev && (ev.t === 'boucle' || ev.t === 'fin')))) h += ligne(meilleur.chemin, ev && ev.t === 'fin' ? 'tf-final' : 'tf-best');
    if (ev && ev.t === 'etat') {
      for (const [j] of ev.cand) h += `<line x1="${pts[actives[j]][0]}" y1="${pts[actives[j]][1]}" x2="${pts[actives[ev.i]][0]}" y2="${pts[actives[ev.i]][1]}" class="tf-cand"/>`;
      h += ligne(ev.chemin, 'tf-courant');
    } else if (ev && (ev.t === 'circuit' || ev.t === 'boucle')) h += ligne(ev.chemin, 'tf-courant');
    VILLES.forEach((v, k) => {
      const [x, y] = pts[k], a = actives.includes(k), paris = k === 0, fin = ev && ev.t === 'etat' && actives[ev.i] === k;
      h += `<g class="tf-ville${a ? ' tf-active' : ''}${paris ? ' tf-paris' : ''}${fin ? ' tf-fin' : ''}" data-k="${k}"><circle cx="${x}" cy="${y}" r="${paris ? 13 : 10}"/>` +
           (v[4] === 'b' ? `<text x="${x}" y="${y + 36}" text-anchor="middle">${v[0]}</text></g>`
                         : `<text x="${x + (v[1] > 6 ? -16 : 16)}" y="${y + 6}" text-anchor="${v[1] > 6 ? 'end' : 'start'}">${v[0]}</text></g>`);
    });
    svg.innerHTML = h;
  }

  // ---------------------------------------------------------------- pilotage
  function boucle(t) {
    if (!timer) return;
    const dt = dernierT ? Math.min(0.1, (t - dernierT) / 1000) : 1 / 60; dernierT = t;
    credit += VIT[+inV.value] * dt;
    let k = Math.floor(credit); credit -= k; let continuer = true;
    while (k-- > 0 && (continuer = avancer()));
    decrire(); dessiner();
    if (!continuer || !gen) { timer = 0; btnGo.textContent = 'Lancer'; return; }
    requestAnimationFrame(boucle);
  }
  btnGo.addEventListener('click', () => {
    if (timer) { timer = 0; btnGo.textContent = 'Reprendre'; return; }
    if (!gen) preparer();
    if (!gen) return;
    timer = 1; dernierT = 0; credit = 1; btnGo.textContent = 'Pause'; requestAnimationFrame(boucle);
  });
  $('[data-k="pas"]').addEventListener('click', () => { timer = 0; btnGo.textContent = 'Lancer'; if (!gen) preparer(); avancer(); decrire(); dessiner(); });
  $('[data-k="reset"]').addEventListener('click', preparer);
  selM.addEventListener('change', preparer);
  svg.addEventListener('click', e => {
    const g = e.target.closest('.tf-ville'); if (!g) return;
    const k = +g.dataset.k; if (k === 0) return;
    actives = actives.includes(k) ? actives.filter(x => x !== k) : actives.concat(k).sort((a, b) => a - b);
    preparer();
  });
  actives = VILLES.map((v, k) => v[3] ? k : -1).filter(k => k >= 0);
  preparer();
})();
