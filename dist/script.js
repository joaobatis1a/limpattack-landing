// ---------- Data ----------
const TEAM = [
  {name:"Arthur Guilherme",role:"CEO & Dev. Full-Stack",bio:"Gosto de café e futebol tanto quanto gosto de dar vida a ideias que impactam o futuro.",initials:"AG",color:"var(--yellow)",gh:"https://github.com/guifigueireedo",ig:"https://instagram.com/guifigueireedo",li:"https://www.linkedin.com/in/guifigueireedo"},
  {name:"Guilherme Araujo",role:"CTO & Dev. Backend",bio:"Amo a programação e seus desafios. Construir o LimpAttack tem sido uma jornada incrível.",initials:"GA",color:"var(--sky)",gh:"https://github.com/guiaraujo011",ig:"https://instagram.com/guiaraujo011",li:"https://www.linkedin.com/in/guiiaraujo/"},
  {name:"João Batista",role:"Designer de Produto & UX/UI",bio:"Crio designs para tirar o excesso de ideias da cabeça. Extraio o melhor pros nossos mini players.",initials:"JB",color:"var(--mint)",gh:"https://github.com/joaobatis1a",ig:"https://instagram.com/joaobatis1a",li:"https://www.linkedin.com/in/joaobatis1a"},
  {name:"Pedro Bezerra",role:"Gerente de Projeto & Dev. Frontend",bio:"É fundamental transmitir nossas ideias da melhor forma para as crianças. Cuido de cada detalhe.",initials:"PB",color:"var(--yellow)",gh:"https://github.com/peubzrr07",ig:"https://instagram.com/peubezerra07",li:"https://www.linkedin.com/in/pedrobezerraveloso/"},
];

const FAQ = [
  {q:"Para qual idade o LimpAttack é recomendado?",a:"O jogo foi projetado pensando em crianças de 6 a 12 anos, mas a jogabilidade nostálgica e a mensagem positiva o tornam uma ótima experiência para toda a família."},
  {q:"Como o LimpAttack ajuda no dia a dia da criança?",a:"A melhor maneira é participar ativamente. Nossa mentoria para pais oferece insights valiosos para transformar o tempo de jogo em momentos de aprendizado e diálogo em família."},
  {q:"Como reforçar os bons hábitos aprendidos fora do jogo?",a:"Conecte as conquistas do jogo com tarefas do dia a dia. Ao incentivar seu filho a lavar as mãos ou escovar os dentes, remeta a uma fase que ele superou no LimpAttack."},
  {q:"Como surgiu a ideia do LimpAttack?",a:"A ideia nasceu da união entre a paixão por games e a necessidade de promover consciência sobre higiene e saúde desde cedo, usando a linguagem dos jogos para plantar sementes de bons hábitos."},
  {q:"Quais são os próximos passos do projeto?",a:"Estamos trabalhando na portabilidade do jogo para dispositivos móveis (Android/iOS) e no desenvolvimento de uma versão educativa completa para escolas e creches."},
  {q:"Como apresentar o projeto para a escola do meu filho?",a:"Preparamos um material completo. Acesse a página 'Para Instituições' para baixar nossa apresentação detalhada e um modelo de e-mail pronto pra coordenação."},
];

// ---------- Render team ----------
const teamGrid = document.getElementById('teamGrid');
TEAM.forEach((m,idx)=>{
  const card = document.createElement('div');
  card.className = 'team-card reveal reveal-delay-'+(idx%4);
  card.innerHTML = `
    <div class="team-top" style="background:${m.color}">
      <div class="dots"></div>
      <div class="avatar">${m.initials}</div>
    </div>
    <div class="team-body">
      <h3>${m.name}</h3>
      <span class="team-role">${m.role}</span>
      <p class="team-bio">"${m.bio}"</p>
      <div class="team-socials">
        <a class="soc" href="${m.gh}" target="_blank" rel="noreferrer" aria-label="GitHub">🐙</a>
        <a class="soc" href="${m.ig}" target="_blank" rel="noreferrer" aria-label="Instagram">📸</a>
        <a class="soc" href="${m.li}" target="_blank" rel="noreferrer" aria-label="LinkedIn">💼</a>
      </div>
    </div>`;
  teamGrid.appendChild(card);
});

// ---------- Render FAQ ----------
const faqList = document.getElementById('faqList');
FAQ.forEach((f,i)=>{
  const item = document.createElement('div');
  item.className = 'faq-item' + (i===0 ? ' open' : '');
  item.innerHTML = `
    <button class="faq-q">
      <span>${f.q}</span>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>
    </button>
    <div class="faq-a">${f.a}</div>`;
  item.querySelector('.faq-q').addEventListener('click', ()=>{
    item.classList.toggle('open');
  });
  faqList.appendChild(item);
});

