;(function(jQuery){
  'use strict';

  $(document).ready(function(){
    $('.carousel.carousel-slider').carousel({
      indicators: true,
      draggable: false,
      dist:0,
      duration:1000
    });
    var slides = $('.slider').children();
    var current_slide = 0;
    var count = $('.slider').children().length;

    function childs(){
      // console.log(current_slide)
      slides.each(function(el){
      if(current_slide == el){
        $(this).children().fadeTo(1000,1)  
      }else{
        $(this).children().fadeTo(1000,0)
      }
    })
    }

    function nextSlide(){
      // console.log(current_slide)
      current_slide +=1  
      childs()
    }
    setInterval(function(){
      nextSlide()  
      // console.log(current_slide)
      if(current_slide == (count - 1)){
        current_slide = 0-1
        // console.log(current_slide)
      }
    }, 3000)
    

    

    // autoplay()   
    // function autoplay() {
    //   setTimeout(function(){
    //     //$('.carousel').carousel('next');
    //   }, 1000);
    //   //setTimeout(autoplay, 4500);
    // }
    // $(".carousel.carousel-slider").click(function(){
    //   $(".slide").fadeIn({
    //     duration: 9000,
    //   });
    // });
  });

  function idea(){
    var wh = $(window).height();
    var bw = parseInt($('.slide_title_border').css('border-left-width')) + 40;

    $('.slide_title_border').css({'top':wh/2 - bw, 'left':-(wh/2 - bw)})
    $('.slide_title_border').width(wh);
    $('.slide_title_border').width($('.slide_title_border').width() - bw*2)
    $("#responsive_headline").fitText(0.65);
    $('.slider_title').css('line-height', Math.ceil(parseInt($('.slider_title').css('font-size'))*0.68) + 1 + "px")
    // console.log($('.slide_title_border').width() + "---" + $('.slide_title_border').height()) ;
  }
  $(document).ready(function(){
    idea()
  }); 
  $(window).resize(function(){
    idea()
  });


$(document).ready(function(){
  $( ".slider_title" ).css("font-size", "105px");
})

var offset = $('.slide_title_border').offset();
$('.slider_title').centerTo(offset.left,offset.top);

})(jQuery);