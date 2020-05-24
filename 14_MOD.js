"use strict";
exports.__esModule = true;
exports.Box = void 0;
var Box = /** @class */ (function () {
    function Box(boxname, boxtype) {
        this.boxName = boxname;
        this.boxType = boxtype;
    }
    Box.prototype.getBox = function () {
        return "Here is your box : " + this.boxName + " and " + this.boxType;
    };
    return Box;
}());
exports.Box = Box;
console.log("Medhod called from exported class : " + new Box("Dropbox", "Virtual").getBox());
