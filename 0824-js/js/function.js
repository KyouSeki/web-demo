/*
	1.function
    定义函数
 	function  函数名(参数1,参数2...){
	函数主体
}
要先调用函数才可以运行函数主体.
*/


var x=13;
var y=43;
var z=32;
function addNum(i,j,k){
	var sum = i+j+k;
	document.getElementById("box").innerHTML=sum;
}
//var btn = document.getElementById("btn");
//btn.onclick  = function(){
//	addNum(x,y,z);
//}

var arrHappy = [779,664,883];
var point= 0;
function addP(){
	for(var i=0;i<arrHappy.length;i++){
		point = point+arrHappy[i];
	}
	document.getElementById("box").innerHTML=point;
}
document.getElementById("btn").onclick=addP; 

//计算在输入框里输入数字的加法
document.getElementById("btnAdd").onclick = arrAdd;
function arrAdd(){	
	var num = prompt();
	var arrNum = num.split("+");
	var arrAdd=0;
	for(var j=0;j<arrNum.length;j++){
		arrAdd += Number(arrNum[j]);
	};
	document.getElementById("box").innerHTML=arrAdd;
}