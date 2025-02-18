// JavaScript for the Pizza Restaurant App

// Form Submission Handler
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form from submitting
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name && email && message) {
            alert(`Thank you, ${name}! Your message has been sent.`);
            form.reset(); // Clear the form after submission
        } else {
            alert("Please fill out all fields before submitting.");
        }
    });

    // Display a dynamic special message
    const specialsSection = document.querySelector("#specials");
    const today = new Date();
    const dayOfWeek = today.toLocaleString("en-US", { weekday: "long" });
    const specialMessage = document.createElement("p");
    specialMessage.textContent = `Enjoy our special deal this ${dayOfWeek}: Buy one large pizza, get a second for 50% off!`;
    specialsSection.appendChild(specialMessage);
});
