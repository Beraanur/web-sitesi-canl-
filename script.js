/* THE BLACK DOT — Portfolio Script (external, Cloudflare safe) */

var projects = [
  {
    id:'vortify', name:'VORTIFY MEDIA',
    tagline:{tr:'Dijital büyüme için yaratıcı içerik çözümleri',en:'Creative content solutions for digital growth'},
    desc:{tr:'Reklam ajansı için sosyal medya içerik üretimi, carousel tasarımları ve baskı/yayın çalışmaları.',en:'Social media content, carousel designs, and print work for an advertising agency.'},
    font:'Abril Display Regular',
    colors:['#41210A','#6A607D','#4E73AD','#BFD8F2','#F3F5F2'],
    categories:{
      tr:[
        {name:'Carousel 1',type:'carousel',images:['vortify/carousel-1/1.png','vortify/carousel-1/2.png','vortify/carousel-1/3.png','vortify/carousel-1/4.png']},
        {name:'Carousel 2',type:'carousel',images:['vortify/carousel-2/1.png','vortify/carousel-2/2.png','vortify/carousel-2/3.png']},
        {name:'Carousel 3',type:'carousel',images:['vortify/carousel-3/1.png','vortify/carousel-3/2.jpg','vortify/carousel-3/3.jpg','vortify/carousel-3/4.png']},
        {name:'Carousel 4',type:'carousel',images:['vortify/carousel-4/1.jpg','vortify/carousel-4/2.jpg','vortify/carousel-4/3.jpg','vortify/carousel-4/4.jpg','vortify/carousel-4/5.jpg']},
        {name:'Postlar',type:'grid',images:['vortify/posts/1.png','vortify/posts/3.png','vortify/posts/4.png','vortify/posts/5.png','vortify/posts/6.png','vortify/posts/7.png','vortify/posts/8.png','vortify/posts/9.png','vortify/posts/10.png','vortify/posts/11.png','vortify/posts/12.png','vortify/posts/13.png']},
        {name:'Baskı 1',type:'grid',images:['vortify/print-1/1.png','vortify/print-1/2.png','vortify/print-1/3.png','vortify/print-1/4.png','vortify/print-1/5.png','vortify/print-1/6.png','vortify/print-1/7.png']},
        {name:'Baskı 2',type:'grid',images:['vortify/print-2/1.png','vortify/print-2/2.png','vortify/print-2/3.png','vortify/print-2/4.png','vortify/print-2/5.png']},
        {name:'Baskı 3',type:'grid',images:['vortify/print-3/1.png','vortify/print-3/2.png','vortify/print-3/3.png','vortify/print-3/4.png','vortify/print-3/5.png']}
      ],
      en:[
        {name:'Carousel 1',type:'carousel',images:['vortify/carousel-1/1.png','vortify/carousel-1/2.png','vortify/carousel-1/3.png','vortify/carousel-1/4.png']},
        {name:'Carousel 2',type:'carousel',images:['vortify/carousel-2/1.png','vortify/carousel-2/2.png','vortify/carousel-2/3.png']},
        {name:'Carousel 3',type:'carousel',images:['vortify/carousel-3/1.png','vortify/carousel-3/2.jpg','vortify/carousel-3/3.jpg','vortify/carousel-3/4.png']},
        {name:'Carousel 4',type:'carousel',images:['vortify/carousel-4/1.jpg','vortify/carousel-4/2.jpg','vortify/carousel-4/3.jpg','vortify/carousel-4/4.jpg','vortify/carousel-4/5.jpg']},
        {name:'Posts',type:'grid',images:['vortify/posts/1.png','vortify/posts/3.png','vortify/posts/4.png','vortify/posts/5.png','vortify/posts/6.png','vortify/posts/7.png','vortify/posts/8.png','vortify/posts/9.png','vortify/posts/10.png','vortify/posts/11.png','vortify/posts/12.png','vortify/posts/13.png']},
        {name:'Print 1',type:'grid',images:['vortify/print-1/1.png','vortify/print-1/2.png','vortify/print-1/3.png','vortify/print-1/4.png','vortify/print-1/5.png','vortify/print-1/6.png','vortify/print-1/7.png']},
        {name:'Print 2',type:'grid',images:['vortify/print-2/1.png','vortify/print-2/2.png','vortify/print-2/3.png','vortify/print-2/4.png','vortify/print-2/5.png']},
        {name:'Print 3',type:'grid',images:['vortify/print-3/1.png','vortify/print-3/2.png','vortify/print-3/3.png','vortify/print-3/4.png','vortify/print-3/5.png']}
      ]
    }
  },
  {
    id:'sofor-go', name:'ŞOFÖR GO',
    tagline:{tr:'Aracın sende, Sürüş bizde',en:'Your car, our drive'},
    desc:{tr:'Profesyonel şoför hizmeti için full marka kimliği.',en:'Full brand identity for a professional driver service.'},
    font:'Proxima Nova (Bold / Medium / Regular)',
    colors:['#F5F6FB','#A7A6AB','#A927E7','#180934','#6620F0'],
    categories:{
      tr:[
        {name:'Marka',type:'grid',images:['sofor-go/brand/applogo.png','sofor-go/brand/logo.png']},
        {name:'Mockup',type:'grid',images:['sofor-go/mockup/m2.png','sofor-go/mockup/m3.jpg','sofor-go/mockup/m4.jpg']},
        {name:'Postlar',type:'grid',images:['sofor-go/posts/t1.png','sofor-go/posts/t2.png','sofor-go/posts/t3.jpg','sofor-go/posts/t6.jpg','sofor-go/posts/t7.png','sofor-go/posts/t8.jpg']}
      ],
      en:[
        {name:'Brand',type:'grid',images:['sofor-go/brand/applogo.png','sofor-go/brand/logo.png']},
        {name:'Mockup',type:'grid',images:['sofor-go/mockup/m2.png','sofor-go/mockup/m3.jpg','sofor-go/mockup/m4.jpg']},
        {name:'Posts',type:'grid',images:['sofor-go/posts/t1.png','sofor-go/posts/t2.png','sofor-go/posts/t3.jpg','sofor-go/posts/t6.jpg','sofor-go/posts/t7.png','sofor-go/posts/t8.jpg']}
      ]
    }
  },
  {
    id:'tlbb', name:'THE LITTLE BLACK BOOK',
    tagline:{tr:'Bodrum lifestyle içerik markası',en:'Bodrum lifestyle content brand'},
    desc:{tr:'Bodrum\'daki seçili mekan ve deneyimleri kürate eden lifestyle içerik markası.',en:'A lifestyle content brand curating select venues and experiences in Bodrum.'},
    font:'Inter',
    colors:['#FFFFFF','#000000','#E42B91'],
    categories:{
      tr:[
        {name:'Postlar',type:'grid',images:['thelittleblackbook/posts/1.jpg','thelittleblackbook/posts/2.jpg','thelittleblackbook/posts/3.jpg','thelittleblackbook/posts/4.jpg','thelittleblackbook/posts/5.jpg','thelittleblackbook/posts/6.jpg','thelittleblackbook/posts/7.jpg','thelittleblackbook/posts/8.jpg','thelittleblackbook/posts/9.jpg']},
        {name:'Story',type:'story',images:['thelittleblackbook/story/1.jpg','thelittleblackbook/story/2.jpg','thelittleblackbook/story/3.jpg','thelittleblackbook/story/4.jpg','thelittleblackbook/story/5.jpg','thelittleblackbook/story/6.jpg']}
      ],
      en:[
        {name:'Posts',type:'grid',images:['thelittleblackbook/posts/1.jpg','thelittleblackbook/posts/2.jpg','thelittleblackbook/posts/3.jpg','thelittleblackbook/posts/4.jpg','thelittleblackbook/posts/5.jpg','thelittleblackbook/posts/6.jpg','thelittleblackbook/posts/7.jpg','thelittleblackbook/posts/8.jpg','thelittleblackbook/posts/9.jpg']},
        {name:'Stories',type:'story',images:['thelittleblackbook/story/1.jpg','thelittleblackbook/story/2.jpg','thelittleblackbook/story/3.jpg','thelittleblackbook/story/4.jpg','thelittleblackbook/story/5.jpg','thelittleblackbook/story/6.jpg']}
      ]
    }
  },
  {
    id:'parfum', name:'PARFÜM MUTFAĞI',
    tagline:{tr:'Premium parfüm görsel dili',en:'Premium perfume visual language'},
    desc:{tr:'AI destekli ürün fotoğraf konseptleri ve sosyal medya içerik tasarımı.',en:'AI-assisted product photography concepts and social media content design.'},
    font:'Cormorant Garamond',
    colors:['#719A73','#003A35','#001F27','#1F73C2'],
    categories:{
      tr:[{name:'Tümü',type:'grid',images:['parfum/1.jpg','parfum/2.jpg','parfum/3.jpg','parfum/4.jpg','parfum/5.jpg','parfum/6.jpg','parfum/7.jpg','parfum/8.jpg','parfum/9.jpg','parfum/10.jpg']}],
      en:[{name:'All',type:'grid',images:['parfum/1.jpg','parfum/2.jpg','parfum/3.jpg','parfum/4.jpg','parfum/5.jpg','parfum/6.jpg','parfum/7.jpg','parfum/8.jpg','parfum/9.jpg','parfum/10.jpg']}]
    }
  },
  {
    id:'sarki', name:'ŞARKI KAPAKLARI',
    tagline:{tr:'Orijinal fotoğraflarla albüm kapakları',en:'Album covers with original photography'},
    desc:{tr:'Orijinal fotoğraflar kullanılarak tasarlanan albüm kapakları.',en:'Album covers designed using original photography.'},
    font:'Space Grotesk',
    colors:[],
    categories:{
      tr:[{name:'Tümü',type:'grid',images:['sarki/sarki-kapagi-mockup/1.png','sarki/sarki-kapagi-mockup/2.png','sarki/sarki-kapagi-mockup/3.png','sarki/sarki-kapagi-mockup/4.png','sarki/sarki-kapagi-mockup/5.png','sarki/sarki-kapagi-mockup/6.png','sarki/sarki-kapagi-mockup/7.png','sarki/sarki-kapagi-mockup/8.png','sarki/sarki-kapagi-mockup/9.png','sarki/sarki-kapagi-mockup/10.png']}],
      en:[{name:'All',type:'grid',images:['sarki/sarki-kapagi-mockup/1.png','sarki/sarki-kapagi-mockup/2.png','sarki/sarki-kapagi-mockup/3.png','sarki/sarki-kapagi-mockup/4.png','sarki/sarki-kapagi-mockup/5.png','sarki/sarki-kapagi-mockup/6.png','sarki/sarki-kapagi-mockup/7.png','sarki/sarki-kapagi-mockup/8.png','sarki/sarki-kapagi-mockup/9.png','sarki/sarki-kapagi-mockup/10.png']}]
    }
  }
];

