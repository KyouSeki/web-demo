/*canvas 画图*/

var canvas = document.getElementById("canvas_box");  //先获取canvas元素
var context = canvas.getContext("2d");   //创建一个画布
//move to
context.lineWidth = 10;	  //线宽
context.strokeStyle = "red";   	//线条颜色

context.beginPath();       	//路径的起始
context.moveTo(30,30);    //起始点
context.lineTo(200,30);	  //结束点
context.lineTo(200,130);
context.lineTo(30,130);
context.lineTo(30,30);
context.closePath();		//路径结束,可以闭合图形

context.fillStyle = 'orange';		//填充色
context.fill();						//执行设置的填充色,不写这个不会执行
	
context.stroke();		  //填充当前的路径,画出来

//关于矩形 rect

context.rect(30,150,100,100);
context.stroke();

//strokeRect(x,y,width,height)  直接画出来的矩形

context.strokeRect(30,270,100,50);

//fillRect();  填充矩形
context.fillStyle = "yellow";
context.fillRect(30,350,100,50);

//clearRect();  在一个区域内清掉一个部分漏出矩形
context.clearRect(40,360,20,20);



/*context.strokeStyle = "green";
context.lineWidth = 20;
context.beginPath();
context.moveTo(300,300);
context.lineTo(500,300);
context.lineTo(500,200);
context.lineTo(650,350);
context.lineTo(500,500);
context.lineTo(500,400);
context.lineTo(300,400);
context.lineTo(300,300);
context.closePath();
context.fillStyle="yellow";
context.fill();
context.stroke();*/

//画圆
//arc(x,y,r,strat,end,false)圆弧  x,y:圆心坐标,r:半径,strat:起始边,end:结束边,false:是默认值,顺时针
//弧度=角度/180*Math.PI（π）
context.beginPath();
context.lineWidth = 4;
context.strokeStyle = "pink";
context.moveTo(100,520);
context.lineTo(100,520);
context.arc(100,520,100,0,(300/180)*Math.PI,true);
context.closePath();
context.fill();
context.stroke();



context.lineWidth = 4;
//context.moveTo(500,500);
//context.lineTo(500,500);
var r = 100;
context.beginPath();
	context.arc(500,470,30,0,(360/180)*Math.PI,true);
	context.fill();
	context.stroke();
	context.closePath();
for(var i=0;i<5;i++){
	context.beginPath();
	context.arc(500,500,r,(315/180)*Math.PI,(225/180)*Math.PI,true);
	context.stroke();
	r=r+40;
	context.closePath();
}

//arcTo  正切

context.beginPath();
context.arc();
