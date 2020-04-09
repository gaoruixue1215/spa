var $dlgFont = (function() {
    var $dlg = $(''
              + '<div class="notepad-font">'
                + '<div class="box">'
                  + '<div class="notepad-titlebar">'
                    + '<p class="title">字体</p>'
                    + '<span class="close-btn" title="关闭">✖</span>'
                  + '</div>'
                  + '<div class="notepad-main">'
                    + '<div class="font-family"><p>字体(F):</p></div>'
                    + '<div class="font-style"><p>字形(Y):</p></div>'
                    + '<div class="font-size"><p>大小(S):</p></div>'
                    + '<fieldset class="sample">'
                      + '<legend>示例</legend>'
                      + '<p class="sample-txt">AaBbYyZz</p>'
                    + '</fieldset>'
                    + '<div class="script">'
                      + '<label>'
                        + '脚本(R):<br>'
                        + '<select id="sel">'
                          + '<option value="西欧语言">西欧语言</option>'
                          + '<option value="中文 GB2312">中文 GB2312</option>'
                        + '</select>'
                      + '</label>'
                    + '</div>'
                    + '<input class="btn-ok btn" type="button" value="确定">'
                    + '<input class="btn-cancel btn" type="button" value="取消">'
                  + '</div>'
                + '</div>'
              + '</div>');

    var fonts = ['Agency FB', 'Algerian', 'Arial', 'Arial Rounded MT', 'Axure Handwriting', 'Bahnschrift', 'Baskerville Old Face', 'Bauhaus 93', 'Bell MT', 'Berlin Sans FB', 'Bernard MT', 'BlackAdder ITC'],
        styles = ['常规', '斜体', '粗体', '粗偏斜体'],
        sizes = ['8', '9', '10', '11', '12', '14', '16', '18', '20', '22', '24', '26', '28', '36', '48', '72'];

    var cfg = {
      family: 'Arial',
      style: '常规',
      size: '16',
      okHandler: null
    };
    var $sample = $dlg.find('.sample-txt');
    var $titleBar = $dlg.find('.notepad-titlebar');

    function init(conf) {
      $.extend(cfg,conf);
      //拖拽
      $dlg.find('.box').draggable({handle: $titleBar});

      //添加DOM结构
      $('body').append($dlg);
      // X 关闭点击事件
      $('.close-btn').click(()=>{
        $dlg.remove();
      })
      // 确定 按钮点击事件
      $('.btn-ok').click(()=>{
        var font = {
          family: cfg.family,
          style: cfg.style,
          size: cfg.size
        }
        cfg.okHandler(font);
        $dlg.remove();
      })
      //取消 按钮点击事件
      $('.btn-cancel').click(()=>{
          $dlg.remove();
      })

      //脚本默认样式
      $sample.css({'font-family':cfg.family})
      $sample.css({'font-size':cfg.size+'pt'})

      //样式列表保证只显示一个
      var $oldList1 = $('.font-family').find('.notepad-list');
      var $oldList2 = $('.font-style').find('.notepad-list');
      var $oldList3 = $('.font-size').find('.notepad-list');
      if($oldList1.length !== 0) $oldList1.remove();
      if($oldList2.length !== 0) $oldList2.remove();
      if($oldList3.length !== 0) $oldList3.remove();

      var l1 = new fontList();
      var l2 = new fontList();
      var l3 = new fontList();
      l1.show({
        container: '.font-family',
        width: '176px',
        list: fonts,
        select:cfg.family,
        fontFamily: true,
        selectHandler: function(e) {
          console.log(e)
          cfg.family = e;
          $sample.css({'font-family':e})
        }
      }); 
      l2.show({
        container: '.font-style',
        width: '132px',
        list: styles,
        select:cfg.style,
        fontStyle: true,
        selectHandler: function(e) {
          console.log(e);
          cfg.style = e;
          if(e === '常规') {
            $sample.css({'font-style': '','font-weight': ''});
            return;
          }
          if(e === '斜体') {
            $sample.css({'font-style': 'italic','font-weight': ''});
            return;
          }
          if(e === '粗体') {
            $sample.css({'font-weight': 'bold','font-style': ''});
            return;
          }
          if(e === '粗偏斜体') {
            $sample.css({'font-weight': 'bold', 'font-style': 'italic'});
            return;
          }
        }
      });  
      l3.show({
        container: '.font-size',
        width: '60px',
        list: sizes,
        select:cfg.size,
        fontSize: true,
        selectHandler: function(e) {
          console.log(e);
          cfg.size = e;
          $sample.css({'font-size':e+'pt'})
        }
      });
       
      
      //脚本切换
      $("#sel").change(function(){
        var value=$("#sel").val();
        console.log(value)
        if(value == '西欧语言'){
          $sample.html("AaBbYyZz")
        }
        else if(value == '中文 GB2312'){
          $sample.html("微软中文软件")
        }
      })
      
      $dlg.click(function(e) {
        e.stopPropagation();
      });
    }

    return({
        init:init
    })
})();