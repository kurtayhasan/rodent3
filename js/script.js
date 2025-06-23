document.addEventListener('DOMContentLoaded', function() {
  // Smooth scroll & mobil menüyü otomatik kapatma
  const links = document.querySelectorAll('.uk-navbar-nav a, .uk-nav-primary a');
  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const href = link.getAttribute('href');
      if (href.startsWith('#')) {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
        // Offcanvas varsa kapat
        const offcanvasEl = document.querySelector('#offcanvas-nav');
        if (offcanvasEl && UIkit) {
          UIkit.offcanvas(offcanvasEl).hide();
        }
      }
    });
  });
});
