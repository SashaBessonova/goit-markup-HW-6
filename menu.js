const menuBtnOpen = document.querySelector("[data-menu-open]");
const menuBtnClose = document.querySelector("[data-menu-close]");
const mobileMenu = document.querySelector("[data-menu]");

menuBtnOpen.addEventListener("click", () => {
  mobileMenu.classList.add("is-open"); // открываем меню
});

menuBtnClose.addEventListener("click", () => {
  mobileMenu.classList.remove("is-open"); // закрываем меню
});
