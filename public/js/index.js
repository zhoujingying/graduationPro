
$(function() {

    var $loginBox = $('#loginBox');
    var $registerBox = $('#registerBox');
    var $userInfo = $('#userInfo');
    
   
   //点击事件

    $('.mainRight').unbind('click').on('click',function(e){
        var target = e.target;
        if($(target).attr('role') == 'toRegist'){         //跳转
            $registerBox.show();
            $loginBox.hide();
        }
        if($(target).attr('role') == 'toLogin'){         //跳转
            $loginBox.show();
            $registerBox.hide();
        }
        if($(target).attr('role') == 'login'){          //登陆
            if(checkObject.checkLoginName()){
                 $.ajax({
                    type:'post',
                    url:"/api/user/login",
                    data:{
                        username: $loginBox.find('[name = "username"]').val(),
                        password: $loginBox.find('[name = "password"]').val()
                    },
                    dataType:'json',
                    success:function(result){
                        //...
                    }
                 })
            }else{
                //错误码配置
                console.log('登陆验证失败')
            }
        }
        if($(target).attr('role') == 'regist'){
            if(checkObject.checkRegistName()){
                $.ajax({
                    type:"post",
                    url:"/api/user/regist",
                    data:{
                            username: $registerBox.find('[name="username"]').val(),
                            password: $registerBox.find('[name="password"]').val(),
                            repassword:  $registerBox.find('[name="repassword"]').val()
                    },
                    dataType:"json",
                    success:function(result){
                        //...
                    }
                })
            }else{
                //错误码配置
                console.log('登陆验证失败')
            }
        }
    })

    var checkObject = {
        checkLoginName:function(){
            if(checkObject.emptyCheckLogin()){
                return true;
            }else{
                return false;
            }
        },
        checkRegistName:function(){
            if(checkObject.emptyCheckRegist()){
                var password = $registerBox.find('[name="password"]').val();
                var repassword = $registerBox.find('[name="repassword"]').val();
                if(password == repassword){
                    return true;
                }
            }else{
                console.log('密码不一致');
                return false;
            }
        },
        emptyCheckRegist:function(){
            if($('#registerBox input[name="username"]').val()!=""&&$('#registerBox input[name="password"]').val()!=""&&$('#registerBox input[name="repassword"]').val()!=""){
                return true;
            }else{
                return false;
            }
        },
         emptyCheckLogin:function(){
            if($('#loginBox input[name="username"]').val()!=""&&$('#loginBox input[name="password"]').val()!=""){
                return true;
            }else{
                return false;
            }
        }
    }

})