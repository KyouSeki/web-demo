/*math 对象
   
   Math.方法()
*/

//alert(Math.pow(2,3));


var myDate =new Date();
console.log(myDate);

/*date时间
	var date = new Date();
	常用的时间,日期组件方法
	getTime(),返回毫秒数,与valueOf()方法返回的值相同
	getFullYear()返回年份,以四位数表示
	getMonth()返回月份,0-11
	getDate()返回天数 1-31
	getDay()返回星期几 0-6
	getHours() 返回小时数 0-23
	getMinutes() 返回分钟数 0-59
	getSeconds(), 返回秒数 0-59
	getMilliseconds();返回毫秒数
	
	toLocaleDateString()  根据本地日期格式,把Date对象的日期部分转换为字符串	
	toLocaleTimeString()  根据本地时间格式,把Date对象的时间部分转换为字符串
	
*/

var spanDate = document.getElementById("date");
setInterval(function(){
	var myDate =new Date();
	var imTime = myDate.toLocaleTimeString()
	spanDate.innerHTML = imTime;
},1000);