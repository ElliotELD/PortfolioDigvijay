function createParticle() {
  const particle = document.createElement('div');
  particle.className = 'particle';
  particle.style.left = Math.random() * window.innerWidth + 'px';
  particle.style.top = Math.random() * window.innerHeight + 'px';
  document.body.appendChild(particle);
  
  setTimeout(() => {
    particle.remove();
  }, 3000);
}

setInterval(createParticle, 200);
// Intersection Observer for scroll animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);
// Observe all major sections
const sections = document.querySelectorAll(`
    .introduction-container,
    .worked-with,
    .browse-my-work,
    .card-container,
    .footer
`);

sections.forEach(section => {
    observer.observe(section);
});

// Smooth scroll restoration
history.scrollRestoration = 'manual';
