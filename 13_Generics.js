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
function echo(arg) {
    return arg;
}
var myStr;
console.log(myStr, typeof myStr);
myStr = echo(1);
console.log(myStr, typeof myStr);
function echoo(arg) {
    return arg;
}
//var myStr1  : string= echoo(1);  // We cannot assign in String type
var myStr1 = echoo(91);
console.log(myStr1, typeof myStr1);
var Bike = /** @class */ (function () {
    function Bike(bikeName, engineName) {
        this.bikeName = bikeName;
        this.engineName = engineName;
    }
    Bike.prototype.getDetails = function () {
        return this.bikeName + " : " + this.engineName;
    };
    return Bike;
}());
var Pulsar = /** @class */ (function (_super) {
    __extends(Pulsar, _super);
    function Pulsar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Pulsar;
}(Bike));
var Apache = /** @class */ (function (_super) {
    __extends(Apache, _super);
    function Apache() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Apache;
}(Bike));
var abike = new Pulsar("GT200", "6ST");
var anotherbike = new Apache("RT160", "4ST");
function bikeEcho(bike) {
    return bike;
}
var foo = bikeEcho(abike);
var bar = bikeEcho(anotherbike);
console.log(foo.bikeName);
console.log(bar.bikeName);
