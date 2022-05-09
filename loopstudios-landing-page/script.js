const mobileMenu = document.querySelector(".page-header__mobile");
const closeBtn = document.querySelector(".side-nav__closebtn");

mobileMenu.addEventListener("click", openNav);
closeBtn.addEventListener("click", closeNav);

function openNav() {
  document.querySelector(".side-nav").style.width = "100%";
  document.querySelector(".side-nav").style.right = "0";
}

function closeNav() {
  document.querySelector(".side-nav").style.width = "0";
  document.querySelector(".side-nav").style.right = "-9999px";
}