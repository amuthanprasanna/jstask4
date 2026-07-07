let developers = [
    "John",
    "David"
];

let designers = [
    "Ram",
    "Kiran"
];

let team = [...developers, ...designers];

console.log(team);
alert("Company Team: " + team.join(", "));