// ---------- Data ----------
// Dica: pra colocar a foto de cada dev, salve a imagem em assets/team/
// com o nome de arquivo indicado no campo "photo" abaixo (ex: assets/team/arthur.jpg).
// Se o arquivo não existir, o card mostra as iniciais automaticamente (fallback).
const TEAM = [
  {name:"Arthur Guilherme",role:"CEO & Dev. Full-Stack",bio:"Gosto de café e futebol tanto quanto gosto de dar vida a ideias que impactam o futuro.",initials:"AG",color:"var(--yellow)",photo:"assets/team/arthur.jpg",gh:"https://github.com/guifigueireedo",ig:"https://instagram.com/guifigueireedo",li:"https://www.linkedin.com/in/guifigueireedo"},
  {name:"Guilherme Araujo",role:"CTO & Dev. Backend",bio:"Amo a programação e seus desafios. Construir o LimpAttack tem sido uma jornada incrível.",initials:"GA",color:"var(--sky)",photo:"assets/team/guilherme.jpg",gh:"https://github.com/guiaraujo011",ig:"https://instagram.com/guiaraujo011",li:"https://www.linkedin.com/in/guiiaraujo/"},
  {name:"João Batista",role:"Designer de Produto & UX/UI",bio:"Crio designs para tirar o excesso de ideias da cabeça. Extraio o melhor pros nossos mini players.",initials:"JB",color:"var(--mint)",photo:"assets/team/joao.jpg",gh:"https://github.com/joaobatis1a",ig:"https://instagram.com/joaobatis1a",li:"https://www.linkedin.com/in/joaobatis1a"},
  {name:"Pedro Bezerra",role:"Gerente de Projeto & Dev. Frontend",bio:"É fundamental transmitir nossas ideias da melhor forma para as crianças. Cuido de cada detalhe.",initials:"PB",color:"var(--yellow)",photo:"assets/team/pedro.jpg",gh:"https://github.com/peubzrr07",ig:"https://instagram.com/peubezerra07",li:"https://www.linkedin.com/in/pedrobezerraveloso/"},
];

const ICON_GH = '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-1.94c-3.2.7-3.87-1.54-3.87-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.78 1.2 1.78 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.8 1.19 1.83 1.19 3.09 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.08.78 2.17v3.22c0 .31.21.66.79.55A10.51 10.51 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5z"/></svg>';
const ICON_IG = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none"/></svg>';
const ICON_LI = '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/></svg>';

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
      <div class="avatar">
        <span class="avatar-initials">${m.initials}</span>
        ${m.photo ? `<img class="avatar-photo" src="${m.photo}" alt="Foto de ${m.name}" onerror="this.style.display='none'">` : ''}
      </div>
    </div>
    <div class="team-body">
      <h3>${m.name}</h3>
      <span class="team-role">${m.role}</span>
      <p class="team-bio">"${m.bio}"</p>
      <div class="team-socials">
        <a class="soc" href="${m.gh}" target="_blank" rel="noreferrer" aria-label="GitHub">${ICON_GH}</a>
        <a class="soc" href="${m.ig}" target="_blank" rel="noreferrer" aria-label="Instagram">${ICON_IG}</a>
        <a class="soc" href="${m.li}" target="_blank" rel="noreferrer" aria-label="LinkedIn">${ICON_LI}</a>
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
const thumbs = document.querySelectorAll('.thumb');
const sceneTag = document.getElementById('sceneTag');
const galleryTitle = document.getElementById('galleryTitle');
const scrubberFill = document.getElementById('galleryScrubberFill');
const DURATION = 5000;

let galleryIndex = 0;
let galleryTimer;

function setActive(i){
  galleryIndex = (i+GALLERY.length)%GALLERY.length;
  shots.forEach(s=>s.classList.toggle('active', +s.dataset.i === galleryIndex));
  thumbs.forEach(t=>t.classList.toggle('active', +t.dataset.i === galleryIndex));

  sceneTag.textContent = 'CENA ' + String(galleryIndex+1).padStart(2,'0');

  galleryTitle.textContent = GALLERY[galleryIndex].title;
  galleryTitle.classList.remove('title-in');
  void galleryTitle.offsetWidth; // restart reveal animation
  galleryTitle.classList.add('title-in');

  scrubberFill.style.transition = 'none';
  scrubberFill.style.width = '0%';
  requestAnimationFrame(()=>{
    requestAnimationFrame(()=>{
      scrubberFill.style.transition = `width ${DURATION}ms linear`;
      scrubberFill.style.width = '100%';
    });
  });
}

function resetGalleryTimer(){
  clearInterval(galleryTimer);
  setActive(galleryIndex);
  galleryTimer = setInterval(()=> setActive(galleryIndex+1), DURATION);
}

thumbs.forEach(t=>{
  t.addEventListener('click', ()=>{ setActive(+t.dataset.i); resetGalleryTimer(); });
});
document.getElementById('galleryPrev').addEventListener('click', ()=>{ setActive(galleryIndex-1); resetGalleryTimer(); });
document.getElementById('galleryNext').addEventListener('click', ()=>{ setActive(galleryIndex+1); resetGalleryTimer(); });

resetGalleryTimer();

// pause on hover
const galleryFrame = document.getElementById('galleryFrame');
galleryFrame.addEventListener('mouseenter', ()=>{
  clearInterval(galleryTimer);
  const w = getComputedStyle(scrubberFill).width;
  scrubberFill.style.transition = 'none';
  scrubberFill.style.width = w;
});
galleryFrame.addEventListener('mouseleave', ()=>{
  galleryTimer = setInterval(()=> setActive(galleryIndex+1), DURATION);
  scrubberFill.style.transition = 'none';
  scrubberFill.style.width = '0%';
  requestAnimationFrame(()=>{
    requestAnimationFrame(()=>{
      scrubberFill.style.transition = `width ${DURATION}ms linear`;
      scrubberFill.style.width = '100%';
    });
  });
});

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
