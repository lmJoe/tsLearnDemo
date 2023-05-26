/**
 * 装饰器
 * 装饰器是一种特殊类型的声明，它能够被附加到类声明、方法、属性或者参数上，可以修改类的行为
 * 通俗的讲装饰器就是一个方法，可以注入到类、方法、属性参数上来扩展类，属性、方法、参数的功能
 * 常见的装饰器有：类装饰器、属性装饰器、方法装饰器、参数装饰器
 * 装饰器的写法：普通装饰器（无法传参）、装饰器工厂（可传参）
 * 装饰器是过去几年中js的最大成就之一，已是ES7的标准特性之一
 */
//1.类装饰器：类装饰器在类声明之前被声明（紧靠着类声明），类装饰器应用于类构造函数，可以用来监视，修改或替换类定义，传入一个参数
  //定义一个装饰器(第一种写法)
  function logClass(params:any){
    console.log(params);
    //params就是当前类HttpClient  使用装饰器用来扩展HttpClient的属性、方法
      //例：扩展类的属性
      params.prototype.apiUrl = '动态扩展的属性';
      //扩展方法
      params.prototype.run=function(){
        console.log("这是一个方法");
      }
  }
  //使用装饰器装饰下面定义的类
    //使用@logClass意为调用装饰器
    @logClass 
    class HttpClient{
      constructor(){

      }
      getData(){

      }
    }
    //实例化这个类
    var http:any = new HttpClient()
    //调用apiUrl属性
    console.log(http.apiUrl);
    //调用run方法
    http.run();
    //以上代码就是一个类装饰器的过程

  //装饰器（第二种写法）自定义传入一些参数（装饰器工厂）
    function logClass1(params:string){
      return function(target:any){
        console.log(target);
        console.log(params);
        //扩展类
        target.prototype.apiUrl = params;
      }
    }
    //调用装饰器
    @logClass1('http://www.itying.com/api') //表示logClass1把hello赋值给了logClass1中的params,把当前的HttpClient1类赋值给了target
    class HttpClient1{
      constructor(){

      }
      getData(){

      }
    }
    var http1:any = new HttpClient1();
    console.log(http1.apiUrl);
/**
 * 类装饰器不仅能修改以前类的属性和方法，还可以修改当前类的构造函数
 * 通俗的讲类装饰器还可以替换构造函数，类装饰器表达式会在运行时当做构造函数被调用，类的构造函数作为唯一的参数
 * 如果类装饰器返回一个值，它会使用提供的构造函数那会来替换类的声明
 */
    //定义一个装饰器
    function logClass2(target:any){
      console.log(target);
      //在装饰器中修改重载构造函数
      return class extends target{
        apiUrl:any = '我是修改后的值';
        //重载getData的方法
        getData(){
          this.apiUrl = this.apiUrl + '----';
          console.log(this.apiUrl);//我是修改后的值----
        }
      }
    }
    @logClass2
    //定义一个类
    class HttpClient2{
      //类里面有一个属性
      public apiUrl:string | undefined;
      //在构造函数中给apiUrl赋值
      constructor(){
        this.apiUrl = '我是构造函数里的值';
      }
      getData(){
        console.log(this.apiUrl);
      }
    }
    var http2 = new HttpClient2();
    http2.getData();//我是修改后的数据
/**
 * 2.属性装饰器
 *  属性装饰器表达式会在运行时当做函数被调用，传入下列两个参数
 *  1.对于静态成员来说就是类的构造函数，对于实例成员是类的原型对象
 *  2.成员的名字
 */
    //logClass3为类装饰器
    function logClass3(params:string){
      console.log(params);
      return function(target:any){
        console.log(params);
        console.log(target);
        target.prototype.apiUrl = params;
      }
    }
    //定义一个属性装饰器
    function logProperty(params:any){
      //此处的target就是类的原型对象 attr为类的当前的属性名称
      return function(target:any,attr:any){
        console.log(target);
        console.log(attr);
        //
        target[attr] = params;
      }
    }
    @logClass3('xxx')
    //定义一个类
    class HttpClient3{
      //调用属性装饰器
      @logProperty('http://www.itying.com')
      //类里面有一个属性
      public apiUrl:string | undefined;
      //在构造函数中给apiUrl赋值
      constructor(){

      }
      getData(){
        console.log(this.apiUrl);//http://www.itying.com
      }
    }
    var http3 = new HttpClient3();
    http3.getData();
