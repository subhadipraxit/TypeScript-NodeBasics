interface Personalities{

    firstName : string;
    lastName : string ;

    getFullName() : string;
}

class Emp implements Personalities{
    firstName: string;
    lastName: string;

    constructor( fn : string , ln : string){

        this.firstName=fn;
        this.lastName=ln;
    }

    getFullName() : string{
        return this.firstName +" "+ this.lastName;
    }
}

var emp = new Emp("abc" , "xyz");
console.log(emp.getFullName());

var p = {

    firstName : "Test" ,
    lastName : "Test" ,
    a : 21 ,
    getFullName : () =>{
        return "firstName  lastName";
    }
}

emp = p;
console.log(emp.firstName);
console.log(emp.getFullName());
//emp.a;             ---> access of this prop not possible as emp is Personalities type which does not have a prop