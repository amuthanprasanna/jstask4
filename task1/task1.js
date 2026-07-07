let employee = {
    name: "Naveen",
    salary: 35000
};
let updatedEmployee = {
    ...employee,
    bonus: 5000,
    department: "Developer"
};
console.log(updatedEmployee);
alert(JSON.stringify(updatedEmployee, null, 2));