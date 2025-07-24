// script.js

// Плавная прокрутка
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);
    window.scrollTo({
      top: target.offsetTop - 20,
      behavior: 'smooth'
    });
  });
});

// Темная тема
const htmlRoot = document.getElementById('html-root');
const themeBtn = document.getElementById('theme-btn');

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  htmlRoot.setAttribute('data-theme', savedTheme);
}

themeBtn.addEventListener('click', () => {
  const current = htmlRoot.getAttribute('data-theme');
  const newTheme = current === 'dark' ? 'light' : 'dark';
  htmlRoot.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});
