define(['jquery'],function($){
    function TimerButton(){
        var timer;
        var num;
        var cfg={
            container: "body",
            num: 6,//倒计时长
            title: "同意",//按钮文字
            onclick:null
        }
        var $btn= $('<input class="timer-button" type="button" value="同意(6s)" disabled />');
        this.show = function(conf) {
            //1.DOM draw 
            if (timer) clearInterval(timer);
    
            $(cfg.container).append($btn);
            $.extend(cfg,conf);/*conf 合并到 cfg 中 */ 
            num = cfg.num;
            $btn.val(cfg.title+"("+num+"s)")
            timer =setInterval(function() {
                num--;
                if(num===0){
                    clearInterval(timer);
                    $btn.val(cfg.title);
                    $btn.removeAttr("disabled");
                }
                else{
                    $btn.val( cfg.title+"("+num+"s)");
                }
            }, 1000);
            //2.event bind
            $btn.click(cfg.onClick);
        }   
    };
    return TimerButton
})

