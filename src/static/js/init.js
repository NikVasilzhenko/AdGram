$('#js-banners-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
});
$('#js-banners-next').click(function(){
  $('#js-banners-slider').slick('slickNext');
});
$('#js-banners-prev').click(function(){
  $('#js-banners-slider').slick('slickPrev');
});
