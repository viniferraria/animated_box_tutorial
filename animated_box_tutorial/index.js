console.log("hellow ");
document.write("<h1>bye</h1>");

// starting position
var pos = 0;
var posy = 0;
//our box element
var box = document.getElementById("box");

function move() {
    if(pos>=350){
        clearInterval(t);
    }
    else{
        pos+=1;
        box.style.left = pos + "px"; //px = pixels
    }
}

var images = [
"http://www.sololearn.com/uploads/slider/1.jpg",
"http://www.sololearn.com/uploads/slider/2.jpg",
"http://www.sololearn.com/uploads/slider/3.jpg"
];
                            
var num = 0;
                       
function next() {
    var slider = document.getElementById("slider");
    num++;
    if (num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
}                           
 
function prev() {
    var slider = document.getElementById("slider");
    num--;
    if (num < 0) {
        num = images.length - 1;
    }
    slider.src = images[num];
}
