/**
 * 接口属性  对json的约束
 * ts中的接口类型
 * 1.属性接口
 * 2.函数类型接口
 * 3.可索引接口
 * 4.类类型接口
 * 5.扩展接口
 */
/**
 * 1.属性接口
 */
    //a.基本方法
    function printLabel ():void{

    }
    printLabel()

    /**
     * b.ts中定义方法传入参数
     */
    function printLabel1 (label:string):void{
      console.log(label);
    }
    printLabel1('字符串')


    /**
     * c.ts中自定义方法传入参数对json进行约束
     */
    function printLabel2(labelInfo:{'label':string}):void{
      console.log(labelInfo);
    }
    var param1 = {
      'label':'必须是字符串'
    }
    printLabel2(param1);

    /**
     * d.对批量方法传入参数进行约束
     * 使用interface定义约束接口传入的对象
     */
    interface FullName {
      'firstName':string;//使用;结束
      'secondName':string;
    }
    function printLabel3(name:FullName):void{
      console.log(name);
    }
    //传入的参数必须包含firstName和secondName
    var obj = {
      'firstName':'张',
      'secondName':'三'
    }
    printLabel3(obj)

    /**
     * c.接口可选属性
     * 
     */
    interface FullName1{
      'firstName':string,
      'secondName'?:string,
    }
    function printLabel4(name:FullName1):void{
      console.log("name",name)
    }
    //参数的顺序可以不一样
    printLabel4({
      // secondName:'secondName',
      firstName:'firstName',//可传可不传
    })



    /**
     * reaquest的ajax接口
     */
    //Config为配置ajax请求参数的接口
    interface Config{
      type:string;
      url:string;
      data?:string;
      dataType:string;
    }
    //原生js封装ajax
    function ajax(config:Config){
      var xhr = new XMLHttpRequest();
      xhr.open(config.type,config.url,true);//此处的true为是否为异步
      xhr.send(config.data)
      xhr.onreadystatechange=function(){
        if(xhr.readyState==4&&xhr.status==200){
          console.log("成功");
          if(config.dataType=='json'){
            JSON.parse(xhr.responseText)
          }else{
            console.log(xhr.responseText)
          }
          
        }
      }
    }
    //调用ajax
    ajax({
      type:'POST',
      url:'http://a.itying.com/api/productlist',
      data:'123456',
      dataType:'json',
    })
/**
 * 2.函数类型接口：对方法传入的参数以及返回值进行约束(批量进行约束)
 */
    //加密的函数类型接口
    interface encrypt{
      (
        key:string,value:string
      ):string; 
    }
    var md5:encrypt=function(key:string,value:string):string{
      //模拟操作
      return key+value;
    }
    console.log(md5('name','张三'));

    var sha1:encrypt=function(key:string,value:string):string{
      //模拟操作
      return key+'---'+value;
    }
    console.log(sha1('name','list'));
/**
 * 3.可索引接口：数组对象的约束（不常用）
 */
    //ts定义数组的方式
    //第一种方法
    var arr:number[] = [123,123];//number是指数组里面定义的值必须为number类型
    var arr1:Array<string> = ['123','2213']
    //第一种情况：对数组的约束，可索引接口
    interface UserArr{
      //index为类型为number的索引值 value为string
      [index:number]:string
    }
    var arr2:UserArr = ['123456','7854542'];
    console.log(arr2[0]);
    
    //第二种情况：可索引接口 对对象的约束
    interface UserObj{
      [index:string]:string
    }
    var arr3:UserObj = {name:'张三'};

/**
 * 4.类类型接口：对类的约束，和抽象类有些相似
 */
interface Animal{
  name:string;
  eat(str:string):void;
}
//implements实现某个方法
class Dog implements Animal{
  name:string;
  constructor(name:string){
    this.name = name;
  }
  eat(){
    console.log(this.name+'吃粮食')
  }
}
var d = new Dog('小黑');
console.log(d.eat());

class Cat implements Animal{
  name: string;
  constructor(name:string){
    this.name = name;
  }
  eat(food:string){
    console.log(this.name+'吃'+food);
  }
}
var d1 = new Cat('小花猫');
d1.eat('老鼠');
/**
 * 接口扩展 接口可以继承接口
 */
interface Animal1{
  eat():void;
}
interface Person extends Animal1{
  work():void;
}
class Web implements Person{
  public name:string;
  constructor(name:string){
    this.name = name;
  }
  work() {
    console.log(this.name+'在上班');
  }
  eat(){
    console.log(this.name+'吃馒头')
  }
}
var d2 = new Web('小李')
d2.eat()
d2.work()

//另外一种情况

interface Animal1{
  eat():void;
}
interface Person extends Animal1{
  work():void;
}
class Programmer{
  public name:string;
  constructor(name:string){
    this.name = name;
  }
  coding(code:string){
    console.log(this.name+code)
  }
}


//既可以继承 又可以实现增接口
class Web1 extends Programmer implements Person{
  constructor(name:string){
    super(name)
  }
  work() {
    console.log(this.name+'在上班');
  }
  eat(){
    console.log(this.name+'吃馒头')
  }
}
var d3 = new Web1('小李')
d3.eat()
d3.work()
d3.coding('写ts代码');