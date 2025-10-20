(function(){
  // Add year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Theme toggle: store in localStorage
  const themeToggle = document.getElementById('themeToggle');
  const root = document.documentElement;
  const stored = localStorage.getItem('site-theme');
  if(stored === 'light') root.classList.add('light');

  themeToggle.addEventListener('click', ()=>{
    const isLight = root.classList.toggle('light');
    localStorage.setItem('site-theme', isLight ? 'light' : 'dark');
  });

  // Simple contact form submit stub
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const data = new FormData(form);
    // In real site: send to serverless function or API endpoint
    alert('Thanks! Your message was (pretend) sent — ' + (data.get('email') || 'no-email'));
    form.reset();
  });

  // Lazy hover effect for project images (progressive enhancement)
  document.querySelectorAll('.project').forEach(p => {
    p.addEventListener('mouseover', ()=> p.style.transform = 'translateY(-6px)');
    p.addEventListener('mouseout', ()=> p.style.transform = 'translateY(0)');
  });
})();
