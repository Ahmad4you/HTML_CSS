/**
 * 
 */
document.addEventListener('DOMContentLoaded', function() {
	const form = document.getElementById('registrationForm');
	const username = document.getElementById('username');
	const email = document.getElementById('email');
	const password = document.getElementById('password');

	const usernameError = document.getElementById('usernameError');
	const emailError = document.getElementById('emailError');
	const passwordError = document.getElementById('passwordError');

	function validateUsername() {
		if (username.value.length < 4) {
			usernameError.textContent = 'Der Benutzername muss mindestens 4 Zeichen lang sein.';
			return false;
		} else {
			usernameError.textContent = '';
			return true;
		}
	}

	function validateEmail() {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email.value)) {
			emailError.textContent = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
			return false;
		} else {
			emailError.textContent = '';
			return true;
		}
	}

	function validatePassword() {
		if (password.value.length < 8) {
			passwordError.textContent = 'Das Passwort muss mindestens 8 Zeichen lang sein.';
			return false;
		} else {
			passwordError.textContent = '';
			return true;
		}
	}

	username.addEventListener('input', validateUsername);
	email.addEventListener('input', validateEmail);
	password.addEventListener('input', validatePassword);

	form.addEventListener('submit', function(e) {
		e.preventDefault();
		if (validateUsername() && validateEmail() && validatePassword()) {
			alert('Formular erfolgreich gesendet!');
			// Hier können Sie das Formular an den Server senden
		}
	});
});