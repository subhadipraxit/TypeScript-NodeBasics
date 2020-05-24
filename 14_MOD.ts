export class Box{

    boxName : string;
    boxType : string ;

    constructor( boxname : string , boxtype : string){
        this.boxName = boxname;
        this.boxType = boxtype;
    }
    getBox() : string{
        return "Here is your box : " + this.boxName+" and "+this.boxType;
    }
}

console.log( "Medhod called from exported class : "+new Box("Dropbox" , "Virtual").getBox());