/**
 * 3.方法装饰器
 *    会被应用到属性描述上，可以用来监视，修改或替换方法定义
 *    方法装饰器会在运行时传入下列三个参数
 *    1.对于静态成员来说是类的构造函数，对于实例来说是类的原型对象
 *    2.成员的名字
 *    3.成员的属性描述符
 */
    //定义一个装饰器
    function logMethod(params:any){
      //在装饰器中接收三个参数
      return function (target:any,methodName:any,desc:any){
        console.log(target);
        console.log(methodName);
        console.log(desc);
        //扩展一个属性
        target.apiUrl = 'xxxxxx';
        //扩展一个方法
        target.run = function (){
          console.log('run');
        }
      }
    }
    //定义一个类
    class HttpClient4{
      //类里面有一个属性
      public apiUrl:string | undefined;
      //在构造函数中给apiUrl赋值
      constructor(){

      }
      //给方法添加一个装饰器
      @logMethod('http://www.itying.com')
      getData(){
        console.log(this.apiUrl)
      }
    }
    var http4 = new HttpClient4();
    console.log(http4.apiUrl);//
    http4.run();
    

    /**
     * 方法装饰器2 
     * 修改当前的方法  使用方法装饰器修改类里面的方法
    */
    function logMethod1(params:any){
      //在装饰器中接收三个参数
      return function (target:any,methodName:any,desc:any){
        console.log(target);
        console.log(methodName);
        console.log(desc);
        //修改装饰器的方法，吧装饰器方法里面传入的参数改为string类型
          //1.保存当前方法
          var oMethod =  desc.value;
          //使用...args接受不确定的参数
          desc.value = function (...args:any[]) {
            args = args.map((value)=>{
              return String(value);
            })
            console.log(args);
            //使用对象冒充的方法修改 表示在当前方法desc.value = function (...args:any[]) 里面调用oMethod并且把这个参数传入了
            oMethod.apply(this,args)
          }

      }
    }
    class HttpClient5{
      //类里面有一个属性
      public apiUrl:string | undefined;
      //在构造函数中给apiUrl赋值
      constructor(){

      }
      //给方法添加一个装饰器
      @logMethod('http://www.itying.com')
      //修改getData中的方法即在装饰器中修改desc.value
      getData(...args:any[]){
        console.log('我是getData中的方法',args)
      }
    }
    var http5 = new HttpClient5();
    http.getData(123456,'xxx');

/**方法参数装饰器
 * 参数装饰器表达式会在运行时当做函数被调用，可以使用参数装饰器为类的原型增加一些元素数据，传入下列三个参数
 * 1.对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
 * 2.参数的名字
 * 3.参数在函数参数列表中的索引
 */
    //参数装饰器
    function logParams(params:any){
      /**
       * target:原型对象
       * methodName 参数的名字
       * paramsIndex 参数的索引
       */
      return function(target:any,methodName:any,paramsIndex:any){
        console.log(target);
        console.log(methodName);
        console.log(paramsIndex);
        //在类的原型上添加一些数据
        target.apiUrl = params;
      }
    }                                                                                                                                                 
    class HttpClient6{
      //类里面有一个属性
      public apiUrl:string | undefined;
      constructor(){

      }
      //在方法的参数里面调用 此为方法参数器
      getData(@logParams('xxx') uuid:any){
        console.log('我是getData中的方法',uuid)
      }
    }
    var http6 = new HttpClient6();
    http.getData(123456);
    /**
     * 装饰器执行顺序
     * 1.属性装饰器
     * 2.方法装饰器 执行顺序是从后向前
     * 3.方法参数装饰器1
     * 4.方法参数装饰器2
     * 5.类装饰器1
     * 6.类装饰器2
     * 注：如果有多个装饰器，优先执行后面的
     */
