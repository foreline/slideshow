
	/**
	 * 
	 * @author Simakin Dima dima@foreline.ru
	 * @package slideShow
	 */
	
	/**
	 * Runs the slideshow
	 */
	function slideShow() {
		
		if ( slideShowActive ) {
			nextSlide();
		}
		
		var t = setTimeout('slideShow()', 5000);
	}
	
	/**
	 * Shows next slide
	 */
	function nextSlide() {
		
		$(".slides").animate({
			left: "-=560"
		}, 800, function(){
			$(".slide").first().insertAfter($(".slide").last());
			$(".slides").css('margin-left', '+=560px');
		});
		
	}
	
	/**
	 * Shows previous slide
	 */
	function prevSlide() {
		
		$(".slide").last().insertBefore($(".slide").first());
		$(".slides").css('margin-left', '-=560px');
			
		$(".slides").animate({
			left: "+=560"
		}, 800);
		
	}
