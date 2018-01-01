$(document).ready(function() {

  /* navigation bar color change */
  var changeColor = function() {

    console.log('scroll')
    var scroll_start = 0;
    var startchange = $('#start');
    var offset = startchange.offset();
    if (startchange.length) {
      $(document).scroll(function() {
        scroll_start= $(this).scrollTop();
        if(scroll_start > offset.top) {
          $(".navbar").addClass('bg-cloud')
        } else {
          $(".navbar").removeClass('bg-light')
          $(".navbar").removeClass('bg-cloud')

          console.log('portfolio out')
        }
      });
    }
  }
});
