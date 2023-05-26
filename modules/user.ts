import { MysqlDb } from "./db";
//定义数据库的映射
class UserClass{
  username:string | undefined;
  password:string | undefined;
}
var userModel = new MysqlDb<UserClass>();
export {
  UserClass,
  userModel
}