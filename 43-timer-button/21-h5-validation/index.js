$(function(){
  /**get dom elem */
  var $width = $("#width"),
      $height = $("#height"),
      // $btnCal = $("#calculate"),
      $perimeter = $("#perimeter"),
      $form = $('form'),
      $area = $("#area");

  /**calc button click event */
  // $btnCal.click(clickCalc);
  $form.submit(function(e){
    e.preventDefault();
    //get value
    var w = Number($width .val()),
        h = Number($height.val());
    //calculate
    var p = 2*FloatAdd(w,h),
        a = FloatMul(w,h);
    // output
    $perimeter.val(p);
    $area.val(a);
  });
  $(document).keydown(function(event){
    if(event.keyCode == 13){
      　event.preventDefault();
      //get value
      var w = Number($width .val()),
          h = Number($height.val());
      //calculate
      var p = 2*FloatAdd(w,h),
          a = FloatMul(w,h);
      // output
      $perimeter.val(p);
      $area.val(a);
    }
  });
  // function clickCalc(){
  //   e.preventDefault();
  //   //get value
  //   var w = Number($width .val()),
  //       h = Number($height.val());
  //   //calculate
  //   var p = 2*FloatAdd(w,h),
  //       a = FloatMul(w,h);
  //   // output
  //   $perimeter.val(p);
  //   $area.val(a);
  // }
});
//加法运算精度处理
function FloatAdd(arg1,arg2){  
  var r1,r2,m; 
  try{
    r1=arg1.toString().split(".")[1].length
  }catch(e){
    r1=0;
  }
  try{
    r2=arg2.toString().split(".")[1].length
  }catch(e){
    r2=0;
  }
  m=Math.pow(10,Math.max(r1,r2)); 
  return (arg1*m+arg2*m)/m;
}  
//乘法运算精度处理
function FloatMul(arg1,arg2){  
  var m=0; 
  try{
    m+=arg1.toString().split(".")[1].length
  }catch(e){}
  try{
    m+=arg2.toString().split(".")[1].length
  }catch(e){}
  return Number(arg1.toString().replace(".",""))*Number(arg2.toString().replace(".",""))/Math.pow(10,m);
}