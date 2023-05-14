const container = document.querySelector('html');
const toggleButtonNavbar = document.querySelector('#toggle-desktop');
const toggleButtonTabBar = document.querySelector('#toggle-sm');


toggleButtonNavbar.addEventListener('click', toggleDarkmode);
toggleButtonTabBar.addEventListener('click', toggleDarkmode);


function toggleDarkmode () {
    container.classList.toggle('dark');
}
