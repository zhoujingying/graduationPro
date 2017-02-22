'use strict'
var express = require('express');
var swig = require('swig');

//1.创建app应用
var app = express();


//2.配置应用模板
app.engine('html',swig.renderFile);
app.set('views','./views');
app.set('view engine','html');
swig.setDefaults({cache:false});   //取消缓存

//3.静态文件托管
app.use('/public',express.static(__dirname+'/public'));

// app.get('/',function(req,res,next){
//     res.render('index');   //后可跟数据参数
    
// })

//4.根据不同功能划分模块
app.use('/admin',require('./routers/admin'));
app.use('/api',require('./routers/api'));
app.use('/',require('./routers/main'));

//5.加载数据库模块
var mogooes = require('mongoose');

//6.连接数据库并开启应用
mogooes.connect('mongodb://localhost:27017/blog',function(err){
    if (err) {
        console.log('connext err');
    }else{
        console.log('successful');
        app.listen(8081);
    }
});     // 连接前需开启数据库服务

