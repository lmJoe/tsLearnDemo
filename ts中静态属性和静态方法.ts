//静态属性 静态方法
  //es5中静态属性和静态方法
  function Person(){
    //实例方法
    this.run1 = function(){

    }
  }
  //静态属性
  Person.name = 'hahah';
  //静态方法
  Person.run2 = function(){

  }

  var p = new Person();
  //静态方法的调用
  Person.run2();


  //ts中
  class Person1{
    public name:string;
    public age:number = 20;
    //静态属性
    static sex = '男';
    constructor(name:string){
      this.name = name;
    }
    //实例方法
    run(){
      console.log(`${this.name}在运动`);
    }
    work(){
      console.log(`${this.name}在工作`);
    }
    //静态方法 使用static关键词 (静态方法里面无法直接调用类里面的属性，只能调用类里面的静态属性方法)
    static prInt(){
      console.log(`${this.sex}在工作`);
      //静态方法里面调用静态属性
      console.log(Person1.sex);
    }
  }
  //调用实例方法
  var p1 = new Person1('张三');
  p1.run();
  //调用静态方法
  Person1.prInt();
  //调用静态属性
  console.log(Person1.sex)


  /**
   * 多态：父类定义一个方法不去实现，让继承它的子类去实现，每一个子类都有不同的表现；
   * 多态属于继承
   */
  class Animal{
    name:string;
    constructor(name:string){
      this.name = name;
    }
    //具体吃什么由继承它的子类去实现，每一个的子类的表现不一样
    eat(){
      console.log("吃的方法");
    }
  }
  class Dog extends Animal{
    constructor(name:string){
      super(name);
    }
    add(){
      return this.name + '在运动1';
    }
  }
  class Cat extends Animal{
    constructor(name:string){
      super(name);
    }
    add(){
      return this.name + '在运动2';
    }
  }



  /**
   * ts中的抽象方法和抽象类 它是提供其他类继承的基类，不能被直接实例化
   * 用abstract关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
   * abstract抽象方法只能放在抽象类里面
   */
  //抽象类和抽象方法用来定义标准 标准：Animal 这个类他的子类必须包含eat方法
  abstract class Animal1{ //抽象类
    public name:string;
    constructor(name:string){
      this.name = name;
    }
    abstract eat():any;//抽象方法
  }
  //注：无法创建抽象类的实例
  // var a = new Animal();//错误的写法
  class Dog1 extends Animal1{
    //抽象类的子类必须实现抽象类里面的抽象方法
    constructor(name:any){
      super(name);
    }
    eat() {
      console.log(`${this.name}吃饭`);
    }
  }
  var d = new Dog1('小狗');
  d.eat();

  class Cat1 extends Animal1{
    //抽象类的子类必须实现抽象类里面的抽象方法
    constructor(name:any){
      super(name);
    }
    eat() {
      console.log(`${this.name}吃饭`);
    }
  }
  var d1 = new Cat1('小猫');
  d1.eat();