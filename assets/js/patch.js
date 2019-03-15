/**
 * Customized Scripts
 */
jQuery(document).ready(function($) {

$('argcv').html('<span style="color:MediumPurple;">A</span><span style="color:SkyBlue;">rg</span><span style="color:Gold;">C</span><span style="color:OrangeRed;">V</span>');

// update the behavior of clicking a anchor
$('.entry-content a').click(function( event ) {
  event.preventDefault();
  if($(this).attr('href') && $($(this).attr('href')).offset() && $($(this).attr('href')).offset().top) {
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - 200 }, 500);
  }
});

});