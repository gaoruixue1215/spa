$(function(){
    //get dom elem
    var $width = $('#width'),
          $height = $('#height'),
          $btnCal = $('#calculate'),
          $perimeter = $('#perimeter'),
          $area = $('#area');
    
    /*calc button click event*/
    $btnCal.click(function(){

        if(!validation($width)||!validation($height)) return;

        //get value
        var w = Number($width.val()),
            h = Number($height.val());
             
        //calculate
        var p = Math.round(2*(w+h)*Math.pow(10,4))/Math.pow(10,4);
            a = Math.round(w*h*Math.pow(10,4))/Math.pow(10,4);
        //output
        $perimeter.val(p);
        $area.val(a)
    });

    function validate(field){
      var $data = $(field),
          $msg = $(filed+'-validation-message');
      if($data.val()===''){
        $msg.html('不能为空');
        $data.select();
        return false;
      }

      if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test($data.val())) {
        $message.html(label + '必须是数值');
        $data.select();
        return false;
                              
      }
      if(window.Number($data.val()) < 0) {
        $message.html(label + '必须大于零');
        $data.select();
        return false;                
      }
        $message.html('');
        return true;
  });
