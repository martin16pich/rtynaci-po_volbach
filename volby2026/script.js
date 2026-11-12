const ASSET_VERSION = '20260804-0515';

// Poutač "Vize Rtyně 2035" se na hlavní stránce automaticky zveřejní
// od 18. 9. 2026 00:00 podle času v ČR (Europe/Prague).
// Pro kontrolu před zveřejněním lze použít ?preview=vize2035.
(function setupVisionTeaser(){
  const teaser = document.getElementById('visionTeaser');
  if(!teaser) return;

  const preview = new URLSearchParams(window.location.search).get('preview') === 'vize2035';

  const now = new Date();

  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Europe/Prague',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23'
  }).formatToParts(now);

  const part = type =>
    Number(parts.find(item => item.type === type)?.value || 0);

  const currentKey =
    part('year') * 100000000 +
    part('month') * 1000000 +
    part('day') * 10000 +
    part('hour') * 100 +
    part('minute');

  const releaseKey = 202609181800;

  if(preview || currentKey >= releaseKey){
    teaser.hidden = false;
  }
})();

const candidates = [
  {
    "n": 1,
    "name": "Karel Šafář",
    "info": "muž, 40 let • Premium bankéř",
    "meta": "Rtyně v Podkrkonoší • Bez PP • nezávislý kandidát",
    "img": "../assets/candidates/karel-safar.jpg",
    "text": "Žiju ve Rtyni celý svůj život a budou tu vyrůstat i mé děti. Proto jsem se rozhodl podílet se na komunální politice. Chci bezpečné, čisté a hezké malé město s moderní komunikací a vizí rozvoje. Mou prací je efektivně spravovat investice mých klientů a pomáhat jim rozmnožovat jejich majetek. Jsem zvyklý nést odpovědnost za peníze druhých a přijímám ji vždy s pokorou. Stejně chci přistupovat i ke správě města – efektivní, chytré investice a transparentnost. Udržitelný růst a rozvoj Rtyně je mým cílem i v roli zastupitele a kandidáta na starostu města."
  },
  {
    "n": 2,
    "name": "Ing. Martin Pich",
    "info": "muž, 33 let • Stavební inženýr",
    "meta": "Rtyně v Podkrkonoší • Bez PP • nezávislý kandidát",
    "img": "../assets/candidates/martin-pich.jpg",
    "text": "Jsem stavební inženýr a věnuji se projektování budov a místům ve veřejném prostoru a rád bych nabídl své znalosti a zkušenosti všem Rtyňákům. Jsem totiž také táta dvou malých dětí a chci, aby vyrůstaly v pěkném, fungujícím a bezpečném městě."
  },
  {
    "n": 3,
    "name": "prof. RNDr. Štěpán Hubálovský, Ph.D.",
    "info": "muž, 55 let • Akademický pracovník",
    "meta": "Rtyně v Podkrkonoší • Bez PP • nezávislý kandidát",
    "img": "../assets/candidates/jan-hartman.jpg",
    "text": "Do komunálních voleb ve Rtyni kandiduji již popáté. Jako vysokoškolský profesor a dlouholetý člen rady města mám zkušenosti s vedením lidí i veřejnou správou. Stále více však cítím, že Rtyně potřebuje nejen dobře spravovat, ale také aktivně a promyšleně rozvíjet. Proto jsem se rozhodl spojit s Rtyňáky – lidmi s energií, nápady a chutí posunout naše město dál."
  },
  {
    "n": 4,
    "name": "Bc. Pavel Semerák",
    "info": "muž, 49 let • Technik",
    "meta": "Rtyně v Podkrkonoší • Bez PP • nezávislý kandidát",
    "img": "../assets/candidates/pavel-semerak.jpg",
    "text": "Rád cestuji po moři i po souši, ale moc rád se i vracím domů, do rodné Rtyně. Venku si často uvědomím, jak tady máme výjimečně krásně, bezpečno, šikovné lidi a jak dobře se tu vlastně žije. Rád bych využil svých znalostí a zkušeností, aby tomu tak bylo i nadále."
  },
  {
    "n": 5,
    "name": "MUDr. Jan Hartman",
    "info": "muž, 65 let • Praktický lékař",
    "meta": "Rtyně v Podkrkonoší • Bez PP • nezávislý kandidát",
    "img": "../assets/candidates/stepan-hubalovsky.jpg",
    "text": "Jako váš dlouholetý praktický lékař se denně starám o zdraví a bezpečí obyvatel Rtyně v Podkrkonoší. Právě hluboká znalost místních lidí a našich společných potřeb mě motivuje k tomu, abych své zkušenosti a energii opět nabídl v nadcházejících komunálních volbách. V zastupitelstvu chci nadále prosazovat rozumná řešení, která zlepší dostupnost zdravotní i sociální péče a podpoří celkovou kvalitu života v našem městě."
  },
  {
    "n": 6,
    "name": "Ing. Vlastimil Duch",
    "info": "muž, 48 let • Ředitel firmy",
    "meta": "Rtyně v Podkrkonoší • Bez PP • nezávislý kandidát",
    "img": "../assets/candidates/vlasta-duch.jpg",
    "text": "Práce s lidmi mě provází celý profesní život. Vedení rodinné firmy mě naučilo naslouchat, hledat řešení a dívat se dopředu. Rád cestuji a sleduji, jak fungují města v okolních státech. Inspirují mě nápady a projekty, které zlepšují život místních obyvatel a zároveň jsou přínosem pro návštěvníky. Věřím, že i Rtyně v Podkrkonoší má velký potenciál. Chtěl bych přispět k tomu, aby díky promyšlenému rozvoji nabízela kvalitní sportovní, kulturní i sociální zázemí a byla místem, kde se dobře žije všem generacím."
  },
  {
    "n": 7,
    "name": "Václav Vlach",
    "info": "muž, 49 let • Profesionální hasič",
    "meta": "Rtyně v Podkrkonoší • Bez PP • nezávislý kandidát",
    "img": "../assets/candidates/vasek-vlach.jpg",
    "text": "Rád pomáhám lidem v různých životních situacích – ať už jde o záchranu života, podporu osob se zdravotním omezením, nebo prostě o snahu zpříjemnit někomu den. Věřím, že i zdánlivá drobnost může mít velký význam a pozitivně ovlivnit život druhého člověka. Pomoc druhým pro mě není jen povinností, ale přirozenou součástí života a zdrojem osobního naplnění."
  },
  {
    "n": 8,
    "name": "Mgr. Šárka Stašová",
    "info": "žena, 43 let • Učitelka",
    "meta": "Rtyně v Podkrkonoší • Bez PP • nezávislý kandidát",
    "img": "../assets/candidates/sarka-stasova.jpg",
    "text": "Pracuji jako učitelka angličtiny a francouzštiny na základní škole. Ve své práci i v osobním životě věřím, že každý krok vpřed začíná ochotou naslouchat a hledat řešení. Ráda cestuji, poznávám nová místa a inspiruji se tím, co dobře funguje jinde. Náš kraj považuji za krásné místo s velkým potenciálem, který si zaslouží rozvíjet. Záleží mi na tom, aby se zde dobře žilo nejen dnes nám, ale i v budoucnu našim dětem. Věřím, že společným úsilím můžeme naše město rozvíjet s respektem k jeho tradicím i budoucnosti."
  },
  {
    "n": 9,
    "name": "Ing. Martin Najman",
    "info": "muž, 44 let • Ekonom",
    "meta": "Rtyně v Podkrkonoší • Bez PP • nezávislý kandidát",
    "img": "../assets/candidates/martin-najman.jpg",
    "text": "Jako rodilému Rtyňákovi a otci tří dětí mi záleží na tom, jakým směrem se naše město vydá. Právě tady vyrůstají moje děti a právě tady vidím naši budoucnost. Přestože jsem měl možnost žít a pracovat v zahraničí a řídit velké společnosti, vždy mě to táhlo zpět domů – do Rtyně. Věřím, že své zkušenosti z řízení, finanční přehled i získané kontakty mohu plně využít k tomu, aby se Rtyně dál úspěšně rozvíjela."
  },
  {
    "n": 10,
    "name": "Ing. Petr Kadaník",
    "info": "muž, 45 let • Podnikatel v telekomunikacích",
    "meta": "Rtyně v Podkrkonoší • Bez PP • nezávislý kandidát",
    "img": "../assets/candidates/petr-kadanik.jpg",
    "text": "Jsem táta tří dětí, majitel společnosti Rtyně.net a v telekomunikacích se pohybuji už 25 let. Díky práci ve více než 60 městech a obcích v našem regionu mám možnost zblízka sledovat, co kde funguje, co obcím pomáhá v rozvoji a kde se naopak zbytečně ztrácí čas i energie. Do komunální politiky chci přinést praktický pohled, zkušenosti z podnikání, znalost moderních technologií a chuť věci skutečně dotahovat. Rtyně je město, kde žiji se svou rodinou, a záleží mi na tom, aby bylo moderní, dobře spravované a aby na něj mohly být hrdé i naše děti."
  },
  {
    "n": 11,
    "name": "Tomáš Kult",
    "info": "muž, 51 let • Podnikatel v dopravě",
    "meta": "Rtyně v Podkrkonoší • Bez PP • nezávislý kandidát",
    "img": "../assets/candidates/tomas-kult.jpg",
    "text": "Rtyně v Podkrkonoší je pro mě domov, se kterým mám spojený celý svůj život. Podnikám v autodopravě a ve volném čase rád vyrážím na motorku nebo si plním svůj sen z výšky jako pilot letadla. Mám rád pohodové lidi, dobré jídlo a věřím, že právě přátelská atmosféra dělá z města skutečný domov. Proto bych chtěl přispět k tomu, aby byla Rtyně ještě přívětivějším místem pro život – s více zelení, upravenými veřejnými prostory a prostředím, kde se budou dobře cítit děti, rodiny i senioři. Chci podporovat rozumný rozvoj našeho města a zachovat jeho jedinečný charakter, který máme všichni rádi."
  },
  {
    "n": 12,
    "name": "Mgr. Jitka Bočarovová",
    "info": "žena, 40 let • Finanční expertka",
    "meta": "Rtyně v Podkrkonoší • Bez PP • nezávislý kandidát",
    "img": "../assets/candidates/jitka-bocarovova.jpg",
    "text": "Jak můj osobní, tak i profesní život je propojen s prací s lidmi, dobrovolnictvím a vytvářením aktivit, které mají přesah. Rtyně je mým domovem a záleží mi na tom, aby se rozvíjela jako obec otevřená novým nápadům, spolupráci a aktivním lidem. Ráda k tomu přispěju svými zkušenostmi a energií."
  },
  {
    "n": 13,
    "name": "doc. Mgr. et Mgr. Marie Hubálovská, Ph.D.",
    "info": "žena, 54 let • Akademická pracovnice",
    "meta": "Rtyně v Podkrkonoší • Bez PP • nezávislý kandidát",
    "img": "../assets/candidates/marie-hubalovska.jpg",
    "text": "Ve Rtyni žiji od narození a dobře znám její přednosti i možnosti dalšího rozvoje. Řadu let jsem působila jako učitelka na základní škole, dnes působím na vysoké škole, kde vzdělávám budoucí učitele a věnuji se otázkám školství a vzdělávání. Své zkušenosti bych chtěla využít především v této oblasti. Přeji si, aby se Rtyně promyšleně rozvíjela a zůstala atraktivním místem, kde se dobře žije všem generacím."
  },
  {
    "n": 14,
    "name": "Ing. Martin Adámek",
    "info": "muž, 62 let • Ekonom",
    "meta": "Rtyně v Podkrkonoší • Bez PP • nezávislý kandidát",
    "img": "../assets/candidates/martin-adamek.jpg",
    "text": "Jsem inženýr ekonomie a obchodník se zemědělskými produkty. Ve své práci i osobním životě se opírám o praktické zkušenosti, odpovědnost a zdravý rozum. Záleží mi na rozvoji našeho regionu, podpoře místního podnikání a péči o krajinu, ve které žijeme. Volný čas věnuji přírodě a sportu, které mě učí vytrvalosti a férovosti – hodnotám, které chci přenášet i do veřejné služby."
  },
  {
    "n": 15,
    "name": "MDDr. Jan Petřík",
    "info": "muž, 38 let • Lékař",
    "meta": "Rtyně v Podkrkonoší • Bez PP • nezávislý kandidát",
    "img": "../assets/candidates/jan-petrik.jpg",
    "text": "Ve Rtyni jsem vyrostl, za místní kluby aktivně sportoval, naučil se hrát na klavír, provázel v muzeu a v dospělosti se vrátil v roli trenéra dětí u fotbalového Baníku. Uspořádal jsem také několik přednáškových večerů pro veřejnost, abychom se ani dnes nesetkávali pouze ve virtuálním světě sociálních sítí. Jsem přesvědčený, že Rtyně musí udržet krok s dobou a být místem, kde budou chtít žít i další generace. K tomu je potřeba nezavírat oči před problémy, aktivně přicházet s nápady a dotahovat realizace jednotlivých projektů. Za tu úplně nejdůležitější věc považuji problematiku kvality pitné vody. Jsem rád, že jsem mohl přispět k vytvoření uskupení Rtyňáci, jehož členové mají zkušenosti, chuť i energii posouvat naše město vpřed a jsou otevřeni naslouchat svým spoluobčanům."
  }
];

