class Persons{
    firstName;
    lastName;
}

class Employee{
    firstName : string;
    lastName : string;
}
var aPersons : Persons = new Persons(); // Implicit type cast , no need actually 
aPersons.firstName=123;
aPersons.lastName="Xyz";
console.log(aPersons);
console.log(aPersons.firstName);

var aEmp;

aEmp= new Employee();  // Not implicit type cast
aEmp.firstName="Abc";
console.log(aEmp);
