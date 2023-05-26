
//3.1函数的定义
//es5中两种定义函数的方法
//函数声明法
function run1(){
  return 'run1';
}
//匿名函数定义法
var run2 = function(){
  return 'run2';
}
//typescript中定义函数的方法
  //函数声明法
  function run3():string{
    return 'run3';
  }
  //匿名函数法
  var fun1 = function():number{
    return 123;
  }
  console.log(fun1());//调用方法
//typescript中定义方法传参
    function getInfo1(name:string,age:number):string{
      return `${name}--${age}`
    }
    console.log(getInfo1('张三',20));
  //没有返回值的方法
      function run4():void{
        console.log("没有返回值的方法")
      }
  //方法中的可选参数
      //es5方法的实参和形参可以不一样，但是ts中必须一样，如果不一样就需要配置可选参数
      function getInfo2(name:string,age?:number):string{
        if(age){
          return `${name}--${age}`
        }else{
          return `${name}--年龄未知`
        }
      }
      console.log(getInfo2('张三'));
  //注意：可选参数必须配置到参数的最后面
//3.3 ts中设置默认参数
  //注：es5中没法设置默认参数
      function getInfo3(name:string,age:number=20):string{
        if(age){
          return `${name}--${age}`
        }else{
          return `${name}--年龄未知`
        }
      }
      console.log(getInfo2('张三'));
      console.log(getInfo2('张三',50));
//3.4 剩余参数
      //1.三点运算符接收形参传过来的值
      function sum1(...result:number[]):number{
        var sum = 0;
        for(var i=0;i<result.length;i++){
          sum+=result[i]
        }
        return sum;
      }
      console.log(sum1(1,2,3,4));
      //2.将1赋值给a，剩下的作为一个数组赋值给result
      function sum2(a:number,...result:number[]):number{
        var sum = a;
        for(var i=0;i<result.length;i++){
          sum+=result[i];
        }
        return sum;
      }
      console.log(sum2(1,2,3,4,5,6))
//3.5 函数的重载
      //java中，重载指的是两个或以上同名函数，但他们的参数不一样，这时会出现函数重载的情况
      //ts中的重载，通过为同一个函数提供多个函数类型定义来试下多种功能的目的
      //ts为了兼容es5以及es6重载的写法和java中有区别
      //ts实现重载：执行同名的函数，传入不同的参数，执行不同的结果
      //注意：es5中出现同名方法，下面的会替换上面的方法，ts中支持方法的重载
      //例子1
      function getInfo4(name:string):string;
      function getInfo4(age:number):number;
      function getInfo4(str:any):any{
        //如果str==string 说明传入的参数是一个字符串
        if(typeof str=='string'){
          return '我叫'+str;
        }else{
          return '我的年龄是'+str;
        }
      }
      console.log(getInfo4('张三'))
      //例子2
      function getInfo5(name:string):string;
      function getInfo5(name:string,age:number):string;
      function getInfo5(name:any,age?:any):any{
        if(age){
          return '我叫'+name+'年龄'+age;
        }else{
          return '我叫'+name;
        }
      }
      console.log(getInfo5('张三'))
//3.6 箭头函数 es6
  //箭头函数里面的this指向上下文
    setTimeout(() => {
      console.log("!")
    }, 300);