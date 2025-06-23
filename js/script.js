=== js/script.js ===
// Drawer Toggle
const navbar = document.querySelector('.navbar');
const toggleBtn = document.querySelector('.menu-toggle');
const overlay = document.querySelector('.nav-overlay');
toggleBtn.addEventListener('click', () => navbar.classList.toggle('nav-open'));
overlay.addEventListener('click', () => navbar.classList.remove('nav-open'));
// Smooth Scroll
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior:'smooth' });
    navbar.classList.remove('nav-open');
  });
});
// Slider
const slides = document.querySelector('.slides');
const imgs = document.querySelectorAll('.slides img');
let idx = 0;
function showNext() {
  idx = (idx + 1) % imgs.length;
  slides.style.transform = `translateX(-${idx * 100}%)`;
}
setInterval(showNext, 5000);
