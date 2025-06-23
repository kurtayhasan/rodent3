// Drawer menü toggle
const navbar     = document.querySelector('.navbar');
const toggleBtn  = document.querySelector('.menu-toggle');
const overlay    = document.querySelector('.nav-overlay');

// Menü aç/kapa
function toggleNav() {
  navbar.classList.toggle('nav-open');
}
toggleBtn.addEventListener('click', toggleNav);
overlay.addEventListener('click', toggleNav);

// Smooth scroll tüm menü linkleri için (desktop + mobile)
document.querySelectorAll('.desktop-nav a, .mobile-nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    toggleNav(); // mobile açıldıysa kapat
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
