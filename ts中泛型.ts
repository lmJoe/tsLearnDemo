/**
 * 泛型：就是解决类接口、方法的复用性，以及对不特定数据类型的支持(类型校验)
 * 
 */

//此方法只能返回string类型的数据
// function getDate(value:string):string{
//   return value;
// }


//需要同时返回string和number类型（代码冗余）
// function getDate1(value:string):string{
//   return value;
// }
// function getDate2(value:number):number{
//   return value;
// }


//解决方法 1.any:但会存在放弃了类型检查的问题
  function getDate(value:any):any{
    return value;
  }
  getDate(123)
  getDate('123')
//解决方法2：泛型 可以支持不特定的数据类型，  要求：传入的参数和返回的参数一致\
  //如下文中<T> 表示泛型，具体什么类型由调用这个方法的时候决定的
  function getDate1<T>(value:T):T{
    return value;
  }
  getDate1<number>(123);//指定传入number类型
  getDate1<string>('123');//指定传入string类型

/**
 * 泛型类：比如有个最小堆算法，需要同时支持返回数字和字符串两种
 */
class MinClass1{
  public list:number[] = [];
  add(num:number){
    this.list.push(num)
  }
  //求最小的数
  min():number{
    var minNum = this.list[0];
    for(var i=0;i<this.list.length;i++){
      if(minNum>this.list[i]){
        minNum=this.list[i];
      }
    }
    return minNum;
  }
}
//类的泛型
class MinClass2<T>{
  public list:T[] = [];
  add(value:T):void{
    this.list.push(value);
  }
  min():T{
    var minNum = this.list[0];
    for(var i=0;i<this.list.length;i++){
      if(minNum>this.list[i]){
        minNum=this.list[i];
      }
    }
    return minNum;
  }
}
var m1 =  new MinClass2<number>();//表示实例化 类，并且指定了类的T代表的类型是number
m1.add(2)
m1.add(3)
m1.add(1)
console.log(m1.min());

//把类作为参数来约束数据传入的类型
/**
 * 定义一个User的类 这个类的作用就是映射数据库字段
 * 然后定义一个MysqlDb的类这个类用于操作数据库
 * 然后把User类作为参数传入到MysqlDb中
 */
class User{
  userName:string | undefined;//加undefined表示既可以是string类型 又可以是undefined类型
  password:string | undefined;
}
class MyaqDb{
  //增加数据
  add(user:User):boolean{
    console.log(user);
    return true;
  }
}
var u = new User();
u.userName = '张三';
u.password = '123456';

var db = new MyaqDb();
db.add(u)


//文章分类
class ArticleCate{
  title:string | undefined;//加undefined表示既可以是string类型 又可以是undefined类型
  desc:string | undefined;
  status:number | undefined;
}
class MyaqDb1{
  //增加数据
  add(info:ArticleCate):boolean{
    console.log(info);
    return true;
  }
}
var u1 = new ArticleCate();
u1.title = '川菜';
u1.desc = '这是很好吃的菜';
u1.status = 1;

var db1 = new MyaqDb1();
db1.add(u1)



/**
 * 操作数据库的泛型类
 * 首先可以去除重复代码，其次可以针对不特定类型进行数据校验
 */
class MysqlDb<T>{
  add(info:T):boolean{
    console.log(info);
    return true;
  } 
  updated(info:T,id:number):boolean{
    console.log(info);
    console.log(id);
    return true;
  }
}
//想给User表增加数据()
  //1.定义一个User类，和数据库进行映射
  class User1{
    userName:string | undefined;//加undefined表示既可以是string类型 又可以是undefined类型
    password:string | undefined; 
  }
  //2.把User中的数据增加到数据表里面（第一种方法）
  var u=new User1();
  u.password = '张三';
  u.userName = '123456';
  //3.调用MysqlDb中的方法 把User1类传入验证传入数据的合法性
  var DB = new MysqlDb<User1>();
  DB.add(u);
//定义一个文字分类的的表，和数据库做映射
    //1.定义一个ArticleCate1类，和数据库进行映射
  class ArticleCate1{
    title:string | undefined;//加undefined表示既可以是string类型 又可以是undefined类型
    desc:string | undefined;
    status:number | undefined;
    //增加数据的第二种方法：创建一个构造函数，通过构造函数接收传过来的
    constructor(params:{
      title:string | undefined,//加undefined表示既可以是string类型 又可以是undefined类型
      desc:string | undefined,
      status:number | undefined,
    }){
      this.title = params.title;
      this.desc = params.desc;
      this.status = params.status;
    }
  }
  //增加功能操作
  var a = new ArticleCate1({
    title:'分类',
    desc:'简介描述',
    status:1,
  })
  var db2 = new MysqlDb<ArticleCate1>();
  db2.add(a)
  //更新修改数据操作
  var a1 = new ArticleCate1({
    title:'分类',
    desc:'简介描述',
    status:1,
  })
  a1.status = 0;
  var db3 = new MysqlDb<ArticleCate1>();
  db3.updated(a1,12)