// ---------- Cursor glow ----------
const glow = document.getElementById('cursor-glow');
window.addEventListener('mousemove', e=>{
  glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%,-50%)`;
});

// ---------- Scroll progress + header + toTop ----------
const header = document.getElementById('siteHeader');
const progress = document.getElementById('progress');
const toTop = document.getElementById('toTop');
window.addEventListener('scroll', ()=>{
  const h = document.documentElement;
  const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
  progress.style.width = scrolled + '%';
  header.classList.toggle('scrolled', h.scrollTop > 10);
  toTop.classList.toggle('show', h.scrollTop > 500);
});
toTop.addEventListener('click', ()=>window.scrollTo({top:0,behavior:'smooth'}));

// ---------- Reveal on scroll ----------
const io = new IntersectionObserver((entries)=>{
  entries.forEach(en=>{
    if(en.isIntersecting){ en.target.classList.add('in'); }
  });
},{threshold:0.15});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// ---------- Counters ----------
const counters = document.querySelectorAll('.counter');
const counterIO = new IntersectionObserver((entries)=>{
  entries.forEach(en=>{
    if(en.isIntersecting){
      const el = en.target;
      const target = parseInt(el.dataset.target,10);
      const suffix = el.dataset.suffix || '';
      let cur = 0;
      const step = Math.max(1, Math.round(target/40));
      const t = setInterval(()=>{
        cur += step;
        if(cur >= target){ cur = target; clearInterval(t); }
        el.textContent = cur + suffix;
      }, 30);
      counterIO.unobserve(el);
    }
  });
},{threshold:0.5});
counters.forEach(c=>counterIO.observe(c));

// ---------- Bubbles ----------
const bubbleWrap = document.getElementById('bubbles');
for(let i=0;i<8;i++){
  const b = document.createElement('span');
  b.className = 'bubble';
  const size = 14 + Math.random()*26;
  b.style.width = size+'px';
  b.style.height = size+'px';
  b.style.left = (5 + i*12 + Math.random()*6)+'%';
  b.style.animationDuration = (7 + Math.random()*5)+'s';
  b.style.animationDelay = (Math.random()*6)+'s';
  bubbleWrap.appendChild(b);
}

// ---------- Hero art hover (mesmo estilo do card "Sobre") ----------
// (agora controlado só por CSS :hover, ver .hero-art-card:hover em styles.css)

// ---------- Gallery ----------
const GALLERY = [
  {tag:'Combate', title:'Tela de batalha'},
  {tag:'Missão', title:'Missão do primeiro mapa'},
  {tag:'Exploração', title:'Interior de uma das tendas'},
  {tag:'Coleta', title:'Coleta de itens'},
  {tag:'Em breve', title:'Reserve pra sua próxima screenshot'},
  {tag:'Em breve', title:'Reserve pra sua próxima screenshot'},
];
const shots = document.querySelectorAll('.shot');
const films = document.querySelectorAll('.film');
const galleryCount = document.getElementById('galleryCount');
const galleryTitle = document.getElementById('galleryTitle');
const segWrap = document.getElementById('gallerySegments');
const DURATION = 5000;

GALLERY.forEach((g,i)=>{
  const seg = document.createElement('div');
  seg.className = 'gallery-seg';
  seg.dataset.i = i;
  seg.innerHTML = '<div class="gallery-seg-fill"></div>';
  seg.addEventListener('click', ()=>{ setActive(i); resetGalleryTimer(); });
  segWrap.appendChild(seg);
});
const segEls = document.querySelectorAll('.gallery-seg');

let galleryIndex = 0;
let galleryTimer, galleryStart;

function renderSegments(){
  segEls.forEach((seg,i)=>{
    seg.classList.remove('done','current');
    const fill = seg.querySelector('.gallery-seg-fill');
    if(i < galleryIndex){ seg.classList.add('done'); }
    else if(i === galleryIndex){ seg.classList.add('current'); fill.style.transition='none'; fill.style.width='0%'; }
    else { fill.style.transition='none'; fill.style.width='0%'; }
  });
}

function setActive(i){
  galleryIndex = (i+GALLERY.length)%GALLERY.length;
  shots.forEach(s=>s.classList.toggle('active', +s.dataset.i === galleryIndex));
  films.forEach(f=>f.classList.toggle('active', +f.dataset.i === galleryIndex));
  galleryCount.textContent = String(galleryIndex+1).padStart(2,'0') + ' / ' + String(GALLERY.length).padStart(2,'0');
  galleryTitle.textContent = GALLERY[galleryIndex].title;
  renderSegments();
  requestAnimationFrame(()=>{
    const cur = document.querySelector('.gallery-seg.current .gallery-seg-fill');
    if(cur){ requestAnimationFrame(()=>{ cur.style.transition = `width ${DURATION}ms linear`; cur.style.width='100%'; }); }
  });
  const activeFilm = document.querySelector('.film.active');
  if(activeFilm) activeFilm.scrollIntoView({behavior:'smooth', inline:'center', block:'nearest'});
}

function resetGalleryTimer(){
  clearInterval(galleryTimer);
  setActive(galleryIndex);
  galleryTimer = setInterval(()=> setActive(galleryIndex+1), DURATION);
}

films.forEach(f=>{
  f.addEventListener('click', ()=>{ resetGalleryTimer(); setActive(+f.dataset.i); resetGalleryTimer(); });
});
document.getElementById('galleryPrev').addEventListener('click', ()=>{ setActive(galleryIndex-1); resetGalleryTimer(); });
document.getElementById('galleryNext').addEventListener('click', ()=>{ setActive(galleryIndex+1); resetGalleryTimer(); });

resetGalleryTimer();

// pause on hover
const galleryFrame = document.getElementById('galleryFrame');
galleryFrame.addEventListener('mouseenter', ()=>clearInterval(galleryTimer));
galleryFrame.addEventListener('mouseleave', ()=>{ galleryTimer = setInterval(()=> setActive(galleryIndex+1), DURATION); });

// lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCap = document.getElementById('lightboxCap');
function openLightbox(){
  const activeShot = document.querySelector('.shot.active');
  lightboxImg.src = activeShot.src;
  lightboxCap.textContent = GALLERY[galleryIndex].title;
  lightbox.classList.add('open');
  clearInterval(galleryTimer);
}
function closeLightbox(){
  lightbox.classList.remove('open');
  galleryTimer = setInterval(()=> setActive(galleryIndex+1), DURATION);
}
document.getElementById('galleryExpand').addEventListener('click', openLightbox);
document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e=>{ if(e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', e=>{
  if(e.key === 'Escape') closeLightbox();
  if(lightbox.classList.contains('open')){
    if(e.key === 'ArrowRight'){ setActive(galleryIndex+1); lightboxImg.src = document.querySelector('.shot.active').src; lightboxCap.textContent = GALLERY[galleryIndex].title; }
    if(e.key === 'ArrowLeft'){ setActive(galleryIndex-1); lightboxImg.src = document.querySelector('.shot.active').src; lightboxCap.textContent = GALLERY[galleryIndex].title; }
  }
});

// ---------- Navbar: mobile menu ----------
const burger = document.getElementById('burger');
burger.addEventListener('click', ()=>{
  header.classList.toggle('menu-open');
});
document.getElementById('mobileMenu').addEventListener('click', e=>{
  if(e.target.tagName === 'A') header.classList.remove('menu-open');
});

// ---------- Navbar: scrollspy pill ----------
const navLinkEls = Array.from(document.querySelectorAll('#navlinks a'));
const navPill = document.getElementById('navPill');
const sectionEls = navLinkEls.map(a => document.getElementById(a.dataset.section)).filter(Boolean);

function movePillTo(link){
  if(!link) return;
  navPill.style.opacity = '1';
  navPill.style.width = link.offsetWidth + 'px';
  navPill.style.transform = `translateX(${link.offsetLeft - 4}px)`;
}
function setActiveLink(section){
  navLinkEls.forEach(a=>a.classList.toggle('active', a.dataset.section === section));
  movePillTo(navLinkEls.find(a=>a.dataset.section === section));
}
setTimeout(()=>movePillTo(navLinkEls[0]), 50);

const spyIO = new IntersectionObserver((entries)=>{
  entries.forEach(en=>{
    if(en.isIntersecting){ setActiveLink(en.target.id); }
  });
},{rootMargin:'-40% 0px -50% 0px', threshold:0});
sectionEls.forEach(s=>spyIO.observe(s));
window.addEventListener('resize', ()=>{
  const active = navLinkEls.find(a=>a.classList.contains('active'));
  movePillTo(active);
});

// ---------- Trailer (vídeo local em modal) ----------
const videoLightbox = document.getElementById('videoLightbox');
const trailerVideo = document.getElementById('trailerVideo');

function openTrailer(){
  videoLightbox.classList.add('open');
  trailerVideo.currentTime = 0;
  trailerVideo.play().catch(()=>{});
}
function closeTrailer(){
  videoLightbox.classList.remove('open');
  trailerVideo.pause();
}
document.getElementById('trailerBtn').addEventListener('click', openTrailer);
const trailerBtnFooter = document.getElementById('trailerBtnFooter');
if(trailerBtnFooter) trailerBtnFooter.addEventListener('click', openTrailer);
document.getElementById('videoLightboxClose').addEventListener('click', closeTrailer);
videoLightbox.addEventListener('click', e=>{ if(e.target === videoLightbox) closeTrailer(); });
document.addEventListener('keydown', e=>{
  if(e.key === 'Escape' && videoLightbox.classList.contains('open')) closeTrailer();
});
