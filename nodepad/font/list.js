function fontList(){
    var $listhtml = $(''
                + '<div class="notepad-list">'
                   + '<input class="type" type="text"><br>'
                   + '<ul class="lists">'
                   + '</ul>'
                + '</div>');

    var cfg = {
        container:'body',
        list:[],
        width:'200px',
        select:'',
        fontFamily:false,
        fontStyle:false,
        fontSize:false,
        selectHandler:null
    }
    var $lists = $listhtml.find('.lists');
    var $type = $listhtml.find('.type');
    var $item;
    var $items;

    //构建DOM结构
    this.show = function show(conf){
        $.extend(cfg,conf);
        $(cfg.container).append($listhtml);
        $listhtml.css({ width: cfg.width });

        for(var i=0; i<cfg.list.length; i++) {
            if(cfg.fontFamily) {
                $item = $('<li class="item"></li>');
                $item.css({'font-family': cfg.list[i]});
                $lists.append($item.html(cfg.list[i]));
            } 
            else if(cfg.fontStyle) {
                $item = $('<li class="item"></li>');
                setFontStyle($item,cfg.list[i]);
                $lists.append($item.html(cfg.list[i]));
            } 
            else if(cfg.fontSize) {
                $item = $('<li class="item"></li>');
                $lists.append($item.html(cfg.list[i]));
            }
            (function(i){
                $item.click(
                    function(e){
                        selectLi(i);
                        console.log($(e.target).html())

                        cfg.select = $(e.target).html();
                        cfg.selectHandler(cfg.select);   
                    }
                )
                
            }(i))

        }
        $items = $lists.find('.item');

        //添加默认
        $type.val(cfg.select);
        for(var j=0;j<cfg.list.length;j++){
            if(cfg.list[j]===cfg.select){
                $($items[j]).addClass('selected');
            }
        }

    }
    //选择
    function selectLi(n) {
        $($items).removeClass('selected');
        $($items[n]).addClass('selected');
        $type.val(cfg.list[n]);
        $type.select();
    }
    //设置字形
    function setFontStyle(item,style) {
        if(style === '常规') {
            item.css({'font-style': '','font-weight': ''});
            return;
        }       
        if(style === '斜体') {
            item.css({'font-style': 'italic','font-weight': ''});
            return;
        }
        if(style === '粗体') {
            item.css({'font-weight': 'bold','font-style': ''});
            return;
        }
        if(style === '粗偏斜体') {
            item.css({'font-weight': 'bold', 'font-style': 'italic'});
            return;
        }
    }    
}