
function calculateBill(...prices) {
    let totalItems = prices.length;
    let totalPrice = prices.reduce((sum, price) => sum + price, 0);
    console.log("Items:", totalItems);
    console.log("Total:", totalPrice);

    alert("Items: " + totalItems + "\nTotal: " + totalPrice);
}
calculateBill(10, 20, 30, 40);