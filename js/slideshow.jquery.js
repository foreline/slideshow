	
	var slideShow = {
		animationTime: 700,
		slideShowActive: false,
		slidesPause: 5000
	};

	slideShow.start = function(){
		
		slideShow.slideShowActive = true;

		var t = setTimeout('slideShow.slideShow()', slideShow.slidesPause);
	};
	
	slideShow.slideShow = function(){
		
		if ( slideShow.slideShowActive ) {
			slideShow.nextSlide();
		}
		
		var t = setTimeout('slideShow.slideShow()', slideShow.slidesPause);
	};

	slideShow.nextSlide = function(){
		
		slideWidth = parseInt($(".slide").first().css('width').replace('px', ''));
		
		$(".slides").animate({
			left: "-=" + slideWidth
		}, slideShow.animationTime, function(){
			$(".slide").first().insertAfter($(".slide").last());
			$(".slides").css('margin-left', '+=' + slideWidth + 'px');
		});
	};

	slideShow.prevSlide = function(){
		$(".slide").last().insertBefore($(".slide").first());
		$(".slides").css('margin-left', '-=560px');

		$(".slides").animate({
			left: "+=560"
		}, slideShow.animationTime);
	};

	slideShow.stop = function(){
		slideShow.slideShowActive = false;
	};
	
