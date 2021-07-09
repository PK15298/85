canvas = document.getElementById("myCanvas");
 ctx = canvas.getContext("2d");

 car1_width = 100;
 car1_height = 70;
 car1_x = 10;
 car1_y = 10;
 car1_img = "car1.png"

car2_width = 100;
 car2_height = 120;
 car2_x = 0;
 car2_y = 100;
 car2_img = "car2.png"


 can_bg = "racing.jpg";

function add(){
    background_ImgTag = new Image();
    background_ImgTag.onload = uploadbg;
    background_ImgTag.src = can_bg;

    car1_ImgTag = new Image();
    car1_ImgTag.onload = car1upload;
    car1_ImgTag.src = car1_img;

    car2_ImgTag = new Image();
    car2_ImgTag.onload = car2upload;
    car2_ImgTag.src = car2_img;
}
function uploadbg(){
    ctx.drawImage(background_ImgTag, 0, 0, canvas.width, canvas.height);
}
function car1upload(){
    ctx.drawImage(car1_ImgTag, car1_x, car1_y, car1_width, car1_height);
}
function car2upload(){
    ctx.drawImage(car2_ImgTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			car1_up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			car1_down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			car1_left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			car1_right();
			console.log("right");
		}

        if(keyPressed == '38')
		{
			car2_up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			car2_down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			car2_left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			car2_right();
			console.log("right");
		}
}
function car1_up()
{
	if(car1_y >=0)
	{
		car1_y = car1_y - 10;
		console.log("When up arrow is pressed,  x = " + car1_x + " | y = " +car1_y);
		uploadbg();
        car1upload();
        car2upload();
	}
}


function car1_down()
{
	if(car1_y <=500)
	{
		car1_y = car1_y +500;
		console.log("When up arrow is pressed,  x = " + car1_x + " | y = " +car1_y);
		uploadbg();
        car1upload();
        car2upload();
	}
}

function car1_left()
{
	if(car1_x >=0)
	{
		car1_x = car1_x - 10;
		console.log("When up arrow is pressed,  x = " + car1_x + " | y = " +car1_y);
		uploadbg();
        car1upload();
        car2upload();
	}
}

function car1_right()
{
	if(car1_x <=700)
	{
		car1_x = car1_x +10;
		console.log("When up arrow is pressed,  x = " + car1_x + " | y = " +car1_y);
		uploadbg();
        car1upload();
        car2upload();
	}
}

function car2_up()
{
	if(car2_y >=0)
	{
		car2_y = car2_y - 10;
		console.log("When up arrow is pressed,  x = " + car2_x + " | y = " +car2_y);
		uploadbg();
        car1upload();
        car2upload();
	}
}


function car2_down()
{
	if(car2_y <=500)
	{
		car2_y = car2_y +500;
		console.log("When up arrow is pressed,  x = " + car2_x + " | y = " +car2_y);
		uploadbg();
        car1upload();
        car2upload();
	}
}

function car2_left()
{
	if(car2_x >=0)
	{
		car2_x = car2_x - 10;
		console.log("When up arrow is pressed,  x = " + car2_x + " | y = " +car2_y);
		uploadbg();
        car1upload();
        car2upload();
	}
}

function car2_right()
{
	if(car2_x <=700)
	{
		car2_x = car2_x +10;
		console.log("When up arrow is pressed,  x = " + car2_x + " | y = " +car2_y);
		uploadbg();
        car1upload();
        car2upload();
	}
}
