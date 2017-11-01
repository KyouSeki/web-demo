//var myBanner = document.getElementById("banner");
//var aa;
//var num = 2;
//var myNum = document.getElementsByClassName("aa");
//aa = setInterval(function(){
//	var bbb;
//	bbb= num++;
//	if(bbb<5){	
//		myBanner.style.backgroundImage="url('../images/pic"+bbb+".jpg')";
//		myNum[4].classList.remove("atari");
//		myNum[bbb-1].classList.toggle("atari");	
//		if(bbb!=1){
//			myNum[bbb-2].classList.remove("atari");
//		}
//	}else{
//		num=1;
//		myBanner.style.backgroundImage="url('../images/pic"+5+".jpg')";
//		myNum[bbb-1].classList.toggle("atari");
//		myNum[bbb-2].classList.toggle("atari");
//	}
//},1000);


/*var bb;
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

window.onresize = function(){
	bannerBox.style.width=myBody.clientWidth+"px";
	for(var n=0;n<myImg.length;n++){
	myImg[n].style.width = myBody.clientWidth+"px";
	}
}	
	


bb = setInterval(function(){	
	if(i<n){	
		move(i);
		i++; 	
	}else{
		i=0;
	}
},1000);

function move(index){
	for(var j=0;j<myNum.length;j++){
			myNum[j].classList.remove("atari");
		}
		myNum[index].classList.add("atari");
		imgs.style.right = index * (myBody.clientWidth+5)+"px";
}
document.getElementById("prev").onclick = function(){
	if(i>1){
		i=i-2;
		imgs.style.right = parseInt(imgs.style.right)-(myBody.clientWidth+5)+"px";
	}else{
		i=4;
		imgs.style.right=4 * (myBody.clientWidth+5)+"px";;
	}
}
document.getElementById("next").onclick = function(){
	if(i<5){
		i=i++;
		imgs.style.right = parseInt(imgs.style.right)+(myBody.clientWidth+5)+"px";
	}else{
		i=0;
		imgs.style.right="0";
	}
}*/



//插件
$(function() {
    $(".banner").unslider();
});