let cart = ["Mouse", "Keyboard"];
// Add "Monitor" using push()
cart.push("Monitor");

// Add "Laptop" at the beginning
cart.unshift("Laptop");

// Remove "Keyboard" using splice()
cart.splice(2, 1);

// Check "Mouse" 
let hasMouse = cart.includes("Mouse");
console.log(hasMouse ? "Mouse exists" : "Mouse not found");

// Merge with accessories using spread operator
let accessories = ["Webcam", "Speaker"];
let completedCart = [...cart, ...accessories];

console.log("Completed Cart: " + completedCart.join(", "));
alert("Completed Cart: " + completedCart.join(", "));