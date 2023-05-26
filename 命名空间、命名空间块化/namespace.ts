/**
 * 命名空间
 * 在代码量较大的情况下，为了避免各种变量命名相互冲突，可讲相似功能的函数、类、接口等放置到命名空间
 */
/**
 * 命名空间和模块的区别
 * 命名空间：内部模块，主要用于组织代码，避免命名的冲突
 * 模块：ts的外部模块的简称侧重代码的复用，一个模块里面可能有多个命名空间
 */
//使用namespace设置命名空间

namespace A{
  interface Animal{
    name:string;
    eat():void;
  }
  export class Dog implements Animal{
    name: string;
    constructor(theName:string){
      this.name = theName;
    }
    eat(){
      console.log(`${this.name}吃狗粮`);
    }
  }
  export class Cat implements Animal{
    name: string;
    constructor(theName:string){
      this.name = theName;
    }
    eat(){
      console.log(`${this.name}吃猫粮`);
    }
  }
}
namespace B{
  interface Animal{
    name:string;
    eat():void;
  }
  export class Cat implements Animal{
    name: string;
    constructor(theName:string){
      this.name = theName;
    }
    eat(){
      console.log(`${this.name}吃猫粮`);
    }
  }
}
//调用A命名空间中的方法
let dog = new A.Dog('狗狗');
dog.eat();
//调用B命名空间中的方法
let dog1 = new B.Cat('狗狗');
dog1.eat();