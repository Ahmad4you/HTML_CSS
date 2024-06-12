// JavaScript to enhance the page functionality

// Example: Log a message when the page loads
window.onload = function() {
    console.log("Page loaded successfully!");
};

// Example: Add event listener to the file input
document.addEventListener("DOMContentLoaded", function() {
    var fileInput = document.getElementById("fileInput");

    if (fileInput) {
        fileInput.addEventListener("change", function(event) {
            var fileName = event.target.files[0].name;
            console.log("Selected file: " + fileName);
        });
    }
});

// Added a script to log a message when the page loads.
// Added an event listener to the file input to log the name of the selected file.