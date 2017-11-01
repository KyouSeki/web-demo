/*正则表达式
	1.语法 var regexp01 = new RegExp(规则,修饰符);
	      var regexp02 = /\w+/i;
	
	修饰符: 
		i.执行对大小写不敏感
		g.执行全局匹配(查找所有匹配,而不是在找到一个匹配以后停止)
		m.执行多行匹配
		
	正则对象方法
		1.test() 验证正则是否匹配,返回true和false.
		  语法 var a = regexp02.test("ac")
		2.exec() 检索字符串中指定的值,返回找到的值,并确定其位置.但是只返回一个结果,可以使用RegExpObject.lastIndex = n,改变起始位置从n开始.
		  语法 RegExpObject.exec(string);
		3.compile() 重新解析正则表达式,参数写另一个正则表达式用来替换原来的.

	支持正则表达式的 String 对象的方法,方法前接string
		1.match  找到一个或多个正则表达式的匹配。语法：string.match(regexp)返回数组，多依赖于 regexp 具有标志语法var String = "sss";
		  	 String.match(regexp02);
		2.search()  检索与正则表达式相匹配的值。返回数字,-1时表示不匹配
		3.replace()  替换正则表达式里的参数,他返回了一个新值,需要重新定义一个变量newString来承接,原数组string没有变化.
		   var newString = string.replace(要替换的参数(可以写正则表示),新换的参数);
		4.split()  参数里写正则或者字符串,可以截断字符串里的东西.
*/

var regexp01 = new RegExp("^\d+");
var regexp02 =/^\d+/;

var haveString = regexp02.test("2ac");
console.log(haveString);

var afterReg =/hel+/g;
var afternoonStr = "world hello hell he helaaa";
var searchResult = afternoonStr.split(afterReg);
console.log(searchResult);


//判断某元素内有没有这个class名,有就加上,没有就不加
/*
var classNameReg =/\s+/g;
var myClass = document.getElementById("box");
var classNameList = myClass.className.split(classNameReg)
var flag = true;
for(var i=0;i<classNameList.length;i++){
	if(classNameList[i]=="hide"){
		flag=true;
		break;
	}else{
		flag=false;
	}
}
if(!flag){
	myClass.className = myClass.className + " hide";
}
console.log(myClass.className);*/


//给两个参数,一个是父级元素,一个是里面的class名
function classsNameMac(myBox,myClassName){
	var classNameReg =/\s+/g;
	var flag = true;
	for(var i=0;i<myBox.className.split(classNameReg).length;i++){
		if(myBox.className.split(classNameReg)[i]==myClassName){
			flag=true;
			break;
		}else{
			flag=false;
		}
	}
	if(!flag){
		myBox.className = myBox.className + " "+myClassName;
	}
	return myBox.className;
}
var aaa = document.getElementById("box");
console.log(classsNameMac(aaa,"hide"));


//以下是正则判定
document.getElementById("btn").onclick = function(){
	var inputVal = document.getElementById("input").value;
//	var patt1 = /^\d+$/g;
//	var a = patt1.test(inputVal);
//	if(a){
//		alert("ok");
//	}else{
//		alert("只能输入数字");
//	}
	
//	var patt1 = /^\d{6}$/g;
//	var a = patt1.test(inputVal);
//	if(a){
//		alert("ok");
//	}else{
//		alert("只能输入6位数字");
//	}
	
//	var patt1 = /^\d{6,}$/g;
//	var a = patt1.test(inputVal);
//	if(a){
//		alert("ok");
//	}else{
//		alert("只能输入至少6位数字");
//	}
	
//	var patt1 = /^\d{2,6}$/g;
//	var a = patt1.test(inputVal);
//	if(a){
//		alert("ok");
//	}else{
//		alert("只能输入2到6位数字");
//	}
	
	var patt1 = /^\d+.(\d{2})$/g;
	var a = patt1.test(inputVal);
	if(a){
		alert("ok");
	}else{
		alert("只能输入有两位小数的正实数");
	}
	
}