document.addEventListener('DOMContentLoaded',()=>{
  const y=document.getElementById('year');
  if(y) y.textContent=new Date().getFullYear();

  // Simple intersection observer to add in-view class for animated elements
  const animated = document.querySelectorAll('.animate');
  if(animated.length){
    const io = new IntersectionObserver((entries, obs)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add('in-view');
          obs.unobserve(entry.target);
        }
      });
    },{threshold:0.12});
    animated.forEach(el=>io.observe(el));
  }
  
  // Parallax / tilt effect for hero device mock
  const mock = document.querySelector('.device-mock');
  if(mock){
    let raf = null;
    const handleMove = (clientX, clientY) => {
      const rect = mock.getBoundingClientRect();
      const x = (clientX - rect.left) / rect.width - 0.5; // -0.5 .. 0.5
      const y = (clientY - rect.top) / rect.height - 0.5;
      const rotateY = +(x * 18).toFixed(2);
      const rotateX = +(-y * 10).toFixed(2);
      mock.style.transform = `perspective(900px) translateZ(6px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };
    const onMove = (e)=>{
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      if(raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(()=>handleMove(clientX, clientY));
    };
    mock.addEventListener('mousemove', onMove);
    mock.addEventListener('touchmove', onMove, {passive:true});
    mock.addEventListener('mouseleave', ()=>{ mock.style.transform = ''; });
    mock.addEventListener('touchend', ()=>{ mock.style.transform = ''; });
  }

  // Card tilt on pointer move
  const cards = document.querySelectorAll('.card');
  cards.forEach(card=>{
    let raf2 = null;
    const rectStore = ()=>card.getBoundingClientRect();
    const onPointer = (e)=>{
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      const rect = rectStore();
      const x = (clientX - rect.left) / rect.width - 0.5;
      const y = (clientY - rect.top) / rect.height - 0.5;
      const ry = +(x * 7).toFixed(2);
      const rx = +(-y * 5).toFixed(2);
      if(raf2) cancelAnimationFrame(raf2);
      raf2 = requestAnimationFrame(()=>{
        card.style.transform = `perspective(700px) rotateX(${rx}deg) rotateY(${ry}deg)`;
      });
    };
    const reset = ()=>{ card.style.transform = ''; };
    card.addEventListener('mousemove', onPointer);
    card.addEventListener('touchmove', onPointer, {passive:true});
    card.addEventListener('mouseleave', reset);
    card.addEventListener('touchend', reset);
  });
});
