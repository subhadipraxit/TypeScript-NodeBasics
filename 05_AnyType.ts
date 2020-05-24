var m  ;  // 'a' variable is of any type
// 2nd way to declare type any
var n : any;

m = 19;
m = true;

n = "SSSS";
n = 89;

console.log(m , n);

// Union type , like a variable can take number or string

var i : number | boolean  ;  // union declaration 
var j  : number | boolean | string ;
i = 7;
i = false;
//i = "Good morning ";  // it is not possible as i can be only number or boolean 