const VIDEO_ASSET_VERSION = '20260920-v2';

const videos = [
  {
    category: 'kandidati',
    title: 'Podpora Karla Šafáře',
    file: '../assets/video/kandidati/kandidat00.MP4',
    poster: '../assets/video/thumbs/kandidat00.jpg'
  },
  
  {
    category: 'kandidati',
    title: 'Karel Šafář',
    file: '../assets/video/kandidati/kandidat01.MP4',
    poster: '../assets/video/thumbs/kandidat01.jpg'
  },
  {
    category: 'kandidati',
    title: 'Martin Pich',
    file: '../assets/video/kandidati/kandidat02.MP4',
    poster: '../assets/video/thumbs/kandidat02.jpg'
  },
  {
    category: 'kandidati',
    title: 'Štěpán Hubálovský',
    file: '../assets/video/kandidati/kandidat03.MP4',
    poster: '../assets/video/thumbs/kandidat03.jpg'
  },
  {
    category: 'kandidati',
    title: 'Pavel Semerák',
    file: '../assets/video/kandidati/kandidat04.MP4',
    poster: '../assets/video/thumbs/kandidat04.jpg'
  },
  {
    category: 'kandidati',
    title: 'Jan Hartman',
    file: '../assets/video/kandidati/kandidat05.MP4',
    poster: '../assets/video/thumbs/kandidat05.jpg'
  },
  {
    category: 'kandidati',
    title: 'Vlastimil Duch',
    file: '../assets/video/kandidati/kandidat06.MP4',
    poster: '../assets/video/thumbs/kandidat06.jpg'
  },
  {
    category: 'kandidati',
    title: 'Václav Vlach',
    file: '../assets/video/kandidati/kandidat07.MP4',
    poster: '../assets/video/thumbs/kandidat07.jpg'
  },

  {
    category: 'pripravy',
    title: 'Porada',
    file: '../assets/video/pripravy/priprava01.MP4',
    poster: '../assets/video/thumbs/priprava01.jpg'
  },
  {
    category: 'pripravy',
    title: 'Bannery',
    file: '../assets/video/pripravy/priprava02.MP4',
    poster: '../assets/video/thumbs/priprava02.jpg'
  },
  {
    category: 'pripravy',
    title: 'Informační cedule',
    file: '../assets/video/pripravy/priprava03.MP4',
    poster: '../assets/video/thumbs/priprava03.jpg'
  },
  
    {
    category: 'pripravy',
    title: 'Rtyňáci u vily',
    file: '../assets/video/pripravy/priprava04.MP4',
    poster: '../assets/video/thumbs/priprava04.jpg'
  },
  
   {
    category: 'pripravy',
    title: 'Pozvánka k vile',
    file: '../assets/video/pripravy/priprava05.MP4',
    poster: '../assets/video/thumbs/priprava05.jpg'
  },
  
    {
    category: 'pripravy',
    title: 'Přípravy u vily',
    file: '../assets/video/pripravy/priprava06.MP4',
    poster: '../assets/video/thumbs/priprava06.jpg'
  },
  
  {
    category: 'pripravy',
    title: 'Akce se Rtyňáky',
    file: '../assets/video/pripravy/priprava07.MP4',
    poster: '../assets/video/thumbs/priprava07.jpg'
  },
  {
    category: 'vize',
    title: 'Videonávod',
    file: '../assets/video/vize/vize01.MP4',
    poster: '../assets/video/thumbs/vize01.jpg'
    
  },
    
    {
    category: 'vize',
    title: 'Centrum Rtyně',
    file: '../assets/video/vize/vize02.MP4',
    poster: '../assets/video/thumbs/vize02.jpg'
  },
  
    {
    category: 'vize',
    title: 'Rozvoj centra',
    file: '../assets/video/vize/vize03.MP4',
    poster: '../assets/video/thumbs/vize03.jpg'
  },
  
    {
    category: 'vize',
    title: 'Kultura a sport v centru',
    file: '../assets/video/vize/vize04.MP4',
    poster: '../assets/video/thumbs/vize04.jpg'
  },
  
   {
    category: 'vize',
    title: 'Vize pro Rtyni',
    file: '../assets/video/vize/vize05.MP4',
    poster: '../assets/video/thumbs/vize05.jpg'
  },
  
   {
    category: 'vize',
    title: 'Přemýšlíme o vizi centra',
    file: '../assets/video/vize/vize06.MP4',
    poster: '../assets/video/thumbs/vize06.jpg'
  }

];

