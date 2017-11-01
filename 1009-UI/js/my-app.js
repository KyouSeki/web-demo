// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});
var mySwiper1 = myApp.swiper('.swiper-1', {
    pagination:'.swiper-1 .swiper-pagination',
    spaceBetween: 50,
    autoplay:1000
});
// Callbacks to run specific code for specific pages, for example for About page:
myApp.onPageInit('about', function (page) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});

myApp.onPageInit('index shop', function (page) {
	   var mySwiper1 = myApp.swiper('.swiper-1', {
		pagination:'.swiper-1 .swiper-pagination',
		spaceBetween: 50,
		autoplay:1000
	});
});
// Generate dynamic page
var dynamicPageIndex = 0;
function createContentPage() {
	mainView.router.loadContent(
        '<!-- Top Navbar-->' +
        '<div class="navbar">' +
        '  <div class="navbar-inner">' +
        '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
        '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
        '  </div>' +
        '</div>' +
        '<div class="pages">' +
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="dynamic-pages" class="page">' +
        '    <!-- Scrollable page content-->' +
        '    <div class="page-content">' +
        '      <div class="content-block">' +
        '        <div class="content-block-inner">' +
        '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
        '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>'
    );
	return;
}
$$(".toolbar-inner .link").on("click",function(){
	$$(this).addClass("active");
	$$(this).siblings().removeClass("active");
})


myApp.onPageInit('list', function (page) {
	var loading = false;
	
	  // 上次加载的序号
	var lastIndex = $$('#list-block li').length;

	// 最多可加载的条目
	var maxItems = 60;

	// 每次加载添加多少条目
	var itemsPerLoad = 10;

	// 注册'infinite'事件处理函数
	$$('.infinite-scroll').on('infinite', function () {

	  // 如果正在加载，则退出
	  if (loading) return;

	  // 设置flag
	  loading = true;

	  // 模拟1s的加载过程
	  setTimeout(function () {
		// 重置加载flag
		loading = false;

		if (lastIndex >= maxItems) {
		  // 加载完毕，则注销无限加载事件，以防不必要的加载
		  myApp.detachInfiniteScroll($$('.infinite-scroll'));
		  // 删除加载提示符
		  $$('.infinite-scroll-preloader').remove();
		  return;
		}

		// 生成新条目的HTML
		var html = '';
		for (var i = lastIndex + 1; i <= lastIndex + itemsPerLoad; i++) {
		  html += '<li class="item-content"><div class="item-inner"><div class="item-title">Item ' + i + '</div></div></li>';
		}

		// 添加新条目
		$$('#list-block ul').append(html);

		// 更新最后加载的序号
		lastIndex = $$('#list-block li').length;
	  }, 1000);
	}); 
});

myApp.onPageInit('point',function(page){
	$$.ajax({
		url:"../js/framework.json",
		type:"GET",
		//发送数据到服务器时所使用的内容类型
		contentType:"application/json",
		//发送给服务器的数据
		data:{},
		//预期的服务器相应的数据类型
		dataType:"json",
		//同步和异步,true是异步, 同步的意思是ajax必须执行完毕才能走下面的代码.异步就是ajax执行中页面不需等待结果可以继续执行
		async:true,
		//success时调用方法,把获取的数据存到参数result里
		success:function(result){
			$$.each(result.point,function(num,val){
				var star;
				if(val.status==true){
					star="已确认";
				}else{
					star="待确认";
				}
				//地址里也可以存数据,在域名后面加?的话?后面可以存一些id之类的数据  如<a href="../html/detail.html?id='+val.id+'"></a>
				$$(".merchan-box.hyakusento").append('<div class="merchan">'+
														'<div class="merchan-title">订单编号:'+val.code+'</div>'+
															'<div class="merchan-body">'+
																'<i class="hyaku-list"></i>'+
																'<div class="astrict hyaku-list">'+
																	'<p>商品名称：<span>'+val.name+'</span></p>'+
																	'<p>数量：<span>'+val.num+'</span></p>'+
																	'<p>订单状态：<span>'+star+'</span></p>'+
																'</div>'+
															'</div>'+
													'</div>');
			})
		},
		error:function(result){
		}
	})
})
 
