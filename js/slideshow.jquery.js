
	
	var slideShow = {
		animationTime: 800,
		slideShowActive: false,
	};
	
	slideShow.slideShow = function(){
		
		if ( slideShow.slideShowActive ) {
			nextSlide();
		}
		
		var t = setTimeout('slideShow()', 5000);
	};
	
	slideShow.nextSlide = function(){
		$(".slides").animate({
			left: "-=560"
		}, slideShow.animationTime, function(){
			$(".slide").first().insertAfter($(".slide").last());
			$(".slides").css('margin-left', '+=560px');
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
