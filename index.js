const userName = document.getElementById("userName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const alertv = document.getElementById("alert");
const check = document.getElementById("check");
const passAndEmailChk = document.getElementById("checkEP");
const inputsCheck = document.getElementById("inputsCheck");
const signupBtn = document.getElementById("signup");
const loginBtn = document.getElementById("login");
const succAlert = document.getElementById("success");

let users = [];
userName.addEventListener("input", function () {
  validation(this);
});
email.addEventListener("input", function () {
  validation(this);
});

signupBtn.addEventListener("click", function () {
  signup();
});
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

console.log(users);

function signup() {
  if (
    validation(userName) == true &&
    email.value !== "" &&
    password.value !== ""
  ) {
    if (!isEmailExist(email.value)) {
      let user = {
        name: userName.value,
        email: email.value,
        password: password.value,
      };
      users.push(user);
      console.log(user);

      localStorage.setItem("usersContainer", JSON.stringify(users));
      succAlert.classList.remove("d-none");
      check.classList.add("d-none");
      inputsCheck.classList.add("d-none");
    } else {
      console.log("eeeeeeerrr");
      check.classList.remove("d-none");
      inputsCheck.classList.add("d-none");
      succAlert.classList.add("d-none");
    }
  }

  if (email.value == "" && password.value == "") {
    inputsCheck.classList.remove("d-none");
    check.classList.add("d-none");
    succAlert.classList.add("d-none");
  }
}

function login() {
  if (email.value !== "" || password.value !== "") {
    if (isPasswordExist(password.value) && isEmailExist(email.value)) {
      window.location = "/home.html";
    } else {
      inputsCheck.classList.add("d-none");
      passAndEmailChk.classList.remove("d-none");
    }
  }
  if (email.value == "" || password.value == "") {
    inputsCheck.classList.remove("d-none");
    passAndEmailChk.classList.add("d-none");
  }
}

function clearForm() {
  userName.value = null;
  email.value = null;
  password.value = null;
  // check.classList.add("d-none")
  // inputsCheck.classList.add("d-none")
  userName.classList.remove("is-valid");
  email.classList.remove("is-valid");

  // succAlert.classList.add("d-none")
}

function validation(element) {
  var text = element.value;
  regex = {
    userName: /^[a-zA-Z][a-zA-Z0-9]{2,15}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  };
  if (regex[element.id].test(text) == true) {
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
    return true;
  } else {
    element.classList.add("is-invalid");
    element.classList.remove("is-valid");
    return false;
  }
}
