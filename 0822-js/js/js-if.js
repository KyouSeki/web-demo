/*分支结构
  1.if语句 
      if里面可以嵌套if,
	  else后面还可以接if
  */

//var result = 12;
//if(result<9){
//	alert("haha");
//}else if(result>15){
//	alert("xixi");
//}else if(result<30){
//	alert("hehe");
//}else{
//	alert("ddd");
//}

document.getElementById("toshi").onclick=go;
function go(){ 
	var screenVal = prompt("");
	if(screenVal<=9999 && screenVal.length!=0){
		if((screenVal%4 == 0 && screenVal%100 != 0) || screenVal%400 == 0) {
			alert(screenVal+"年为闰年");
		}else{
			alert(screenVal+"年为平年");
		}
	}else{
		alert("请输入正确年份");
	}
}

document.getElementById("point").onclick=ppt;
function ppt(){ 
	var screenVal = prompt("");
	if(screenVal<=100 && screenVal>=0){
		if(screenVal>=90) {
			alert(screenVal+"分为优秀");
		}else if(screenVal>=80&&screenVal<90){
			alert(screenVal+"分为还行");
		}else if(screenVal>=70&&screenVal<80){
			alert(screenVal+"分为一般");
		}else if(screenVal>=60&&screenVal<70){
			alert(screenVal+"分为及格");
		}else{
			alert("挂了");
		}
	}else{
		alert("请输入正确分数");
	}
}