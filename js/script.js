// Prevent body scroll when offcanvas is open
UIkit.util.on('#offcanvas-nav', 'beforeshow', () => {
  document.body.style.overflow = 'hidden';
});
UIkit.util.on('#offcanvas-nav', 'beforehide', () => {
  document.body.style.overflow = '';
});
