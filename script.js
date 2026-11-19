const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const root=document.documentElement,reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
$('#yr').textContent=new Date().getFullYear();
/* Marquee: duplicate the logos once so the loop is seamless */
const tr=$('#track');$$('.lg',tr).forEach(n=>{const c=n.cloneNode(true);c.setAttribute('aria-hidden','true');$$('img',c).forEach(i=>i.alt='');tr.appendChild(c)});
/* Scroll reveals */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.14,rootMargin:'0px 0px -6% 0px'});
$$('.rv').forEach(el=>io.observe(el));
/* Progress bar + gentle parallax */
let tick=false;
function onScroll(){const y=scrollY,max=root.scrollHeight-innerHeight;root.style.setProperty('--sp',max>0?(y/max).toFixed(4):0);if(!reduce)root.style.setProperty('--sy',y);tick=false}
addEventListener('scroll',()=>{if(!tick){tick=true;requestAnimationFrame(onScroll)}},{passive:true});onScroll();
/* Copy email */
$('#copy').addEventListener('click',async()=>{
  const b=$('#copy'),t='abalosmanuel123@gmail.com';let ok=false;
  try{await navigator.clipboard.writeText(t);ok=true}catch(e){try{const a=document.createElement('textarea');a.value=t;a.style.position='fixed';a.style.opacity='0';document.body.appendChild(a);a.select();ok=document.execCommand('copy');a.remove()}catch(_){}}
  b.textContent=ok?'Copied':'Copy the email below';setTimeout(()=>b.textContent='Copy email',2200);
});
