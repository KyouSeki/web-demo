var bb;
var imgs = document.getElementById("imgs");
var bannerBox = document.getElementById("banner_box");
var myBody = document.documentElement;
bannerBox.style.width=myBody.clientWidth+"px";
var myImg = document.getElementsByClassName("img");
var myNum = document.getElementsByClassName("img-border");
var i=1;
for(var n=0;n<myImg.length;n++){
	myImg[n].style.width = myBody.clientWidth+"px";
}	
bb = setInterval(function(){	
	if(i<n){
		
		for(var j=0;j<myNum.length;j++){
			myNum[j].classList.remove("atari");
		}
		myNum[i].classList.add("atari");
		imgs.style.right = parseInt(imgs.style.right) + myBody.clientWidth+"px";
		i++; 
		
	}else{
		i=0;
	}
},1000);

//function move(index){
//	for(var j=0;j<myNum.length;j++){
//			myNum[j].classList.remove("atari");
//		}
//		myNum[index].classList.add("atari");
//		imgs.style.right = imgs.style.right + myBody.clientWidth+"px";
//}
//document.getElementById("prev").onclick = function(){
//	if(i>1){
//		i=i-2;
//		imgs.style.right = imgs.style.right-(myBody.clientWidth+5)+"px";
//	}else{
//		i=4;
//	}
//}
//document.getElementById("next").onclick = function(){
//	if(i<5){
//		i=i+1;
//		imgs.style.right = imgs.style.right+(myBody.clientWidth+5)+"px";
//	}else{
//		i=0;
//	}
//}