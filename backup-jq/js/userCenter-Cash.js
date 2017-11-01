$(document).ready(function(){
    $(".cash-table-tit").click(function(){
        $(this).next("ul").slideToggle();
        $(this).parent().siblings().children("ul").slideUp();
		$(this).toggleClass("active");	
		$(this).parent().siblings().children(".cash-table-tit").removeClass("active");
    });
})

$(".bind-btn").click(function(){
	var BtnId = $(this).prop("id");
	var BoxId = BtnId.replace("btn","box");
	center(BoxId);
	var close = $(".reset");
	close.click(function(){
		$("body").css("overflow","visible")
		$("#"+BoxId).hide();
		$(".prompt-body").show();
		$(".prompt-body").next().hide();
	})
	$(".jump").click(function(){
		$(".prompt-body").hide();
		$(".prompt-body").next().show();
	})
})