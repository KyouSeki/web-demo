/*3. for循环
	for(表达式1;逻辑表达式;表达式2){
	
	}
*/

/*	for(var i=1;i<=10;i++){
		for(var j=1;j<=5;j++){
			document.write("*");
		}
	}
document.write("</br>");*/

document.write("<ul>");
	for(var i=1;i<=10;i++){
		document.write("<li>"+i+"</li>");
	}
document.write("</ul>");

//平行四边形点阵
for(var i=1;i<=5;i++){
	for(var j=1;j<i;j++){
		document.write("&ensp;");
	}
	for(var k=1;k<=5;k++){
		document.write("*");
	}
	document.write("</br>")
}

//直角三角形
for(var x=1;x<=5;x++){
	for(var y=10;y>2*x;y--){
		document.write("&ensp;");
	}
	for(var z=1;z<=2*x-1;z++){
		document.write("*");
	}
	document.write("</br>")
}

//等腰三角形
for(var q=1;q<=5;q++){
	for(var w=5;w>q;w--){
		document.write("&ensp;");
	}
	for(var e=1;e<=2*q-1;e++){
		document.write("*");
	}
	document.write("</br>")
}

/*4.for(value in 对象){
	
}
遍历对象
*/

var n;
var person = {
	"name":"Tom",
	"age":13,
	"code":"122"
};
//for in 语句下,变量n代表遍历完的person属性
//person.n代表在person里面找到一个key为n的值
//person[n]代表在person里面找到一个n变量!
//person["n"]代表在person里面找到一个key为n的值

for(n in person){
	console.log(n+":"+person[n]);
}

/* 跳出循环
1.break    结束整个循环
2.continue		结束一次循环的迭代,然后从头开始
*/

for(var m=1;m<=5;m++){
	if(m%2==0){
		console.log(m+"是偶数");
		continue;
	}else{
		console.log(m+"是奇数");
	}
	console.log("haha");
}