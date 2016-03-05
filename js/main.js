$('.my-reviews').click(function() {
    $('.tab-pane').removeClass('active');
    $('#review').addClass('active');
    $('.navbar-nav li').removeClass('active');
    $('.navbar-nav li:nth-child(3)').addClass('active');
});

$('.portfolio').click(function() {
    $('.tab-pane').removeClass('active');
    $('#home').addClass('active');
    $('.navbar-nav li').removeClass('active');
    $('.navbar-nav li:nth-child(1)').addClass('active');
});

$('.about-me').click(function() {
    $('.tab-pane').removeClass('active');
    $('#about').addClass('active');
    $('.navbar-nav li').removeClass('active');
    $('.navbar-nav li:nth-child(2)').addClass('active');
});
$('.contact-me').click(function() {
    $('.tab-pane').removeClass('active');
    $('#contacts').addClass('active');
    $('.navbar-nav li').removeClass('active');
    $('.navbar-nav li:nth-child(4)').addClass('active');
});

$("#view-portfolio").click(function() {
    $("html, body").animate({ scrollTop: 500 }, "slow");
});
