$(function() {
  $('.announcement-slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 7000
  });
  
  document.addEventListener("shopify:section:load", function(event) {
    console.log(1)
    
    $('.announcement-slider').slick({
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 7000
    });
  });
});



