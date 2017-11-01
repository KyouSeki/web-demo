//要求1,如果超过3000工资,则需要扣超过部分的5%的个人所得税,然后算最终所得工资

document.getElementById("money").onclick=go;
function go(){ 
	var screenVal = prompt("");
	if(screenVal<=3000){
		alert(screenVal);
	}else{
		var money = (screenVal - 3000) * 0.95 + 3000;
		alert(money);
	}
}
