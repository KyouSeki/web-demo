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

