const chevron = document.querySelector(".chevron");
const chevronBtn = document.querySelector(".show-more-speakers");

chevronBtn.addEventListener("click", () => {
  if (chevronBtn.classList.contains("active")) {
    chevron.style.height = "40rem";
    chevron.style.overflow = "hidden";
    chevronBtn.classList.remove("active");
    chevronBtn.getElementsByTagName("span")[0].innerText = "MORE";
  } else {
    chevron.style.height = "auto";
    chevron.style.overflow = "visible";
    chevronBtn.classList.add("active");
    chevronBtn.getElementsByTagName("span")[0].innerText = "LESS";
  }
});
