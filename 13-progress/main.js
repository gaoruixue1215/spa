$(function() {
  var $progress = $('progress'),    
      timer     = 0,                
      i         = 0;                

  $('#start-button').click(function() {
    if(timer !== 0) return;
    
    timer = window.setInterval(function() {
      $progress.attr('value', i++);
      console.log(i);
      if(i===100){
        clearInterval(timer);
        timer = 0
        $progress.attr('value',i=0)
      }
    }, 100);
  });

  $('#stop-button').click(function() {
    window.clearInterval(timer);
    timer = 0;
  });
  
  $('#reset-button').click(function() {
    $progress.attr('value', i = 0);
  });
});


//i到一百自动归零重置
