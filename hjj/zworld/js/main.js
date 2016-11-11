/**
 * Created by Administrator on 2016/11/7.
 */
requirejs.config({
    baseUrl:'js/lib',
    paths:{
        'app':'../app',// 设置路径
        'jquery':'jquery-3.1.1',
        'myutil':'../app/myutil',
    },
    shim:{
        'myutil': {
           exports:'createXHR'
        }
    }
});
 

//我定义的模块
define(['jquery','app/myfn1','app/myfn','app/banner','myutil','app/banner_ul','app/createTig','app/ID','app/citywalk'],function($,s,urls,bn,myutil,cul,tig,id,city){
    //调用nav模块的方法
    var root = document.querySelector("#nav ul");
    var bn1 = document.querySelector("#box");
    bn(bn1);
    var ul1 = document.querySelector("#banner_ul ul");
    cul(ul1);
    var tigRoot = $(".ziyouxing_title");
    tig(tigRoot);
    id();
    var ul2 = document.querySelector("#main_bottom ul");
    city(ul2);




   $.ajax({
        type:"get",
        url:urls.getBaseURL()+"/znav",
        success:function(data){
            data.forEach(function(elem,index){
                var li = $("<li></li>").html(elem.name);
                $("#nav ul").append(li);
            })  
       
        }
    })
    
});

