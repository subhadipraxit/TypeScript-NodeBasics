class Persona{

    firstname : string;
    lastname : string;
/*
    constructor(){
        this.firstname= "AAA";
        this.lastname = "XXX";
    }
*/

// multiple constructors are not allowed in TS
    constructor(fname : string , lname : string){
        this.firstname= fname;
        this.lastname = lname;
    }
    getFullName()
    {
        return this.firstname +" "+ this.lastname;
    }
}

var bPerson = new Persona("AAA" , "ZZZ");
console.log(bPerson.getFullName());
bPerson.firstname="Abc";
bPerson.lastname="Xyz";
console.log(bPerson.getFullName());
