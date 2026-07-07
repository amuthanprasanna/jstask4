let price = [
    5000,
    250,
    700,
    12000,
    50
];

let sortedPrices = price.sort((a, b) => a - b);

console.log(sortedPrices);
alert("Sorted Prices: " + sortedPrices.join(", "));