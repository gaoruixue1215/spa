$(function() {
    var $user = $('#user'),
        $tel = $('#tel'),
        $pwd = $('#pwd'),
        $btn = $('#btn'),
        $getCode = $('#getCode'),
        $code = $('#code');
    
    // 验证码
    var count = 30;
    $getCode.click(function(){
        const countDown = setInterval(() => {
            if(count == 0) {
                $(this).attr("disabled", false);
                $(this).attr("value", "获取验证码");
                count = 30;
                clearInterval(countDown);
            } else {
                $(this).attr("disabled", true);
                $(this).attr("value", "重新发送(" + count + ")");
                count--;
            }
        },1000)
    })

    //验证
    function validate(field){
        var $data = $(field),
            $msg = $(field+'-validation');
        //校验用户名    
        if(field==='#user'){
            if($data.val()===''){
                $msg.html('用户名不能为空');
                $data.select();
                $data.css('border','1px solid red')
                return flase;
            }
            // console.log($data.val());
            if(!(/^(?!\d+$)[a-zA-Z0-9_\u4e00-\u9fa5]+$/.test($data.val()))) {
                $msg.html('用户名仅支持中英文、数字和下划线，且不能为纯数字');
                $data.css('border','1px solid red')
                $data.select();
                return flase;
            }       
        }
        //校验手机号
        if(field==='#tel'){
            if($data.val()===''){
                $msg.html('手机号不能为空');
                $data.select();
                $data.css('border','1px solid red')
                return flase;
            }
            // console.log($data.val());
            if(!(/^1[3456789]\d{9}$/.test($data.val()))) {
                $msg.html('手机号格式不正确');
                $data.css('border','1px solid red')
                return false;
            }      
        }
        //校验密码
        if(field==='#pwd'){
            if($data.val()===''){
                $msg.html('密码不能为空');
                $data.select();
                $data.css('border','1px solid red')
                return flase;
            }
            console.log($data.val());
            if(!(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,14}$/.test($data.val()))) {
                $msg.html('密码设置不符合要求');
                $data.css('border','1px solid red')
                return false;
            }      
        }
        //校验验证码
        if(field === '#code'){
            console.log($data.val());
            if(!(/^[0-9]{6}$/.test($data.val())) || $data.val()==='') {
                $msg.html('请求超时,请稍后再试');
                $data.css('border','1px solid red')
                return false;
            } 
        }

        $msg.html('');
        $data.css('border','1px solid #ccc');
        return true;
    }
    $user.focusout(function() {
        if(!validate('#user')) $tel.select();
    });
    $tel.focusout(function() {
        if(!validate('#tel')) $tel.select();
    });
    $pwd.focusout(function() {
        if(!validate('#pwd')) $pwd.select();
    });
    $code.focusout(function() {
        if(!validate('#code')) $code.select();
    });

    //注册
    $btn.click(function(){
        if(!validate("#user") || !validate('#tel')||!validate('#pwd')||!validate('#code'))
            return;    
    })
})