var x : number = 2;
var y : boolean = true ;
var z : number = 3 ;

function add( x , y ) {
    return x+y;
}

function addition( x : number , y  : number) {
    return x+y;
}
var sum = add(x, y);
console.log(sum);

sum =  add(x, z);
console.log(sum);

sum =  add(x, "foo");
console.log(sum);

sum =  addition(x, z);
console.log(sum);
//sum =  addition(x, "foo");   // not able to compile
//sum =  addition(x, true);   // not able to compile
//sum =  add(x);    // not able to compile , which is possible in JS

function additionOpt( a : number , b  : number, c ? : number, d = 0) : number { // setting up default value for optional arg d
    return a+b+c+d;
}

sum =  additionOpt(65, 5); // output NaN  , need to check
console.log(sum);

sum =  additionOpt(x, z , 2);
console.log(sum);

sum =  additionOpt(x, z , 2, 8);
console.log(sum);
