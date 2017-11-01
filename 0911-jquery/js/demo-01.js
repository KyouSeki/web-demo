/*点击事件,$("选择器").click(function(){
				函数体
			})*/
$("#btn").click(function(){
	
	//css方法,css("属性","属性值"),多属性时css({"属性1":"属性值1","属性2":"属性值2"})
	$(".box2,.box3").css({
		"color":"red",
		"background-color":"green"
	});
	
	/*选择器*/
	/*群组选择器
		(".box1,.box2,.box3")
	*/
	//元素:not(选择器)  除此选择器以外的
	$("div:not(.box2)").css("background-color","#f5f5f5")
	
	$("ul>li:last").css("color","yellow");
	$("ul>li:first").css("color","pink");
	//:even表示下标是偶数的,odd表示下标是奇数的   
	$("ul>li:even").css("background-color","#f5f5f5");
	//.eq(3)下标为3的,.lt(3)下标小于3的,.rt(3)下标大于3的
	$("ul>li").eq("2").css("color","red");
	
	//属性选择器
	$("input[type='text']").css("border-radius","10px");
	
	//val()方法,获取元素的value
	//text()方法,获取元素的文本
	//:checked获取所有被勾选的,:selected获取所有被选择的
	//:checked.val()只能获取第一个被选中的值,要获取多个值需要遍历
	var myValue = $("input[type='checkbox']:checked").val();
	console.log(myValue);
	var selectValue = $("select option:selected").text();
	console.log(selectValue);
	
	$(".box2").toggleClass("test");
});

/*遍历方法:  参数可以写选择器筛选
	1.parent();   获取元素的父级
	2.parents();  获取元素所有祖先
	3.children();  获取所有的子类.不包括后代
	4.find(参数);  在所有后代中获取所有参数筛选的元素
	5.first();	获取第一个节点
	6.last();	获取最后一个节点
	7.prev(); 上一个兄弟节点
	7.prevAll(); 前面所有兄弟节点
	7.next(); 下一个兄弟节点
	8.siblings();  其他所有兄弟节点
	9.filter();  通过参数筛选元素,类似过滤器
	10.not();  查找不是参数内元素的元素
	11.eq("n");  查找下标为n的元素
	12.closest(参数); 查找离他最近的祖先元素,必须写参数
*/
$("li").parents("ul").css({
	"width":"300px",
	"border":"1px solid #ddd"
});

$("img").closest("input").css({
	"width":"103px",
	"border":"10px solid #ddd"
});

/*方法
	.css();
	.addClass();
	.removeClass();
	.toggleClass();
	//判断一个对象里有没有这个class
	//$("对象").hasClass("class名");
	
//效果
	.show(); 显示
	.hide(); 隐藏
	.toggle();有的隐藏,隐藏的有
	.slideDown(毫秒,还可以加一个方法); 向下划出
	.slideUp(毫秒,还可以加一个方法); 项上划出
	.slideToggle(毫秒,还可以加一个方法); 上下划
	.fadeIn(毫秒,还可以加一个方法);  淡入
	.fadeOut(毫秒,还可以加一个方法);  淡出
	.fadeTo(毫秒数,透明度);调整透明度
	
	!!!通过$获取的元素和js不一样,js获取的是这个元素本身,而jq获取到的是一个jq封装的对象
*/

$("#btn2").click(function(){
	//$("#answer").toggleClass("hide");
	//$("#answer").toggle();
	if($("#btn2").text()=="答案"){
		$("#answer").slideDown();
		$("#btn2").text("问题");
	}else{
		$("#answer").slideUp();
		$("#btn2").text("答案");
	} 
	
})

/*
事件
	.on("事件(可写多个)",function(){})
	.on("事件(可写多个)","元素",function(){})
	.blur();失去焦点时
	.change();表单值发生改变后
	.focus();获取焦点时
	.focusIn();子元素获取焦点时
	.focusOut(); 子元素失去焦点时
	.hover();里面要写两个方法一个表示鼠标移上去,一个表示鼠标移开
	.mousedown();按下鼠标
	.mouseenter();鼠标进入时(不包括子元素)
	.mouseleave();鼠标离开时(不包括子元素)
	.mousemove();鼠标移动时
	.mouseout();鼠标离开时(包括子元素)
	.mouseover();鼠标进入时(包括子元素)
	.mouseup();松开鼠标
	
	.load(); 元素加载完毕
	.unload();用户离开页面时
	
	$(document).redy();dom加载完成后
	$(window).resize();浏览器窗口的大小发生改变
	$(window).scroll();滚动条的位置发生变化
	.select();用户选中文本框中的内容
	.submit();用户递交表单
	
	
*/
$("#user_name").blur(function(){
	$("#user_name").css("background","red");
})
$("#box").hover(function(){
	$(this).css("background","yellow");
},function(){
	$(this).css("background","#fff");
})


/*
	
	.bind("事件1 事件2",function(){})  绑定事件,可以把多个事件加在元素上
	
	.one() 可以让某个事件只执行一次
	
	.unbind()  可以解除绑定事件
	
	.index() 方法返回指定元素相对于其他指定元素的相对位置
	
	阻止事件的冒泡方法,
	第一种,使用return false终止事件
	第二种,使用event.stopPropagation();方法
*/

$(document).ready(function(){
	$("#btn").bind("click mouseenter",function(){
		$("input[type='text']").val("hello");
	})
})

$("#list>li").click(function(){
	console.log($(this).index());
})
