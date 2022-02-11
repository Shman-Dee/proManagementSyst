const emailField = document.querySelector('#emailField');
const passwordField = document.querySelector('#passwordField');
const loginError = document.querySelector('#loginError');
const signinBtn = document.querySelector('#signinBtn');

async function loginUser(event) {
    event.preventDefault();
    const email = emailField.value.trim();
    const password = passwordField.value.trim()
    if (email && password) {
        const response = await fetch('/users/login', {
          method: 'POST',
          body: JSON.stringify({
            email,
            password,
          }),
          headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
          location.href = ('/projects');
        } else {
            loginError.textContent = 'Login error - Please check your email and password and try again.'
        }
      } else {
        loginError.textContent = 'Login error - Please provide a valid email and and password.'
      }
    
};

signinBtn.addEventListener('click', loginUser);

