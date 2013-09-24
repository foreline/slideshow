
	
	var slideShowActive = true;
	
	$(document).ready(function(){
		var t = setTimeout('slideShow()', 5000);
		
		$(".slide").on('click', function(){
			var url = $(this).data('url');
			window.location = url;
		});
	});
	
	
			