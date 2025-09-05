
document.addEventListener('DOMContentLoaded', ()=>{
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('header nav a').forEach(a=>{
    if(a.getAttribute('href') === path){ a.classList.add('active'); }
  });
});
