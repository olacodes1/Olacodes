const menuBtn = document.querySelector(".menu");
const menu = document.querySelector("nav");
const navLink = document.querySelector(".nav-links");
const navList = document.querySelectorAll(".nav-item");

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    navLink.classList.add("show");
    navList.forEach((item) => {
      item.classList.add("show");
    });

    // Set menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    navLink.classList.remove("show");
    navList.forEach((item) => {
      item.classList.remove("show");
    });

    // Set menu state
    showMenu = false;
  }
}
