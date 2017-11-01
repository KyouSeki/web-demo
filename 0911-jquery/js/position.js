/*
	width();    设置或返回元素设置的宽度,不包括其他值
	height();	设置或返回元素设置的高度,不包括其他值
	
	innerWidth();  设置或返回元素设置的宽度+padding
	innerHeight();  设置或返回元素设置的高度+padding
	
	outerWidth();  设置或返回元素设置的宽度+padding+border
	outerHeight();  设置或返回元素设置的高度+padding+border
	
	scrollTop();  设置或返回元素滚动条往下拉以后顶端超出可视高度的高度.
	scrollLeft(); 设置或返回元素滚动条往右拉以后左端超出可视宽度的宽度.
	
	offset() 设置或返回备选元素的偏移坐标(相对于文档),返回的是一个object,包含margin值
		返回:$(选择器).offset();
		设置:$(选择器).offset({top:value,left:value});
		
	offsetParent()  返回元素第一个定位的祖先元素,只能获取不能设置
	position()  返回元素相对第一个定位的祖先元素的位置,只能获取不能设置
	
	备选元素.append(内容); 在备选元素子集中结尾插入内容
	内容.appendTo(备选元素); 把内容插入备选元素子集中末尾
	prepend(); 在备选元素子集的开头插入内容
	prependTo(); 把内容插到备选元素子集的开头
	
	备选元素.after(元素);  在备选元素后插入内容(成为兄弟节点)
	备选元素.before(元素);  在备选元素前插入内容(成为兄弟节点)
	
	insertAfter();
	insertBefore();
	
	text();  获取标签的文本		
	val();	获取标签的value
	html();	获取标签内的元素
	empty(); 清空元素内的东西
	
	attr();		可以设置自定义的属性,一般会加到html标签里
	prop();     一般用于标签自带的属性,设置和添加属性的时候推荐用这这个,可以用来判断checkbox是否选中
*/
/*//$("#btn").click(function(){
//	var hello = $(".box").offsetParent();
//	console.log(hello);
//	var nodes = "<li>2</li>";
//	$("ul").append(nodes);
	
	var fff = $("#chk1").attr("checked",true);
	console.log(fff);
})*/


/*
	animate();
	stop();
*/


$("#btn").click(function(){
	/*$(".box").animate({
		marginLeft:"300px",
		marginTop:"200px"
	},5000)*/
})

$("#stop").click(function(){
	$(".box").stop();
});