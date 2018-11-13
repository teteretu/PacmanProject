$(document).ready(function() {
	console.log('jQuery has loaded!');

	var pacman = {}

	pacman.x = 20;
	pacman.y = 5;

	$(document).on('keydown', handleTyping);

	function handleTyping(event) {
		//console.log(event.which);
		switch(event.which) {
			case 39:
				$('#pacman').css({
					'left': (pacman.x += 10) + 'px'
				});
				break;
			case 37:
				$('#pacman').css({
					'left': (pacman.x -= 10) + 'px'
				});
				break;
			case 40:
				$('#pacman').css({
					'top': (pacman.y += 10) + 'px'
				});
				break;
			case 38:
				$('#pacman').css({
					'top': (pacman.y -= 10) + 'px'
				});
				break;
			
		}
	}
})