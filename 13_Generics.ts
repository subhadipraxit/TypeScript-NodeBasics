function echo(arg : any) : any{
    return arg;
}

var myStr : string;
console.log(myStr, typeof myStr);

myStr= echo(1);
console.log(myStr, typeof myStr);

function echoo <T> (arg : T) : T {
    return arg;
}

//var myStr1  : string= echoo(1);  // We cannot assign in String type
var myStr1  = echoo(91); 
console.log(myStr1, typeof myStr1);

class Bike{

   bikeName : string;
   engineName : string;

    constructor( bikeName : string, engineName : string ){

        this.bikeName= bikeName;
        this.engineName= engineName;
    }

    getDetails(){

       return this.bikeName + " : "+ this.engineName;
    }
}

class Pulsar extends Bike{

}

class Apache extends Bike{

}

let abike = new Pulsar("GT200" , "6ST");
let anotherbike = new Apache("RT160" , "4ST");


function bikeEcho<T extends Bike>(bike: T) : T{         // if we want that if the function shoudl only take bike and it's sub class 
    return bike;
}

var foo = bikeEcho(abike);
var bar = bikeEcho(anotherbike);

console.log(foo.bikeName);
console.log(bar.bikeName);