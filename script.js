'use strict';
const projects={
 crm:{kicker:'BWG / INDEPENDENT DEVELOPMENT / ANDROID + IOS',title:'CRM Mobile',intro:'A mobile companion to a business CRM platform, connecting teams and workflows to business information on the go.',details:'The application brings together authenticated CRM workflows, modular screens, role-based permissions, document access, and API-connected processes. It follows the evolving web CRM system, with real-time interactions supported through Socket.IO in relevant features.',contribution:'Independently implemented the Flutter mobile application from its interface and feature structure through state management, API integration, testing, debugging, and mobile build preparation.',tags:['Android','iOS','Flutter','Dart','BLoC / Cubit','REST APIs','Clean Architecture','Socket.IO','Role-based access','Documents']},
 madaaad:{kicker:'BWG / INDEPENDENT DEVELOPMENT / ANDROID + IOS',title:'madaaad',intro:'A bilingual school-supplies shopping experience designed to make browsing and choosing products feel straightforward.',details:'Supports discovery through categories, favorites, browsing flows and custom box experiences. Designed for Arabic/English use, with navigation and responsive presentation adapted to mobile devices.',contribution:'Independently developed Flutter mobile screens, navigation, state handling, localized interface flows, and API integration across shopping experiences.',tags:['Flutter','Android / iOS','RTL / LTR','Localization','Catalog','Favorites','Custom boxes','REST APIs']},
 fish:{kicker:'BWG / INDEPENDENT DEVELOPMENT / WINDOWS DESKTOP',title:'Fish Link',intro:'Operations software that organizes distributor activity, inventory, orders, sales, and business accounts on desktop.',details:'A desktop workflow tool intended to centralize inventory and distributor transactions, including stock review, product/order details, sales-related screens and account history in a workspace format.',contribution:'Independently developed the Flutter Windows interface and application flows, including business screens, state handling, network data integration, and desktop-specific behavior.',tags:['Flutter Desktop','Windows Desktop','Inventory','Sales','Distributors','Orders','API Integration']},
 tomeyya:{kicker:'BWG / INDEPENDENT DEVELOPMENT / ANDROID + IOS',title:'Tomeyya Mobile',intro:'A restaurant mobile experience connecting customers and delivery teams with the ordering process.',details:'Customers can explore the menu, add products to a cart, select ordering options, choose addresses and follow order progress. The delivery experience supports assigned orders and fulfillment-related actions.',contribution:'Independently developed the Flutter customer and delivery experiences, including responsive UI, role-specific navigation, API integration, authentication and order-state handling.',tags:['Android','iOS','Flutter','Customer / Delivery','Cart / Checkout','Order tracking','Authentication','REST APIs','Arabic / English']},
 cashier:{kicker:'BWG / INDEPENDENT DEVELOPMENT / WINDOWS DESKTOP',title:'Tomeyya Cashier Desktop',intro:'A desktop restaurant operations system built around real cashier workflows and kitchen-to-delivery coordination.',details:'Brings together table and takeaway orders, order statuses, customer lookups, shift management, staff permissions, stock-related tools, delivery assignment, and formatted thermal receipt printing across configured printers.',contribution:'Independently developed Flutter Windows cashier workflows, permission-aware UI, order actions, receipt layouts and backend-connected data handling, including troubleshooting printer and release behavior.',tags:['Flutter Windows','Windows Desktop','POS','Order management','Permissions','Thermal printing','Shifts','Delivery assignment','REST APIs']},
 assessments:{kicker:'ARABTESTING AI / COLLABORATIVE DEVELOPMENT',title:'Psychological Assessment Platform',intro:'Structured assessment flows where the experience needs to be clear, reliable and easy to navigate.',details:'Includes multi-step assessment journeys, validations, question handling, integrated exam interfaces and API-connected results. The application work supports the flow from starting an assessment through presenting its outputs.',contribution:'Collaborated with fellow Flutter developers on feature screens, validations, backend data flows, and issues affecting exam navigation and cross-platform behavior.',tags:['Flutter','Assessments','Forms','REST APIs','Exam navigation','BLoC / Cubit']},
 scales:{kicker:'ARABTESTING AI / COLLABORATIVE DEVELOPMENT',title:'Psychological Scales Suite',intro:'Multiple structured assessment modules presented with consistent Flutter experiences and data flows.',details:'Worked on examination-related experiences and associated flows for modules including Binet, DDI, ABS, AAS7, ARS, SMD, ADHD-T, and learning-difficulty assessments. These are scale modules within assessment products, not separately claimed standalone applications.',contribution:'Contributed screens, feature integrations, result-related interfaces and debugging within an existing Flutter development team.',tags:['Flutter','Binet','DDI / ABS','AAS7 / ARS','SMD / ADHD-T','Modular features']},
 learning:{kicker:'ARABTESTING AI / COLLABORATIVE DEVELOPMENT',title:'Autism & Cognitive Learning',intro:'Playful interactive educational activities designed around cognitive skills and engagement.',details:'Experience areas include emotions, motor actions, sorting and classification, sequencing, counting, number ordering and activities such as RL1/RL2 and LSS4 cubes, with UI and some audio/speech-related features.',contribution:'Worked collaboratively on Flutter educational screens, interaction logic, animations, reusable UI and technical improvements.',tags:['Flutter','Interactive UI','Animations','Audio','Classification','Counting','Learning activities']},
 reports:{kicker:'ARABTESTING AI / COLLABORATIVE DEVELOPMENT',title:'Dynamic Reports & Documents',intro:'Making structured assessment output easier to review, access, and use.',details:'Report presentation includes score-related interfaces, detailed dynamic results, report downloads, document workflows and selected offline document access features. Report formats vary depending on the assessment context.',contribution:'Collaborated on report UI, data integration, document handling and debugging for structured reporting experiences.',tags:['Flutter','Dynamic reports','Data mapping','Downloads','Documents','Backend integration']},
 platform:{kicker:'ARABTESTING AI / COLLABORATIVE DEVELOPMENT',title:'WebView Exams & Platform Integrations',intro:'Integration and stability work that enables consistent exam experiences across supported platforms.',details:'WebView-based exam journeys need careful integration with the host application, identifiers, language, authentication and navigation. Related work also involved Android SDK/Gradle compatibility and Windows packaging or build investigation.',contribution:'Contributed integration improvements, troubleshooting and release/build fixes alongside a Flutter team.',tags:['WebView','Flutter','SDK / Gradle','Android','Windows','Integration troubleshooting']},
 bebeauty:{kicker:'BLUEZONE COMPANY / KUWAIT / FLUTTER DEVELOPMENT',title:'BeBeauty App',intro:'A commercial Flutter mobile application developed during a remote engagement with a Kuwait-based company.',details:'The work focused on delivering responsive product-facing mobile interfaces, feature flows, secure login/session handling and API-connected screens. Specific unpublished commercial details are intentionally omitted.',contribution:'Contributed Flutter UI and features, authentication and REST API integrations, and improvements to existing application code with the company team.',tags:['Flutter','Mobile UI','Responsive layout','Authentication','REST APIs','Commercial app']},
 other:{kicker:'SELECTED / FOCUSED CONTRIBUTIONS',title:'Additional Projects',intro:'Not every contribution involves building an entire application. Some work calls for focused improvements that make existing products better.',details:'Projects in this category involved redesigning or refining screens, fixing UI behavior, integrating new backend APIs, and modernizing parts of an existing application.',contribution:'Contributed to explicitly scoped UI/UX work, feature improvements and API integrations, without claiming ownership of the entire product.',tags:['Flutter UI','Refactoring','API Integration','Debugging','Responsive layouts']}
};

