/**
 * 泛型接口
 */
//定义一个函数接口
interface ConfigFn{
  (value1:string,value2:string):string;
}
var setData:ConfigFn=function (value1:string,value2:string):string{
  return value1+value2;
}
setData('name','张三');



//泛型接口
interface ConfigFn1{
  //写泛型接口要现在前面加个<T>表示泛型 ，value也是一个泛型T  返回值也是泛型T
  <T>(value:T):T;
}
//<T>为指定function为一个泛型 value为一个泛型 返回值也为一个泛型
var getData1:ConfigFn1=function<T>(value:T):T{
  return value;
}
getData1<string>('张三');



//上面泛型接口的例子另外一种写法为
interface ConfigFn2<T>{
  //写泛型接口要现在前面加个<T>表示泛型 ，value也是一个泛型T  返回值也是泛型T
  (value:T):T;
}
function getData2<T>(value:T):T{
  return value;
}
var mygetData:ConfigFn2<string>=getData2;
mygetData('张三');