var currentLang='tr', currentProject=-1, lightboxImages=[], lightboxIndex=0, isDetailOpen=false;
var totalCards=5;

var topBar=document.getElementById('topBar');
var topBarLogo=document.getElementById('topBarLogo');
var projectCounter=document.getElementById('projectCounter');
var langToggle=document.getElementById('langToggle');
var horizontalSpacer=document.getElementById('horizontalSpacer');
var horizontalContainer=document.getElementById('horizontalContainer');
var horizontalTrack=document.getElementById('horizontalTrack');
var progressBar=document.getElementById('progressBar');
var progressFill=document.getElementById('progressFill');
var projectDetail=document.getElementById('projectDetail');
var detailContent=document.getElementById('detailContent');
var lightbox=document.getElementById('lightbox');
var lightboxImg=document.getElementById('lightboxImg');

var heroH=window.innerHeight;

function setup(){
  heroH=window.innerHeight;
  var trackW=(totalCards-1)*window.innerWidth*0.85+window.innerWidth;
  var cardScroll=trackW-window.innerWidth;
  var scrollNeeded=cardScroll/0.75;
  horizontalSpacer.style.height=scrollNeeded+'px';
}
setup();
window.addEventListener('resize',function(){setup();onScroll()});

/* Smooth lerp for transform */
var currentTx=0, targetTx=0;
function smoothTrack(){
  currentTx+=(targetTx-currentTx)*0.12;
  horizontalTrack.style.transform='translateX('+currentTx+'px)';
  requestAnimationFrame(smoothTrack);
}
smoothTrack();

