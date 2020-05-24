var Persons = /** @class */ (function () {
    function Persons() {
    }
    return Persons;
}());
var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());
var aPersons = new Persons(); // Implicit type cast , no need actually 
aPersons.firstName = 123;
aPersons.lastName = "Xyz";
console.log(aPersons);
console.log(aPersons.firstName);
var aEmp;
aEmp = new Employee(); // Not implicit type cast
aEmp.firstName = "Abc";
console.log(aEmp);
