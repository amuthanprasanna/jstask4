let items = [
    1,
    2,
    [
        3,
        4,
        [
            5,
            6
        ]
    ]
];

let flatItems = items.flat(2); // depth = 2

console.log(flatItems);
alert("Flattened Items: " + flatItems.join(", "));