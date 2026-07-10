// Intersection Observer for reveal animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => {
  observer.observe(el);
});

// Modal functionality
const modal = document.querySelector('.modal');
const modalImg = modal.querySelector('img');
const modalClose = modal.querySelector('.modal-close');
const imageOpenBtns = document.querySelectorAll('.image-open');

imageOpenBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const imagePath = btn.dataset.image;
    modalImg.src = imagePath;
    modal.classList.add('open');
    document.body.classList.add('modal-open');
  });
});

modalClose.addEventListener('click', () => {
  modal.classList.remove('open');
  document.body.classList.remove('modal-open');
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('open');
    document.body.classList.remove('modal-open');
  }
});

// Navigation menu toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuBtn.setAttribute('aria-expanded', 
    menuBtn.getAttribute('aria-expanded') === 'false' ? 'true' : 'false'
  );
});

// Close menu when link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    menuBtn.setAttribute('aria-expanded', 'false');
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
