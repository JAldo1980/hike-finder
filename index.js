const hamburgerIcon = document.querySelector(".hamburger-icon");
const mobileNav = document.querySelector(".mobile-nav");

hamburgerIcon.addEventListener("click", function () {
  hamburgerIcon.classList.toggle("active");
  hamburgerIcon.classList.toggle("transform-white");
  mobileNav.classList.toggle("show-nav");
});
