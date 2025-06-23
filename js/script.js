// Drawer toggle
const header = document.querySelector('header.navbar');
document.querySelector('.menu-toggle').addEventListener('click', () => {
  header.classList.toggle('nav-open');
});
document.querySelector('.overlay').addEventListener('click', () => {
  header.classList.remove('nav-open');
});

// Smooth scroll tüm <a href="#..."> linklerde
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const tgt = document.querySelector(a.getAttribute('href'));
    if (tgt) {
      e.preventDefault();
      header.classList.remove('nav-open');
      tgt.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Hero slider
const slides = document.querySelector('.slides');
const total  = slides.children.length;
let idx = 0;
setInterval(() => {
  idx = (idx + 1) % total;
  slides.style.transform = `translateX(-${idx * 100}%)`;
}, 5000);
