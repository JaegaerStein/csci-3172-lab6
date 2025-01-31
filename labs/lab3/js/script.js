class Item {
    constructor(name, type, price, quantity, description) {
        this.name = name;
        this.type = type;
        this.price = parseFloat(price);
        this.quantity = parseInt(quantity);
        this.description = description;
    }

}

let itemArray = [
    new Item("Toyota Camry", "Car", 25000, 2, "A reliable and fuel-efficient sedan."),
    new Item("Honda Civic", "Car", 22000, 3, "A compact car with great mileage and modern features."),
    new Item("Apple", "Fruit", 1.5, 20, "A fresh and juicy red apple."),
    new Item("Banana", "Fruit", 0.5, 30, "A ripe yellow banana full of potassium."),
    new Item("Dining Table", "Furniture", 350, 4, "A sturdy wooden dining table that seats six."),
    new Item("Sofa", "Furniture", 600, 2, "A comfortable three-seater sofa with soft cushions."),
    new Item("Orange", "Fruit", 1.2, 25, "A sweet and tangy citrus fruit."),
    new Item("Ford Mustang", "Car", 45000, 1, "A powerful sports car with a sleek design.")
];

// Add an item to inventory
function addItem() {
    const itemName = document.getElementById('itemName').value.trim();
    const itemType = document.getElementById('itemType').value.trim();
    const itemPrice = document.getElementById('itemPrice').value.trim();
    const itemQuantity = document.getElementById('itemQuantity').value.trim();
    const itemDescription = document.getElementById('itemDescription').value.trim();

    if (isNaN(itemPrice) || isNaN(itemQuantity)) {
        alert("Please fill in all fields correctly.");
        return;
    }

    const newItem = new Item(itemName, itemType, itemPrice, itemQuantity, itemDescription);
    itemArray.push(newItem);
    
    document.getElementById('addItemForm').reset();
    listItems();
}

// Remove an item from inventory by name
function removeItem(itemName) {
    itemArray = itemArray.filter(item => item.name.toLowerCase() !== itemName.toLowerCase());
    listItems();
}

// Get an item from inventory by name
function getItem(itemName) {
    return itemArray.find(item => item.name.toLowerCase() === itemName.toLowerCase()) || null;
}

// List all items in inventory
function listItems() {
    const itemDiv = document.getElementById('itemList');
    itemDiv.innerHTML = '';

    itemArray.forEach((item) => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
        listItem.textContent = `${item.name} - ${item.type} - $${item.price} - Qty: ${item.quantity} - ${item.description}`;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('btn', 'btn-danger', 'btn-sm');
        removeButton.onclick = () => removeItem(item.name);

        listItem.appendChild(removeButton);
        itemDiv.appendChild(listItem);
    });

    calculateTotalValue();
}

// Search for items by name or type
function searchItems() {
    const query = document.getElementById('searchQuery').value.toLowerCase().trim();
    if (!query) {
        listItems();
        return;
    }

    const filteredItems = itemArray.filter(item =>
        item.name.toLowerCase().includes(query) || item.type.toLowerCase().includes(query)
    );

    const itemDiv = document.getElementById('itemList');
    itemDiv.innerHTML = '';

    filteredItems.forEach((item) => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.textContent = `${item.name} - ${item.type} - $${item.price} - Qty: ${item.quantity} - ${item.description}`;
        itemDiv.appendChild(listItem);
    });
}

// Calculate total inventory value
function calculateTotalValue() {
    let totalValue = itemArray.reduce((sum, item) => sum + item.price * item.quantity, 0);
    document.getElementById('totalValue').textContent = `$${totalValue.toFixed(2)}`;
}

// Handle form submission
document.getElementById('addItemForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    addItem(); 
});

// Initial display
listItems();

