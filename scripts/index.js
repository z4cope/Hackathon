const burgerIcon = document.getElementById('burger-icon');
const navMenu = document.getElementById('nav-menu');
const navItems = navMenu.getElementsByTagName('li');
const closeBtn = document.querySelector('.close-btn');

const fader = document.getElementById('fader');

burgerIcon.addEventListener('click', () => {
  navMenu.style.transform = 'translateX(0)';
  document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () => {
  navMenu.style.transform = 'translateX(-100%)';
  document.body.style.overflow = 'scroll';
});

document.addEventListener('DOMContentLoaded', () => {
  fader.style.transform = 'translateY(100%)';
});

Array.prototype.slice.call(navItems).forEach((item) => {
  item.addEventListener('click', () => {
    navMenu.style.transform = 'translateX(-100%)';
    document.body.style.overflow = 'scroll';
  });
});
