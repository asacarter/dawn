$(function() {
  $('.announcement-slider').slick({
    infinite: true,
    arrows: false,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: false,
    autoplaySpeed: 7000
  });
  
  document.addEventListener("shopify:section:load", function(event) {
    console.log(1)
    
    $('.announcement-slider').slick({
      infinite: true,
      arrows: false,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true,
      autoplay: false,
      autoplaySpeed: 7000
    });
  });
});



