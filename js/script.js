// Sayfa içi linkler için smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    // Offcanvas açıksa kapat
    const offcanvas = UIkit.offcanvas('#offcanvas-nav');
    if (offcanvas && offcanvas.isActive()) {
      offcanvas.hide();
    }
    // Smooth scroll
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
