const form = document.getElementById('registrationForm');
const submitButton = document.getElementById('submitButton');

form.addEventListener('submit', (event) => {

    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
	const lastName = document.getElementById('lastName').value;
	const email = document.getElementById('email').value;

    const hobbiesCheckboxes = document.querySelectorAll('input[name="hobbies"]:checked');
	console.log(hobbiesCheckboxes);

	const hobbies = Array.from(hobbiesCheckboxes).map(checkbox => checkbox.value);

    if (firstName === '' || lastName === '' || email === '' || hobbies.length === 0) {
        alert("Please fill out all fields and select at least one hobby.");
        return;
    }

	const user = {
		firstName,
		lastName,
		email,
		hobbies
	};
	console.log(user);

	const uniqueHobbies = new Set(hobbies);
	console.log('Unique Hobbies:', Array.from(uniqueHobbies));

	const users = new Map();
	users.set(email, user);
	console.log(users);

	form.classList.add('success');
	form.reset();

    window.location.href = "registered.html";
});

const inputFields = ['firstName', 'lastName', 'email'];
inputFields.forEach((fieldId) => {
    const inputElement = document.getElementById(fieldId);

    inputElement.addEventListener('focus', () => {
        inputElement.style.backgroundColor = '#f0f8ff'; 
    });

    inputElement.addEventListener('blur', () => {
        inputElement.style.backgroundColor = ''; 
    });
});