// JavaScript for Ms. Pac Man game

<!--

function init(){

	canvas = document.getElementById('game_canvas');
	ctx = canvas.getContext('2d'); 

	var img = new Image();
	img.src = "pacman10-hp-sprite.png";


	img.addEventListener("load", function() {
		ctx.drawImage(img, 321, 0, 465, 138, 0, 0, 465, 138);
		ctx.drawImage(img, 81, 22, 16, 16, 6, 6, 16, 16);
	}, false);

}
-->
