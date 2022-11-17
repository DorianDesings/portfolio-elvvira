const menuElement = document.getElementById('menu');
const menuIconElement = document.getElementById('menu-icon');
const menuCloseElement = document.getElementById('menu-close');

const menuWorksElement = document.getElementById('menu-works');

const submenuElement = document.getElementById('submenu');
const submenuBackElement = document.getElementById('submenu-back');

menuIconElement.addEventListener('click', () => {
  menuElement.classList.add('menu--show');
  menuCloseElement.classList.add('menu-close--show');
});

menuCloseElement.addEventListener('click', () => {
  menuCloseElement.classList.remove('menu-close--show');
  menuElement.classList.remove('menu--show');
  submenuElement.classList.remove('submenu--show');
});

menuWorksElement.addEventListener('click', () => {
  submenuElement.classList.add('submenu--show');
});

submenuBackElement.addEventListener('click', ev => {
  ev.stopPropagation();
  submenuElement.classList.remove('submenu--show');
});
