//弹出层的共通方法 JS  有bug!
/*function popShade(shade,pop,patsu){
	var myBody = document.documentElement;
	shade.style.display="block";
	shade.style.width=myBody.clientWidth+"px";
	shade.style.height=myBody.clientHeight+"px";
	pop.style.top=(myBody.clientHeight-pop.clientHeight)/2+"px";
	pop.style.left=(myBody.clientWidth-pop.clientWidth)/2+"px";
	
	window.onresize = function(){
		shade.style.width=myBody.clientWidth+"px";
		shade.style.height=myBody.clientHeight+"px";
		pop.style.top=(myBody.clientHeight-pop.clientHeight)/2+"px";
		pop.style.left=(myBody.clientWidth-pop.clientWidth)/2+"px";
	}	
	
	patsu.onclick = function(){
		shade.style.display="none";
	}
}*/


//弹出层 JQ
/*function popShade2(bind){
	bind.click(function(){
		var myWindow = $(window);
		$("body").css("overflow","hidden")
		$("#shade").show();
		$("#shade").width(myWindow.width());
		$("#shade").height(myWindow.height()+myWindow.scrollTop());
		$("#pop").offset({
			top:((myWindow.height()-$( "#pop").innerHeight())/2)+myWindow.scrollTop(),
			left:(myWindow.width()-$("#pop").innerWidth())/2
		})
		$(window).resize(function(){
			$("#shade").width(myWindow.width());
			$("#shade").height(myWindow.height()+myWindow.scrollTop());
			$("#pop").offset({
				top:((myWindow.height()-$("#pop").innerHeight())/2)+myWindow.scrollTop(),
				left:(myWindow.width()-$("#pop").innerWidth())/2
			})
		})
	})
	$(".jump").click(function(){
		$(".prompt-body").hide();
		$(".prompt-body").next().show();
	})
	$(".reset").click(function(){
		$("body").css("overflow","visible")
		$("#shade").hide();
		$(".prompt-body").show();
		$(".prompt-body").next().hide();
	})
}*/

//点击不同按钮弹出不同弹出层共同方法,参数为遮罩的ID
function center(myShade){
	var myWindow = $(window);
		$("body").css("overflow","hidden")
		$("#"+myShade).show();
		$("#"+myShade).width(myWindow.width());
		$("#"+myShade).height(myWindow.height()+myWindow.scrollTop());
		$("#"+myShade).find(".prompt").offset({
			top:((myWindow.height()-$("#"+myShade).find(".prompt").innerHeight())/2)+myWindow.scrollTop(),
			left:(myWindow.width()-$("#"+myShade).find(".prompt").innerWidth())/2
		})
		$(window).resize(function(){
			$("#"+myShade).width(myWindow.width());
			$("#"+myShade).height(myWindow.height()+myWindow.scrollTop());
			$("#"+myShade).find(".prompt").offset({
				top:((myWindow.height()-$("#"+myShade).find(".prompt").innerHeight())/2)+myWindow.scrollTop(),
				left:(myWindow.width()-$("#"+myShade).find(".prompt").innerWidth())/2
			})
		})
	}



//鼠标移动弹出隐藏元素共通方法
function qtAll(Box,taget){
	Box.onmouseenter = function qtUp (){	
		taget.style.display="block";
	}		
	Box.onmouseleave = function qtDown (){	
		taget.style.display="none";
	}
}

//返回子节点某类型数量的方法,两个参数,一个是父节点,一个是子节点类型(还可以改成节点名)
function childList(myBox,myChild){
	var ulList = new Array();
	for(var k=0;k<myBox.childNodes.length;k++){
		if(myBox.childNodes[k].nodeType==myChild){
			ulList.push(myBox.childNodes[k]);	
		}	
	}
	return ulList;
}

//账号密码校验共通方法,搭配返回子节点类型方法使用
function pattBox(box,pattTest,innerVal){
	var atariBox = document.createElement("div");
	atariBox.classList.add("pattBox");
	var sankakuBox = document.createElement("em");
	sankakuBox.classList.add("sankaku","sankaku-patt");
	atariBox.appendChild(sankakuBox);

	var listClass = childList(box,"DIV");
	if(listClass.length==0){
		box.appendChild(atariBox);
	}else{
		box.removeChild(box.childNodes[0]);
		box.appendChild(atariBox);
	}				
	if(pattTest){
		var pattText = document.createTextNode("ok");
		atariBox.appendChild(pattText);
		atariBox.style.border="1px solid green";
		atariBox.style.color="green";
		sankakuBox.style.borderColor="green";
	}else{
		var pattText = document.createTextNode(innerVal);
		atariBox.appendChild(pattText);
		atariBox.style.border="1px solid red";
		atariBox.style.color="red";
		sankakuBox.style.borderColor="red";
	}		
}


//tab
function chosen(myIndex){
	$(this).addClass("active");
	$(this).siblings().removeClass("active");
	var n = myIndex;
	$(".tab-body-box").children("div").eq(n).show();
	$(".tab-body-box").children("div").eq(n).siblings().hide();
	
	
	/*for(var i=0;i<$(".date-top").children("button").length;i++){	
		if($(".date-top").children("button")[i]==this){
			$(".tab-body-box").children("div").eq(i).show();
			$(".tab-body-box").children("div").eq(i).siblings().hide();
		}
	}*/
}