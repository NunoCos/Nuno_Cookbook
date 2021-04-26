/*
    jQuery for MaterializeCSS initialization
*/

$(document).ready(function () {
    $(".sidenav").sidenav();
    $('.collapsible').collapsible();
    });

/*
Alert/Flash message
*/

$('#alert_close').click(function(){
    $( "#alert_box" ).fadeOut( "slow", function() {
    });
  });