const mapPlaces = {
  centrum: {title:'Centrum, náměstí a Hornická ulice', text:'Širší centrum města chceme řešit jako jeden celek: bezpečnější pohyb lidí, přehledné parkování, více zeleně a upravenější veřejný prostor.', href:'#program-07'},
  deti: {title:'Škola, školka a zázemí pro rodiny', text:'Lepší návaznost školy, školky, dětské skupiny a služeb pro rodiče, včetně bezpečného pohybu dětí.', href:'#program-03'},
  kultura: {title:'Kulturní a společenské zázemí', text:'Rtyni chybí důstojný městský sál a prostory pro spolky, přednášky, plesy, koncerty i běžná setkávání.', href:'#program-10'},
  'bezpecne-trasy': {title:'Bezpečně pěšky i na kole', text:'Chceme řešit chodníky, přechody, riziková místa a lepší propojení Rtyně s okolními obcemi.', href:'#program-05'},
  voda: {title:'Pitná voda a dlouhodobá bezpečnost', text:'Kvalitní voda je základ. Budeme řešit nové zdroje, sledování kvality a dlouhodobé posílení zásobování.', href:'#program-06'},
  sobestacnost: {title:'Úspornější provoz města', text:'Městské budovy, energie, osvětlení a voda musí fungovat úsporněji a s jasnou návratností.', href:'#program-11'},
  sport: {title:'Sport, pohyb a setkávání', text:'Dostupnější sportoviště pro děti, rodiny i veřejnost, aby se Rtyňáci mohli přirozeně potkávat.', href:'#program-02'},
  spoluprace: {title:'Spolupráce a komunikace', text:'Více informací pro občany, lepší zapojení veřejnosti a spolupráce s okolními obcemi na společných tématech.', href:'#program-09'}
};

