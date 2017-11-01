/*假如人是一个类,则张三是这类的实例
	var person = new Object()
	object是一个引用类型,person是他的实例.
	
  引用类型:引用类型是一种数据结构,用于将数据和功能组织在一起,他也常被称为类.引用了类型的值(对象),就是引用类型的实例.
	所以把person赋值给person2的时候,只是复制了一个引用,让person2也指向了Object.
	和基本数据不一样,基本类型数据赋值时会重新开辟一个内存区,而引用类型只是复制了索引指向.
	
  检测类型
	typeof和instanceof的区别.
	  typeof会返回一个数据类型,不能区分数组和对象,因为检测数和对象时都会返回object.
	  instanceof会返回一个布尔值,用来判断数组和对象,不能判断字符串数字等
	  isArray()ie9以后才支持的,可以用来检测数组
*/
var obj1 = new Object();
var obj2 = obj1;
obj1.name="KyouSeki";

console.log(typeof(obj1));
console.log(obj1 instanceof Object);


/*数组类型  Array:属于引用类型
	定于数组
	var arr1 = new Array();
	var arr2 =[];

*/
var arr1 = new Array("abc","def",45);
var arr2 =[{
	"name":"Tom",
	"age":13
},
{
	"hobby":"jerry",
	"age":14
}];
var arr3=[[123,4,"22"],[321,"ddd",true]]

var arr4 = new Array(3); //这种写法定义了一个有3个数据的数组,但是数据未定义,而不是定义了一个数据为3的数组,这里需要注意一下.

var arr5 = ["Hello","ThankYou","ThankYou very much",1,2,3];

var m;
for(m in arr5){
	console.log(arr5[m]);
}

var n;
for(n in arr2[1]){
	console.log(n+":"+arr2[1][n]);
}


/*1.转换方法
  (1) toString()数组的toString()方法会返回由数组中每个值的字符串形式拼接而成的一个以逗号分隔的字符串
  (2) join()只接受一个参数,即用作字符串的分隔符,然后返回包含所有数组项的字符串.
  2. 栈方法
  (1)arr.push()方法可以接收任意数量的参数,把他们逐个添加到数组末尾,并返回修改后数组的长度
  (2)arr.pop()方法则从数组末尾移除最后一项,减少数组的length值,然后返回移除的项
  */
var arrTest = ["how","are","you",1,2,3];
//console.log(arrTest.toString());
//console.log(arrTest.push(12,213,43));

var arrTest2 = arrTest.concat("yellow");
console.log(arrTest2);

/*3.队列方法
  (1)shift();他能够移除数组中的第一个项并返回该项,同时将数组长度减1.
  (2)unshift();能够往数组中第一位添加数据
  (3)push();能够往数组最后一位添加数据
  (4)pop();能够删除数组的最后一位
 
  4.重排序方法
   reverse()方法会反转数组项的顺序
   sort()方法按升序排列数组,即最小值再前面,按照首字母排.1,11,2,3这样
   
  5.操作方法
   concat()可以基于当前数组中的所有项或者新增一些项,创建一个新数组
   splice()主要的用途是向数组的中部插入项,可以用于添加,删除,替换
  */
	//删除 splice(开始删除的位置,删除的个数)
	//添加 splice(开始删除的位置,删除的个数,添加的值1,添加的值2) 删除的个数填0就可以做到添加
	//替换 splice(开始删除的位置,删除的个数,添加的值1,添加的值2) 删除的个数和添加的个数相等就可以做到替换
arrTest.splice(2,2);
console.log(arrTest);

//slice(start,end)方法可以提取字符串的某个部分,并以新的字符串刚返回被提取的部分,参数分别写开始和结束字符的下标

/*indexOf()和lastIndexOf()
返回某个指定的字符串在字符串中首次出现的位置,这两个方法都接收两个参数(第一个参数时要找的属性值,第二个属性是从下标哪个位置开始
),要查找的项和(可选的)表示查找起点位置的索引,其中,indexOf()方法从数组的开头(位置0)开始向后查找.
lastIndexOf()方法则从数组的末尾开始向前查找
*/

//var position = arrTest.indexOf("how",2);
//console.log(position);

//可以通过split把输入的值转换为一个数组,split()里可以写任意分隔符隔开数组.
/*num = prompt();
var arr7 = num.split(",");
console.log(arr7)*/

//DOM
//点击事件
var btn = document.getElementById("btn");
btn.onclick = function(){
	document.getElementById("box").style.fontSize="40px";
}


