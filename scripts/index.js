const burgerIcon = document.getElementById("burger-icon");
const navMenu = document.getElementById("nav-menu");
const closeBtn = document.querySelector(".close-btn");
const chevron = document.querySelector(".chevron");
const chevronBtn = document.querySelector(".show-more-speakers");

burgerIcon.addEventListener("click", () => {
  navMenu.style.transform = "translateX(0)";
  document.body.style.overflow = "hidden";
});

closeBtn.addEventListener("click", () => {
  navMenu.style.transform = "translateX(-100%)";
  document.body.style.overflow = "scroll";
});

chevronBtn.addEventListener("click", () => {
  if (chevronBtn.classList.contains("active")) {
    chevron.style.height = "40rem";
    chevron.style.overflow = "hidden";
    chevronBtn.classList.remove("active");
  } else {
    chevron.style.height = "auto";
    chevron.style.overflow = "visible";
    chevronBtn.classList.add("active");
  }
});
