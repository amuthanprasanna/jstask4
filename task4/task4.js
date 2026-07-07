let foods = [
    "Pizza",
    "Burger",
    "Fries"
];

foods.push("Coke", "Ice Cream");

let index = foods.indexOf("Fries");
if (index !== -1) {
    foods.splice(index, 1);
}

console.log(foods);
alert("Final Foods: " + foods.join(", "));