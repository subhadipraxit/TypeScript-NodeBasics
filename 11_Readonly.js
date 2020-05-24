var JustExample = /** @class */ (function () {
    function JustExample(name) {
        this.exampel = "JustExample";
        this.name = name;
    }
    return JustExample;
}());
var je = new JustExample("JustName");
console.log(je.name, je.exampel);
//je.name="JustTry";  // ==> name is reda-only property , so we cannot modify the same
