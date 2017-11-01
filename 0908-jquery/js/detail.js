//urlData($(".info"));

//调用每一个数据的方法
//$("#id").text(decodeURI(getUrlValue("id")));
//$("#status").text(decodeURI(getUrlValue("seo")));
//$("#author").text(decodeURI(getUrlValue("auther")));
//$("#date").text(decodeURI(getUrlValue("date")));

var id = getUrlValue("id");
$.ajax({
	url:"../js/detail.json",
	type:"GET",
	//发送数据到服务器时所使用的内容类型
	contentType:"application/json",
	//发送给服务器的数据
	date:{id:id},
	//预期的服务器相应的数据类型
	dataType:"json",
	//同步和异步,true是异步, 异步的意思是ajax必须执行完毕才能走下面的代码.同步就是ajax执行中页面不需等待结果可以继续执行
	async:true,
	//success时调用方法,把获取的数据存到参数result里
	success:function(result){
		$.each(result,function(num,val){
			$("#table").append("<tr><td>"+num+"</td><td>"+val+"</td></tr>");
		})
	},
	error:function(result){
	}
})