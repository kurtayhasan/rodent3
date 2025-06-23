// Rodent Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const burger = document.querySelector('.burger');
  const nav    = document.querySelector('.nav');
  burger.addEventListener('click', () => {
    nav.classList.toggle('active');
  });

  // Close mobile menu when a link is clicked
  document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
      if (nav.classList.contains('active')) {
        nav.classList.remove('active');
      }
    });
  });

  // Telephone input mask (+90 XXX XXX XXX)
  const telInput = document.querySelector('input[type="tel"]');
  if (telInput) {
    telInput.addEventListener('input', function(e) {
      let digits = e.target.value.replace(/\D/g, '').slice(0,10);
      let formatted = '+90 ';
      if (digits.length > 1) {
        formatted += digits.slice(1,4) + ' ';
      }
      if (digits.length >= 5) {
        formatted += digits.slice(4,7) + ' ';
      }
      if (digits.length >= 8) {
        formatted += digits.slice(7,10);
      }
      e.target.value = formatted;
    });
  }

  // Initialize UIkit Lightbox on gallery
  if (typeof UIkit !== 'undefined' && UIkit.lightbox) {
    UIkit.lightbox('.gallery-grid a');
  }
});
