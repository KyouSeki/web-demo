document.getElementById("menuRes").onclick = clik;
function clik(){
	var list = document.getElementById("listRes");
	if(list.style.display=="block"){
		list.style.display="none";
	}else{
		list.style.display="block";
	}        
}

$(".icon").hover(function(){
	$(this).children(".qt").show();
},function(){
	$(this).children(".qt").hide();
})

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


myNews = setInterval(function(){
	$("#news_box").animate({
		marginTop:"-54px"
	},500,function(){
		$("#news_box").css("margin-top","0");
		$("#news_box div:first").appendTo($("#news_box"));
	})
},2000)
	
$("#news_box").hover(function(){
	clearInterval(myNews);
},function(){
	myNews = setInterval(function(){
		$("#news_box").animate({
			marginTop:"-54px"
		},500,function(){
			$("#news_box").css("margin-top","0");
			$("#news_box div:first").appendTo($("#news_box"));
		})
	},2000)
})


//轮播图  能看又能点
//申明适应屏幕的宽度
$(".banner-f").css("width",$(window).width()+"px");
$(".banner-border").css({
	"top":"300px",
	"left":($(window).width()-$(".banner-border").innerWidth())/2+"px"
});
$(window).resize(function(){
	$(".banner-f").css("width",$(window).width()+"px");
	$(".banner-border").css({
		"top":"300px",
		"left":($(window).width()-$(".banner-border").innerWidth())/2+"px"
	});
})		
//设置计时器
pic = setInterval(function(){
	$(".banner-list").animate({
		left:-$(window).width()+"px"
	},1000,function(){
		$(".banner-list div:first").appendTo($(".banner-list"));
		$(".banner-list").css("left","0");	
		//数字变化
		var text = $(this).children("li").first().find("img").attr("alt");
		//小点变化
		var indexLi = $(this).children("div").attr("id");
		$(".banner-border a").removeClass("active").eq(indexLi).addClass("active");
		
	})
},2000)
//右击前进
$("#next").click(function(){
	$(".banner-list").animate({
		left:-$(window).width()+"px"
	},200,function(){
		$(".banner-list div:first").appendTo($(".banner-list"));
		var indexLi = $(".banner-list div:first").attr("id");
		$(".banner-border a").removeClass("active").eq(indexLi).addClass("active");
		$(".banner-list").css("left","0");	
	})
})
//左击后退
$("#prev").click(function(){
			$(".banner-list div:last").prependTo($(".banner-list"));
			var indexLi = $(".banner-list div:first").attr("id");
			$(".banner-border a").removeClass("active").eq(indexLi).addClass("active");
			$(".banner-list").css("left",-$(window).width()+"px");
		$(".banner-list").animate({
			left:"0px"
		},200)
	})
//鼠标移动到图片时停止滚动
$(".banner-box").hover(function(){
	clearInterval(pic);
},function(){
	pic = setInterval(function(){
		$(".banner-list").animate({
			left:-$(window).width()+"px"
		},1000,function(){
			$(".banner-list div:first").appendTo($(".banner-list"));
			$(".banner-list").css("left","0");	
			//数字变化
			var text = $(this).children("li").first().find("img").attr("alt");
			//小点变化
			var indexLi = $(this).children("div").attr("id");
			$(".banner-border a").removeClass("active").eq(indexLi).addClass("active");	
		})
	},2000)
})

//轮播图2
/*$(".banner-f").css("width",$(window).width()+"px");
$(".banner-border").css({
	"top":"300px",
	"left":($(window).width()-$(".banner-border").innerWidth())/2+"px"
});
$(window).resize(function(){
	$(".banner-f").css("width",$(window).width()+"px");
	$(".banner-border").css({
		"top":"300px",
		"left":($(window).width()-$(".banner-border").innerWidth())/2+"px"
	});
})
var n = $(".banner-f").length;
var i=1;
pic = setInterval(function(){
	if(i<n){
		$(".banner-list").animate({
			left:-i*$(window).width()+"px"
		},1000)
		if(i<n-1){
			$(".banner-border a").removeClass("active");
			$(".banner-border a").eq(i).addClass("active");
		}else{
			$(".banner-border a").removeClass("active");
			$(".banner-border a").eq(0).addClass("active");
		}
		i++;
	}else{
		$(".banner-list").css("left","0")
		$(".banner-border a").removeClass("active");
		$(".banner-border a").eq(0).addClass("active");
		i=1;
	}
},2000)*/

