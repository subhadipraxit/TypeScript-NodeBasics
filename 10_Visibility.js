var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Cop = /** @class */ (function () {
    /*
        firstName : string;  // By default the access modifier is PUBLIC => public firstName : string;
        lastName : string;
    
        constructor (fn : string  , ln : string){
            this.firstName=fn;
            this.lastName=ln;
        }
    */
    // the equivalent of the above lines of code is below , just one line
    function Cop(firstName, lastname) {
        this.firstName = firstName;
        this.lastname = lastname;
    }
    return Cop;
}());
var Police = /** @class */ (function () {
    /*
   private  firstName : string;
   protected lastName : string;

    constructor (fn : string  , ln : string){
        this.firstName=fn;
        this.lastName=ln;
    }
*/
    // the equivalent of the above lines of code is below , just one line
    function Police(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // The PRIVATE member variables are not accessible from outside , not even from the subclass
    // The PROTECTED member variables are not accessible from outside ,but only from the subclass
    Police.prototype.getFirstName = function () {
        return this.firstName;
    };
    Police.prototype.getLastName = function () {
        return this.lastName;
    };
    return Police;
}());
var ThoughtPolice = /** @class */ (function (_super) {
    __extends(ThoughtPolice, _super);
    function ThoughtPolice() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lastName = "Pol";
        return _this;
        //firstName="aaa";  // ==>  we cannot modify / access this member variable from Police as it is PRIVATE
    }
    return ThoughtPolice;
}(Police));
var pol = new ThoughtPolice("T", "P");
console.log(pol.getFirstName());
console.log(pol.getLastName());
