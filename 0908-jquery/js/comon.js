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
var myShade = document.getElementById("shade");
var myPop = document.getElementById("prompt");
var myPatsu = document.getElementById("patsu");
var setPop = document.getElementsByClassName("set-pop");
for(var i=0;i<setPop.length;i++){
	setPop[i].onclick = function(){
		popShade(myShade,myPop,myPatsu);
	}
}

//查看详细信息的方法
//val.indexOf("查找的字符","从哪开始找");可以获得第一个查找字符的的位置下标
//val.slice("开始的下标","结束的下标");可以从开始的下标位置往后截取字符串直到结束的下标,不写结束的下标时直接截取到末尾.
function urlData(myTr){
	var myUrl = window.location.href;
	//console.log(window.location.search);
	var myUrlIndex = myUrl.indexOf("?");
	var myUrlData = myUrl.slice(myUrlIndex+1).split("&")
	$.each(myUrlData,function(key,val){
		myTr.eq(key).append('<td>'+val.slice(val.indexOf("=")+1)+'</td>');
	})
}

//获取地址栏里面数据的方法
function getUrlValueS(){
//location.search可以直接获取地址问号后面的字符串
//decodeURI();可以解决中文乱码的问题
//return和break很像,走到return之后会结束这个函数	
	var path = window.location.href;
	var index = path.indexOf("?");
	var targetStr = path.slice(index+1);
	var arr1 = [],result={};
	arr1 = targetStr.split("&");
	for(var i=0;i<arr1.length;i++){
		var arrVal = arr1[i].split("=");
		result[arrVal[0]] = arrVal[1];
	}
	return result;
}
function getUrlValue(key){
	return getUrlValueS()[key];
}

//全选
$(document).ready(function(){
	$("#all_check").click(function(){
		if($("#all_check").prop("checked")){
			$(".check").prop("checked",true);
		}else{
			$(".check").prop("checked",false);
		}
	})
})