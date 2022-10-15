
// Create canvas variable
var canvas = new fabric.Canvas("myCanvas");
//Set initial positions for ball and hole images.
ball_x = 0;
ball_y = 0;
hole_x = 100.222
hole_y = 71.548
block_image_width = 5;
block_image_height = 5;

function load_img(){
	// write code to Upload golf image on the canvas
	fabric.Image.fromURL("golf-h.png", function(Img){
		hole_object = Img;
		hole_object.scaleToWidth(50);
		hole_object.scaleToHeight(49);
		hole_object.set({
			top:hole_x, left:hole_y
		});
		canvas.add(hole_object);

	});
	new_image();
}

function new_image()
{
	// write code to Upload ball image on canvas
	fabric.Image.fromURL("ball.png", function(Img){
		ball_object = Img;
		ball_object.scaleToWidth(50);
		ball_object.scaleToHeight(49);
		ball_object.set({
			top:ball_x, left:ball_y
		});
		canvas.add(ball_object);

	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x==hole_x) && (ball_y==hole_y)){
		canvas.remove(ball_object);
		document.getElementById("hd3").innerHTML = "YOU HIT THE GOAL I AM SO SAD WÀÁÂÄÆÃÅĀHHHHH"
	}
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		// Write a code to move ball upward.
	}

	function down()
	{
		 // Write a code to move ball downward.
	}

	function left()
	{
		if(ball_x >5)
		{
			// Write a code to move ball left side.
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			// Write a code to move ball right side.
		}
	}
	
}

