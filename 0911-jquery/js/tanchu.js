$(".fancybox").mousedown(function(){
	var myTitle = $(this).attr("title");
	$(this).fancybox({
		"autoSize":false,
		"width":500,
		"height":400,
		"title":myTitle
	})
})


