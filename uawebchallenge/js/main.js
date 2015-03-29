$(function() {   

	$(".nav-block>li:nth-child(1) a").on('mouseenter', function(){
		$(this).css({
			'background': '#8c8d8d',
			'color': '#fff',
			'border-bottom-color': '#8c8d8d'
		});
		$(".nav-block-hover-wrap").toggleClass("hide");
	});
	
	$(".nav-block>li:nth-child(1) a").on('mouseleave', function(){
		$(".nav-block-hover-wrap").toggleClass("hide");
		$(this).css({
			'background': '#8c8d8d',
			'color': '#fff',
			'border-bottom-color': '#8c8d8d'
		});
	});
	
	$(".nav-block-hover-wrap").on('mouseenter', function(){
		$(".nav-block>li:nth-child(1) a").css({
			'background': '#8c8d8d',
			'color': '#fff',
			'border-bottom-color': '#8c8d8d'
		});
	});
	
	$(".nav-block-hover-wrap").on('mouseleave', function(){
		$(".nav-block-hover-wrap").toggleClass("hide");
		$(".nav-block>li:nth-child(1) a").css({
			'background': '#fff',
			'color': '#ff4700',
			'border-bottom-color': '#ff4700'
		});
	});
	
	$(".nav-block>li a").on('mouseleave', function(){
		$(".nav-block>li:nth-child(1) a").css({
			'background': '#fff',
			'color': '#ff4700',
			'border-bottom-color': '#ff4700'
		});
	});
	
	$(".leng").on('mouseenter', function(){
		$(".dropdown-leng").css({
			'visibility': 'visible'
		});
	});
	
	$(".leng").on('mouseleave', function(){
		$(".dropdown-leng").css({
			'visibility': 'hidden'
		});
	});
	
	$('.bxslider').bxSlider({
	  captions: true,
	  auto: true,
	  minSlides: 3,
	  maxSlides: 3,
	  moveSlides: 1,
	  slideWidth: 370,
	  slideMargin: 30
	});
	
});