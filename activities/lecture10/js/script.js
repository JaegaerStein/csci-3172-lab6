// First, Lets store our inputs in some variables, so that we can later work with them
const form = document.getElementById("registrationForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
// We're also going to be displaying meaningful error messages to our user so that they can fix their mistakes during registration
const usernameError = document.getElementById("usernameError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");

// Initialize validUsers JSON Object in memory
// In this case we are creating an object to store existing users and their passwords
let validUsers = {
  user1: "password1",
  user2: "Password2!",
  admin: "Admin123",
};

// Now, we'll create our regular expressions and store them in some variables, this will make our code a bit easier to read when we do start validating our input
const usernameRegex = /^[a-zA-Z0-9_]+$/; // allows for alphanumeric and underscores
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/; // at least 8 characters long, at least one uppercase letter, one lowercase, and one number

// Now we can start with our form, which is were all the magic will happen
// Add an event listener to the form, so that on submit:
form.addEventListener("submit", async (event) => {
  // 1. Prevents the default form submission behaviour
  event.preventDefault();
  // 2. Gets our values for username, password, and confirm password unsing destructuring syntax
  const { value: username } = usernameInput;
  const { value: password } = passwordInput;
  const { value: confirmPassword } = confirmPasswordInput;

  // 3. Use try-catch error handling for validating our three inputs
  // 3.1. We'll need to first check whether the field is empty
  // 3.2. Then, if it's not empty, test input against its RegEx
  // 3.3. In the case of Confirm Password, we need to check it matches password but we don't need to check it against the password RegEx
  // 3.4. Finally, if all the validation checks are passed, we check whether the user already exists
  // The best way to do this is through a try-catch structure, since it'll allow us to specify the errors that are thrown when a validation check fails
  try {
    if (username.trim() === "") {
      throw new Error("Username cannot be empty.");
    } else if (!usernameRegex.test(username)) {
      throw new Error(
        "Invalid username format. Only alphanumeric characters and underscores allowed."
      );
    }

    if (password.trim() === "") {
      throw new Error("Password cannot be empty.");
    } else if (!passwordRegex.test(password)) {
      throw new Error(
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit."
      );
    }

    if (password !== confirmPassword) {
      throw new Error("Passwords do not match.");
    }

    if (validUsers.hasOwnProperty(username)) {
      throw new Error("Username already exists.");
    }

    // 4. If all checks are passed, then add the new user to the validUsers object
    validUsers[username] = password;

    // 5. Create a blob containing the JSON string
    // a blob (a Binary Large Object) is essentially a raw data object that allows us hold some data. Blobs are useful for storing large data like images, video, audio, but also structured and unstructured data (like SQL and JSON). It does particularly well with unstructured data and rich media (images, video, audio)
    // In this case, we're creating a blob and assigning it our a JSON string representation of our validUsers object
    const blob = new Blob([JSON.stringify(validUsers)], {
      type: "application/json",
    });

    // 6. We then create a temporary URL so that we can access the blob (i.e., our JSON string)
    const url = URL.createObjectURL(blob);

    // 7. Now, lets check whether our JSON could be saved to a file by downloading the blob file (this will trigger a file download in the browser)
    const link = document.createElement("a"); // creates temporary <a> element
    link.href = url; // sets the link's href to the temporary URL
    link.download = "validUsers.json"; // sets the filename for the download
    document.body.appendChild(link); // adds the link to the document
    link.click(); // triggers a click event on the link to initiate the download
    document.body.removeChild(link); // removes the temporary link from the document

    console.log("Registration successful! Data saved to validUsers.json");
  } catch (error) {
    // 8. Now, we have to catch the error messages from our 'try' block and display the error messages to the user within the <span></span> tags in our index.html file
    if (error.message === "Username cannot be empty.") {
      usernameError.textContent = error.message;
    } else if (
      error.message ===
      "Invalid username format. Only alphanumeric characters and underscores allowed."
    ) {
      usernameError.textContent = error.message;
    } else if (error.message === "Password cannot be empty.") {
      passwordError.textContent = error.message;
    } else if (
      error.message ===
      "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit."
    ) {
      passwordError.textContent = error.message;
    } else if (error.message === "Passwords do not match.") {
      confirmPasswordError.textContent = error.message;
    } else if (error.message === "Username already exists.") {
      usernameError.textContent = error.message;
    }
  }
});
