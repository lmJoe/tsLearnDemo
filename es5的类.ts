//es5里面的类
//1.定义一个简单类
function Person(){
  this.name = '张三';
  this.age = 20;
}
//实例化
var P = new Person();
//通过实例化的对象调用的他的name或者age
console.log(P.name);//张三



//2.构造函数和原型链里增加方法
  //构造函数
  function Person1(){
    this.name = '张三';
    this.age = 20;
     //实例方法
    this.run = function(){
      console.log(this.name+"在运动")
    }
  }
  //实例化
  var P = new Person1();
  P.run(); //张三在运动
  
  //通过原型链扩展属性和方法
  function Person2(){
    this.name = '张三';
    this.age = 20;
     //实例方法
    this.run = function(){
      console.log(this.name+"在运动")
    }
  }
  //原型链上的属性会被多个实例共享、构造函数不会
  //通过原型链增加属性
  Person2.prototype.sex = '男';
  //通过原型链增加方法
  Person2.prototype.work = function(){ 
    console.log(this.name+'在工作');
  };
  //实例化
  var P = new Person2();
  P.work();//张三在工作
  console.log(P.sex);//男


//3.类里面的静态方法
  function Person3(){
    this.name = '张三';
    this.age = 20;
     //实例方法
    this.run = function(){
      console.log(this.name+"在运动")
    }
  }
  //添加静态方法
  Person3.getInfo = function (){
    console.log("我是静态方法");
  }
  //通过原型链增加属性
  Person3.prototype.sex = '男';
  //通过原型链增加方法
  Person3.prototype.work = function(){ 
    console.log(this.name+'在工作');
  };
  //实例化
  var P = new Person3();
  P.work(); //张三在工作
  //调用静态方法
  Person.Person3();




//4. es5里面的继承 原型链+对象冒充的组合继承式
  function Person4(){
    this.name = '张三';
    this.age = 20;
    //实例方法
    this.run = function(){
      console.log(this.name+"在运动")
    }
  }
  //通过原型链增加属性
  Person4.prototype.sex = '男';
  //通过原型链增加方法
  Person4.prototype.work = function(){ 
    console.log(this.name+'在工作');
  };
  //Web类 继承Person4类 （常见的原型链+对象冒充的组合继承式）
  function Web(){
    Person.call(this); //对象冒充实现继承
  }
  var w = new Web();
  w.run(); //对象冒充可以继承构造函数里面的属性和方法、
  w.work();//对象冒充可以继承构造函数里的方法，但无法继承原型链里面的属性和方法




//5. es5里面的继承 (原型链实现继承)
  //原型链实现继承的好处是既可以继承构造函数上方法又可以继承原型链上的方法
  function Person5(){
    this.name = '张三';
    this.age = 20;
    //实例方法
    this.run = function(){
      console.log(this.name+"在运动")
    }
  }
  //通过原型链增加属性
  Person5.prototype.sex = '男';
  //通过原型链增加方法
  Person5.prototype.work = function(){ 
    console.log(this.name+'在工作');
  };
  //Web类 继承Person5类 
  function Web(){
    
  }
  Web.prototype = new Person5();//原型链实现继承
  var w = new Web();
  w.run();//可以继承构造函数里面的方法
  w.work();//可以继承原型链上的方法


//6. 原型链实现继承的问题
  function Person6(){
    this.name = '张三';
    this.age = 20;
    //实例方法
    this.run = function(){
      console.log(this.name+"在运动")
    }
  }
  //通过原型链增加属性
  Person6.prototype.sex = '男';
  //通过原型链增加方法
  Person6.prototype.work = function(){ 
    console.log(this.name+'在工作');
  };
  function Web(name,age){

  }
  Web.prototype = new Person();
  var w = new Web('赵四',22);//实例化子类的时候无法给父类传参
  w.run();




//7. 原型链+构造函数的组合继承模式(解决原型链实现继承出现的实例化子类无法给父类传参的问题)
  function Person7(){
    this.name = '张三';
    this.age = 20;
    //实例方法
    this.run = function(){
      console.log(this.name+"在运动")
    }
  }
  //通过原型链增加属性
  Person7.prototype.sex = '男';
  //通过原型链增加方法
  Person7.prototype.work = function(){ 
    console.log(this.name+'在工作');
  };
  function Web(name,age){
    Person7.call(this,name,age);//对象冒充继承，解决实例化子类不能给父类传参
  }
  Web.prototype = new Person();
  var w = new Web('赵四',22);//实例化子类的时候无法给父类传参
  w.run();//w调用父类里面的方法
  w.work();//w也可以调用父类里面的work

//8.原型链+对象冒充继承的另一种方法
  function Person8(){
    this.name = '张三';
    this.age = 20;
    //实例方法
    this.run = function(){
      console.log(this.name+"在运动")
    }
  }
  //通过原型链增加属性
  Person8.prototype.sex = '男';
  //通过原型链增加方法
  Person8.prototype.work = function(){ 
    console.log(this.name+'在工作');
  };
  function Web(name,age){
    Person8.call(this,name,age);//对象冒充继承，可以继承构造函数里面的属性和方法 实例化子类可以给父类传参
  }
  Web.prototype = Person.prototype;
  var w = new Web('赵四',22);//实例化子类的时候无法给父类传参
  w.run();//w调用父类里面的方法
  w.work();//w也可以调用父类里面的work
  