var $banner = (function(){
    function Carousel() {}
    var opt = {
        container:'body',//容器
        time:1000,//循环时间
        imgArr:['img/b1.png'],//图片
        page:1,//轮播个数
    }
    var timer;
    var index = 1;
    var left;
    var isMoving = false;

    //轮播结构
    Carousel.prototype.init = function(conf){
        var that = this;
        var $box=$('<div class="slider" id="slider">'
                +'</div>'
                +'	<span id="left"><</span>'
                +'	<span id="right">></span>'
                +'	<ul class="nav" id="navs">'
                +'	</ul>');
    
        $.extend(opt,conf);
        $(opt.container).append($box);
        var imgArr = opt.imgArr;
        var $silder = $('#slider');
        $silder.append('<div class="slide"><img src="'+imgArr[opt.page-1]+'" alt=""></div>');
        for(var i = 0;i<imgArr.length;i++){
            $silder.append('<div class="slide"><img src="'+imgArr[i]+'" alt=""></div>');
        }
        $silder.append('<div class="slide"><img src="'+imgArr[0]+'" alt=""></div>');
    
        var $navs = $('#navs');
        for(var i = 1;i<=imgArr.length;i++){
            if(i==1){
                $navs.append('<li class="active">'+i+'</li>');
            }else{
                $navs.append('<li>'+i+'</li>');
            }   
        }
        left = $('#slider').css('left').split('px')[0];
        //鼠标移入，箭头出现，轮播停止
        $(opt.container).mouseenter(function(){
            $('#left').css('opacity',0.5);
            $('#right').css('opacity',0.5);
            clearInterval(timer);
        })
        //鼠标移出，箭头消失，轮播继续
        $(opt.container).mouseleave(function(){
            $('#left').css('opacity',0);
            $('#right').css('opacity',0);
            that.move();
        })
        that.navclick();
        that.prevclick();
        that.nextclick();
        that.antoplay();
        return this;
    }
    
    //圆点变红
    Carousel.prototype.navActive = function(i){
        $("#navs").children().removeClass('active');
        $("#navs").children().eq(i).addClass('active');
    }
    //圆点红色变化
    Carousel.prototype.navMove = function(){
        var that = this;
        if(index>opt.page){
            index = 1;
            that.navActive(1);
        }
        if(index == opt.page){
            that.navActive(0);
        }
        else{
            that.navActive(index);
        }
    }
    //轮播
    Carousel.prototype.move = function(){
        var that = this;
        timer = setInterval(function(){
            if(index>opt.page){
                index = 1;
                $("#slider").css('left','-1200px');
            }
            that.navMove();
            var lef = left*(index+1);
            $('#slider').animate({'left':lef+'px'},500);   
            index++;
        },opt.time)
    }
    //自动轮播
    Carousel.prototype.antoplay = function(){
        var that = this;
        clearInterval(timer);
        that.move();
    } 
    //往前一页
    Carousel.prototype.prev = function(){
        var that = this;
        if(isMoving) return;
        isMoving = true;
        clearInterval(timer); 
        console.log(index);
        if(index<=0){
            $("#slider").css('left',left*opt.page+'px');
            index=opt.page;
            that.navActive(opt.page-2);
        }else{
            that.navActive(index-2);
        }
        var lft = left*(index-1);
        $('#slider').animate({'left':lft+'px'},()=>{
            500;
            isMoving = false;
        })
    }
    //左侧箭头点击
    Carousel.prototype.prevclick = function(){
        var that = this;
        $('#left').click(function(){
            if(isMoving) return;
            clearInterval(timer);
            // index--;
            that.prev();
            index--;
            isMoving = true;
        })
    }

    //往后一页
    Carousel.prototype.next = function(){
        var that = this;
        if(isMoving) return;
        isMoving = true;
        clearInterval(timer);
        if(index>opt.page){
            index = 1;
            $("#slider").css('left','-1200px');
        }
        that.navMove();
        var lft = left*(index+1);
        $('#slider').animate({'left':lft+'px'},()=>{
            500;
            isMoving = false;
        })
    } 
    //右侧箭头点击
    Carousel.prototype.nextclick = function(){
        var that = this;
        $('#right').click(function(){
            if(isMoving) return;
            clearInterval(timer);
            that.next();
            index++;
            isMoving = true;
        })
    }
    //圆点点击:显示对应页面
    Carousel.prototype.navclick = function(){
        var that = this;
        $("#navs").children().each(function(idx){
            $(this).click(function(){
                if(index==(opt.page+1)){
                    index=1;
                }
                if(index>idx+1){
                    // console.log(index)
                    clearInterval(timer);
                    index = idx+2;
                    that.prev();
                    index--;
                }else{
                    clearInterval(timer);
                    index = idx;
                    that.next();
                    index++;
                }
            })
        })
    } 

    return new Carousel()
    
})();