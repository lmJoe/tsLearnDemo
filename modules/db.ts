/**
 * 功能：创建一个操作数据库的类，支持mysqal MsSql  
 * 要求：Mysqal.mongo功能一样，都有add updated deleted get 方法
 * 注意：约束统一的规范，一级代码重用
 * 解决方法：
 *      需要约束规范，所以要定义接口。需要代码重用，所以用到泛型
 *      1.接口：在面向对象的编程中，接口是一种规范的定义，他定义了行动和动作的规范
 *      2.泛型：就是解决类 接口  方法的复用性
 */
//定义一个泛型接口
interface DBI<T>{
  add(info:T):boolean;
  updated(info:T,id:number):boolean;
  deletd(id:number):boolean;
  get(id:number):any[];
}
//定义一个操作mysql的数据库的类 并实现了这个DBI接口
//要实现泛型接口，这个类也应该是一个泛型类
export class MysqlDb<T> implements DBI<T>{
  add(info: T): boolean {
    console.log(info);
    return true;
  }
  updated(info: T, id: number): boolean {
    throw new Error("Method not implemented.");
  }
  deletd(id: number): boolean {
    throw new Error("Method not implemented.");
  }
  get(id: number): any[] {
    var list = [
      {
        title:'xxx',
        desc:'xxxx',
      },{
        title:'xxx',
        desc:'xxxx',
      },{
        title:'xxx',
        desc:'xxxx',
      }
    ]
    return list;
  }

}
//定义一个操作msqql的数据库的类
export class MsSqlDb<T> implements DBI<T>{
  add(info: T): boolean {
    console.log(info);
    return true;
  }
  updated(info: T, id: number): boolean {
    throw new Error("Method not implemented.");
  }
  deletd(id: number): boolean {
    throw new Error("Method not implemented.");
  }
  get(id: number): any[] {
    var list = [
      {
        title:'xxx',
        desc:'xxxx',
      },{
        title:'xxx',
        desc:'xxxx',
      },{
        title:'xxx',
        desc:'xxxx',
      }
    ]
    return list;
  }
  
}
//操作用户表 定义一个User类和数据表做映射
class User{
  username:string | undefined;
  password:string | undefined;
}
var u = new User();
u.username = '张三';
u.password = '123456';
var oMysql = new MsSqlDb<User>();//类作为参数来约束数据传入的类型
oMysql.add(u);
//获取user表id为4的数据
var data = oMysql.get(4);
console.log(data);