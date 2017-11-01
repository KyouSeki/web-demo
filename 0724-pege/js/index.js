document.getElementById("menuRes").onclick = clik;
function clik(){
	var list = document.getElementById("listRes");
	if(list.style.display=="block"){
		list.style.display="none";
	}else{
		list.style.display="block";
	}        
}

//方法1:提出一个方法,然后发生事件时各自调用
/*
function qtAll(Box,taget){
	Box.onmouseenter = function qtUp (){	
		taget.style.display="block";
	}		
	Box.onmouseleave = function qtDown (){	
		taget.style.display="none";
	}
}
var qtBox = document.getElementById("weibo")
var qt = document.getElementById("qt");
qtAll(qtBox,qt);
var qtBox2 = document.getElementById("weixin")
var qt2 = document.getElementById("qt2");
qtAll(qtBox2,qt2);
var qtBox3 = document.getElementById("qq")
var qt3 = document.getElementById("qt3");
qtAll(qtBox3,qt3);
*/


//方法2:使用for循环给每一项都加上事件,然后在方法里用this确定点击的是哪个
var n;
var taget = document.getElementsByClassName("icon");
for(n in taget){
	taget[n].onmouseenter = qtUp;
	taget[n].onmouseleave = qtDown;
}
function qtUp (){	
	this.childNodes[1].style.display="block";
}
function qtDown (){	
	this.childNodes[1].style.display="none";
}

//从json里获取新闻列表
var newsJson;
var newsList = document.getElementById("news_list");
newsJson = new XMLHttpRequest();
if(newsJson!=null){
	newsJson.open("GET","../js/news.json",true);
	newsJson.send(null);
	newsJson.onreadystatechange = function(){
		if(newsJson.readyState == 4 && newsJson.status == 200){
			var dataList = JSON.parse(newsJson.responseText);
			for(var i=0;i<8;i++){
				newsList.innerHTML += "<li><i></i><p>"+dataList.news[i].text+"</p><span>"+dataList.news[i].date+"</span></li>";
			}
		}
	}
}