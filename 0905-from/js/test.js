//找出li里面class名字不是active的其他兄弟节点
/*var listBox = document.getElementById("list_box");
var active = "active";
console.log(listGet(listBox,active));

function listGet(box,active){
  	var liList = [];
	for(var i=0;i<box.childNodes.length;i++){
		if(box.childNodes[i].nodeType==1 && !box.childNodes[i].classList.contains(active)){
			liList.push(box.childNodes[i].innerHTML);
		}
	}return liList;
}*/




function touchList(tBox,target){
	var newliList = [];
	for(var j=0; j<tBox.childNodes.length;j++){
		if(tBox.childNodes[j].nodeName=="LI" && tBox.childNodes[j]!=target){
			newliList.push(tBox.childNodes[j].innerHTML);
		}
	}return newliList;
}

var listBox = document.getElementById("list_box");
for(var i=0;i<listBox.childNodes.length;i++){	
	listBox.childNodes[i].onclick = function(){
		console.log(touchList(listBox,this));
	}
}


//点击某一个li,输出其他的li
/*var listBox = document.getElementById("list_box");
for(var i=0;i<listBox.childNodes.length;i++){	
	listBox.childNodes[i].onclick = function(){
		var newliList = [];
		for(var j=0; j<listBox.childNodes.length;j++){
			if(listBox.childNodes[j].nodeName=="LI" && listBox.childNodes[j]!=this){
				newliList.push(listBox.childNodes[j].innerHTML);
			}
		}console.log(newliList);
	}
}*/


//从json里获取一个table数据,选择几个数据可以输出其id和idNo
var testTab = document.getElementById("test_tab");
var myForm = document.forms["myForm"];
var jsontest;
jsontest = new XMLHttpRequest();
if(jsontest!=null){
	jsontest.open("GET","../js/data.json",true);
	jsontest.send(null);
	jsontest.onreadystatechange = function(){
		if(jsontest.readyState==4 && jsontest.status == 200){
			var tableLsit = JSON.parse(jsontest.responseText);
			for(var i=0;i<10;i++){
				testTab.innerHTML = testTab.innerHTML + "<tr><td><input type='checkbox' name='myCheck'/></td><td>"+(i+1)+"</td><td>"+tableLsit.userInfo[i].name+"</td><td>"+tableLsit.userInfo[i].code+"</td></tr>";
			}
			var myCheck = myForm.elements["myCheck"];
			document.getElementById("btn").onclick = function(){
				var info = []
				var objBox = new Object();
				for(var j=0;j<myCheck.length;j++){
					if(myCheck[j].checked){
						var idObj = new Object()
							idObj.id=tableLsit.userInfo[j].id;
							idObj.idNo=tableLsit.userInfo[j].idNo;
						info.push(idObj);
						objBox.info=info;
					}
				}console.log(objBox);
			}
		}
	}
}


