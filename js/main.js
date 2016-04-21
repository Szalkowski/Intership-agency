$(function() {
    $('.hero h1:first, .hero p:first').addClass('visible');
    var lis = $(".hero > h1"),
        desc = $(".hero > p"),
        currentSlide = 0;

    setInterval(function() {
        currentSlide = (currentSlide + 1) % lis.length;
        lis.removeClass('visible').eq(currentSlide).addClass('visible');
        desc.removeClass('visible').eq(currentSlide).addClass('visible');
    }, 3000);
});
