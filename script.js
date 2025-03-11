// script.js
document.addEventListener("DOMContentLoaded", function () {
    console.log("Website loaded!");

    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Login feature coming soon!");
        });
    }

    const signupForm = document.getElementById("signup-form");
    if (signupForm) {
        signupForm.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Signup feature coming soon!");
        });
    }
});
