function createHelloWorld(world) {
    return 'Hello, ' + world
}

let world = 'World'

console.log(createHelloWorld(world))

// 类型注解
function createAnnotations(world: string) {
    return 'Test annotations: ' + world
}

// let arr = [1,2,3]
// console.log(createAnnotations(arr))  // 编译报错，因为通过类型注解规定参数必须是字符串 string

// 接口
// 接口主要用于对对象内部的属性进行类型限定
interface Person {
    firstName: string,
    lastName: string
}

function createInterfaceDemo(person: Person) {
    return person.firstName + '---' + person.lastName
}

let user = { firstName: 'Zerphyr', lastName: 'Zheng'}

createInterfaceDemo(user)

// 类
class Student {
    fullName: string
    constructor(public firstName, public middleName, public lastName) {
        this.fullName = `${firstName} ${middleName} ${lastName}`
    }
}

function createClassDemo(person: Person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName
}

let userClass = new Student('Zephyr','JS','Zheng')

createClassDemo(userClass)

enum Color { Red, Green, Blue }
let color: Color = Color.Red

let testAny: any = 4
testAny.indexOf() // 编译器不会报错
let testArr: Array<any> = [1,'2',true]

function testVoid(): void {
    console.log('no void')
}

// 测试 null 和 undefined
let num: number = null
let num1: number = undefined
let colorNull: Color = null
let arrUndefined: Array<number> = undefined

function error(): never {
    throw new Error()
}