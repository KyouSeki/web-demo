$(document).ready(function(){
	$(".list-tit").click(function(){
		$(this).next().slideToggle();
		$(this).parent().siblings().children(".list-body").slideUp();
		$(this).toggleClass("top-tit");
		$(this).parent().siblings().children(".list-tit").removeClass("top-tit");
	})
})