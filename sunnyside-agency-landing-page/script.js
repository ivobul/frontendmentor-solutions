const hamburgerMenu = document.querySelector(".hamburger-menu");
const nav = document.querySelector(".page-header__nav");

hamburgerMenu.addEventListener("click", () => {
  nav.classList.toggle("active");
});