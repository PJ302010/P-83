canvas.addEventListener("mousedown", mouse_down);

function my_mousedown(e)

{

  color = document.getElementById("color").value;
  width_of_line = document.getElementById("width_of_line").value;

  mouseEvent = "mousedown";
}



canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e){

    mouseEvent = "mouseleave";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){

    mouseEvent = "mouseup";


canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e)
{

current_position_of_mouse_x = e.clientx - canvas,offsetLeft;
current_position_of_mouse_y = e.clienty - canvas,offsetTop;

if (mmouseEvent == "mousedown") {

ctx.beginPath();
ctx.strokestyle = color;
ctx.linewidth = width_of_line;


console.log("last position of x and y coordinates = ");
console.log("x =" + last_position_of_x + "y =" last_position_of_y );
ctx.moveTo(last_position_of_x, last_position_of_y);

console.log("Current position of x and y coordinates = ");
console.log("x =" + last_position_of_x + "y = " + last_position_of_y); 

ctx.moveTo(last_position_of_x, last_position_of_y);


console.log("Current position of x and y coordinates = "); console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y); ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y); ctx.stroke(); } last_position_of_x = current_position_of_mouse_x; last_position_of_y = current_position_of_mouse_y; } canvas.addEventListener("mouseup", my_mouseup); function my_mouseup(e) { mouseEvent = "mouseUP"; } canvas.addEventListener("mouseleave", my_mouseleave); function my_mouseleave(e) { mouseEvent = "mouseleave"; 
 
var width = screen.width;

new_width = screen.width - 70;

new_height = screen.width - 300;


if (width < 992)
{

document.getElementById("mycanvas").width = new_width;
document.getElementById("mycanvas").height = new_height;
document.body.style.overflow = "hidden";
}

function my_touchstart(e){

  console.log("my_touchstart");

  last_position_of_x = e.touches(0).client - canvas.offsetLeft
  last_position_of_y = e.touches(0).client - canvas.offsetTop

}


function my_touchmove(e){

console.log("my_touchmove")

last_position_of_x = e.touches(0).client - canvas.offsetLeft
last_position_of_y = e.touches(0).client - canvas.offsetTop


ctx.beginPath();
ctx.strokestyle = "color";
ctx.lineWidth = width_of_line;

console.log("Current position of x and y coordinates = ");
console.log("x =" + last_position_of_x + "y = " + last_position_of_y); 
ctx.moveTo(last_position_of_x, last_position_of_y);

console.log("Current position of x and y coordinates = ");
console.log("x =" + last_position_of_x + "y = " + last_position_of_y); 
ctx.lineTo(last_position_of_x, last_position_of_y);
ctx.stroke();

last_position_of_x = current_position_of_touch_y;
last_position_of_y = current_position_of_touch_y;

}
console.log("last position of x and y coordinates = ");
console.log("x =" + last_position_of_x + "y = " + last_position_of_y;

console.log ("current position of x and y coordinates =");
console.log("x=" + current_position_of_touch_x + "y =" + current_position_of_touch_y);


}






 