import { arricleModel, ArticleClass } from "./modules/article";
import { UserClass, userModel } from "./modules/user";
//增加数据
var u = new UserClass();//类作为参数来约束数据传入的类型
u.username = '张三';
u.password = '123456';
userModel.add(u);
//获取user表数据
var res = userModel.get(123);
console.log(res)


//给article表中增加数据
var a = new ArticleClass();
a.title = '标题';
a.desc = '123456';
arricleModel.add(a);
//获取article表中的数据
var res1 = arricleModel.get(123)
console.log(res1);
