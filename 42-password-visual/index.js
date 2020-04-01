var $getPwd = (function(){
  var html=$(`<div id="box">
                <input type="password" id='pwd'>
               <i class="iconfont icon-Eyevision" id='icon'></i>
              </div>`);
  function show(container){
    $(container).append(html);
    var $icon = $(container+' #icon'),
    $pwd = $(container+' #pwd');
    console.log($icon,$pwd)
    $icon.mouseover(function(){
      $icon.attr("class","iconfont icon-Eyeblind1");
      $pwd.attr("type","text");
    })
    $icon.mouseout(function(){
      $icon.attr("class","iconfont icon-Eyevision");
      $pwd.attr("type","password");
    })
  }
  function getPwd(container){
    var $pwd = $(container+' #pwd');
    alert($pwd.val());
  }
  return{
    show:show,
    getPwd:getPwd
  }
})();