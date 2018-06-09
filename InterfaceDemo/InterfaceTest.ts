interface personLabel {
    firstName: string
}
function sayHello(person: personLabel) {
    console.log(`Hello, ${person.firstName}`)
}
sayHello({ firstName: 'Zerphyr' })

interface Config {
    x?: number,
    y?: number,
    [propName: string]: any
}

function test(config: Config):void {
    console.log(111)
}
let z:string = '2'
test({ z: 2 })

class Animal {
    name: string;
}
class Dog extends Animal {
    breed: string;
}

// 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!
interface NotOkay {
    [x: number]: Dog;
    [x: string]: Animal;
}

// 继承接口
interface Shape {
    color: string
}
interface Square extends Shape{
    length: number
}
let a: Square = {
    color: 'red',
    length: 10
}
let b = <Square> {
    color: 'red',
    length: 10
}