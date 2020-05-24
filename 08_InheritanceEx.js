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
var Vehicle = /** @class */ (function () {
    function Vehicle() {
        console.log("Vehicle Constructor  Called");
    }
    Vehicle.prototype.drive = function () {
        console.log("Driving Vehicle");
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        var _this = _super.call(this) || this;
        console.log("Car Constructor  Called");
        return _this;
    }
    Car.prototype.drive = function () {
        console.log("Driving car");
    };
    Car.prototype.start = function () {
        console.log("Starting car");
    };
    return Car;
}(Vehicle));
var abc = new Car();
abc.drive();
//abc.start(); // as we have type casted to Vehicle , the start method is not visible to TS
var xyz = new Car();
xyz.drive();
xyz.start();
