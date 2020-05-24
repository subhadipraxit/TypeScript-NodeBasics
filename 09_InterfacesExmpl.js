var Emp = /** @class */ (function () {
    function Emp(fn, ln) {
        this.firstName = fn;
        this.lastName = ln;
    }
    Emp.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Emp;
}());
var emp = new Emp("abc", "xyz");
console.log(emp.getFullName());
var p = {
    firstName: "Test",
    lastName: "Test",
    a: 21,
    getFullName: function () {
        return "firstName  lastName";
    }
};
emp = p;
console.log(emp.firstName);
console.log(emp.getFullName());
//emp.a;             ---> access of this prop not possible as emp is Personalities type which does not have a prop
