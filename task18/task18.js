let orders = [
    "Pizza",
    "Burger",
    "Pizza",
    "Sandwich",
    "Pizza"
];

let firstIndex = orders.indexOf("Pizza");
let lastIndex = orders.lastIndexOf("Pizza");

console.log("First Index of Pizza: " + firstIndex);
console.log("Last Index of Pizza: " + lastIndex);

alert(
    "First Index of Pizza: " + firstIndex + "\n" +
    "Last Index of Pizza: " + lastIndex
);