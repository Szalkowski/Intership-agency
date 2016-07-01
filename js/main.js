$(function() {
    $('.hero h1:first, .hero p:first').addClass('visible');
    var lis = $(".hero > h1"),
        desc = $(".hero > p"),
        currentSlide = 0;

    setInterval(function() {
        currentSlide = (currentSlide + 1) % lis.length;
        lis.removeClass('visible').eq(currentSlide).addClass('visible');
        desc.removeClass('visible').eq(currentSlide).addClass('visible');
    }, 5000);

    $('.map-wrap').easyGoogleMaps({
    lat: 1.276816,
    lng: 103.848346,
    zoom: 13
  });
});
