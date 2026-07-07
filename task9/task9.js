
function* couponGenerator() {
    yield "WELCOME10";
    yield "SAVE20";
    yield "MEGA50";
    yield "FREE100";
}

let coupons = couponGenerator();

console.log(coupons.next().value); 
console.log(coupons.next().value);
console.log(coupons.next().value);
console.log(coupons.next().value);

alert(
    coupons.next().value + "\n" +  
    "All coupons printed in console!"
);