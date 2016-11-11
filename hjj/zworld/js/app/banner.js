define(['myutil',"jquery"],function(x,$){
	function gnn(bn){
		setInterval(lunbo,2000);
		var xhr = x();
		xhr.open("get","http://10.0.161.118:9001/zbanner");
		xhr.send(null);
		xhr.onreadystatechange = function(){
			if(xhr.readyState === 4){
				var str = JSON.parse(xhr.responseText);
				var ul = $("<ul></ul>");
				str.forEach(function(elem,index){
					var li = $("<li></li>");
					var img = $("<img/>");
					img.attr("src",elem.imgUrl);
					li.append(img);
					ul.append(li);
					$("#box").append(ul);
				});
			}
		};
	}
	return gnn;
});
var num = 0;
function lunbo(){
	if(num == -400){
		num = 0;
	}
	$("#box ul").get(0).style.left = num + "%";
	num -= 100;
}
