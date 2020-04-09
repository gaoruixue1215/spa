var $editor = (function() {
    var $DOM = $(''
      + '<div class="notepad-editor">'
        + '<textarea spellcheck="false" auto-size="none"></textarea>'
      + '</div>');

    var $textArea = $DOM.find('textarea');

    var cfg = {
        wrap: true,
        box:'body'
    };

    function show(conf) {
      $.extend(cfg, conf);
      $(cfg.box).append($DOM);
      $textArea.trigger('focus');
      setWrap(cfg.wrap);
    }
    //设置换行
    function setWrap(bWrap) {
      if(bWrap) {
        $textArea.attr('wrap', 'soft');
        $textArea.css({'overflow-x': 'hidden'});
      } else {
        $textArea.attr('wrap', 'off');
        $textArea.css({'overflow-x': 'scroll'});
      }
    }
    //设置默认字体
    function setFont(e) {
      $textArea.css({'font-family': e.family, 'font-size': e.size + 'pt'});
  
      if(e.style === '常规') {
        $textArea.css({'font-style': '','font-weight': ''});
        return;
      }
      if(e.style === '斜体') {
        $textArea.css({'font-style': 'italic','font-weight': ''});
        return;
      }
      if(e.style === '粗体') {
        $textArea.css({'font-weight': 'bold','font-style': ''});
        return;
      }
      if(e.style === '粗偏斜体') {
        $textArea.css({'font-weight': 'bold', 'font-style': 'italic'});
        return;
      }
    }
    
    return({
      show:show,
      setFont:setFont
    })
})();