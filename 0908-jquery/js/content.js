/*
2、GET方法与POST方法的区别
	区别一：
		get重点在从服务器上获取资源，post重点在向服务器发送数据；
	区别二：
		get传输数据是通过URL请求，以field（字段）= value的形式，置于URL后，并用"?"连接，多个请求数据间用"&"连接，如
		http://127.0.0.1/Test/login.action?name=admin&password=admin，这个过程用户是可见的；
		post传输数据通过Http的post机制，将字段与对应值封存在请求实体中发送给服务器，这个过程对用户是不可见的；
	区别三：
		Get传输的数据量小，因为受URL长度限制，但效率较高；
		Post可以传输大量数据，所以上传文件时只能用Post方式；
	区别四：
		get是不安全的，因为URL是可见的，可能会泄露私密信息，如密码等；
		post较get安全性较高；
	区别五：
		get方式只能支持ASCII字符，向服务器传的中文字符可能会乱码。
		post支持标准字符集，可以正确传递中文字符。
*/

//list页面初始化
function listPage(){
	//ajax的使用方法
	$.ajax({
		url:"../js/page1.json",
		type:"GET",
		//发送数据到服务器时所使用的内容类型
		contentType:"application/json",
		//发送给服务器的数据, id:01或者{id:01,id:02}
		data:{},
		//预期的服务器相应的数据类型
		dataType:"json",
		//同步和异步,true是异步, 同步的意思是ajax必须执行完毕才能走下面的代码.异步就是ajax执行中页面不需等待结果可以继续执行
		async:true,
		//success时调用方法,把获取的数据存到参数result里
		success:function(result){
			$.each(result.page,function(num,val){
				var star;
				if(val.状态==1){
					star="已启用";
				}else{
					star="已禁用";
				}
				//地址里也可以存数据,在域名后面加?的话?后面可以存一些id之类的数据  如<a href="../html/detail.html?id='+val.id+'"></a>
				$(".body-list").append('<li><div><input type="checkbox" class="check"/></div><div>'+parseInt(num+1)+'</div><div>'+val.标题+'</div><div>'+val.所属栏目+'</div><div class="star'+val.状态+'">'+star+'</div>'+
									   '<div><input type="hidden" value="'+val.id+'"/><a href="../html/detail.html?id='+val.id+'&seo='+val.状态+'&auther='+val.作者+'&date='+val.时间+'"><button class="btn setting btn-xx" data-listid="'+val.id+'">详细</button></a>'+
									   '<a href="../html/modify.html?id='+val.id+'"><button class="btn setting">修改</button></a><button class="btn delete"  data-deleteid="'+val.id+'">删除</button></div></li>')		
			})
			//on() 有时候后加的元素无法加事件,所以需要加一个监听方法,on()方法也可以写多个事件(用空格隔开)
			//在button点击事件里需要获取id的话,不能使用ajax方法里的参数.要新建一个隐藏域来储存这个数据的id,然后再取这个隐藏域里的id,隐藏域一般用<input type="hidden" value="+id+"/>
			$(".btn-xx").on("click",function(){
				var myid = $(this).data("listid");
				//var myid = $(this).parent().children("input").val();
				window.location.href="../html/detail.html?id="+myid;
			//data-*可以用来储存一些基本值,*号可以随便起名,但是不能有大写.把数据存到标签中后.可以直接用.data("*")方法调用该值,也可以用attr("");调用并修改值
			})
			
			//执行删除
			$(".delete").on("click",function(){
				var deleteIdVal = $(this).data("deleteid");
				console.log(deleteIdVal);
				DeletePage(deleteIdVal);
			})
		},
		error:function(result){
		}
	})
}