/* ===== SCROLL ===== */
/* GEÇİŞ DÜZELTMESİ:
   - horizontalContainer'a CSS'te transition:opacity 0.5s eklendi
   - JS'de inline opacity='' sıfırlaması yerine '0' atıyoruz,
     böylece class kaldırılmadan önce smooth fade-out olur
   - İki geçiş noktası (hero→horizontal, horizontal→bottom)
     her ikisi de artık 0.5s fade ile çalışır */
function onScroll(){
  if(isDetailOpen) return;
  var sy=window.pageYOffset;
  var sTop=horizontalSpacer.offsetTop;
  var sH=parseFloat(horizontalSpacer.style.height)||0;
  var inZone=sy>=sTop && sy<sTop+sH;

  /* top bar */
  if(sy>heroH*0.5){
    topBarLogo.classList.add('visible');
    topBar.classList.add('scrolled');
  } else {
    topBarLogo.classList.remove('visible');
    topBar.classList.remove('scrolled');
  }

  /* horizontal scroll */
  if(inZone){
    horizontalContainer.classList.add('active');
    progressBar.classList.add('visible');
    projectCounter.classList.add('visible');

    var rawProgress=(sy-sTop)/sH;
    rawProgress=Math.max(0,Math.min(1,rawProgress));

    var cardProgress=Math.min(rawProgress/0.75,1);

    var trackW=(totalCards-1)*window.innerWidth*0.85+window.innerWidth;
    var maxTx=trackW-window.innerWidth;
    targetTx=-cardProgress*maxTx;

    progressFill.style.width=(rawProgress*100)+'%';

    /* Fade-out başlangıcını biraz erken al (son 5%) — daha yumuşak */
    if(rawProgress>0.95){
      horizontalContainer.style.opacity=Math.max(0,1-((rawProgress-0.95)/0.05)).toString();
    } else {
      horizontalContainer.style.opacity='1';
    }

    var idx=Math.min(Math.floor(cardProgress*totalCards),totalCards-1);
    projectCounter.innerHTML='<span>'+String(idx+1).padStart(2,'0')+'</span> / '+String(totalCards).padStart(2,'0');
  } else {
    /* Fade tamamlandıktan sonra active'i kaldır */
    horizontalContainer.style.opacity='0';
    progressBar.classList.remove('visible');
    projectCounter.classList.remove('visible');
    /* Kısa gecikme: CSS transition bitmeden class kaldırılmasın */
    clearTimeout(onScroll._hideTimer);
    onScroll._hideTimer=setTimeout(function(){
      if(!document.getElementById('horizontalSpacer') ||
         window.pageYOffset<horizontalSpacer.offsetTop ||
         window.pageYOffset>=horizontalSpacer.offsetTop+parseFloat(horizontalSpacer.style.height)){
        horizontalContainer.classList.remove('active');
      }
    },520);
  }

  /* reveals */
  var revs=document.querySelectorAll('.reveal');
  for(var i=0;i<revs.length;i++){
    if(revs[i].getBoundingClientRect().top<window.innerHeight*0.85){
      revs[i].classList.add('visible');
    }
  }
}
window.addEventListener('scroll',onScroll,{passive:true});
onScroll();

