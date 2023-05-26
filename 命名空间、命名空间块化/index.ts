//引入模块文件
import { A, B } from "./module/a";
//调用命名空间A中的方法
var ADog = new A.Dog('小黑狗');
ADog.eat();
//调用命名空间B中的方法
var BCat = new B.Cat('小花猫');
BCat.eat();