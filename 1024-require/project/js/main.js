/**
 * Created by hp on 2017-10-14.
 */
require.config({
    baseUrl: 'js',
     paths:{
         "demo":"app/demo"
     }
});
require(['lib/jquery', 'demo'], function(foo, bar, app) {
    //use foo bar app do sth
	$("strong").css("color","red");
});