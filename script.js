const loginForm = document.querySelector(".login-form");
const signupForm = document.querySelector(".signup-form");
const toggleSignup = document.getElementById("toggle-signup");
const toggleLogin = document.getElementById("toggle-login");
const formContainer = document.querySelector(".form-container");

toggleSignup.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.add("active");
});

toggleLogin.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.remove("active");
});

document.getElementById("login-form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Login successful!");
});

document.getElementById("signup-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const password = e.target.querySelector('input[type="password"]').value;
    const confirmPassword = e.target.querySelectorAll('input[type="password"]')[1].value;
    const forgotPasswordLink = document.getElementById('forgot-password-link');
    const forgotPasswordModal = document.getElementById('forgot-password-modal');
    const closeModalButton = document.getElementById('close-modal');

   
    forgotPasswordLink.addEventListener('click', function(event) {
        event.preventDefault();
        forgotPasswordModal.style.display = 'flex';
    });

   
    closeModalButton.addEventListener('click', function() {
        forgotPasswordModal.style.display = 'none';
    });

   
    document.getElementById('submit-recovery').addEventListener('click', function() {
        const email = document.getElementById('recovery-email').value;
        if (email) {
            alert('Recovery instructions sent to ' + email);
            forgotPasswordModal.style.display = 'none';
        } else {
            alert('Please enter your email address.');
        }
    });


    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }
    alert("Signup successful!");
});