const grid = document.getElementById('candidateGrid');
const initials = (name) => name.replace(/(MUDr\.|Bc\.|prof\.|RNDr\.|Ph\.D\.|Ing\.|Mgr\.|doc\.|et|MDDr\.)/g,'').trim().split(/\s+/).slice(0,2).map(x=>x[0]).join('');
grid.innerHTML = candidates.map(c => `
  <article class="candidate ${c.n > 6 ? 'is-extra-mobile' : ''}">
    <div class="num">${c.n}</div>
    <div class="avatar">${c.img ? `<img src="${c.img}?v=${ASSET_VERSION}" alt="${c.name}">` : initials(c.name)}</div>
    <div class="candidate-content">
      <h3>${c.name}</h3>
      <p class="candidate-info">${c.info}</p>
      ${c.meta ? `<p class="candidate-meta">${c.meta}</p>` : ''}
      ${c.text ? `<p class="candidate-text">${c.text}</p>` : ''}
    </div>
  </article>
`).join('');

const menuToggle = document.querySelector('.menu-toggle');
if (menuToggle) menuToggle.addEventListener('click', () => document.querySelector('nav').classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>document.querySelector('nav').classList.remove('open')));

const moreBtn = document.getElementById('candidateMore');
if (moreBtn) {
  moreBtn.addEventListener('click', () => {
    const hidden = document.querySelectorAll('.candidate.is-extra-mobile');
    const expanded = moreBtn.dataset.expanded === 'true';
    hidden.forEach(card => card.classList.toggle('show', !expanded));
    moreBtn.dataset.expanded = String(!expanded);
    moreBtn.textContent = expanded ? 'Zobrazit všech 15 kandidátů' : 'Zkrátit kandidátku';
  });
}


