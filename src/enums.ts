//字符串枚举不能做双映射
enum Color {
    Red = '1',
    blue = '2',
    yellow = '3',
    black = '4'
}
console.log(Color)

//
enum Color2{
    Red,
    blue,
    yellow,
    black
}
console.log(Color2)

//异构枚举字符串与数字类型混用
enum Color3{
    Red,
    blue = '1'
}
//常量枚举成员会在编译时计算出结果，然后以常量的形式，出现在运行时环境
enum Char {
    // 常量枚举成员
    a,
    b = Char.a,
    c = 1 + 3,
    // 非常量枚举成员
    d = Math.random(),
    e = 'hello'.length
}
console.log(Char)
//等价于
// 编译
let Char2;
(function (Char) {
    // 常量枚举成员
    Char[Char["a"] = 0] = "a";
    Char[Char["b"] = 0] = "b";
    Char[Char["c"] = 4] = "c";
    // 非常量枚举成员
    Char[Char["d"] = Math.random()] = "d";
    Char[Char["e"] = 'hello'.length] = "e";
})(Char2 || (Char2 = {}));

// 常量类型的枚举不能有计算成员 如 不能给成员赋值包含js 表达是的语句 Up = 'hello'.length
//常量枚举会在编译阶段被移除
//当我们不需要一个对象，而需要对象的值，就可以使用常量枚举，这样就可以避免在编译时生成多余的代码和间接引用
const enum Direction {
    Up,
    Down,
    Left,
    Right
}

const value: string = '4'
if(value === Color.black){
    console.log('black')
}
