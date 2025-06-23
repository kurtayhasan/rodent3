// slider elementleri
const slides = document.querySelector('.slides');
const imgs   = document.querySelectorAll('.slides img');
const total  = imgs.length;

// slides container genişliğini ayarla
slides.style.width = `${total * 100}%`;
// her görselin genişliğini eşit yap
imgs.forEach(img => img.style.width = `${100 / total}%`);

let idx = 0;
function showNext() {
  idx = (idx + 1) % total;
  slides.style.transform = `translateX(-${idx * (100 / total)}%)`;
}

// 5 saniyede bir slide değiştir
setInterval(showNext, 5000);

// menü smooth scroll
document.querySelectorAll('.navbar a').forEach(link =>
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  })
);
