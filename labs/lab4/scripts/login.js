document.addEventListener('DOMContentLoaded', () => {
    console.log("Login script loaded");

    const users = new Map(JSON.parse(localStorage.getItem('users')) || [  // Retrieve users from localStorage or default to empty map
        ["user1", "Password1!"],
        ["user2", "Password2!"],
        ["user3", "Password3!"]
    ]);

    const loginForm = document.getElementById('login-form');
    const loginUsernameInput = document.getElementById('login-username');  // Updated ID
    const loginPasswordInput = document.getElementById('login-password');  // Updated ID
    const loginError = document.getElementById('login-error');

    const handleLogin = (e) => {
        e.preventDefault();

        const username = loginUsernameInput.value.trim();
        const password = loginPasswordInput.value.trim();

        loginError.textContent = ''; // Clear previous error

        try {
            if (!users.has(username)) {
                throw new Error("Username does not exist.");
            }

            if (users.get(username) !== password) {
                throw new Error("Incorrect password.");
            }

            alert('Login successful!');
            console.log(`Welcome back, ${username}`);
            window.location.href = 'dashboard.html'; // Redirect to dashboard

        } catch (error) {
            loginError.textContent = error.message;
            console.error(error);
        }
    };

    loginForm.addEventListener('submit', handleLogin);
});
