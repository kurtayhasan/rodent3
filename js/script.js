// Smooth scroll ve mobil menüyü kapatma
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    // Mobil menü açıksa kapat
    const nav = document.querySelector('.nav-mobile');
    if (nav && nav.classList.contains('uk-open')) {
      UIkit.toggle(nav).toggle();
    }
  });
});
