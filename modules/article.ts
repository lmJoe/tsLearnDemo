import { MsSqlDb } from "./db";
//定义数据库的映射
class ArticleClass{
  title:string | undefined;
  desc:string | undefined;
}
var arricleModel = new MsSqlDb<ArticleClass>();
export {
  ArticleClass,
  arricleModel
}