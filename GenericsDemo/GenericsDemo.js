function identity(arg) {
    return arg;
}
// 定义泛型后，使用泛型的方式
var output1 = identity('myString');
var output2 = identity('string'); // 类型推断的方式
function logginIdetity(args) {
    return args;
}
var logIdetity1 = identity;
identity('aa');
// 泛型类
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNum = new GenericNumber();
myGenericNum.zeroValue = 0;
myGenericNum.add = function (x, y) { return x + y; };
function loggingArr(args) {
    console.log(args.length);
    return args;
}
// 泛型中使用类型参数
function getProperty(obj, key) {
    return obj[key];
}
var obj1 = { a: 1, b: 2, c: 3 };
getProperty(obj1, 'a');
// 泛型中使用类类型
function create(c) {
    return new c();
}
