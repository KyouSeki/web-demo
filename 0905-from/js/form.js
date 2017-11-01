/*获取表单
	用document.forms获取到的是一个nodelist对象,需要用下标或者直接输入表单的name来获取某一个表单
	var myForm = document.forms[下标/"name"];
   获取表单中的元素
   	1.myForm.elements[下标/"name"]
	2.myForm.name
	
	提交方法
	1.submit(); 调用这个方法可以提交表单
	2.onsubmit事件,设置一个表单的事件,返回true时可以提交.
*/

var myForm = document.forms["myForm"];

//输出所有的hobby选项
var varList = [];
var myFormElement =  myForm.elements["hobby"];
for(var i=0;i<myFormElement.length;i++){
	varList.push(myFormElement[i].value);
}
console.log(myForm.userName);
console.log(varList);
var pattPwd = /^\d{6}$/
var pattUser = /^[a-z]+$/

document.getElementById("btn").onclick = function(){
	//以下两种方法都可以获取表单内的元素
	/*var userName = myForm.elements["userName"].value;
	var userPwd = myForm.password.value;
	if(!pattUser.test(userName)){
		alert("用户名不符合规范");
		return false;
	}
	if(!pattPwd.test(userPwd)){
		alert("密码不符合规范");
		return false;
	}
	if(pattPwd.test(userPwd)&&pattUser.test(userName)){
		return true;	
	}
	console.log(userName);
	console.log(userPwd);*/
	
//输出被选择的的hobby选项
	/*var arr=[];
	for(var j=0;j<myFormElement.length;j++){
		if(myFormElement[j].checked){
			arr.push(myFormElement[j].value);
		}
	}
	console.log(arr);
	*/
	/*属性
		text:获取标签下的文本,不包括标签和子级里的文字.只适用于option.
		textContent:获取标签内所有的文字,包括子级的文字.ie8以下不支持
		
	select对象的属性
		1.options.
			length项目的数量
			selectedIndex:当前选择项的下标
		2.disabled:可以获取一个元素的disabled,并且可以改变他的值,当它是true时不能点击.
		3.length:option的数量
		4.multiple:是否是多选,返回true和false
		5.name:设置或返回下拉列表的名称
		6.selectedIndex:获取下拉列表中备选项目的索引号
		7.size:设置或返回下拉列表中的可见行数
		8.type:返回下拉列表的类型,一共可以返回两个值,分别是"select-one"和"select-multiple";
		
	select对象的方法
		add();向下拉列表添加一个选项  语法.selectObject.add(option,before)
			option 必须,要添加项的元素,必须是option或optgroup元素.
			before 必须,在选项数组的该元素之后增加新的元素,填写一个下标也行,如果该参数是空,则元素添加到选项的末尾,
		remove();从下拉列表中删除一个选项,语法.selectObject.remove(index);
		
		cloneNode();
		节点.cloneNode();
		可选,默认是false;
		设置为 true,如果你需要克隆节点及其属性,以及后代
		设置为 false 如果你只需要克隆节点及其后代
		
	ps:获取radio时除了返回每一个项目,还会返回选中项的value值
	*/
	var colorSelect = document.getElementById("color"); 
	var citySelect = document.getElementById("city");
	var n = citySelect.options.selectedIndex;
	console.log(citySelect.options[n].text);
	console.log(citySelect.options.selectedIndex);
	
	var tree = myForm.elements["userName"];
	

	var myOption = citySelect.options[n].cloneNode(true);	
	colorSelect.add(myOption,colorSelect.options[3]);
	
	//	var newOption = document.createElement("option");
	//	var newText = document.createTextNode(citySelect.options[n].text);
	//	newOption.appendChild(newText);
	//	fruitSelect.add(newOption,2);
	
	//tree.disabled = true;
	//console.log(citySelect.selectedIndex);
	
	
//-------把form表单里填的数据输出到object里-------------------------------------------------
	
	var myUserName = myForm.elements["userName"].value;
	var myPwd = myForm.elements["password"].value;
	
	var sexList;
	var mySex = myForm.elements["sex"];
	for(var s=0;s<mySex.length;s++){
		if(mySex[s].checked){
			sexList=mySex[s].value;
			break;
		}
	}
	
	var myHobbyList = [];
	var myFormElement =  myForm.elements["hobby"];
	for(var k=0;k<myFormElement.length;k++){
		if(myFormElement[k].checked){
			myHobbyList.push(myFormElement[k].value);
		}
	}
	
	var colorList = document.getElementById("color");
	var c = colorList.options.selectedIndex;
	
	var formObj = {
		name:myUserName,
		pwd:myPwd,
		sex:sexList,
	 	hobby:myHobbyList,
		color:colorList[c].text
	}	
	console.log(formObj);
}