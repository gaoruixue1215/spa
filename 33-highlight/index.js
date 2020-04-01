$(function () {
  var editor = new Behave({
    textarea: $('textarea').get(0),
    replaceTab: true,
    softTabs: true,
    tabSize: 4,
    autoOpen: true,
    overwrite: true,
    autoStrip: true,
    autoIndent: true,
    fence: false
});
  $('input').click(function(){
    var $code = $('<div><pre class="javascript"></pre></div>');
    var $txt = $('textarea');
    if($txt.val() !== ''){
      $code.find('pre').html($txt.val());
      hljs.highlightBlock($code.find('pre').get(0));
      $('body').append($code);
    }
  })
  return editor;
});