// Movimiento medido: las tarjetas y secciones aparecen suavemente al entrar en pantalla.
// El formulario se vuelve a dibujar seguido (cada clic, cada captura): una sección que ya apareció no vuelve a animarse.
(function(){
  // barra amarilla de progreso bajo el encabezado (como en ideamia.es)
  const prog = () => { const b=document.getElementById("progress"); if(!b) return; const h=document.documentElement; const max=h.scrollHeight-h.clientHeight; b.style.width = (max>0 ? Math.min(100, h.scrollTop/max*100) : 0) + "%"; };
  addEventListener("scroll", prog, {passive:true}); addEventListener("resize", prog);
  document.addEventListener("DOMContentLoaded", prog);
  const reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  if(reduce || !("IntersectionObserver" in window)) return;
  const vistos = new Set();
  const clave = el => el.dataset.sec ? "sec-"+el.dataset.sec+"-"+(document.getElementById("tipoSeg")?.querySelector("input:checked")?.value||"") : (el.id ? "id-"+el.id : null);
  const io = new IntersectionObserver(entries=>{
    for(const e of entries){ if(!e.isIntersecting) continue; e.target.classList.add("in"); io.unobserve(e.target); const k=clave(e.target); if(k) vistos.add(k); }
  }, {rootMargin:"0px 0px -6% 0px", threshold:0.04});
  function preparar(el){
    if(el.classList.contains("fx")) return;
    const k = clave(el);
    el.classList.add("fx");
    if(k && vistos.has(k)){ el.classList.add("now","in"); requestAnimationFrame(()=>el.classList.remove("now")); return; }
    io.observe(el);
  }
  function barrer(root){ (root||document).querySelectorAll(".card, section.section").forEach(preparar); }
  document.addEventListener("DOMContentLoaded", ()=>{
    barrer();
    new MutationObserver(muts=>{ for(const m of muts) for(const n of m.addedNodes){ if(n.nodeType!==1) continue; if(n.matches(".card, section.section")) preparar(n); barrer(n); } })
      .observe(document.body, {childList:true, subtree:true});
  });
})();
