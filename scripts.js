$(document).ready(function() {
  $("#gallery").lightGallery();


    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });

    $(window).scroll(function(){
      $(".hero").css("opacity", 1 - $(window).scrollTop() / 600);
      $('.hero--headline').css({
        'position' : 'relative',
        'top' : 1 + $(window).scrollTop() / 10,
        'left' : 0
      });
    });

});
