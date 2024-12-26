function validateForm() {
    let isValid = true;
    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
    if (!firstName.value.trim() || !lastName.value.trim()) {
        nameError.style.display = "block";
        isValid = false;
    } else {
        nameError.style.display = "none";
    }
    if (!email.value.trim()) {
        emailError.style.display = "block";
        isValid = false;
    } else {
        emailError.style.display = "none";
    }
    if (!message.value.trim()) {
        messageError.style.display = "block";
        isValid = false;
    } else {
        messageError.style.display = "none";
    }
    return isValid;
}
const skills = {
    python: 70,
    html: 90,
    css: 85,
    js: 50,
};
window.onload = function () {
    document.getElementById('python-bar').style.width = skills.python + '%';
    document.getElementById('html-bar').style.width = skills.html + '%';
    document.getElementById('css-bar').style.width = skills.css + '%';
    document.getElementById('js-bar').style.width = skills.js + '%';
};






