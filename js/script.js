// Mobil menü aç/kapa
const body = document.body;
const toggle = document.querySelector('.menu-toggle');
const overlay = document.querySelector('.overlay');

toggle.addEventListener('click', () => {
  body.classList.toggle('nav-open');
});

// Overlay’a tıklayınca kapat
overlay.addEventListener('click', () => {
  body.classList.remove('nav-open');
});

// Slider otomatik dönsün
const slides = document.querySelector('.slides');
let idx = 0;
const total = document.querySelectorAll('.slide').length;

setInterval(() => {
  idx = (idx + 1) % total;
  slides.style.transform = `translateX(-${idx * 100}%)`;
}, 5000);
