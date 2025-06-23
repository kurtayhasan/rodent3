// Drawer toggle
const header = document.querySelector('header.navbar');
document.querySelector('.menu-toggle').addEventListener('click', () => {
  header.classList.toggle('nav-open');
});
document.querySelector('.overlay').addEventListener('click', () => {
  header.classList.remove('nav-open');
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      document.querySelector('header.navbar').classList.remove('nav-open');
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Hero slider
const slides = document.querySelector('.slides');
const total = slides.children.length;
let idx = 0;

function nextSlide() {
  idx = (idx + 1) % total;
  slides.style.transform = `translateX(-${idx * 100}%)`;
}
setInterval(nextSlide, 5000);
