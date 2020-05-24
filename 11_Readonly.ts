class JustExample{

    readonly exampel = "JustExample";
    readonly name;
    constructor( name : string){this.name=name;}
}

var je : JustExample = new JustExample("JustName");
console.log(je.name , je.exampel);
//je.name="JustTry";  // ==> name is reda-only property , so we cannot modify the same

