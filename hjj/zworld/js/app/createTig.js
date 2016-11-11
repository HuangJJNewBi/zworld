define(['jquery','myutil','app/myfn1'],function($,xhr,baseUrl){
    function getBannerData(root) {
        var x = xhr();
        x.open("get","http://10.0.161.118:9001/zfreewalk");
        x.send(null);
        x.onreadystatechange = function (e) {
            if(x.readyState === 4){
                var data = JSON.parse(x.responseText);
                var picDiv = $("<div class='tig_pic'></div>")
                var freeUl = $("<ul class='free_ul'></ul>");
                for(var i = 0;i < data.length;i++){
                    var picUl = $("<ul class='tig_ul'></ul>");
                    var freeLi = $("<li><a href='#' class='free_a'>" + data[i].title + "</a></li>");
                    freeUl.append(freeLi);
                    for(var j = 0 ; j < data[i].data.length;j++){
                        if(j==0){
                            var picLi = $("<li class='tig_li'></li>");
                            var picA = $("<a href='#' class='pic_a'></a>");
                            var picP = $("<p class='pic_p'><img src="+ data[i].data[j].imgUrl +" alt='' /></p>");
                            var picPrice = $("<div class='pic_price'><span>"+ data[i].data[j].price +"</span>元起</div>");
                            var picTitle = $("<div class='pic_title'><h3 class='pic_one_h3'>"+ data[i].data[j].title +"</h3><p class='time'>"+ data[i].data[j].time +"</p></div>");
                        }else{
                            var picLi = $("<li class='tig_li'></li>");
                            var picA = $("<a href='#' class='pic_a'></a>");
                             var picP = $("<p class='pic_p'><img src="+ data[i].data[j].imgUrl +" alt='' /></p>");
                            var picPrice = $("<div class='pic_price'><span>"+ data[i].data[j].price +"</span>元起</div>");
                            var picTitle = $("<div class='pic_title'><h3 class='pic_datas_h3'>"+ data[i].data[j].title +"</h3></div>");
                        }


                      picA.append(picP);
                      picA.append(picPrice);
                      picA.append(picTitle);
                      picLi.append(picA);
                      picUl.append(picLi);
                    }
                    var gudingP = $("<p class='last_title'>查看更多<br />机酒自由行产品</p>");
                    var gudingP2 = $("<p class='last_arrow'><span>></span></p>");
                    var gudingA = $("<a href='#'></a>");
                    var gudingDiv = $("<div class='titles'></div>")
                    var gudingLi = $("<li class='tig_li'></li>");
                    var listP = $("<p class='list'><a href='#'>机票</a>|<a href='#'>酒店</a>|<a href='#'>机+酒</a>|<a href='#'>邮轮</a></p>")
                    gudingA.append(gudingP);
                    gudingA.append(gudingP2);
                    gudingDiv.append(gudingA);
                    gudingLi.append(gudingDiv);
                    gudingLi.append(listP);
                    picUl.append(gudingLi);
          
                              freeLi.on("mouseover",function(){
                                  for(var i = 0;i < data.length;i++){
                                      $(".free_ul li:eq(" + i +")").attr("class","");
                                  }
                                  $(this).attr("class","active");
                                  for(var j = 0; j < data.length;j++){
                                      $(".tig_ul:eq("+ j +")").css("display","none");
                                  }
                                  $(".tig_ul:eq("+ $(this).index() +")").css("display","block");
                                  $(this).on("mouseleave",function(){
                                      $(this).attr("class","active");
                                  })
                                })

                            $(".z_tags").append(freeUl);
                            picDiv.append(picUl);
                          }
                          root.append(picDiv);
                       }
                    //第一个默认打开
                    $(".free_ul li:eq(0)").attr("class","active");
                  for(var k = 0 ; k < 7;k++){
                    $(".tig_ul:eq("+ k +")").css("display","none");
                  }
                  $(".tig_ul:eq(0)").css("display","block");
                }
            }
            return getBannerData;
})