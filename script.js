// Select the button element
const contactBtn = document.querySelector('.contact-btn');

// Add an event listener for the click event
contactBtn.addEventListener('click', function() {
    alert('Thank you for reaching out, Gurpaag will get back to you soon!');
});
// Animate progress bars on page load
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.progress').forEach((progress) => {
        const targetWidth = progress.style.width; // Get the target width
        progress.style.width = '0'; // Set initial width to 0
        
        // Animate to the target width
        setTimeout(() => {
            progress.style.width = targetWidth;
        }, 300); // Delay animation slightly
    });
});
// Initialize EmailJS
(function () {
    emailjs.init("VF1pP4nFF1rttkcpH"); // Replace with your EmailJS user ID
})();

// Add event listener to the form
document.querySelector(".contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Send the form data using EmailJS
    emailjs.sendForm('service_8a4q148', 'template_1j4ywm7', this)
        .then(function() {
            alert("Your message has been sent successfully!");
        }, function(error) {
            alert("Failed to send your message. Please try again later.");
        });
});
