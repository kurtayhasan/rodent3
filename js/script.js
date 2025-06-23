// Basit slider otomasyonu
const slides = document.querySelector('.slides');
const imgs = document.querySelectorAll('.slides img');
let idx = 0;

function showNext() {
  idx = (idx + 1) % imgs.length;
  slides.style.transform = `translateX(${-idx * window.innerWidth}px)`;
}

// Her 5 saniyede bir
setInterval(showNext, 5000);

// Menü scroll efekti
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
      .scrollIntoView({ behavior:'smooth' });
  });
});
