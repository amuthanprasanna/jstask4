let ids = [101, 102, 103, 104, 105];

ids.splice(2, 2, 501, 502);

console.log(ids);
alert("Final IDs: " + ids.join(", "));