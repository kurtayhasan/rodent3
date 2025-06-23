// Drawer Toggle
const navbar    = document.querySelector('.navbar');
const toggleBtn = document.querySelector('.menu-toggle');
const overlay   = document.querySelector('.nav-overlay');

toggleBtn.addEventListener('click', () => navbar.classList.toggle('nav-open'));
overlay.addEventListener('click', () => navbar.classList.remove('nav-open'));

// Smooth Scroll (desktop + mobile)
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    navbar.classList.remove('nav-open');
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Slider
const slides = document.querySelector('.slides');
const imgs   = document.querySelectorAll('.slides img');
let idx = 0;

function showNext() {
  idx = (idx + 1) % imgs.length;
  slides.style.transform = `translateX(-${idx * 100}%)`;
}
setInterval(showNext, 5000);
