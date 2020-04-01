var $dlgGoto=(function(){
    var num;
    var cfg={
        container: "body",
        num: 6,//倒计时长
        title: "同意",//按钮文字
        onclick:null
    }
    var $btn=$('<input class="timer-button" type="button" disabled />');
    function show(conf) {
        //1.DOM draw
        $(cfg.container).append($btn);
        $.extend(cfg,conf);/*conf 合并到 cfg 中 */ 
        num = cfg.num;
        $btn.val(cfg.title+"("+num+"s)")
        
        //2.event bind
        $btn.click(cfg.onClick);
    }
    
    return {
        show: show
    }
    
    
}());//立即执行表达式

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