

$('.accordion > li').hover(function(){
			//This code executes when the mouse pointer is overe the list item

			$(this).addClass('openSesame');

		}, function(){
			//This code executes when the mouse pointer leaves the list item

			$(this).removeClass('openSesame');

		});