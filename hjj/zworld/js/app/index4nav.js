/**
 * Created by Administrator on 2016/11/7.
 */
define(['myutil','app/myfn'],function (x, url) {
    function getNavData(root) {
        var xhr = x();  //创建ajax对象
        xhr.open('get',url.getBaseURL() + '/mybooks');
        xhr.send(null);
        xhr.onreadystatechange = function (e){
            if(xhr.readyState === 4){
                var navs = JSON.parse(xhr.responseText);
                navs.forEach(function (elem, index){
                    var li = document.createElement("li");
                    li.innerHTML = elem["name"];
                    root.appendChild(li);
                })
            }
        }
    }
    return getNavData;
});