/* ===== DETAIL ===== */
/* SEO: Otomatik alt text üretici */
function makeAlt(projectName, categoryName, index){
  var suffix=currentLang==='en'
    ? ' — '+categoryName+' design '+(index+1)+' · Beraanur Şahin'
    : ' — '+categoryName+' tasarımı '+(index+1)+' · Beraanur Şahin';
  return projectName+suffix;
}

function openDetail(idx){
  currentProject=idx; isDetailOpen=true;
  var p=projects[idx], lang=currentLang, cats=p.categories[lang];
  var h='<div class="detail-header">';
  h+='<div class="detail-project-name">'+p.name+'</div>';
  h+='<div class="detail-tagline">'+p.tagline[lang]+'</div>';
  h+='<div class="detail-meta">';
  h+='<div class="detail-meta-item"><h4>'+(lang==='tr'?'Açıklama':'Description')+'</h4><p>'+p.desc[lang]+'</p></div>';
  h+='<div class="detail-meta-item"><h4>Font</h4><p>'+p.font+'</p></div>';
  if(p.colors.length){
    h+='<div class="detail-meta-item"><h4>'+(lang==='tr'?'Renk Paleti':'Color Palette')+'</h4><div class="detail-palette">';
    for(var c=0;c<p.colors.length;c++){
      var bs=p.colors[c].toLowerCase()==='#ffffff'?'border-color:rgba(0,0,0,0.2)':'';
      h+='<div class="detail-palette-swatch" style="background:'+p.colors[c]+';'+bs+'" data-color="'+p.colors[c]+'"></div>';
    }
    h+='</div></div>';
  }
  h+='</div></div>';
  if(cats.length>1){
    h+='<div class="detail-tabs"><div class="tabs-header">';
    for(var t=0;t<cats.length;t++) h+='<button class="tab-btn'+(t===0?' active':'')+'" onclick="switchTab(this,'+t+')">'+cats[t].name+'</button>';
    h+='</div></div>';
  }
  for(var g=0;g<cats.length;g++){
    var cat=cats[g];
    var gc='gallery-grid';
    var ic='gallery-item';
    if(cat.type==='carousel'){gc='gallery-grid carousel-grid';ic='gallery-item carousel-item';}
    else if(cat.type==='story'){gc='gallery-grid story-grid';ic='gallery-item story-item';}
    h+='<div class="tab-content'+(g===0?' active':'')+'" data-tab="'+g+'"><div class="'+gc+'">';
    for(var im=0;im<cat.images.length;im++){
      var altText=makeAlt(p.name, cat.name, im);
      h+='<div class="'+ic+'" onclick="openLB('+idx+','+g+','+im+')"><img src="'+cat.images[im]+'" alt="'+altText+'" loading="lazy"></div>';
    }
    h+='</div></div>';
  }
  detailContent.innerHTML=h;
  projectDetail.classList.add('open');
  projectDetail.scrollTop=0;
  document.body.style.overflow='hidden';
}

