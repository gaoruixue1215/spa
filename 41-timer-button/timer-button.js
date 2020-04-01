/*eslint quotes: ["error", "double"]*/
//封装方式一
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
//封装方式二
// var $timerButton=(function(){
//     function show(conf) {
//         var timer;
//         var num;
//         var cfg={
//             container: "body",
//             num: 6,//倒计时长
//             title: "同意",//按钮文字
//             onclick:null
//         }
//         var $btn=$('<input class="timer-button" type="button" value="同意(6s)" disabled />');
//         //1.DOM draw 
//         if (timer) clearInterval(timer);

//         $(cfg.container).append($btn);
//         $.extend(cfg,conf);/*conf 合并到 cfg 中 */ 
//         num = cfg.num;
//         $btn.val(cfg.title+"("+num+"s)")
//         timer =setInterval(function() {
//             num--;
//             if(num===0){
//                 clearInterval(timer);
//                 $btn.val(cfg.title);
//                 $btn.removeAttr("disabled");
//             }
//             else{
//                 $btn.val( cfg.title+"("+num+"s)");
//             }
//         }, 1000);
//         //2.event bind
//         $btn.click(cfg.onClick);
//     }
    
//     return {
//         show: show
//     }
    
    
// }());//立即执行表达式

//不用 page load event $(function(){})
/**
 * 封装成对象有几种方案
 * 1.全局对象，简单对象字面量，不完全是面向对象，不能包括私有方法
 * var timerButton={
 *  show:function()
 * }
 * 2.工厂函数，一个函数返回值是一个简单对象
 * var timerButton=(function(){
 *  return {
 *      show:function(){}
 *  }
 * }())
 * 3.构造函数
 * function TimerButton(){
 *  
 * }
 * var tb= new TimerButton();
 */