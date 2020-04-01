requirejs.config({
    'paths':{
        'jquery':'http://apps.bdimg.com/libs/jquery/2.1.4/jquery.main.js'
    }
})
require(['jquery'],function($){
    $(function(){
        var $btnAdd=$('#add');
        $btnAdd.click(function(){
            require(['timer-button'],function(TimerButton){
                var tb = new TimerButton();
                tb.show({
                    num: 6,
                    title: "同意",
                    onClick:function() {
                        alert("您终于同意啦");
                    }
                })    
            })     
        })
    })
})
