/*事件的写法
	1.在html标签里写onclick()="";
	2.在js里定义一个匿名函数.DOM.onclick = function(){}
	3.btn.onclick=hello;不能带参数
	4.if(btn.addEventListener)
	  	btn.addEventListener("事件","function(){ 函数体 }"(或者不带参数的函数名),false);
	  if(btn.attachEvent)
	  	btn.attachEvent("onclick",functionName);
	  
	关于鼠标的event:
	1.onclick();     单击事件
	2.ondblclick();  双击事件
	3.onmousedown;  鼠标按钮被按下
	4.onmouseup;  鼠标按钮被松开
	5.onmouseenter  鼠标指针移动到元素上时出发  (子元素不会受到影响,不会获得这个事件)
	6.onmouseleave  鼠标指针移开元素时触发  (子元素不会受到影响,不会获得这个事件)
	7.onmouseover   鼠标移动到某元素上  (子元素也会同时获得这个事件)
	8.onmouseout    鼠标从某元素移开    (子元素也会同时获得这个事件)
	9.onmousemove   鼠标在元素中移动时
	
*/
function hello(){
	alert("text");
}
window.onload = function () {
	var btn = document.getElementById("btn");
	var myBox = document.getElementById("box");
	var myClick = 0;

//鼠标按键计数
/*	btn.onmousedown = function(){
		text.style.color="red";
		myClick++;
		if(myClick>10){
			myClick=1;
		}
		console.log(myClick);
	}
	btn.onmouseup = function(){
		text.style.color="green";
		myClick++;
		console.log(myClick);
	}*/

/*myBox.onmouseover = function(){
		myBox.style.backgroundColor="red";
		myClick++;
//		if(myClick>10){
//			myClick=1;
//		}
		console.log(myClick);
	}
myBox.onmouseout = function(){
		myBox.style.backgroundColor="green";
		myClick++;
		console.log(myClick);
	}*/


//myBox.onmousemove = function(){
//		myBox.style.backgroundColor="green";
//		myClick++;
//		console.log(myClick);
//	}

/*键盘事件
	1.onkeydown  键盘被按下时
	2.onkeyup	 键盘被松开时
	3.onkeypress  键盘上的字母或者数字被按下并松开时松开,无法识别一些功能键
*/
/*var inputText = document.getElementById("input_text");
	inputText.onkeyup = function(){
		console.log(myClick++);
	}*/
	
/*form表单事件
	1.onblur 元素失去焦点时触发
	2.onfocus  元素获得焦点时触发
	3.onchange  元素内容发生改变时触发
	4.oninput   元素输入内容时触发
	5.onsubmit	表单提交时触发
*/	
	var inputText = document.getElementById("input_text");
		inputText.oninput = function(){
		this.style.backgroundColor = "onange";
	}
	/*
	1.onload
	2.onresize
	3.onscroll
	*/
	window.onresize = function(){
		myClick++;
		console.log(myClick);
	}
}