const login = document.getElementById("tab-log-in");
const signUp = document.getElementById("tab-sign-up");
const signUpPage = document.getElementById("signup");
const loginPage = document.getElementById("login");

const setPassword = document.getElementById("set-password");
const confirmPassword = document.getElementById("confirm-password");
const showPassword = document.getElementById("show-password");

signUp.addEventListener("click", () => {
  signUpPage.classList.remove("hidden");
  signUpPage.classList.add("show");
  loginPage.classList.remove("show");
  loginPage.classList.add("hidden");

  login.classList.remove("active");
  signUp.classList.add("active");
});

login.addEventListener("click", () => {
  loginPage.classList.remove("hidden");
  loginPage.classList.add("show");
  signUpPage.classList.remove("show");
  signUpPage.classList.add("hidden");

  login.classList.add("active");
  signUp.classList.remove("active");
});

showPassword.addEventListener("click", () => {
  if (setPassword.type === "password" && confirmPassword.type === "password") {
    setPassword.type = "text";
    confirmPassword.type = "text";
  } else {
    setPassword.type = "password";
    confirmPassword.type = "password";
  }
});
