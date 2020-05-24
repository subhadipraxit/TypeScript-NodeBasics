var x = 2;
var y = true;
var z = 3;
function add(x, y) {
    return x + y;
}
function addition(x, y) {
    return x + y;
}
var sum = add(x, y);
console.log(sum);
sum = add(x, z);
console.log(sum);
sum = add(x, "foo");
console.log(sum);
sum = addition(x, z);
console.log(sum);
//sum =  addition(x, "foo");   // not able to compile
//sum =  addition(x, true);   // not able to compile
//sum =  add(x);    // not able to compile , which is possible in JS
function additionOpt(a, b, c, d) {
    if (d === void 0) { d = 0; }
    return a + b + c + d;
}
sum = additionOpt(65, 5); // output NaN  , need to check
console.log(sum);
sum = additionOpt(x, z, 2);
console.log(sum);
sum = additionOpt(x, z, 2, 8);
console.log(sum);
