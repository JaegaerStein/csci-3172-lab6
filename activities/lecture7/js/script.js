// In this example, I want to create an interactive form that allows Newt Scamander create a sort of inventory of the Fantastic Beasts he's rescuing
// Here's what we'll need to do:
// 1. Grab the input a user enters into our form
// 2. Represent this input in a meaningful way, let's say an Object
// 3. Push the contents of that Object into an Array 
// 4. Reset our form so that the user can add a new creature if they want without having to manually delete the previous input
// 5. Display the new creature in our Array back to the user on our page
let creatureArray = []; // Correct variable name

function addCreature() {
    const creatureName = document.getElementById('creatureName').value;
    const creatureType = document.getElementById('creatureType').value;
    const creatureHabitat = document.getElementById('creatureHabitat').value;

    // Represent input as an object
    const newCreature = {
        name: creatureName,
        type: creatureType,
        habitat: creatureHabitat
    };

    // Push the object into the array
    creatureArray.push(newCreature);

    // Reset the form to allow new entries
    document.getElementById('addCreatureForm').reset();

    // Display updated creatures
    displayCreatures();
}

function removeCreature(index) {
    // Remove the creature at the specified index
    creatureArray.splice(index, 1);

    // Display updated creatures
    displayCreatures();
}

function displayCreatures() {
    const creaturesDiv = document.getElementById('creatureSanctuary');
    creaturesDiv.innerHTML = ''; // Clear previous content

    const list = document.createElement('ul'); // Create a list

    creatureArray.forEach((creature, index) => { // Use the correct array
        const listItem = document.createElement('li');
        listItem.textContent = `${creature.name} - ${creature.type} (Habitat: ${creature.habitat})`;

        // Create a remove button for each list item
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('btn', 'btn-danger', 'ml-2');
        
        // Add event listener to remove the respective creature
        removeButton.addEventListener('click', () => removeCreature(index));

        // Append the remove button to the list item
        listItem.appendChild(removeButton);

        list.appendChild(listItem); // Add each creature as a list item
    });

    creaturesDiv.appendChild(list); // Add the list to the div
}

// Add event listener to the form
document.getElementById('addCreatureForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    addCreature(); // Call the addCreature function
});

// Display creatures initially (if needed)
displayCreatures();

