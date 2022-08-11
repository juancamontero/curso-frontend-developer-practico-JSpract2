const email = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

//crear listener al click del mail

email.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}
