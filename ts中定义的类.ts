// ts中定义的类
  //使用class定义
  // class Person{
  //   //定义属性，前面省略了public关键词
  //   name:string;
  //   //构造函数 实例化类的时候触发的方法
  //   constructor(n:string){
  //     this.name = n;
  //   }
  //   run():void{
  //     console.log(this.name);
  //   }
  // }
  // var p = new Person('张三');
  // p.run();

/**
 * ts中定义类
 */
  class Person{
    //定义属性，前面省略了public关键词
    name:string;
    //构造函数 实例化类的时候触发的方法
    constructor(name:string){
      this.name = name;
    }
    getName():string{
      return this.name;
    }
    setName(name:string):void{
      this.name = name;
    }
  }
  var p = new Person('张三');
  console.log(p.getName());

  console.log(p.setName('李四'));
  console.log(p.getName());



/**
 * 1.ts中如何实现继承 extends super
 */
class Person1{
  name:string;
  constructor(name:string){
    this.name = name;
  }
  run():string{
    return `${this.name}在运动`
  }

}
var p1= new Person1('王五');
console.log(p1.run());//王五在运动

//创建一个web类继承Person类
  class Web extends Person1{
    constructor(name:string){
      super(name);//使用super把name传进去实现真正的继承 （初始换父类的构造函数）
    }
  }
  var w1 = new Web('李四');
  w1.run();//李四在运动 继承了Person1中的run方法 调用父类中的方法


/**
 * 2.ts中继承的探讨（父类的方法和子类的方法一致）
 */
  class Person2{
    name:string;
    constructor(name:string){
      this.name = name;
    }
    run():string{
      return `${this.name}在运动`
    }

  }
  var p1= new Person2('王五');
  console.log(p1.run());//王五在运动

  //创建一个web2类继承Person2类
    class Web2 extends Person2{
      constructor(name:string){
        super(name);//使用super把name传进去实现真正的继承 （初始换父类的构造函数）
      }
      //子类不仅继承父类的方法和属性，还能扩展子类里面的方法
      run(): string {
        return (`${this.name}在运动-子类`)
      }
      work(){
        console.log(`${this.name}`);//this.name获取父类里面的属性
      }
    }
  var w2 = new Web2('李四');
  console.log(w2.work());
  console.log(w2.run());//执行子类里面的run方法



  /**
   * 类里面的修饰符 ts里面定义属性的时候给我们提供了三种修饰符 
   * public 公有类型 在类里、 子类、 包括类外部都可以访问
   * protected 保护类型  在类里面、子类里面可以访问，在类外部无法访问
   * private 私有 在当前类里面可以访问，子类、类外部无法访问
   * 属性如果不加修饰符 默认就是公有（public）
   */
  class Person3{
    public name:string; //公有属性
    constructor(name:string){
      this.name = name;
    }
    run():string{
      return `${this.name}在运动`
    }

  }

  class Web3 extends Person3{
    constructor(name:string){
      super(name);//使用super把name传进去实现真正的继承 （初始换父类的构造函数）
    }
    //子类不仅继承父类的方法和属性，还能扩展子类里面的方法
    run(): string {
      return (`${this.name}在运动-子类`)
    }
    work(){
      console.log(`${this.name}`);//this.name获取父类里面的属性
    }
  }
  var w3 = new Web3('李四');
  w3.work();
  //类外部访问公有属性
  class Person4{
    public name:string; //公有属性
    constructor(name:string){
      this.name = name;
    }
    run():string{
      return `${this.name}在运动`
    }
  }
  var p1 = new Person4('哈哈哈');
  console.log(p1.name);

  //protected 保护类型 
    class Person5{
      protected name:string;
      constructor(name:string){
        this.name = name;
      }
      run():string{
        return `${this.name}在运动`
      }
    }
    class Web4 extends Person5{
      constructor(name:string){
        super(name);
      }
      work(){
        console.log(`${this.name}在工作`)
      }
    }
    var p3 = new Web4('李四');
    console.log(p3.work());//保护类型 可以在子类里面调用方法
    console.log(p3.run());//保护类型 在父类中调用

  //类外部无法访问保护类型的属性
    class Person7{
      protected name:string;
      constructor(name:string){
        this.name = name;
      }
      run():string{
        return `${this.name}在运动`
      }
    }
    var p4 = new Person7('李四');
    console.log(p4.name);//保护类型 在外部无法访问

  //私有属性 private  类外部无法访问私有类型的属性
  class Person8{
    private name:string;
    constructor(name:string){
      this.name = name;
    }
    run():string{
      return `${this.name}在运动`
    }
  }
  var p5 = new Person8('李四');
  console.log(p5.name);//保护类型 在外部无法访问
  class Web5 extends Person9{
    constructor(name:string){
      super(name);
    }
    work():string{
      console.log(`${this.name+'在工作'}`)
    }
  }
  //私有属性 在当前类内可以调用属性
  class Person9{
    private name:string;
    constructor(name:string){
      this.name = name;
    }
    run():string{
      return `${this.name}在运动`
    }
  }
  var p6 = new Person8('123456');
  console.log(p6.run());//保护类型 在外部无法访问