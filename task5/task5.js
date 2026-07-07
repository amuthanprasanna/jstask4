let transactions = [1000, 2000, 3000, 4000];

transactions.shift();

transactions.unshift(500);

console.log(transactions);
alert("Final Transactions: " + transactions.join(", "));