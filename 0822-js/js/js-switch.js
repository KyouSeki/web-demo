/*2.switch语句
	switch(表达式){
		case value:结论语句;
		break;
		case value:结论语句;
		break;
		default:结论语句;
	}
*/

/*

var weekDay = new Date().getDay();
switch(weekDay){
	case 0:alert("周日");
		break;
	case 1:alert("周一");
		break;
	case 2:alert("周二");
		break;
	case 3:alert("周三");
		break;
	case 4:
	case 5:alert("周五");
		break;
	default: alert("周六");
}
*/

/*循环结构
  1.while(表达式){
  	语句
  }
  
  2.do{
    语句
  }while(表达式)
  
  while和do while有区别,while是先判断再执行语句,do while是先执行do里的语句再去判断.
  */

/*var i=1 ;
var sum = 0;
while(i <= 100){
	sum += i;
	i++;	
}
document.write(sum);

var x=1 ;
var y = 0;
while(x <= 20){
	if(x%2==0){
		y=y+x;
	}
	x++;
}
document.write(y);*/

var i =1;
var sum=0;
do{
	document.write("da");
	i++;
}while(i<=2);