var express = require('express');
var router = express.Router();


router.use(function(req,res,next){
    if(!req.userInfo.isAdmin){
        res.send('管理员身份验证失败');
        return;
    }else{
        next();
    }
})

router.get('/',function(req,res,next){
    res.render('admin/index',{
        userInfo:req.userInfo
    });
})

module.exports = router;