
$(document).ready(function(){
	$(".li2").mouseover(function(){
		$(".xl1").css("display","block");
		$(".xl2").css("display","block");
	})
	$(".li2").mouseout(function(){
		$(".xl1").css("display","none");
		$(".xl2").css("display","none");
	})


	$("#sousuo .w2").mousedown(function(){
		$(".yc").css("display","block");
	})
	$("form").mouseleave(function(){
		$(".yc").css("display","none");
	})

	$(".ul .search").on("keyup",function(){
		$(".ul .shuju").css("display","block")
	})
	$(".ul .search").mouseleave(function(){
		$(".ul .shuju").css("display","none")
	})


	

});