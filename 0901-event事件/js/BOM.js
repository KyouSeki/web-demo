/*BOM

和窗口相关的:
	1:myWindow = window.open(URL,name,specs,replace);  一般直接打开一个页面就行.
	2.window.close(myWindow);  关闭打开的窗口
	3.window.moveTo(x,y); 移动窗口
	4.window.moveBy(); 可相对窗口的当前坐标把它移动指定的像素,坐标增加量为指定值.
	5.window.resizeTo(200,300);  调整窗口尺寸到指定值.
	6.window.resizeBy(200,300);  增加窗口尺寸,增加量为指定值
	7.window.innerHeight: 浏览器窗口的内部高度
	8.window.innerWidth: 浏览器窗口的内部宽度

History历史记录:
	1.history.back(); 后退
	2.history.forword(); 前进
	3.history.go(); 可以写数字n或-n,前进或后退几个页面

*/

/*
document.getElementById("btn").onclick  = function(){
	myWindow = window.open("http://www.baidu.com","","width=500,height=400,left=200,top=200");
}

document.getElementById("btn2").onclick  = function(){
	window.close(myWindow);
}*/
var myWindow;

document.getElementById("btn").onclick = function(){
	myWindow = window.open("http://www.baidu.com","","width=500,height=400");
}

//document.getElementById("btn1").onclick = function(){
//	myWindow.location.href="event.html";
//	myWindow.moveTo(300,300);
//}


/*计时器
	1.setInterval() 间隔指定的毫秒数不停地执行指定的代码
	语法:setInterval(function(){},500);
	2.clearInterval()  方法用于停止setInterval() 的代码,()里写setInterval() 定义的变量
	
	1.setTimeout(function(){},500);  方法的时间表示几秒后执行.
	2.clearTimeout()   中断setTimeout的计时

*/


/*
document.getElementById("btn2").onclick = function(){
	alert("注册成功,3秒后关闭");
	aa = setTimeout(function(){
		var myWindow2 = window.open("BOM.html");
	},1000);
}


document.getElementById("btn3").onclick = function(){
	clearTimeout(aa);
}*/
var aa;
var mySpan = document.getElementById("span");
var spanNum = document.getElementById("span_num");
document.getElementById("btn2").onclick = function(){
	aa = setInterval(function(){
		if(mySpan.clientWidth<100){
			mySpan.style.width=mySpan.clientWidth+1+"px";
			spanNum.innerHTML++;
		}else{
			clearInterval(aa);
		}
	},100);
}

document.getElementById("btn3").onclick = function(){
	clearInterval(aa);
}