document.querySelectorAll('.candidate-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.candidate');
    const expanded = card.classList.toggle('is-expanded');
    btn.textContent = expanded ? 'Zkrátit text' : 'Celý text';
  });
});

function setupPriorityCarousel(){
  const track = document.getElementById('priorityTrack');
  const slides = [...document.querySelectorAll('[data-priority-card]')];
  const prev = document.getElementById('priorityPrev');
  const next = document.getElementById('priorityNext');
  const dots = document.getElementById('priorityDots');
  const counter = document.getElementById('priorityCounter');
  if(!track || !slides.length) return;
  let index = 0;
let visible = 3;

const refreshVisible = () => {
  const w = window.innerWidth || document.documentElement.clientWidth || 0;

  visible =
    w <= 700 ? 1 :
    w <= 980 ? 2 :
    w <= 1180 ? 3 :
    w <= 1500 ? 4 : 5;
};
  const maxIndex = () => Math.max(0, slides.length - visible);
  const renderDots = () => {
    if(!dots) return;
    dots.innerHTML = Array.from({length:maxIndex()+1}).map((_,i)=>`<button type="button" aria-label="Priorita ${i+1}" class="${i===index?'active':''}" data-go="${i}"></button>`).join('');
    dots.querySelectorAll('button').forEach(btn=>btn.addEventListener('click',()=>{index=Number(btn.dataset.go); update();}));
  };
  const update = () => {
    refreshVisible();
    if(index > maxIndex()) index = maxIndex();
    const slide = slides[0];
    const gap = parseFloat(getComputedStyle(track).gap || 0);
    const width = slide.getBoundingClientRect().width + gap;
    track.style.transform = `translateX(${-index * width}px)`;
    if(counter) counter.textContent = `${Math.min(index + 1, slides.length)} / ${slides.length}`;
    dots?.querySelectorAll('button').forEach((b,i)=>b.classList.toggle('active', i===index));
  };
  prev?.addEventListener('click',()=>{ index = index <= 0 ? maxIndex() : index-1; update(); });
  next?.addEventListener('click',()=>{ index = index >= maxIndex() ? 0 : index+1; update(); });
  let startX = null;
  track.addEventListener('touchstart',e=>{startX=e.touches[0].clientX;},{passive:true});
  track.addEventListener('touchend',e=>{
    if(startX === null) return;
    const dx = e.changedTouches[0].clientX - startX;
    if(Math.abs(dx) > 45){ index = dx < 0 ? Math.min(maxIndex(), index+1) : Math.max(0, index-1); update(); }
    startX = null;
  },{passive:true});
  window.addEventListener('resize',()=>{renderDots(); update();});
  refreshVisible(); renderDots(); update();
}

