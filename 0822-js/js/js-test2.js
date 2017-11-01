 //要求2,输入一个三或四位数,每个位的数相加起来大于20,打8折.算最终的价格

document.getElementById("sale").onclick=go;
function go(){ 
	var screenVal = prompt("");
	/*var sum = parseInt(screenVal/1000) + parseInt(screenVal/100)%10 + parseInt(screenVal/10)%10 + screenVal%10;
	console.log(sum);
	if(sum>20){
		alert(screenVal*0.8);
	}else{
		alert(screenVal);
	}*/
	
	var n = screenVal.length;
	var i;
	var points=0;
	for(i=0;i<n;i++){
		var point = Number(screenVal[i]);
		points+=point;
	}
	if(points>=20){
		alert(screenVal*0.8);
	}else{
		alert(screenVal);
	}
}