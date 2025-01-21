// Create an array of possible answers
// Magic 8-Ball answers
const magic8BallAnswers = [
    "It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", 
    "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", 
    "Yes", "Signs point to yes", "Reply hazy, try again", "Ask again later", 
    "Better not tell you now", "Cannot predict now", "Concentrate and ask again", 
    "Don’t count on it", "My reply is no", "My sources say no", 
    "Outlook not so good", "Very doubtful"
];

// Fortune Cookie sayings
const fortuneCookieSayings = [
    "Do not be afraid of competition.", "An exciting opportunity lies ahead of you.", 
    "You love peace.", "Get your mind set…confidence will lead you on.", 
    "You will always be surrounded by true friends.", 
    "Sell your ideas—they have exceptional merit.", 
    "You should be able to undertake and complete anything.", 
    "You are kind and friendly.", "You are wise beyond your years.", 
    "Your ability to juggle many tasks will take you far.", 
    "A routine task will turn into an enchanting adventure.", 
    "Beware of all enterprises that require new clothes.", 
    "Be true to your work, your word, and your friend.", 
    "Goodness is the only investment that never fails.", 
    "A journey of a thousand miles begins with a single step.", 
    "Forget injuries; never forget kindnesses.", 
    "Respect yourself and others will respect you.", 
    "A man cannot be comfortable without his own approval.", 
    "Always do right. This will gratify some people and astonish the rest.", 
    "It is easier to stay out than to get out."
];

  
// Create a function to fetch the question the user has asked 	
// Our function should also check from an empty value
function getAnswer(){

    const allResponses = [...magic8BallAnswers, ...fortuneCookieSayings];

    const randomIndex = Math.floor(Math.random() * allResponses.length);
// Select a random answer from your array 
    return allResponses[randomIndex];
}
  

	
// Display the question and answer back to the user
// And, log the question and answer to the console
function askQuestion(){
    
    const userQuestion = document.getElementById("userQuestion").value.trim();

    if (userQuestion){
        const response  = getAnswer();

        document.getElementById("answer").textContent = `"${response}"`;

        console.log(`Question: ${userQuestion} - Answer: ${response}`);
    
    }else{
        document.getElementById("answer").textContent = "Please enter a question to ask.";
    }
}
