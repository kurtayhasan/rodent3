// Offcanvas içindeki linke tıklayınca otomatik kapansın:
document.querySelectorAll('#offcanvas-nav .uk-nav a').forEach(link => {
  link.addEventListener('click', () => {
    UIkit.offcanvas('#offcanvas-nav').hide();
  });
});
