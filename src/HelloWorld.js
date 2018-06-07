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
