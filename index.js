const hamburgerIcon = document.querySelector(".hamburger-icon");
const mobileNav = document.querySelector(".mobile-nav");
const signupBtn = document.querySelector(".signup-btn");
const loginBtn = document.querySelector(".login-btn");

hamburgerIcon.addEventListener("click", function () {
  hamburgerIcon.classList.toggle("active");
  hamburgerIcon.classList.toggle("transform-white");
  mobileNav.classList.toggle("show-nav");
});

signupBtn.addEventListener("click", function () {
  console.log("signup click!");
});

loginBtn.addEventListener("click", function () {
  console.log("login click!");
});
