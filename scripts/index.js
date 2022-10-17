const burgerIcon = document.getElementById("burger-icon");
const navMenu = document.getElementById("nav-menu");
const closeBtn = document.querySelector(".close-btn");

burgerIcon.addEventListener("click", () => {
  navMenu.style.transform = "translateX(0)";
  document.body.style.overflow = "hidden";
});

closeBtn.addEventListener("click", () => {
  navMenu.style.transform = "translateX(-100%)";
  document.body.style.overflow = "scroll";
});
