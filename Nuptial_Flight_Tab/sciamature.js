var calcHeight = function() 
{
    //var headerDimensions = 0; //$('#header-bar').height();
    $('#preview-frame').height($(window).height());
}
     
$(document).ready(function()
{
    calcHeight();
    /*$('#header-bar a.close').mouseover(function() {
      $('#header-bar a.close').addClass('activated');
      }).mouseout(function() {
      $('#header-bar a.close').removeClass('activated');
      });*/
});

$(window).resize(function() { calcHeight(); } ).load(function() { calcHeight(); });
