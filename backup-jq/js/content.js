function userSafe(){
	$.ajax({
		url:"../js/userCenter-data.json",
		type:"GET",
		contentType:"application/json",
		data:{},
		dataType:"json",
		async:true,
		success:function(result){
			//密码
			if(result.userPassword.isPassword==false){
				$(".safe-tr1 .safe-td1").addClass("nobind");
				$(".safe-tr1 .safe-td1 span").text("未设置");
				$(".safe-tr1 .safe-td4").html('<a href="javascript:;">设置</a>');
			}else{
				$(".safe-tr1 .safe-td3 span").eq(result.userPassword.stress).addClass("active");
				$(".safe-tr1 .safe-td4").html('<a href="javascript:;">修改</a><a href="javascript:;" class="next">找回</a>');
			}		
			//手机号
			if(result.bindPhone.isBind==false){
				$(".safe-tr2 .safe-td1").addClass("nobind");
				$(".safe-tr2 .safe-td1 span").text("未绑定");
				$(".safe-tr2 .safe-td3").text("您还未绑定手机号");
				$(".safe-tr2 .safe-td4").html('<a href="javascript:;">绑定</a>');
			}else{
				//slice和subString和subStr都可以截取字符串,但是subString后一个参数不能为负数,subStr后一个参数为长度(不怎么用)
				$(".safe-tr2 .safe-td3").html("您绑定的手机号码：<em>"+mySubStr(result.bindPhone.phone,3,4)+"</em>");
				$(".safe-tr2 .safe-td4").html('<a href="javascript:;">修改</a>');
			}
			//实名认证
			if(result.realName==false){
				$(".safe-tr3 .safe-td1").addClass("nobind");
				$(".safe-tr3 .safe-td3 p").text("为了您的账户安全，请充值前完成实名认证");
				$(".safe-tr3 .safe-td4").html('<a href="javascript:;">认证</a>');
			}else{
				$(".safe-tr3 .safe-td3 p").text("已实名认证");
				$(".safe-tr3 .safe-td4").html('<a href="javascript:;">修改</a>');
			}
			//交易密码
			if(result.tradePassword.isPassword==false){
				$(".safe-tr4 .safe-td1").addClass("nobind");
				$(".safe-tr4 .safe-td1 span").text("未设置");
				$(".safe-tr4 .safe-td4").html('<a href="javascript:;">设置</a>');
			}else{
				$(".safe-tr4 .safe-td3 span").eq(result.tradePassword.stress).addClass("active");
				$(".safe-tr4 .safe-td4").html('<a href="javascript:;">修改</a>');
			}
			//银行卡
			if(result.bindCard.isBind==false){
				$(".safe-tr5 .safe-td1").addClass("nobind");
				$(".safe-tr5 .safe-td1 span").text("未绑定");
				$(".safe-tr5 .safe-td3 p").text("绑定的银行卡将作为您默认的提现银行卡");
				$(".safe-tr5 .safe-td4").html('<a href="javascript:;">绑定</a>');
			}else{
				$(".safe-tr5 .safe-td3 p").html("您绑定的银行卡账户为：<em>"+mySubStr(result.bindCard.cardNum,4,3)+"</em>");
				$(".safe-tr5 .safe-td4").html('<a href="javascript:;">修改</a>');
			}
			//邮箱
			if(result.bindEmail.isBind==false){
				$(".safe-tr6 .safe-td1").addClass("nobind");
				$(".safe-tr6 .safe-td1 span").text("未绑定");
				$(".safe-tr6 .safe-td3 p").text("绑定邮箱，密码找回更轻松");
				$(".safe-tr6 .safe-td4").html('<a href="javascript:;" id="dialog1-btn" class="bind-btn">绑定</a>');
			}else{
				$(".safe-tr6 .safe-td3 p").html("您绑定的邮箱为：<em>"+result.bindEmail.Email+"</em>");
				$(".safe-tr6 .safe-td4").html('<a href="javascript:;">修改</a>');
			}
			console.log(result.userPassword.stress);
		},
		error:function(){
			
		}
	})
}
function mySubStr(target,start,end){
	var star="";
	for(var i=0;i<target.length-start-end;i++){
		star+="*";
	}
	var subNum = target.slice(0,start)+star+target.slice(-end);
	return subNum;
}