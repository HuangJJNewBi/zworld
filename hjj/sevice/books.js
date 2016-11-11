const express=require("express");
var app=express();

var fs=require("fs");
var navData=null;//存从文件读取的数据。
var menuData=null;
var bannerData=null;
var freeWalkData=null;

fs.readFile("data/nav.json",function(err,data){
	if(err) 
		throw new Error("读取错误");
	navData=data;

	fs.readFile('data/index/menu.json',function(err1,data1){
		if(err1)
			console.log(err1);
		menuData=data1;

		fs.readFile('data/index/banner.json',function(err2,data2){
			if(err2)
				console.log(err2);
			bannerData=data2;

			fs.readFile('data/index/freeWalk.json',function(err3,data3){
				if(err3)
					console.log(err3);
				freeWalkData=data3;

			fs.readFile('data/citywalk/cityWalkList.json',function(err4,data4){
				if(err4)
					console.log(err4);
				cityWalkListData=data4;
				
				app.listen(9001);
				console.log("服务器开始运行.........");
			})
		})
	})
})
	})
	
// app.use(express.static('www'));

app.all('*',function(req,res,next){
	res.header("Access-Control-Allow-Origin", "*");  
    res.header("Access-Control-Allow-Headers", "X-Requested-With");  
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
	next();
})

app.get("/znav",function(req,res){
	res.setHeader("Content-Type","application/json");
	res.send(navData);
})

app.get("/zmenu",function(req,res){
	res.setHeader("Content-Type","application/json");
	res.send(menuData);
})

app.get("/zbanner",function(req,res){
	res.setHeader("Content-Type","application/json");
	res.send(bannerData);
})

app.get("/zfreewalk",function(req,res){
	res.setHeader("Content-Type","application/json");
	res.send(freeWalkData);
})
app.get("/zcityWalkList",function(req,res){
	res.setHeader("Content-Type","../application/json");
	res.send(cityWalkListData);
})



var http = require('http');
//suggest组件
// app.get('/sitesearch/:keyword' , function (req , res) {
// 	var url = req.params.keyword;
//     // 查询本机ip
//     // http://z.qyer.com/qcross/home/ajax?action=sitesearch&keyword=b&timer=1478686648677&_=1478678019964
//     var sreq = http.request({
//         host:'z.qyer.com', // 目标主机
//         path:'/qcross/home/ajax?action=sitesearch&keyword='+url, // 目标路径
//         method:'get' // 请求方式
//     }, function(sres){
//         sres.pipe(res);
//         sres.on('end', function(){
//             console.log('done');
//         });
//     });
//     if (/POST|PUT/i.test(req.method)) {
//         req.pipe(sreq);
//     } else {
//         sreq.end();
//     }
// })


app.get('/',function(req,res){

    //获取用户传递过来的参数
    var arg = req.query['kw'];
    httpSearch(arg,function(info){
        res.send(JSON.parse(info));
    });
    console.log(req.query['kw']);
});

function httpSearch(kwVal,callback){
    http.get('http://z.qyer.com/qcross/home/ajax?action=sitesearch&keyword=' + kwVal, function(httpRes) {
        var buffers = [];
        httpRes.on('data', function(chunk) {
            buffers.push(chunk);
        });
        httpRes.on('end', function(chunk) {
            var wholeData = Buffer.concat(buffers);
            var dataStr = wholeData.toString('utf8');
            callback(wholeData);
        });
    }).on('error', function(e) {
        console.log(e);
    });
}