let name = "Lebron James";
let age = 40;
let isStudent = false;

let ageIn8Years = age + 8;

let statusElement = document.getElementById("status");
if (isStudent){
    statusElement.textContent = `${name} is a student.`;
}else{
    statusElement.textContent = `${name} is not a student.`;
}

let message = `In eight years, ${name} will be ${ageIn8Years} years old.`;

document.addEventListener("DOMContentLoaded", () => {
    let messageElement = document.getElementById("message");
    if (messageElement) {
      messageElement.textContent = message;
    } else {
      console.error("Message element not found in the HTML.");
    }
  });