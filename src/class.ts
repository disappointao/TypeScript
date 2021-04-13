//abstract public protected private readonly
//修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的
//private 修饰的属性或方法是私有的，不能在声明它的类的外部访问
//protected 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的
//abstract 用于定义抽象类和其中的抽象方法，不能与private一起使用，抽象类中的抽象方法必须被子类实现
interface eat{
    eat(): void
}
abstract class Animal{
    protected readonly name: string
    protected age: number
    protected constructor(name:string, age:number) {
        this.name = name
        this.age = age
    }
    public abstract eat()
    protected abstract sleep()
}
class Cat extends Animal implements eat{
    constructor(name:string, age:number) {
        super(name, age);
    }
    public eat() {
        console.log(`${this.name}吃鱼`)
        this.sleep()
    }
    public sleep() {
        console.log(`${this.age}岁的宝宝在睡觉`)
    }
}
let cat = new Cat('包子',1)
cat.eat()
