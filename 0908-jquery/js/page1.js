listPage();
//下方button移动的方法,到底部之后会跟随父级
//需要绑定scroll和resize两个事件
$(window).bind("scroll resize",function(){
var scrollHeight = $(window).scrollTop();
var myHeight = ($(".main-body").innerHeight()+90)-$(window).height();
	console.log(scrollHeight,myHeight)
	if(scrollHeight<=myHeight){
		$(".test-fixed").css({
			"position":"fixed",
			"bottom":"0",
			"top":"auto"
		})			
	}else{
		$(".test-fixed").css({
			"position": "absolute",
			"top": $(".body-box").innerHeight()-$(".test-fixed").innerHeight()+"px"
		})
	}
})



