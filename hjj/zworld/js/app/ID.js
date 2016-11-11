define(['jquery'],function($){
    function searchInp(){
        $('.search').on('keyup',function(e){
            if( (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 97 && e.keyCode <= 122)){
                var str = $('.search').val();
                $.ajax({
                    url:'http://10.0.161.118:9001?kw='+str,
                    tupe:'get',
                    success:fn
                })
            }
        })      
    }
    return searchInp;
});
function fn(data){
        $(".shuju").children('ul').html('');
        data.data.list.forEach(function(elem,index){
            console.log(elem);
            if(elem.cn_name||elem.belong_name){
                var li=$('<li>'+elem.cn_name+elem.belong_name+'</li>')
                $(".shuju").children('ul').append(li);
            }else{
                var li=$('<li>'+elem.word+'</li>')
                $(".shuju").children('ul').append(li);
            }
        })
            
}

/*define(['jquery'],function($){
    function search(root){
        $(root).children().children('input').on('keyup',function(){
            var str=$(root).children().children('input').val();
            $.ajax({
                type:'get',
                url:'http://10.0.161.99:9000/sitesearch/'+str,
                data:'JSON.stringify(str)',
                success:searchKW
            })
            function searchKW(data){
                var x=JSON.parse(data);
                $(root).children('ul').html('');
                x.data.list.forEach(function(elem,index){
                    console.log(elem);
                    if(elem.cn_name||elem.belong_name){
                        var li=$('<li>'+elem.cn_name+elem.belong_name+'</li>')
                        $(root).children('ul').append(li);
                    }else{
                        var li=$('<li>'+elem.word+'</li>')
                        $(root).children('ul').append(li);
                    }
                })
            }
        })
        
    }
    return search;
})
*/