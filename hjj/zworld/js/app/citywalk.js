define(['jquery','myutil','app/myfn1','app/citywalk'],function($,xhr,baseUrl,city){
	function getcity(ul2){
		 var x = xhr();
        x.open("get","http://10.0.161.118:9001/zcityWalkList");
        x.send(null);
        x.onreadystatechange = function(k){
            if(x.readyState === 4){
                var data = JSON.parse(x.responseText);
                data.forEach(function(elem,index){
					var bottom_li = $("<li class='one'></li>");
					var bottom_img = $("<img src='"+elem.imgurl+"'></img>");
					var bottom_button = $("<button class='button1'></button>").html(elem.address);
					var bottom_p = $("<p><a href=\"#\">"+elem.browseCount+"</a>次浏览<a href=\"#\">"+elem.soldCount+"</a>件已售</p>");
					var bottom_h3 = $("<h3></h3>").html(elem.title);
					var bottom_p2 = $("<p class='p2'><span class='span1'>"+elem.oldPrice+"</span><span class='span2'>"+elem.newPrice+"</span>元起</p>");
					var bottom_button2 = $("<button class='button2'></button>").html("立即预定");
					var divUl = $('<div></div>');
					var bottom_ol3 = $("<ol class='ul3'></ol>");
                	$(ul2).append(bottom_li);
                	$(bottom_li).append(bottom_img);
                	$(bottom_li).append(bottom_button);
                	$(bottom_li).append(bottom_button2);
                	$(bottom_li).append(bottom_p);
                	$(bottom_li).append(bottom_p2);
                	$(bottom_li).append(bottom_h3);
                	elem.introduce.forEach(function(e,i){
			   			var li = $("<li></li>");
			   			li.text(e);
			   			$(bottom_ol3).append(li);
            			$(bottom_li).append(bottom_ol3);
            		})
				})
       		}
		}
	}
	return getcity;
})