function closeDetail(){
  isDetailOpen=false;
  projectDetail.classList.remove('open');
  document.body.style.overflow='';
}

function switchTab(btn,idx){
  var btns=btn.parentElement.querySelectorAll('.tab-btn');
  for(var i=0;i<btns.length;i++) btns[i].classList.remove('active');
  btn.classList.add('active');
  var tabs=projectDetail.querySelectorAll('.tab-content');
  for(var j=0;j<tabs.length;j++) tabs[j].classList.remove('active');
  var t=projectDetail.querySelector('.tab-content[data-tab="'+idx+'"]');
  if(t) t.classList.add('active');
}

/* ===== LIGHTBOX ===== */
function openLB(pi,ci,ii){
  lightboxImages=projects[pi].categories[currentLang][ci].images;
  lightboxIndex=ii;
  lightboxImg.src=lightboxImages[lightboxIndex];
  lightbox.classList.add('open');
}
function closeLightbox(){lightbox.classList.remove('open');}
function navigateLightbox(dir){
  lightboxIndex+=dir;
  if(lightboxIndex<0) lightboxIndex=lightboxImages.length-1;
  if(lightboxIndex>=lightboxImages.length) lightboxIndex=0;
  lightboxImg.src=lightboxImages[lightboxIndex];
}

document.addEventListener('keydown',function(e){
  if(lightbox.classList.contains('open')){
    if(e.key==='Escape') closeLightbox();
    if(e.key==='ArrowLeft') navigateLightbox(-1);
    if(e.key==='ArrowRight') navigateLightbox(1);
  } else if(isDetailOpen && e.key==='Escape') closeDetail();
});
lightbox.addEventListener('click',function(e){if(e.target===lightbox) closeLightbox();});

