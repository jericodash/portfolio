const toggleMenu = document.getElementById('toggle-menu');
const fullScreenMenu = document.getElementById('full-screen-menu');

toggleMenu.addEventListener('click', () => {
    fullScreenMenu.classList.toggle('menuWord');
});