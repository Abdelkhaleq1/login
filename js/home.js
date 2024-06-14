const logoutBtn = document.getElementById("logout");

let users = [];

if (localStorage.getItem("usersContainer") !== null) {
  users = JSON.parse(localStorage.getItem("usersContainer"));
}
console.log(users);

function logout() {
  window.location = "/login/index.html";
}
logoutBtn.addEventListener("click", function () {
  logout();
});

function sayWelcome() {
  let text = `
    <h1 class="fw-bolder fs-1">Welcome,</h1>
    <p class="fw-bold fs-1">${users[0].name}</p>`;
  document.getElementById("home").innerHTML = text;
}
sayWelcome();
