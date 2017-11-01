document.write("<div class='chengfa-box'>")
for(var i=1;i<=9;i++){
	for(var j=1;j<=i;j++){
		document.write("<div class='chengfa'>"+j+"x"+i+"="+j*i+"</div>");
	}
	document.write("</br>");
}
document.write("</div>");