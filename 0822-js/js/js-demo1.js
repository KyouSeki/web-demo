//alert("hello xxx");

/*
标识符,就是指变量,函数,属性的名字,或者函数的参数,	
	1.第一个字符必须是字母,下划线,或者$.
	2.其他字符可以是字母,下划线,$和数字.
	
*/

/*
	变量:存储信息的容器
	定义变量:关键字var 标识符
	变量赋值:
*/
var x=1 ,y=2,z;
z=x;
x=y;
y=z;


//alert(x);
//alert(y);

/*
常量 定义一个不可改变的量,用的不多,通常都是大写.
*/
const PIE = 3.1415926539794;



/*数据类型
  1.number:数字类型
	八进制时数字前面要加0.比如067.
	十六进制时数字前面要加0x,比如0x77;
	浮点类型相加会出现一些问题,比如0.1+0.2=0.300000000000004.
	1e9等于1*10的9次幂
	0.00004等于4e-5.4*10的负5次幂
	NaN,任何涉及NaN的操作都等于NaN,NaN与任何一个数都不相等,甚至不等于NaN本身.
	
*/
var userNum=6.7;
var userCode=77;
var sum = userCode+userNum;
var ssum = 1e9;
console.log(sum);
console.log(ssum);

 /*
 2.string:字符串类型,用""或者''包裹.
   字符串有转义字符,\n(换行),\t(制表符tab空格),\r(回车),\\(\),转义字符算作一个字符.
   userName.length:可以输出字符串的长度.
 */

var userName="KyouSeki";
console.log(userName.length);

/*3.boolean 布尔类型:只有两个值,true和false
  4.null 空类型,使用typeof测试数据类型的时候返回object.
  5.undefined 无赋值,使用typeof测试数据类型的时候返回undefined;
 typeof(变量名)可以输出变量的类型,
  6.object类型,一个变量和功能的合集.
*/
//定义Object类型的第一种写法
//当key是一个变量的时候需要用中括号把它括起来,否则会把变量识别为一个属性
var aaa = "hobby";
var myObj = new Object();
myObj.name="Tom";
myObj.age="23";
myObj[aaa]="音乐";
console.log(myObj);

//定义Object类型的第二种写法
var person = {
	name:"kid",
	sex:"男"
}
person.age=23;

//获取Object属性的值的几种写法
console.log(person);
console.log(person.name);
console.log(person["age"]);

/*数据类型的转换:
	数字+字符串=数字转换为字符串.
	数字+布尔=true转换为1,false转换为0.
	字符串+布尔=布尔转换为字符串true或false.
	布尔+布尔=布尔值转换为数字0或1.
	
  强制类型转换的函数,
    1.Number(变量名)--转换为数字类型
	2.boolean(变量名)--转换为布尔类型
	3.string(变量名)--转换为字符串类型,可以转换null和undefined.
	4.变量名.toString()--也是转换为String类型,语法有些区别,不能转换ull和undefined.
	5.parseInt(变量名).解析出一个string或number的整数部分,没有可转换的部分则返回NaN.
	6.parseFloat(变量名).解析出一个string的浮点数部分,没有可转换的部分则返回NaN.
*/

var num1="123.44numioho", num2="2";
var num3=parseFloat(num1);
var typeName = typeof(num3);
console.log(num3);