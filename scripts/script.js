/**
 * script.js
 * Handles interactivity for the TSBC Official Site.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Select the button and the message display area
    const actionBtn = document.getElementById('actionBtn');
    const messageBox = document.getElementById('message-box');

    // Add a click event listener to the button
    if (actionBtn) {
        actionBtn.addEventListener('click', () => {
            // Update the text in the message box
            messageBox.textContent = "Thank you for visiting TSBC Official! We're glad you're here.";
            
            // Add a slight animation effect via JS (optional)
            messageBox.style.opacity = '0';
            setTimeout(() => {
                messageBox.style.transition = 'opacity 0.5s ease';
                messageBox.style.opacity = '1';
            }, 10);

            // Log the action to the console for debugging
            console.log("Greeting button was clicked successfully.");
        });
    }
});