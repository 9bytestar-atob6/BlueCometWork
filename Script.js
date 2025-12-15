// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    document
      .querySelector(anchor.getAttribute('href'))
      ?.scrollIntoView({ behavior: 'smooth' });
  });
});

// Button ripple
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', e => {
    const ripple = document.createElement('span');
    ripple.style.position = 'absolute';
    ripple.style.width = ripple.style.height = '100px';
    ripple.style.background = 'rgba(255,255,255,0.3)';
    ripple.style.borderRadius = '50%';
    ripple.style.left = `${e.offsetX - 50}px`;
    ripple.style.top = `${e.offsetY - 50}px`;
    ripple.style.transform = 'scale(0)';
    ripple.style.transition = 'transform 0.6s, opacity 1s';

    btn.appendChild(ripple);

    requestAnimationFrame(() => {
      ripple.style.transform = 'scale(4)';
      ripple.style.opacity = '0';
    });

    setTimeout(() => ripple.remove(), 1000);
  });
});
