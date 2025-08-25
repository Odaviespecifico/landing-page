// Configurações iniciais
const email = 'davilucastwanderley@gmail.com'; // Troque pelo seu e-mail real
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

function copy(text) {
  navigator.clipboard.writeText(text).then(() => {
    toast('E-mail copiado!');
  });
}

document.getElementById('copyEmail')?.addEventListener('click', () => copy(email));
document.getElementById('copyEmail2')?.addEventListener('click', () => copy(email));

// Toast minimalista
function toast(msg) {
  const el = document.createElement('div');
  el.textContent = msg;
  el.style.position = 'fixed';
  el.style.bottom = '18px';
  el.style.left = '50%';
  el.style.transform = 'translateX(-50%)';
  el.style.background = 'linear-gradient(135deg, var(--pink-600), var(--pink-400))';
  el.style.color = 'white';
  el.style.padding = '10px 16px';
  el.style.borderRadius = '999px';
  el.style.boxShadow = 'var(--shadow)';
  el.style.zIndex = 1000;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1800);
}

// Animação de entrada suave
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.animate([
        { opacity: 0, transform: 'translateY(10px)' },
        { opacity: 1, transform: 'translateY(0)' }
      ], { duration: 450, easing: 'ease-out', fill: 'forwards' });
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.card, .pill').forEach(el => observer.observe(el));


// Carrossel
let carrossel = document.querySelector('.carrossel')

