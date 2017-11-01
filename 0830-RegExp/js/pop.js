/*和元素尺寸相关的属性  js里它们是只读属性,只能获取,不能设置
	1.clientWidth:返回内容的可视宽度(不包括边框和外边距或滚动条)
	2.clientHeight:返回内容的可视宽度(不包括边框和外边距或滚动条)
	3.scrollWidth:返回元素整个的实际宽度(包括带滚动条隐藏的地方)
	4.scrollHeight:返回元素整个的实际高度(包括带滚动条隐藏的地方)
	5.scrollTop:返回元素滚动条往下拉以后顶端超出可视高度的高度.
	6.scrollLeft:返回元素滚动条往右拉以后左端超出可视宽度的宽度.
	
	
	1.offsetHeight:返回任何一个元素的高度包括边框和填充,但不是边距
	2.offsetWidth:返回元素的宽度,包括边框和填充,但不是边距
	3.offsetLeft:返回当前元素的相对水平偏移位置的偏移容器(元素与最近的position不是默认值的父级的偏移量)
	4.offsetTop:返回当前元素的相对垂直偏移位置的偏移容器
	5.offsetParent:返回元素的偏移容器(与元素最近的position不是默认值的父元素)
	
取屏幕宽高的几种方法
	var bodyW = window.innerWidth||
	document.documentElement.clientWidth||
	document.body.clientWidth||
*/


//弹出层的共同方法
function popShade(shade,pop,patsu){
	var myBody = document.documentElement;
	shade.style.display="block";
	shade.style.width=myBody.clientWidth+"px";
	shade.style.height=myBody.clientHeight+"px";
	pop.style.top=(myBody.clientHeight-pop.clientHeight)/2+"px";
	pop.style.left=(myBody.clientWidth-pop.clientWidth)/2+"px";
	
	window.onresize = function(){
		shade.style.width=myBody.clientWidth+"px";
		shade.style.height=myBody.clientHeight+"px";
		pop.style.top=(myBody.clientHeight-pop.clientHeight)/2+"px";
		pop.style.left=(myBody.clientWidth-pop.clientWidth)/2+"px";
	}
	
	patsu.onclick = function(){
		shade.style.display="none";
	}
}


document.getElementById("btn").onclick=function(){
	var myShade = document.getElementById("big");
	var myPop = document.getElementById("letter");
	var myPatsu = document.getElementById("patsu");
	popShade(myShade,myPop,myPatsu);
}