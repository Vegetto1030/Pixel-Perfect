document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('myForm');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    const usernameMsg = document.getElementById('usernameMsg');
    const emailMsg = document.getElementById('emailMsg');
    const passwordMsg = document.getElementById('passwordMsg');
    const confirmPasswordMsg = document.getElementById('confirmPasswordMsg');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let isValid = true;

        // Username validation
        const usernameValue = username.value.trim();
        if (!/^[a-z]{5,10}$/.test(usernameValue)) {
            usernameMsg.textContent = 'Username must be lowercase and 5-10 characters.';
            usernameMsg.classList.add('error');
            usernameMsg.classList.remove('success');
            usernameMsg.style.display = 'block';
            isValid = false;
        } else {
            usernameMsg.textContent = 'Username is valid.';
            usernameMsg.classList.add('success');
            usernameMsg.classList.remove('error');
            usernameMsg.style.display = 'block';
        }

        // Email validation
        const emailValue = email.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailValue)) {
            emailMsg.textContent = 'Email must be a valid email address.';
            emailMsg.classList.add('error');
            emailMsg.classList.remove('success');
            emailMsg.style.display = 'block';
            isValid = false;
        } else {
            emailMsg.textContent = 'Email is valid.';
            emailMsg.classList.add('success');
            emailMsg.classList.remove('error');
            emailMsg.style.display = 'block';
        }

        // Password validation
        const passwordValue = password.value.trim();
        if (passwordValue.length < 8 || passwordValue.length > 15) {
            passwordMsg.textContent = 'Password must be 8-15 characters long.';
            passwordMsg.classList.add('error');
            passwordMsg.classList.remove('success');
            passwordMsg.style.display = 'block';
            isValid = false;
        } else {
            passwordMsg.textContent = 'Password is valid.';
            passwordMsg.classList.add('success');
            passwordMsg.classList.remove('error');
            passwordMsg.style.display = 'block';
        }

        // Confirm password validation
        const confirmPasswordValue = confirmPassword.value.trim();
        if (confirmPasswordValue !== passwordValue) {
            confirmPasswordMsg.textContent = 'Passwords do not match.';
            confirmPasswordMsg.classList.add('error');
            confirmPasswordMsg.classList.remove('success');
            confirmPasswordMsg.style.display = 'block';
            isValid = false;
        } else {
            confirmPasswordMsg.textContent = 'Passwords match.';
            confirmPasswordMsg.classList.add('success');
            confirmPasswordMsg.classList.remove('error');
            confirmPasswordMsg.style.display = 'block';
        }

        // Final submission
        if (isValid) {
            console.log({
                username: usernameValue,
                email: emailValue,
                password: passwordValue
            });
        }
    });
});
