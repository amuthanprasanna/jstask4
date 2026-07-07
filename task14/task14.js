let data = [
    "Electronics",
    [
        "Mobiles",
        [
            "Samsung",
            "Apple"
        ]
    ]
];

let [category, [subCategory, [brand1, brand2]]] = data;

console.log(category);
console.log(subCategory);
console.log(brand1);
console.log(brand2);

alert(
    category + "\n" +
    subCategory + "\n" +
    brand1 + "\n" +
    brand2
);