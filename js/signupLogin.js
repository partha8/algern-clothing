const login = document.getElementById("tab-log-in");
const signUp = document.getElementById("tab-sign-up");
const signUpPage = document.getElementById("signup");
const loginPage = document.getElementById("login");

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
