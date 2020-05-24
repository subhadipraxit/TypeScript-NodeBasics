class Cop{
/*
    firstName : string;  // By default the access modifier is PUBLIC => public firstName : string;
    lastName : string;

    constructor (fn : string  , ln : string){
        this.firstName=fn;
        this.lastName=ln;
    }
*/
    // the equivalent of the above lines of code is below , just one line

    constructor( public firstName : string, public lastname : string){}
    //constructor(  firstName : string,  lastname : string){}    ==> Both lines are same

}

class Police{

    /*
   private  firstName : string;
   protected lastName : string;

    constructor (fn : string  , ln : string){
        this.firstName=fn;
        this.lastName=ln;
    }
*/
    // the equivalent of the above lines of code is below , just one line
    constructor( private firstName : string, protected lastName : string){}

    // The PRIVATE member variables are not accessible from outside , not even from the subclass
    // The PROTECTED member variables are not accessible from outside ,but only from the subclass

    getFirstName(){
        return this.firstName;
    }

    getLastName(){
        return this.lastName;
    }


}

class ThoughtPolice extends Police{

 lastName="Pol";

  //firstName="aaa";  // ==>  we cannot modify / access this member variable from Police as it is PRIVATE

}

let pol : Police = new ThoughtPolice("T" , "P");
console.log(pol.getFirstName());
console.log(pol.getLastName());
