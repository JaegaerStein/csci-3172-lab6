// Get the current time and hour
// HINT: you will have to first get the full date and then get the time and hour of the day
// You may explore the use of JS built-in functions

let date = new Date();
let hours = date.getHours();

// Create a variable to store your greeting message 

let welcomeMessage;


// Based on the hour you get, you need to set the conditions you want your script to check
// in order to render a specific message
// for now we want to say 'Good Morning' if it is earlier than 12PM
if (hours < 12){
	welcomeMessage = "Good Morning!";
} else if (hours < 15){
	welcomeMessage = "Hey! I think we are in class!"; // otherwise we want to check if it is earlier than 3PM and let the visitor know 'Hey! I think we are in class!'
} else {
	welcomeMessage = "Welcome!"; // For any other time (i.e., later than 3PM, we just want to say 'Welcome'

}
// Then, we use the DOM, and calling the 'getElementById( )' method and its innerHTML property to add some HTML for us onto our webpage
// we basically want to show the return result in <h2 id="greeting"></h2>
document.getElementById('greeting').innerHTML = welcomeMessage;


// In this section of our script, we want to access the values the user entered into our form
// and add them together
// First we declare our variables for the two values

let a, b;

// Now, let's use the DOM now to access a value in our form and show it back to us in an alert( ) box
// First, we'll creatr a function to store the input values into the variables we declared
// We'll enclose that code block in a function, getNumbers( )
function getNumbers(){
	// Store the values from the form into the variables we declared above
	a = Number(document.getElementById('number1').value);
	b = Number(document.getElementById('number2').value);
}
  
function addition(){
	// Call the getNumbers() function to import the values the user enteres into the form into 
	// this function
	getNumbers();
	// We perform our addition on the two values
	result = a + b;
	// Display the result of the calculation
	alert("The sum of " + a + " and " + b + " is equal to " + result);
}

function subtract() {
	// Call the getNumbers() function to import the values the user enters into the form 
	getNumbers();
	// Perform subtraction on the two values
	result = a - b;
	// Display the result of the calculation
	alert("The difference between " + a + " and " + b + " is " + result);
}

function multiply() {
	// Call the getNumbers() function to import the values the user enters into the form 
	getNumbers();
	// Perform multiplication on the two values
	result = a * b;
	// Display the result of the calculation
	alert("The product of " + a + " and " + b + " is " + result);
}

function divide() {
	// Call the getNumbers() function to import the values the user enters into the form 
	getNumbers();
	// Perform division on the two values
	if (b === 0) {
		alert("Division by zero is not allowed.");
	} else {
		result = a / b;
		// Display the result of the calculation
		alert("The quotient of " + a + " divided by " + b + " is " + result);
	}
}

	





