
$(function () {



     //slider

     $('.slider-main').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          dots: true,
          arrows: false,
     });

     //VenoBox

     $(document).ready(function () {
          $('.venobox').venobox();
     });


     //Testimonial Slider

     $('.test-slider').slick({
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          dots: true,
          arrows: false,
     });


     // Counter 
     jQuery('.counter').counterUp({
          delay: 10,
          time: 2000
     });


     //Logo slider

     $('.all-logo').slick({
          slidesToShow: 5,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          dots: false,
          arrows: true,
          prevArrow: '<i class="fa fa-chevron-left pre" aria-hidden="true"></i>',
          nextArrow: '<i class="fa fa-chevron-right next" aria-hidden="true"></i>',
     });



});

