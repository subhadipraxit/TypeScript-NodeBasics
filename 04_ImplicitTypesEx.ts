var a = 7;
var b = true;
var c = "Hello" ;

//c = 9;    // not able to compile as implicit type is number

var d ;
d = 2;
d = true;  // here implicit type does not play role as we did not declared inline

console.log(d);
 function greeting()  : string {
     return "Good Morning !!!";
 }

 var greet = greeting()
//greet = 78;  // as of the above comment , it is not possible as it is inline declaration 
 console.log(greet);

