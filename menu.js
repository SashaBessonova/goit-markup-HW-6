const menuBtnOpen = document.querySelector("[data-menu-open]");
const menuBtnClose = document.querySelector("[data-menu-close]");
const mobileMenu = document.querySelector("[data-menu]");

menuBtnOpen.addEventListener("click", () => {
  mobileMenu.classList.add("is-open");
});

menuBtnClose.addEventListener("click", () => {
  mobileMenu.classList.remove("is-open");
});

const menu = document.querySelector(".mobile-menu");
const menuBtn = document.querySelector(".menu-toggle");
const menuLinks = document.querySelectorAll(".mobile-menu__nav");

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("is-open");
    menuBtn.classList.remove("is-active");
  });
});