//发送删除ID的方法
function DeletePage(deleteId){
	$.ajax({
		url:"deleteList.do",
		type:"POST",
		contentType:"application/json",
		data:{id:deleteId},
		dataType:"json",
		async:true,
		success:function(result){
			alert("ok");	
		},
		error:function(result){
		}
	})
}
//提交新建数据
function addPage(data){
	$.ajax({
		url:"add.do",
		type:"POST",
		//发送数据到服务器时所使用的内容类型
		contentType:"application/json",
		//发送给服务器的数据
		data:data,
		//预期的服务器相应的数据类型
		dataType:"json",
		//同步和异步,true是异步, 异步的意思是ajax必须执行完毕才能走下面的代码.同步就是ajax执行中页面不需等待结果可以继续执行
		async:true,
		//success时调用方法,把获取的数据存到参数result里
		success:function(result){
			alert("成功");
		},
		error:function(result){
		}
	})
}
//点击获取新建数据
function initAddPage(){
	$("#save").on("click",function(){
		//正则判断插件的用法
		$("#form_add").validate({
			rules:{
				title:{
					required:true,
					minlength:2
				},
				author:{
					required:true,
					digits:true,
					rangelength:[6,12]
				}
			},
			messages:{
				title:{
					required:"请输入文章标题",
					minlength:"文章标题至少有两个字母组成"
				},
				author:{
					required:"请输入作者名",
					digits:"请输入整数",
					rangelength:"需要在6到12位之间"
				}
			}	
		})
		//$("#form_add").valid()方法代表正则插件的结果为true或false.
		if($("#form_add").valid()){
			var addDate = {};
			addDate.标题 = $("#title").val();
			addDate.所属栏目 = $("#lanmu option[value='"+$("#lanmu").val()+"']").text();
			addDate.状态 = $("input[name='text']:checked").next("span").text();
			var arrHobby=[];
			$("input[name='hobby']:checked").each(function(num,val){
				arrHobby.push(val.value);
			})
			addDate.爱好 = arrHobby;
			addDate.作者 = $("#author").val();
			addDate.关键字 = $("#key").val();
			addDate.时间 = $("#date").val();
			addDate.是否推荐 = $("input[name='susume']:checked").next("span").text();
			addDate.描述 = $("#money").val();
			addDate.内容 = $("#content").val();		
			addPage(addDate);
			console.log(addDate);
		}
	})
}


//修改页面回显
function ModifyPageInfo(){
	var id = getUrlValue("id");
	$.ajax({
		url:"../js/detail.json",
		type:"GET",
		contentType:"application/json",
		data:{id:id},
		dataType:"json",
		async:"true",
		success:function(result){
			$("#title").val(result.标题);
			$("#lanmu").val(result.所属栏目);
	//太麻烦了,直接改变select的value就能选中对应的option
			/*$("#lanmu option").each(function(num,val){
				if(val.text==result.所属栏目){
					$("#lanmu option").eq(num).prop("selected",true);
				};
			})*/
			$("input[name='text'][value='"+result.状态+"']").prop("checked",true);
			//这个方法真有招啊
	//		if(result.状态==1){
	//			$("#status1").prop("checked",true);
	//		}else if(result.状态==0){
	//			$("#status0").prop("checked",true);
	//		}
			$.each(result.hobby,function(index,val){
				$("input[name='hobby'][value='"+val+"']").prop("checked",true);
			});
			$("#author").val(result.作者);
			$("#key").val(result.关键字);
			$("#date").val(result.时间);
			$("input[name='susume'][value='"+result.SEO+"']").prop("checked",true);
			$("#money").val(result.money);
			$("#content").text(result.content);
		},error:function(){	
		}	
	})
}
//提交修改数据
function modifyPage(data){
	$.ajax({
		url:"modify.do",
		type:"POST",
		contentType:"application/json",
		data:data,
		dataType:"json",
		async:true,
		success:function(result){
			alert("成功");
		},
		error:function(result){
		}
	})
}
//点击获取修改数据
function initModify(){
	var id = getUrlValue("id");
	$("#modify_btn").on("click",function(){
		var hobbyVal = [];
		$("input[name='hobby']:checked").each(function(num,val){
			hobbyVal.push(val.value);
		});
		var modifyData = {
			"id":id,
			"标题":$("#title").val(),
			"所属栏目":$("#lanmu option:selected").text(),
			"状态":$("input[name='text']:checked").next().text(),
			"爱好":hobbyVal,
			"作者":$("#author").val(),
			"关键字":$("#key").val(),
			"时间":$("#date").val(),
			"是否推荐":$("input[name='susume']:checked").next().text(),
			"描述":$("#money").val(),
			"内容":$("#content").val()		
		}
		//提交方法
		modifyPage(modifyData);
		console.log(modifyData);
	})
}
