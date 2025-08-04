// Animation for fade-in hero, counters, and section reveals
window.addEventListener("DOMContentLoaded", function () {
  // Animate hero content
  setTimeout(() => {
    document.querySelector('.hero-content').classList.add('fade-in');
  }, 350);

  // Animated counters in About
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    let count = 0;
    const step = Math.max(1, Math.floor(target / 60));
    function update() {
      count += step;
      if (count >= target) {
        counter.textContent = target.toLocaleString();
        counter.classList.add('bounce-finish');
      } else {
        counter.textContent = count.toLocaleString();
        requestAnimationFrame(update);
      }
    }
    update();
  });

  // Section reveal on scroll
  const revealSections = document.querySelectorAll('.section-reveal');
  const revealOnScroll = () => {
    for (let sec of revealSections) {
      const top = sec.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) sec.classList.add('visible');
    }
  };
  revealOnScroll();
  window.addEventListener('scroll', revealOnScroll);

  // Player card hover for touch devices (show on tap)
  document.querySelectorAll('.player-card').forEach(card => {
    card.addEventListener('touchstart', function(e){
      document.querySelectorAll('.player-card').forEach(c=>c.classList.remove('show-hover'));
      card.classList.add('show-hover');
      e.stopPropagation();
    });
  });
  window.addEventListener('touchstart', function() {
    document.querySelectorAll('.player-card').forEach(c=>c.classList.remove('show-hover'));
  });
});