// Smooth scroll tüm ankrajlara
document.querySelectorAll('a[href^="#"]').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(el.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Randevu formu gönderim simülasyonu
document.querySelector('#randevu form').addEventListener('submit', e => {
  e.preventDefault();
  UIkit.notification({ 
    message: 'Randevu talebiniz alındı, en kısa sürede geri dönüş yapılacaktır.', 
    status: 'success' 
  });
  e.target.reset();
});
