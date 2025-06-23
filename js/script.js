const menuToggle = document.querySelector('.menu-toggle');
const overlay    = document.querySelector('.overlay');

menuToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

overlay.addEventListener('click', () => {
  document.body.classList.remove('nav-open');
});

// (Slider kodunuz burada kalabilir; eğer otomatik kaydırma vs. varsa ekleyin)
