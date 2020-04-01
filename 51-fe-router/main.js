$(function(){
    window.onhashchange = function(){
        //当 一个窗口的 hash （URL 中 # 后面的部分）改变时就会触发 hashchange 事件
        var $block = $('.main'),
            strHash = window.location.hash,
            color = strHash.substring(3,strHash.length);
        console.log(strHash);// #!/red

        $block.css({
            'background-color':color
        })
    }
})