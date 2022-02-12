const logoutBtn = document.querySelector("#logoutBtn");

function logoutUser() {
  fetch("/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
  location.href = "/";
}

logoutBtn.addEventListener("click", logoutUser);