function setupInteractiveMap(){
  const detail = document.getElementById('mapDetail');
  const controls = [...document.querySelectorAll('[data-place]')];
  if(!detail || !controls.length) return;
  const setPlace = (key) => {
    const place = mapPlaces[key];
    if(!place) return;
    controls.forEach(el => el.classList.toggle('active', el.dataset.place === key));
    detail.innerHTML = `<p class="eyebrow">Vybrané místo</p><h3>${place.title}</h3><p>${place.text}</p><a class="btn primary small" href="${place.href}">Zobrazit v programu</a>`;
  };
  controls.forEach(el => el.addEventListener('click', () => setPlace(el.dataset.place)));
}

function setupVideoLibrary(){
  const track = document.getElementById('videoTrack');
  const prev = document.getElementById('videoPrev');
  const next = document.getElementById('videoNext');

  const tabs = [
    ...document.querySelectorAll('[data-video-category]')
  ];

  const modal = document.getElementById('videoModal');
  const modalPlayer = document.getElementById('videoModalPlayer');
  const modalTitle = document.getElementById('videoModalTitle');

  if(!track || !tabs.length) return;

  let category = 'kandidati';
  let index = 0;
  let visible = 3;
  let activeItems = [];
  let startX = null;

  const withVersion = (url) =>
    `${url}?v=${VIDEO_ASSET_VERSION}`;

const refreshVisible = () => {
  const w =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    0;

  visible =
  w <= 700
    ? 1
    : w <= 1100
    ? 2
    : 4;
};

  const maxIndex = () =>
    Math.max(0, activeItems.length - visible);

  const updateArrows = () => {
    const disabled = maxIndex() === 0;

    if(prev) prev.disabled = disabled;
    if(next) next.disabled = disabled;
  };

  const updatePosition = () => {
    refreshVisible();

    if(index > maxIndex()){
      index = maxIndex();
    }

    const card = track.querySelector('.video-card');

    if(card){
      const gap =
        parseFloat(getComputedStyle(track).gap || 0);

      const width =
        card.getBoundingClientRect().width + gap;

      track.style.transform =
        `translateX(${-index * width}px)`;
    }else{
      track.style.transform = 'translateX(0)';
    }

    track.classList.toggle(
      'is-short',
      activeItems.length <= visible
    );

    updateArrows();
  };

  const openVideo = (item) => {
    if(!modal || !modalPlayer) return;

    if(modalTitle){
      modalTitle.textContent = item.title;
    }

    modalPlayer.pause();

    modalPlayer.poster =
      withVersion(item.poster);

    modalPlayer.src =
      withVersion(item.file);

    modal.hidden = false;

    document.body.classList.add(
      'video-modal-open'
    );

    modal
      .querySelector('.video-modal-close')
      ?.focus();

    modalPlayer.play().catch(() => {});
  };

  const closeVideo = () => {
    if(
      !modal ||
      !modalPlayer ||
      modal.hidden
    ){
      return;
    }

    modalPlayer.pause();
    modalPlayer.removeAttribute('src');
    modalPlayer.load();

    modal.hidden = true;

    document.body.classList.remove(
      'video-modal-open'
    );
  };

  const bindCards = () => {
    track
      .querySelectorAll('[data-video-item]')
      .forEach(btn => {

        btn.addEventListener('click', () => {

          const item =
            activeItems[
              Number(btn.dataset.videoItem)
            ];

          if(item){
            openVideo(item);
          }

        });

      });
  };

  const render = () => {

    activeItems =
      videos.filter(
        item => item.category === category
      );

    index = 0;

    track.style.transform =
      'translateX(0)';

    track.innerHTML =
      activeItems
        .map((item, i) => `

          <article class="video-card">

            <button
              class="video-card-button"
              type="button"
              data-video-item="${i}"
              aria-label="Přehrát video: ${item.title}">

              <div class="video-poster">

                <img
                 src="${withVersion(item.poster)}"
                alt=""
                 decoding="async">

                <span
                  class="video-play"
                  aria-hidden="true">
                </span>

                <h3 class="video-card-title">
                  ${item.title}
                </h3>

              </div>

            </button>

          </article>

        `)
        .join('');

    bindCards();

    window.requestAnimationFrame(
      updatePosition
    );
  };

  tabs.forEach(tab => {

    tab.addEventListener('click', () => {

      category =
        tab.dataset.videoCategory;

      tabs.forEach(item => {

        const active =
          item === tab;

        item.classList.toggle(
          'active',
          active
        );

        item.setAttribute(
          'aria-selected',
          String(active)
        );

      });

      render();
    });

  });

  prev?.addEventListener(
    'click',
    () => {

      const max = maxIndex();

      if(max === 0) return;

      index =
        index <= 0
          ? max
          : index - 1;

      updatePosition();
    }
  );

  next?.addEventListener(
    'click',
    () => {

      const max = maxIndex();

      if(max === 0) return;

      index =
        index >= max
          ? 0
          : index + 1;

      updatePosition();
    }
  );

  track.addEventListener(
    'touchstart',
    event => {

      startX =
        event.touches[0].clientX;

    },
    {passive:true}
  );

  track.addEventListener(
    'touchend',
    event => {

      if(
        startX === null ||
        maxIndex() === 0
      ){
        return;
      }

      const dx =
        event.changedTouches[0].clientX -
        startX;

      if(Math.abs(dx) > 45){

        index =
          dx < 0
            ? Math.min(
                maxIndex(),
                index + 1
              )
            : Math.max(
                0,
                index - 1
              );

        updatePosition();
      }

      startX = null;
    },
    {passive:true}
  );

  modal
    ?.querySelectorAll(
      '[data-video-close]'
    )
    .forEach(el =>
      el.addEventListener(
        'click',
        closeVideo
      )
    );

  document.addEventListener(
    'keydown',
    event => {

      if(event.key === 'Escape'){
        closeVideo();
      }

    }
  );

  window.addEventListener(
    'resize',
    updatePosition
  );

  render();
}