const progress=document.getElementById('progress');
function updateProgress(){const m=document.documentElement.scrollHeight-window.innerHeight;progress.style.width=(m>0?Math.max(0,Math.min(100,window.scrollY/m*100)):0)+'%'}
window.addEventListener('scroll',updateProgress,{passive:true});updateProgress();
const menu=document.getElementById('nav'),menuBtn=document.getElementById('menuBtn');
function closeMenu(){menu.classList.remove('open');menuBtn.setAttribute('aria-expanded','false');menuBtn.setAttribute('aria-label','Open navigation')}
menuBtn.addEventListener('click',()=>{const open=menuBtn.getAttribute('aria-expanded')!=='true';menu.classList.toggle('open',open);menuBtn.setAttribute('aria-expanded',String(open));menuBtn.setAttribute('aria-label',open?'Close navigation':'Open navigation')});
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
const cards=[...document.querySelectorAll('.project-card')];
function setFilter(btn){document.querySelectorAll('.filter').forEach(el=>{el.classList.toggle('active',el===btn);el.setAttribute('aria-pressed',String(el===btn))});const f=btn.dataset.filter;let count=0;cards.forEach(el=>{el.hidden=f!=='all'&&el.dataset.category!==f;if(!el.hidden)count++});document.getElementById('projectCount').textContent=`${count} item${count===1?'':'s'}`}
document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>setFilter(btn)));
const dialog=document.getElementById('projectModal'),closeButton=document.getElementById('closeModal');let lastFocus=null;
function setText(id,value){document.getElementById(id).textContent=value}
function openProject(id){const item=projects[id];if(!item)return;lastFocus=document.activeElement;setText('modalKicker',item.kicker);setText('modalTitle',item.title);setText('modalIntro',item.intro);setText('modalDetails',item.details);setText('modalContribution',item.contribution);document.getElementById('modalTags').replaceChildren(...item.tags.map(s=>{const span=document.createElement('span');span.textContent=s;return span}));setText('modalDisclaimer',item.kicker.includes('ARABTESTING')?'Collaborative contributions during employment at ArabTesting AI.':item.kicker.includes('BLUEZONE')?'Developed as part of the BlueZone commercial Flutter work.':id==='other'?'Scoped UI and API contributions, not complete independent products.':'Independently developed as a Flutter application at BWG Trading & Investments.');dialog.showModal();document.body.classList.add('dialog-open');closeButton.focus()}
cards.forEach(card=>card.addEventListener('click',()=>openProject(card.dataset.project)));
closeButton.addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});dialog.addEventListener('close',()=>{document.body.classList.remove('dialog-open');lastFocus?.focus()});
const revealElements=document.querySelectorAll('.reveal');if(!('IntersectionObserver' in window)||matchMedia('(prefers-reduced-motion: reduce)').matches){revealElements.forEach(el=>el.classList.add('visible'))}else{const io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}})},{threshold:.07,rootMargin:'0px 0px 40px 0px'});revealElements.forEach(el=>io.observe(el))}



