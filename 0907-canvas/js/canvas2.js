var canvas = document.getElementById("canvas_box");  //先获取canvas元素
var context = canvas.getContext("2d");   //创建一个画布

//arcTo
context.lineWidth = "4";
context.strokeStyle = "orange";
context.beginPath();
context.moveTo(20,20);
context.arcTo(70,10,50,100,30);
context.stroke();

//文本 text
//fillText(文本,x,y,maxWidth); 实心字
//strokeText();		空心字
context.font="40px arial";
context.fillText("hello world",80,40);
context.textAlign="left";
context.strokeText("hello world",80,40);

//转换 
//rotate();
//translate();
//scale()
//skew()

context.rect(80,80,100,50);
context.stroke();
context.fillStyle = "#fff";
context.fill();
context.rotate(Math.PI*90/180);