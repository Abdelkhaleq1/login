const email = document.getElementById("email");
const password = document.getElementById("password");
const check = document.getElementById("check");
const passAndEmailChk = document.getElementById("checkEP");
const inputsCheck = document.getElementById("inputsCheck");
const signupBtn = document.getElementById("signup");
const loginBtn = document.getElementById("login");
const logoutBtn = document.getElementById("logout");

let users = [];

function logout() {
  window.location = "/index.html";
}

loginBtn.addEventListener("click", function () {
  login();
});

if (localStorage.getItem("usersContainer") !== null) {
  users = JSON.parse(localStorage.getItem("usersContainer"));
}
function isEmailExist(email) {
  return users.some((user) => user.email === email);
}
function isPasswordExist(password) {
  return users.some((user) => user.password === password);
}

function login() {
  if (email.value !== "" || password.value !== "") {
    if (isPasswordExist(password.value) && isEmailExist(email.value)) {
      window.location = "./home.html";
    } else {
      inputsCheck.classList.add("d-none");
      passAndEmailChk.classList.remove("d-none");
    }
  }
  if (email.value == "" || password.value == "") {
    inputsCheck.classList.remove("d-none");
    passAndEmailChk.classList.add("d-none");
  }
  clearForm();
}

function sayWelcome() {
  console.log(users);
  let text = `
  <h1 class="fw-bolder fs-1">Welcome,</h1>
  <p class="fw-bold fs-1">${users}</p>`;
  document.getElementById("home").innerHTML = text;
}

function clearForm() {
  email.value = null;
  password.value = null;
  // check.classList.add("d-none")
  // inputsCheck.classList.add("d-none")
  // succAlert.classList.add("d-none")
}
