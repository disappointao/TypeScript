//函数声明
function add(x: number, y: number): number {
    return x + y
}
add(1,2)
//函数表达式
let fun1: (x: number, y: number) => number = add
interface addFun {
    (x: number, y: number) : number
}
let fun2: addFun = add

//可选参数，可选参数必须在必选参数之后
function add2(x: number, y: number, z?: number): number{
    if(z){
        return x + y + z
    }
    return x + y
}
add2(1,2)
add2(1,2,3)

//默认参数,会将默认参数自动识别为可选参数，且不必遵循可选参数在必选参数之后的原则
function add3(x: number , y: number = 2): number{
    return x + y
}
add3(1)
function add4(x: number = 0, y: number): number{
    return x + y
}
add4(undefined,3)

//函数重载，前两次为函数定义，后两次为函数重载
function reverse(x: number): number;
function reverse(y: string): string;
function reverse(x: number | string): number | string{
    if(typeof x === 'number'){
        return x.toString().split('').reverse().join('')
    }else if(typeof x === 'string'){
        return x.split('').reverse().join('');
    }
}