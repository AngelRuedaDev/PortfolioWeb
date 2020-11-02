var eventFired = false,
    objectPositionTop = $('#other').offset().top;

$(window).on('scroll', function() {

 var currentPosition = $(document).scrollTop();
 if (currentPosition > objectPositionTop && eventFired === false) {
    eventFired = true;    
    $('.counter').counterUp({
      delay: 10,
      time: 1000
  });    
 }
});