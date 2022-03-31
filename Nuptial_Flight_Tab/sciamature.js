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

$('.questionnaire').on('submit', function(e) {

    var messageBody = '';
    $.each($('.questionnaire').serializeArray(), function(i, field) {
      messageBody += field.name + ": " + field.value + '%0D%0A';
    });
  
    var hreflink = "mailto:info.antsitalia@gmail.com?Subject='TABELLA SCIAMATURE - AGGIUNTA SPECIE'";
    $('.mail').attr("href", hreflink);
    e.preventDefault();
    $('.mail')[0].click()
  
  });