const menuButton = document.querySelector('.menu-button');
const dropdownMenu = document.querySelector('.dropdown-menu');

menuButton.addEventListener('click', (e) => {
  e.stopPropagation();
  const isOpen = dropdownMenu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', isOpen);
});

// close when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.menu-wrapper')) {
    dropdownMenu.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }
});

// close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    dropdownMenu.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }
});