function setupProgramAccordions(){
  document.querySelectorAll('.program-card').forEach((card, i) => {
    const body = card.querySelector('.program-body');
    if(!body || card.querySelector('.program-card-toggle')) return;
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'program-card-toggle';
    btn.textContent = 'Zobrazit detail';
    const title = body.querySelector('h3');
    title?.insertAdjacentElement('afterend', btn);
    if(i === 0) { card.classList.add('open'); btn.textContent = 'Skrýt detail'; }
    btn.addEventListener('click', () => {
      const open = card.classList.toggle('open');
      btn.textContent = open ? 'Skrýt detail' : 'Zobrazit detail';
    });
  });
}

setupPriorityCarousel();
setupInteractiveMap();
setupVideoLibrary();
setupProgramAccordions();


// V8: stabilnější kompaktní sticky menu bez přeskakování + přesné odscrollování na kotvy
(function setupCompactHeaderAndAnchors(){
  const header = document.querySelector('.site-header');
  if(!header) return;

  // Hysterze: menu se zmenší až ve chvíli, kdy je logo opravdu mimo hlavní pohled,
  // a zpět se vrátí až téměř nahoře. Tím nevzniká blikání kolem jedné hranice.
  const enterCompactAt = 170;
  const leaveCompactAt = 28;
  let compact = header.classList.contains('is-compact');
  let ticking = false;

  const applyCompactState = () => {
    const y = window.scrollY || window.pageYOffset || 0;

    if (!compact && y > enterCompactAt) {
      compact = true;
      header.classList.add('is-compact');
    } else if (compact && y < leaveCompactAt) {
      compact = false;
      header.classList.remove('is-compact');
    }

    ticking = false;
  };

  const requestCompactState = () => {
    if (!ticking) {
      window.requestAnimationFrame(applyCompactState);
      ticking = true;
    }
  };

  applyCompactState();
  window.addEventListener('scroll', requestCompactState, {passive:true});

  document.addEventListener('click', (event) => {
    const link = event.target.closest('a[href^="#"]');
    if(!link) return;

    const href = link.getAttribute('href');
    if(!href || href === '#') return;

    const target = document.querySelector(href);
    if(!target) return;

    event.preventDefault();
    document.querySelector('nav')?.classList.remove('open');

    if(href === '#top') {
      compact = false;
      header.classList.remove('is-compact');
      window.scrollTo({top:0, behavior:'smooth'});
      if(history.pushState) history.pushState(null, '', href);
      return;
    }

    // Pro odkaz na vnitřní sekci počítáme s kompaktní hlavičkou,
    // aby nadpis sekce nezůstal schovaný pod horním menu.
    compact = true;
    header.classList.add('is-compact');

    window.requestAnimationFrame(() => {
      const offset = header.getBoundingClientRect().height + 22;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({top:Math.max(0, top), behavior:'smooth'});
      if(history.pushState) history.pushState(null, '', href);
    });
  });
})();

