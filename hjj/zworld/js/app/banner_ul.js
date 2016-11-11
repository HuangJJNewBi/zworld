define(['myutil','jquery'],function(w,$){
	function ull(ul1){
		var xhr = w();
		xhr.open("get","http://10.0.161.118:9001/zmenu");
		xhr.send(null);
		xhr.onreadystatechange = function(){
			if(xhr.readyState === 4){
				var str = JSON.parse(xhr.responseText);
				str.forEach(function(elem,index){
					var li = $("<li></li>");
					var p = $("<p></p>").html(elem.mainCity);
					var bh2 = $("<h2></h2>").html(elem.title);
					var bdiv = $("<div></div>").html(elem.moreCity);
					bdiv.addClass("");
                	$(li).append(bh2);
					$(li).append(p);
					$(li).append(bdiv);
                	$(ul1).append(li);
				

				   var intArray = elem.moreCity;
				   intArray.forEach(function(ele,idx){
				   		var div = $("<div></div>");
				   		div.css({
				   			width:"300px",
				   			float:"left"

				   		})
				   		var h2 = $("<h2></h2>");
				   		h2.text(ele.cityName);
				   		div.append(h2);
				   		bdiv.append(div);

						var p = $("<p></p>");
				   		div.append(p);
				   		bdiv.append(div);

				   		ele.items.forEach(function(e,i){
				   			var a = $("<a></ a>");
					        var img = $('<img>');
					        img.css({
					        	width:'65px',
					        	height:'65px',
					        	float:'left',
					        	
					        })
					        if(index == 5){
					            img.attr('src',e);
					            a.append(img);
					        }else{
					            a.text(e);
					        };
					        p.append(a);
				   		})



				   		
				   })

			   })
			}
		}
	}return ull;
});

			 