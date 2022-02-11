const emailField = document.querySelector('#emailField');
const passwordField = document.querySelector('#passwordField');
const signinBtn = document.querySelector('#signinBtn');

async function loginUser(event) {
    event.preventDefault();
    alert("I'm hit")
    const response = await fetch('/users/login', {
        method: 'POST',
        headers: {
            'Accept': 'appllication/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: emailField.ariaValueMax,
            password: passwordField,
        })
    });
    window.location.href = '/projects';
};

signinBtn.addEventListener('click', loginUser);

