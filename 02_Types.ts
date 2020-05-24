        var a : number ;
        var b : boolean;
        var c : string;

       a= 10;
       b = true;
       c = 'Hello'
       //a= true;   // Type 'true' is not assignable to type 'number' in TS

       //Array

       var myarr : number[];
       myarr = [];
       myarr = [ 1, 2, 4];
      // myarr = 1;    // not able to compile
      //myarr = ['abc'];    // not able to compile
       myarr.push(6);
       //myarr.push('xyz');    // not able to compile
       a = myarr.pop();
       //b = myarr.pop();  // not able to compile , as we are trying to assign number to boolean type
        


       //Tuple

       var tup  : [number , boolean]= [1, true];
        tup = [100 , false];
        tup = [2, true];
        // tup = [32];    // not able to compile


