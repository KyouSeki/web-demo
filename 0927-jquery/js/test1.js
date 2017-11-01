$("#list li").mouseenter(function(){
	var listIndex = $(this).index();
	var thisTop= $(this).position().top;
	$(".body-box>div").eq(listIndex).removeClass("hide");
	$(".body-box>div").eq(listIndex).siblings().addClass("hide");
	console.log(thisTop,listIndex);
	$(".mark").stop().animate({
		"top":thisTop+"px"
	},200)
});