class Vehicle{

    vname : string;
    vtype : string;

    constructor()
    {
            console.log("Vehicle Constructor  Called");
    }

    drive(){

        console.log("Driving Vehicle");
    }

}

class Car extends Vehicle{

    constructor()
    {
        super();
        console.log("Car Constructor  Called");
    }

    drive(){

        console.log("Driving car");
    }

    start(){

        console.log("Starting car");
    }

}

var abc : Vehicle = new Car();
abc.drive();
//abc.start(); // as we have type casted to Vehicle , the start method is not visible to TS
var xyz  = new Car();
xyz.drive();
xyz.start();