// Motion edition: progressive enhancement, only on capable pointers and when motion is allowed.
document.documentElement.classList.add('js-ready');
const motionAllowed=!window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const header=document.querySelector('.site-header');
let headerTick=false;
window.addEventListener('scroll',()=>{
 if(headerTick)return;
 headerTick=true;
 requestAnimationFrame(()=>{header.classList.toggle('scrolled',window.scrollY>24);headerTick=false});
},{passive:true});
const navLinks=[...document.querySelectorAll('.main-nav a')];
const navTargets=navLinks.map(a=>document.querySelector(a.getAttribute('href'))).filter(Boolean);
if('IntersectionObserver' in window){
 const navObserver=new IntersectionObserver(entries=>{
  const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio);
  if(visible.length){const id='#'+visible[0].target.id;navLinks.forEach(a=>a.setAttribute('aria-current',String(a.getAttribute('href')===id)))}
 },{rootMargin:'-20% 0px -60% 0px',threshold:[0,.1,.3,.6]});
 navTargets.forEach(s=>navObserver.observe(s));
}
const statNumbers=[...document.querySelectorAll('.numbers-bar strong')];
function countStats(){if(!motionAllowed)return;
 statNumbers.forEach((el,index)=>{
  const raw=el.textContent.trim();const target=parseInt(raw,10);if(!Number.isFinite(target))return;
  const suffix=el.querySelector('span')?.outerHTML||'';
  const duration=1100+index*120;
  const start=performance.now();
  function frame(t){const pct=Math.min(1,(t-start)/duration);const eased=1-Math.pow(1-pct,4);const value=Math.round(eased*target);el.innerHTML=String(value).padStart(raw.match(/^0/) ? 2 : 1,'0')+suffix;if(pct<1)requestAnimationFrame(frame)}
  requestAnimationFrame(frame)
 });
}
const statSection=document.querySelector('[data-counter-section]');
if(statSection&&'IntersectionObserver' in window){
 const countObs=new IntersectionObserver(es=>{if(es.some(e=>e.isIntersecting)){countStats();countObs.disconnect()}},{threshold:.25});countObs.observe(statSection);
}
const projectCards=[...document.querySelectorAll('.project-card')];
const cardObserver='IntersectionObserver' in window?new IntersectionObserver(es=>{
 es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-inview');cardObserver.unobserve(e.target)}})
},{threshold:.09,rootMargin:'0px 0px 90px 0px'}):null;
projectCards.forEach((card,i)=>{
 card.style.setProperty('--card-delay',`${(i%3)*.09}s`);
 if(cardObserver)cardObserver.observe(card);else card.classList.add('is-inview');
});
// Re-run entry animation on filter switch only for visible cards.
document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{
 projectCards.forEach((card,i)=>{
  if(card.hidden)return;
  card.classList.remove('is-inview');card.style.setProperty('--card-delay',`${(i%3)*.055}s`);
  void card.offsetWidth;
  card.classList.add('is-inview');
 });
}));
if(motionAllowed&&window.matchMedia('(pointer:fine)').matches){
 projectCards.forEach(card=>{
  let scheduled=false;
  card.addEventListener('pointermove',e=>{
   if(scheduled)return;scheduled=true;
   requestAnimationFrame(()=>{const r=card.getBoundingClientRect();card.style.setProperty('--mouse-x',`${e.clientX-r.left}px`);card.style.setProperty('--mouse-y',`${e.clientY-r.top}px`);scheduled=false})
  },{passive:true});
 });
}
