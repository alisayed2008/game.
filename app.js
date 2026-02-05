const revealElements = document.querySelectorAll('.reveal');
const hero = document.getElementById('hero');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.2 }
);

revealElements.forEach((el) => observer.observe(el));

let lastScrollY = window.scrollY;
let shapeTimeout;

function createScrollShape() {
  const shape = document.createElement('span');
  shape.className = 'scroll-shape';
  const size = Math.random() * 14 + 10;
  shape.style.width = `${size}px`;
  shape.style.height = `${size}px`;
  shape.style.left = `${Math.random() * window.innerWidth}px`;
  shape.style.top = `${Math.random() * window.innerHeight}px`;
  const colors = ['#b095ff', '#4ef0d7', '#ff7ab6', '#f5f0ff'];
  shape.style.background = colors[Math.floor(Math.random() * colors.length)];
  document.body.appendChild(shape);
  setTimeout(() => shape.remove(), 1600);
}

function handleScroll() {
  const current = window.scrollY;
  const offset = Math.min(current / 5, 80);
  hero.style.transform = `translateY(${offset}px)`;

  if (Math.abs(current - lastScrollY) > 12) {
    createScrollShape();
    lastScrollY = current;
  }

  if (shapeTimeout) {
    clearTimeout(shapeTimeout);
  }
  shapeTimeout = setTimeout(() => {
    lastScrollY = window.scrollY;
  }, 120);
}

window.addEventListener('scroll', handleScroll, { passive: true });
window.addEventListener('load', handleScroll);
