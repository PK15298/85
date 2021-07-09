In this code , I changed in main.js .
Please check function my_keydown(e) at Line 44.
Please Check Following code for both the cars :
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

The yo id was given for car1 is wins lines.