/* ===== LANGUAGE ===== */
langToggle.addEventListener('click',function(){
  currentLang=currentLang==='tr'?'en':'tr';
  langToggle.textContent=currentLang==='tr'?'EN':'TR';
  document.documentElement.lang=currentLang;
  var els=document.querySelectorAll('[data-tr]');
  for(var i=0;i<els.length;i++){
    var el=els[i], txt=el.getAttribute('data-'+currentLang);
    if(txt){
      var sp=el.querySelector('span');
      if(sp && el.classList.contains('explore-btn')) sp.textContent=txt;
      else el.textContent=txt;
    }
  }
  if(isDetailOpen && currentProject>=0) openDetail(currentProject);
});

/* ===== FIREFLY CURSOR ===== */
(function(){
  var isTouchDevice='ontouchstart' in window;
  if(isTouchDevice) return;

  var fly=document.createElement('div');
  fly.className='firefly';
  document.body.appendChild(fly);

  var trails=[];
  for(var i=0;i<5;i++){
    var t=document.createElement('div');
    t.className='firefly-trail';
    t.style.opacity='0';
    document.body.appendChild(t);
    trails.push({el:t,x:0,y:0});
  }

  var mx=0,my=0,fx=0,fy=0;
  var hoverEls='a,button,.project-image-wrapper,.gallery-item,.palette-dot,.explore-btn,.contact-link,.lang-toggle,.tab-btn,.detail-close,.lightbox-close,.lightbox-nav,.menu-btn,.nav-link,.nav-sublink';

  document.addEventListener('mousemove',function(e){
    mx=e.clientX;my=e.clientY;
  });

  document.addEventListener('mouseover',function(e){
    if(e.target.closest(hoverEls)) fly.classList.add('hover');
    else fly.classList.remove('hover');
  });

  function tick(){
    fx+=(mx-fx)*0.18;
    fy+=(my-fy)*0.18;
    fly.style.left=fx+'px';
    fly.style.top=fy+'px';

    for(var i=trails.length-1;i>0;i--){
      trails[i].x=trails[i-1].x;
      trails[i].y=trails[i-1].y;
    }
    trails[0].x=fx;
    trails[0].y=fy;

    for(var j=0;j<trails.length;j++){
      var tr=trails[j];
      tr.el.style.left=tr.x+'px';
      tr.el.style.top=tr.y+'px';
      tr.el.style.opacity=(0.4-j*0.08).toString();
      tr.el.style.width=(8-j*1)+'px';
      tr.el.style.height=(8-j*1)+'px';
    }
    requestAnimationFrame(tick);
  }
  tick();
})();

/* ===== NAV DRAWER ===== */
var menuBtn=document.getElementById('menuBtn');
var navDrawer=document.getElementById('navDrawer');
var navOverlay=document.getElementById('navOverlay');
var projectsToggle=document.getElementById('projectsToggle');
var navSublinks=document.getElementById('navSublinks');

function openNav(){
  navDrawer.classList.add('open');
  navOverlay.classList.add('open');
  menuBtn.classList.add('open');
}
function closeNav(){
  navDrawer.classList.remove('open');
  navOverlay.classList.remove('open');
  menuBtn.classList.remove('open');
}
menuBtn.addEventListener('click',function(){
  if(navDrawer.classList.contains('open')) closeNav();
  else openNav();
});

projectsToggle.addEventListener('click',function(){
  this.classList.toggle('expanded');
  navSublinks.classList.toggle('open');
});

function navTo(sectionId){
  closeNav();
  isDetailOpen=false;
  projectDetail.classList.remove('open');
  document.body.style.overflow='';
  setTimeout(function(){
    var el=document.getElementById(sectionId);
    if(el) el.scrollIntoView({behavior:'smooth'});
  },350);
}

function navToProject(idx){
  closeNav();
  var sTop=horizontalSpacer.offsetTop;
  var sH=parseFloat(horizontalSpacer.style.height)||0;
  var scrollTarget=sTop+(idx/totalCards*0.75)*sH;
  setTimeout(function(){
    window.scrollTo({top:scrollTarget,behavior:'smooth'});
  },350);
}

/* Dil toggle'da drawer içi linkleri de güncelle */
langToggle.addEventListener('click',function(){
  var drawerLinks=navDrawer.querySelectorAll('[data-tr]');
  for(var i=0;i<drawerLinks.length;i++){
    var el=drawerLinks[i];
    var txt=el.getAttribute('data-'+currentLang);
    if(txt) el.textContent=txt;
  }
});
