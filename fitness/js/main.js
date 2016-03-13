$("#home").click(function() {
    $("html, body").animate({ scrollTop: 10 }, "slow");
});
$("#blog").click(function() {
    $("html, body").animate({ scrollTop: 1400 }, "slow");
});
$("#about").click(function() {
    $("html, body").animate({ scrollTop: 4200 }, "slow");
});

$('.advice-section a').click(function() {
    $(this).attr('target','_blank');
});
$('.article-section a').click(function() {
    $(this).attr('target','_blank');
});

$(function() {
    var widthDoc = $(this).width();
    if(widthDoc<991) {
        $('.top-section').removeClass('parallax parallax-1');
    }
});
