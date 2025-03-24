
// Modal functionality
const modal = document.getElementById("demo-modal");
const openModalBtn = document.getElementById("open-modal");
const closeModalBtn = document.querySelector(".close");

// Open modal
openModalBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

// Close modal
closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close modal when clicking outside
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Form validation
const form = document.getElementById("demo-form");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const usernameError = document.getElementById("username-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");

// Validate username
usernameInput.addEventListener("blur", () => {
    if (usernameInput.value.trim() === "") {
        usernameError.textContent = "Username is required";
        usernameError.classList.remove("hidden");
    } else {
        usernameError.classList.add("hidden");
    }
});

// Validate email
emailInput.addEventListener("blur", () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === "") {
        emailError.textContent = "Email is required";
        emailError.classList.remove("hidden");
    } else if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = "Please enter a valid email";
        emailError.classList.remove("hidden");
    } else {
        emailError.classList.add("hidden");
    }
});

// Validate password
passwordInput.addEventListener("blur", () => {
    if (passwordInput.value.trim() === "") {
        passwordError.textContent = "Password is required";
        passwordError.classList.remove("hidden");
    } else if (passwordInput.value.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters";
        passwordError.classList.remove("hidden");
    } else {
        passwordError.classList.add("hidden");
    }
});

// Form submission
form.addEventListener("submit", (event) => {
    // Trigger validation for all fields
    const event = new Event('blur');
    usernameInput.dispatchEvent(event);
    emailInput.dispatchEvent(event);
    passwordInput.dispatchEvent(event);
    
    // Check if there are any errors
    const errors = document.querySelectorAll(".error:not(.hidden)");
    if (errors.length > 0) {
        event.preventDefault();
        alert("Please fix the errors before submitting");
    } else {
        alert("Form submitted successfully!");
        // In a real app, you would allow the form to submit
        event.preventDefault(); // Just for this demo
    }
});

// Password toggle
const passwordToggle = document.getElementById("password-toggle");
passwordToggle.addEventListener("click", () => {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        passwordToggle.textContent = "Hide Password";
    } else {
        passwordInput.type = "password";
        passwordToggle.textContent = "Show Password";
    }
});

// Interactive counter
const counterValue = document.getElementById("counter-value");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
let count = 0;

incrementBtn.addEventListener("click", () => {
    count++;
    counterValue.textContent = count;
});

decrementBtn.addEventListener("click", () => {
    count--;
    counterValue.textContent = count;
});

document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let valid = true;

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    
    if (name.length < 3) {
        document.getElementById("nameError").textContent = "Name must be at least 3 characters.";
        valid = false;
    }
    if (!email.includes("@")) {
        document.getElementById("emailError").textContent = "Enter a valid email.";
        valid = false;
    }
    if (password.length < 6) {
        document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
        valid = false;
    }
    
    if (valid) {
        document.getElementById("message").textContent = "Form submitted successfully!";
        document.getElementById("message").className = "success";
    }
});

document.getElementById("toggleDarkMode").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

document.getElementById("changeColor").addEventListener("click", function() {
    this.style.backgroundColor = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
});

