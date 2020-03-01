let menuBtn = document.getElementById('menu-btn');
let menu = document.getElementById('menu-list');
let header = document.getElementById('header');

menuBtn.addEventListener("mouseenter", showMenu, false);
header.addEventListener("mouseleave", hideMenu, false);

function showMenu(e) {
    for (let i = 0; i < menu.children.length; i++) {
        menu.children[i].style.height = "3rem";
        menu.children[i].style.overflow = "visible";
        menu.children[i].style.opacity = "1";
        menu.style.background = "white";
    }
}
function hideMenu(e) {
    for (let i = 0; i < menu.children.length; i++) {
        menu.children[i].style.height = "0";
        menu.children[i].style.overflow = "hidden";
        menu.children[i].style.opacity = "0";
        menu.style.background = "none";
    }
}