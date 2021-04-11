let age: number = 22
let flag:boolean = true
let nickName: string = '凹'
let u: undefined = undefined
let n: null = null

//非严格模式下 undefined 与 null可赋值给其他基础类型
let num: number = undefined
let num2: string = null

let var1: any = nickName
var1 = 123
var1 = false

let numOrString: number | string = 123
numOrString = 'str'

//数组泛型
let arr: Array<number> = [123,345]
let arr2: number[] = [123,345]
//接口表示数组
interface numberArr{
    [index: number]:number
}
let arr3: numberArr = [0,1,2,3,4]
arr2.push(2)

let user: [string, number] = ['name', 18]
