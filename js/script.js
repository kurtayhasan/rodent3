// Prevent body scroll when offcanvas is open
UIkit.util.on('#offcanvas-nav', 'beforeshow', () => {
  document.body.style.overflow = 'hidden';
});
UIkit.util.on('#offcanvas-nav', 'beforehide', () => {
  document.body.style.overflow = '';
});
const menuToggle = document.querySelector('.menu-toggle');
const body = document.body;
const navLinks = document.querySelectorAll('.nav-mobile a');

menuToggle.addEventListener('click', () => {
  body.classList.toggle('nav-open');
});

// Mobil menüdeki bir bağlantıya tıklandığında menüyü kapat
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    body.classList.remove('nav-open');
  });
});
