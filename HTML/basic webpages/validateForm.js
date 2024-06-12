function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Both fields are required.");
        return false;
    }

    // Add more validation logic if needed
    alert("Form submitted successfully!");
    // You can submit the form here if needed
    // document.getElementById("loginForm").submit();
}
