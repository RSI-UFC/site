$(document).ready(function(){
  $('.nav-link, #btn-inicio, .footer-link').click(function(e){
    $('.collapse').collapse('hide');
    var linkHref = $(this).attr("href");
    $('html, body').animate({
      scrollTop: $(linkHref).offset().top
    }, 700);
    e.preventDefault();
  });
});
