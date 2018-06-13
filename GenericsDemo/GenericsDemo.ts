function identity<T>(arg: T): T {
    return arg;
}

// 定义泛型后，使用泛型的方式
let output1 = identity<string>('myString')
let output2 = identity('string') // 类型推断的方式

function logginIdetity<T>(args: T[]): T[]{
    return args
}

// 定义泛型接口
interface InterfaceGenerics<T> {
    (arg: T) : T
}

let logIdetity1: InterfaceGenerics<string> = identity
identity('aa')

// 泛型类
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNum = new GenericNumber<number>()
myGenericNum.zeroValue = 0
myGenericNum.add = function(x, y) { return x + y }

// 泛型约束
interface LengthWise {
    length: number
}
function loggingArr<T extends LengthWise>(args: T): T {
    console.log(args.length)
    return args
}

// 泛型中使用类型参数
function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key]
}
let obj1 = {a: 1, b: 2, c: 3}
getProperty(obj1, 'a')

// 泛型中使用类类型
function create<T>(c: {new(): T}): T {
    return new c()
}