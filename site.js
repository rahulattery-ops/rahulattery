/* Rahul Attery portfolio, small progressive enhancements. No dependencies. */
(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Scroll reveal */
  var items = document.querySelectorAll('.rv');
  if (reduce || !('IntersectionObserver' in window)) {
    for (var i = 0; i < items.length; i++) items[i].classList.add('in');
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });
    for (var j = 0; j < items.length; j++) io.observe(items[j]);
  }

  /* Highlight the nav link for the section in view */
  var sections = document.querySelectorAll('section[id]');
  var navmap = {};
  document.querySelectorAll('.navlinks a[href^="#"]').forEach(function (a) {
    navmap[a.getAttribute('href').slice(1)] = a;
  });
  if (sections.length && 'IntersectionObserver' in window) {
    var so = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        Object.keys(navmap).forEach(function (k) { navmap[k].classList.remove('on'); });
        if (navmap[e.target.id]) navmap[e.target.id].classList.add('on');
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    for (var k = 0; k < sections.length; k++) so.observe(sections[k]);
  }
})();
