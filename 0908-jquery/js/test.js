//第一个获取地址里数据的方法

var aa = window.location.search.slice(1);
var bb = aa.split("&");
var cc = {};
$.each(bb,function(key,val){
	cc[val.split("=")[0]]=val.split("=")[1];
})
console.log(cc);