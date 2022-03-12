const menu = document.querySelector(".menu");

document.addEventListener("click", (e) => {
  if (e.target.matches(".icon-menu *")) {
    menu.classList.toggle("menu-active");
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY) {
    menu.classList.remove("menu-active");
  }
});

window.addEventListener("resize", () => {
  menu.classList.remove("menu-active");
});
