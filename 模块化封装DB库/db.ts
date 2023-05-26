var dbUrl = 'xxxxxx';
//定义一个返回任意一个数组的函数
export function getData():any[]{
  console.log("获取数据库的数据");
  return[
    {
      title:'12',
    },{
      title:'12456',
    }
    
  ];
}
export function save(){
  console.log("保存数据成功");
}
// export default getData;//一个文件只能写一次export default 引入getData时 import getData from './db';