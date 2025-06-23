document.addEventListener('DOMContentLoaded', () => {
  // ——————————————————————————————
  // 1) Mobil Menü & Overlay
  // ——————————————————————————————
  const menuToggle = document.querySelector('.menu-toggle');
  const overlay    = document.querySelector('.overlay');

  menuToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
  });

  overlay.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  });

  // ——————————————————————————————
  // 2) Ana Slider (otomatik kayan)
  // ——————————————————————————————
  const slidesContainer = document.querySelector('.slides');
  const slides          = document.querySelectorAll('.slide');
  let currentIndex      = 0;
  const slideCount      = slides.length;
  const intervalTime    = 5000; // ms

  // Slider’ı istediğimiz slayta kaydır
  function goToSlide(index) {
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
  }

  // Bir sonraki slayta geç
  function nextSlide() {
    currentIndex = (currentIndex + 1) % slideCount;
    goToSlide(currentIndex);
  }

  // Otomatik döngüyü başlat
  let slideInterval = setInterval(nextSlide, intervalTime);

  // Fare slaytın üstündeyken duraklat, çıkınca devam et
  slidesContainer.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
  });
  slidesContainer.addEventListener('mouseleave', () => {
    slideInterval = setInterval(nextSlide, intervalTime);
  });
});
