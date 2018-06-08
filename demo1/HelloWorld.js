function createHelloWorld(world) {
    return 'Hello, ' + world;
}
var world = 'World';
console.log(createHelloWorld(world));
// 类型注解
function createAnnotations(world) {
    return 'Test annotations: ' + world;
}
function createInterfaceDemo(person) {
    return person.firstName + '---' + person.lastName;
}
var user = { firstName: 'Zerphyr', lastName: 'Zheng' };
createInterfaceDemo(user);
// 类
var Student = /** @class */ (function () {
    function Student(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleName + " " + lastName;
    }
    return Student;
}());
function createClassDemo(person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName;
}
var userClass = new Student('Zephyr', 'JS', 'Zheng');
createClassDemo(userClass);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var color = Color.Red;
var testAny = 4;
testAny.indexOf(); // 编译器不会报错
var testArr = [1, '2', true];
function testVoid() {
    console.log('no void');
}
// 测试 null 和 undefined
var num = null;
var num1 = undefined;
var colorNull = null;
var arrUndefined = undefined;
function error() {
    throw new Error();
}
