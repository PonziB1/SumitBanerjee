document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.querySelector("form button");
    submitButton.addEventListener("click", function(event) {
        event.preventDefault();
        alert("Form submitted!");
    });
});
