//window.onload = function(){},表示所有页面加载完再执行js语句包括图片和媒体文件
//$(document).ready(function(){}) ,表示页面文本加载完再执行js语句,不包括图片和媒体文件 
window.onload = function(){
	var elemDom = document.getElementById("box");
	elemDom.style.color = "red";
	console.log(elemDom);


/*
获取节点的方法
1.getElementById()
2.getElementsByTagName()返回的值是一个nodelist(数组),所以不写下标的话,不嫩直接改里面的属性
3.getElementsByClassName();返回的值也是一个nodelist(数组).(ie8以下不支持)
*/

var boxList = document.getElementsByTagName("div");
for(var i=0;i<boxList.length;i++){
	boxList[i].style.color="blue";
}
/* var n;
for(n in boxList){
	boxList[n].style.color="red";
};*/

console.log(boxList);

/*属性
1.innerHTML 属性设置或返回表格行的开始和结束标签内的HTML内容.
2.value      input等标签内的属性
3.nodeName  节点名称,返回的是大写
4.nodeType  返回数字,1元素节点.2属性节点.3文本节点.8注释节点.9文档节点

遍历属性
1.childNodes  获取一个元素的子节点,中间有空格也会识别为一个文本节点
2.parentNode  可以返回某节点的父节点
3.nextSibling  可以返回某个节点之后紧跟着的兄弟节点
4.attributes  返回指定节点属性的集合
	setAttribute("属性","属性值")方法
	getAttribute("属性","属性值")方法

*/


document.getElementById("btn").onclick=value;
function value(){
	alert(document.getElementById("text-input").nodeName);
}

var n;
var liNode = document.getElementsByClassName("list-child");
for(n in liNode){
	liNode[n].onclick = red;
	}
function red(){
	this.style.color="red";
}

var pNode = document.getElementById("text");
var parentN = pNode.parentNode;
parentN.style.height="40px";
parentN.style.backgroundColor="green";
console.log(parentN);

var box = document.getElementById("box");
box.nextSibling.style.color ="red";

document.getElementById("btnChange").onclick = change;

function change(){
	var aNode = document.getElementById("link");
	if(aNode.innerHTML=="百度"){
		aNode.setAttribute("link","http://www.taobao.com");
		aNode.innerHTML="淘宝";
		aNode.setAttribute("class","orange");
	}else{
		aNode.setAttribute("link","http://www.baidu.com");
		aNode.innerHTML="百度";
		aNode.setAttribute("class","blue");
	}
	var five = document.getElementById("five");
	var ulN = document.getElementById("list");
	var liN = document.createElement("li");
	var liText = document.createTextNode("7");
	
	liN.appendChild(liText);
	//ulN.removeChild(ulN.childNodes[2]);
	//ulN.replaceChild(liN,ulN.childNodes[3]);
	//ulN.insertBefore(liN,five);
}

//document.getElementById("btn-Del").onclick = delet;
//function delet(){
//	var ulN = document.getElementsByTagName("ul")[0];
//	ulN.removeChild(ulN.childNodes[1]);

/*节点方法
1.createElement()方法可以通过指定名称创建一个元素
	document.createElement("元素名");
	
2.createTextNode()可以创建文本节点
	document.createTextNode("文本内容");
	
3.appendChild()方法可以向节点的子节点列表的末尾添加新的子节点
	父节点node.appendChild(添加的节点node);
	
4.removeChild(node.childNodes[i])方法可以从子节点列表中删除某个节点
	父节点node.removeChild(父节点.childNodes[i]);
	
5.replaceChild()方法可以将某个子节点替换为另一个
	父节点node.insertBefore(新节点,老节点)
	
6.insertBefore()方法可以在某一个节点前面插入另一个节点
	父节点node.insertBefore(新节点,位置节点)	
*/

var btnVal = document.getElementById("btn-anser");
btnVal.onclick = ai;
var anserVisib = document.getElementById("anser"); 

//方法1
/*function ai(){
	if(anserVisib.style.display=="block"){
		anserVisib.style.display="none";
		this.innerHTML="答案";                   //this表示正在点击的目标
	}else{
		anserVisib.style.display="block";
		this.innerHTML="问题";
	}
}*/

//方法2
/*function ai(){
	var aN = document.getElementById("js-a");
	var divN = document.createElement("div");
	var textN =document.createTextNode("睡觉");
	divN.appendChild(textN);
	if(btnVal.innerHTML=="答案"){
		aN.appendChild(divN);
		btnVal.innerHTML="问题";
	}else{
		aN.removeChild(aN.childNodes[7]);
		btnVal.innerHTML="答案";
	}
}*/

//方法3
function ai(){
	if(btnVal.innerHTML=="答案"){
		btnVal.innerHTML="问题";
	}else{
		btnVal.innerHTML="答案";
	}
	anserVisib.classList.toggle("anser-block");
}
	
	
/*关于class的属性
 	1.className
	2.classList
		1.add("class1","class2","class3"....);   添加class
		2.remove("class1","class2"...);    删除class
		3.contains("class","class2");  判断该classlist里是否含有这个class,有的话返回true.
		4.item("数字");  参数里写class的索引值,返回该索引值对应的class名.
		5.toggle("class1","class2")   一般配和点击事件,有class的话点一下会删除,没有的话会添加.

*/
var fruitNode = document.getElementById("fruit");
var fruitClass = fruitNode.className;
//	fruitNode.className = fruitClass+" banana lizi";
//	console.log(fruitNode.className);
	fruitNode.classList.add("dd","ss");
	console.log(fruitNode.className);

//	var ulN = document.getElementById("list");
//	var ulList = new Array();
//	for(var k=0;k<ulN.childNodes.length;k++){
//		if(ulN.childNodes[k].nodeType==1){
//			ulList.push(ulN.childNodes[k]);	
//		}	
//	}
//	console.log(ulList);
	
	//两个参数,一个是父节点,一个是子节点类型
//	function childList(myBox,myChild){
//		var ulList = new Array();
//		for(var k=0;k<myBox.childNodes.length;k++){
//			if(myBox.childNodes[k].nodeType==myChild){
//				ulList.push(myBox.childNodes[k]);	
//			}	
//		}
//		return ulList;
//	}
//	var ulN = document.getElementById("list");
//	console.log(childList(ulN,1));
	
function childList(myBox,myChildName){
		var ulList = new Array();
		for(var k=0;k<myBox.childNodes.length;k++){
			if(myBox.childNodes[k].nodeName==myChildName){
				ulList.push(myBox.childNodes[k]);
			}	
		}
		return ulList;
	}
	var ulN = document.getElementById("area");
	console.log(childList(ulN,"STRONG"));
	
	
/*return:可以返回方法里的值,可以在别的位置调用此方法.
*/	

	function sum(sum1,sum2){
		var sum3=sum1+sum2
		return sum3;
	}
	console.log(sum(22,33));
	
}


