//var myBind = $("#bind1");
//popShade2(myBind);

//var shade2 = $("#shade2").prop("id");
//var close = $("#patsu2");
//$("#bind2").click(function(){
//	center(shade2,close);
//})

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