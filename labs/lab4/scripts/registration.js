document.addEventListener('DOMContentLoaded', () => {
    console.log("Registration script loaded");

    const users = new Map(JSON.parse(localStorage.getItem('users')) || [  
        ["user1", "Password1!"],
        ["user2", "Password2!"],
        ["user3", "Password3!"]
    ]);

    // Registration page
    const registrationForm = document.getElementById('registration-form');
    const emailInput = document.getElementById('email');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const emailError = document.getElementById('email-error');
    const usernameError = document.getElementById('username-error');
    const passwordError = document.getElementById('password-error');
    const confirmPasswordError = document.getElementById('confirm-password-error');

    registrationForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const { value: email } = emailInput;
        const { value: username } = usernameInput;
        const { value: password } = passwordInput;
        const { value: confirmPassword } = confirmPasswordInput;

        emailError.textContent = '';
        usernameError.textContent = '';
        passwordError.textContent = '';
        confirmPasswordError.textContent = '';

        try {
            // Validate email
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,8}$/;
            if (!emailPattern.test(email)) throw new Error('Please enter a valid email.');

            // Validate username
            const usernamePattern = /^[a-zA-Z][a-zA-Z0-9]*$/;
            if (!usernamePattern.test(username)) throw new Error('Username must not begin with a number, contain spaces or special characters.');
            if (users.has(username)) throw new Error('Username already exists.');

            // Validate password
            const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{12,}$/;
            if (!passwordPattern.test(password)) throw new Error('Password must have at least one number, one uppercase letter, one lowercase letter, one special character, and be at least 12 characters long.');

            // Validate confirm password
            if (password !== confirmPassword) throw new Error('Passwords do not match.');

            // Add user to the "database"
            users.set(username, password);
            localStorage.setItem('users', JSON.stringify(Array.from(users.entries()))); // Save updated users to localStorage
            console.log('User registered:', { username, password });
            console.log('Current users in the database:', users);

            alert('You have been successfully registered!');
            window.location.href = 'login.html';  // Redirect to login page

        } catch (error) {
            if (error.message === 'Please enter a valid email.') emailError.textContent = error.message;
            else if (error.message === 'Username must not begin with a number, contain spaces or special characters.') usernameError.textContent = error.message;
            else if (error.message === 'Username already exists.') usernameError.textContent = error.message;
            else if (error.message === 'Password must have at least one number, one uppercase letter, one lowercase letter, one special character, and be at least 12 characters long.') passwordError.textContent = error.message;
            else if (error.message === 'Passwords do not match.') confirmPasswordError.textContent = error.message;
        }
    });
});
