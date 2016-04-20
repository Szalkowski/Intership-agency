$(function() {
    $('.words h1:first, .words p:first').addClass('visible');
    var lis = $(".words > h1"),
        desc = $(".words > p"),
        currentSlide = 0;

    setInterval(function() {
        currentSlide = (currentSlide + 1) % lis.length;
        lis.removeClass('visible').eq(currentSlide).addClass('visible');
        desc.removeClass('visible').eq(currentSlide).addClass('visible');
    }, 3000);
});
