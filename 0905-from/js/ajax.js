/*
json 语法规则
	数据为键值对
	数据由逗号分隔
	大括号保存对象
	方括号保存数组
	
json的方法
	JSON.parse()用于将一个JSON字符串转换为javascript对象
	JSON.stringify(JSON对象)用于将JSON对象转换为JONS字符串
	
*/

var dataJson = {
	"userName":"jerry",
	"sex":"1",
	"hobby":[1,2,3],
	"family":[{
		"father":"www",
		"mother":"sss"
	},{
		"sister":"凤姐",
		"brother":"大力"
	}],
	"list":[{
		"num":"01",
		"phone":"143",
		"add":"dl"
	},{
		"num":"02",
		"phone":"186",
		"add":"sh"
	},{
		"num":"03",
		"phone":"133",
		"add":"gz"
	},{
		"num":"04",
		"phone":"136",
		"add":"bj"
	},{
		"num":"05",
		"phone":"157",
		"add":"sy"
	}]
}
//5条obj.obj里有num,phone,add
//
	
	
var labelVal = document.getElementById("label");
var borVal = dataJson.hobby[1];

var list = document.getElementById("list");
var num = dataJson.list;

document.getElementById("btn").onclick = function(){	
//	labelVal.innerHTML=borVal;
//	for(var i=0;i<num.length;i++){
//		//第一种方法获取数据
//		var listli = document.createElement("li");
//		var numVal = num[i].num;
//		var listVal = document.createTextNode(numVal);
//		listli.appendChild(listVal);
//		list.appendChild(listli);
//		//第二种方法获取数据
//		//list.innerHTML = list.innerHTML + "<li>"+num[i].num+"</li>";
//	}
//	var sss = JSON.stringify(dataJson);
//	console.log(sss);
	
	//js调用json内的数据
	var jsontest;
	jsontest = new XMLHttpRequest();
	if(jsontest!=null){
		jsontest.open("GET","../js/data.json",true);
		jsontest.send(null);
		jsontest.onreadystatechange = function(){
			if(jsontest.readyState==4 && jsontest.status == 200){
				var dataLsit = JSON.parse(jsontest.responseText);
				for(var i=0;i<dataLsit.list.length;i++){
				list.innerHTML = list.innerHTML + "<li>"+dataLsit.list[i].num+"</li>";
				}
			}
		}
	}
	
};
