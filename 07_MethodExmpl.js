var Persona = /** @class */ (function () {
    /*
        constructor(){
            this.firstname= "AAA";
            this.lastname = "XXX";
        }
    */
    // multiple constructors are not allowed in TS
    function Persona(fname, lname) {
        this.firstname = fname;
        this.lastname = lname;
    }
    Persona.prototype.getFullName = function () {
        return this.firstname + " " + this.lastname;
    };
    return Persona;
}());
var bPerson = new Persona("AAA", "ZZZ");
console.log(bPerson.getFullName());
bPerson.firstname = "Abc";
bPerson.lastname = "Xyz";
console.log(bPerson.getFullName());
