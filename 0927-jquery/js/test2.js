$(window).scroll(function(){
	var windowHeight = $(window).innerHeight()/2;
	//方法1,难理解,第一次滚动半个屏幕,之后每次滚动的距离实际上就是块的高度
	$(".body-box div").each(function(num,val){
		if($(window).scrollTop()>=windowHeight+num*val.clientHeight){
			console.log($(window).scrollTop(),windowHeight+num*val.clientHeight);
			$("#list li").eq(num+1).addClass("active");
			$("#list li").eq(num+1).siblings().removeClass("active");
		}else if($(window).scrollTop()<windowHeight){
			$("#list li").eq(0).addClass("active");
			$("#list li").eq(0).siblings().removeClass("active");
			return false;
		}
	})
	
	//方法2,利用遍历的每一个块的offset.top-scrolltop判断.
/*	var docScrollTop = $(document).scrollTop();
	$(".body-box div").each(function(num,val){
		var elemTop = $(this).offset().top;	
		if(elemTop-docScrollTop>=0&&elemTop-docScrollTop<200){
			$("#list li").removeClass("active").eq(num).addClass("active");
			return false;
		}
	})*/
	
//	if($(window).scrollTop()<windowHeight/2){
//		$("#list li").eq(0).addClass("active");
//		$("#list li").eq(0).siblings().removeClass("active");	
//	}else if($(window).scrollTop()>=windowHeight/2&&$(window).scrollTop()<windowHeight/2+$(".f1").innerHeight()){
//		$("#list li").eq(1).addClass("active");
//		$("#list li").eq(1).siblings().removeClass("active");	
//	}else if($(window).scrollTop()>=windowHeight/2+$(".f1").innerHeight()){
//		$("#list li").eq(2).addClass("active");
//		$("#list li").eq(2).siblings().removeClass("active");	
//	}
})
