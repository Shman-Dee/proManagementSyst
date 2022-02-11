const firstNameField = document.querySelector("#firstNameField");
const lastNameField = document.querySelector("#lastNameField");
const emailField = document.querySelector("#emailField");
const passwordField = document.querySelector("#passwordField");
const signUpError = document.querySelector("#signUpError");
const signUpBtn = document.querySelector("#signUpBtn");

async function signUpUser(event) {
  event.preventDefault();
  const firstName = firstNameField.value.trim();
  const lastName = lastNameField.value.trim();
  const email = emailField.value.trim();
  const password = passwordField.value.trim();

  if (firstName && lastName && email && password) {
    const response = await fetch("/users/signUp", {
      method: "POST",
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      location.href = "/projects";
    } else {
      signUpError.textContent = "Sign up error - Please fill all fields";
    }
  }
}

signUpBtn.addEventListener("click", signUpUser);
