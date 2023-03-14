const hamburgerIcon = document.querySelector(".hamburger-icon");
const mobileNav = document.querySelector(".mobile-nav");
const signupBtn = document.querySelector(".signup-btn");
const loginBtn = document.querySelector(".login-btn");
const signupModal = document.querySelector(".signup-modal");
const loginModal = document.querySelector(".login-modal");

hamburgerIcon.addEventListener("click", function () {
  hamburgerIcon.classList.toggle("active");
  hamburgerIcon.classList.toggle("transform-white");
  mobileNav.classList.toggle("show-nav");
});

// signup form event listener
signupBtn.addEventListener("click", function (e) {
  e.preventDefault();
  signupModal.classList.toggle("active");

  signupModal.innerHTML = `
  <div class="signup-modal-box">
  <h3>🇳🇴 🇳🇴 🇳🇴 🇳🇴 🇳🇴</h3>
  <button class="close-signup-modal">X</button>
        <form>
            <div class="container">
            <h2>Sign up to get the best hiking deals!</h2>
            <label for="username"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="username" required>
            
            <label for="email"><b>Email</b></label>
            <input type="email" placeholder="Enter Email" name="email" required>
            
            <label for="password"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="password" required>
            
            <label for="confirm-password"><b>Confirm Password</b></label>
            <input type="password" placeholder="Confirm Password" name="confirm-password" required>
            
            <input type="submit" value="Sign Up">
            </div>
        </form>
    </div>
`;

  document
    .querySelector(".close-signup-modal")
    .addEventListener("click", function () {
      signupModal.classList.toggle("active");
    });
});

// login form event listener
loginBtn.addEventListener("click", function (e) {
  e.preventDefault();
  loginModal.classList.toggle("active");

  loginModal.innerHTML = `
  <div class="login-modal-box">
  <button class="close-login-modal">X</button>
    <form>
        <h2>Login Form</h2>
        <label for="username">Username:</label>
        <input
        type="text"
        id="username"
        name="username"
        placeholder="Enter your username"
        />

        <label for="password">Password:</label>
        <input
        type="password"
        id="password"
        name="password"
        placeholder="Enter your password"
        />

        <input type="submit" value="Login" />
    </form>
</div>
  `;

  document
    .querySelector(".close-login-modal")
    .addEventListener("click", function () {
      loginModal.classList.toggle("active");
    });
});
