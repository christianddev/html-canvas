document.addEventListener("DOMContentLoaded", function() {
    start();
});

let draw = false;
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

function start() {
    console.log("Start");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Eventos
    document.addEventListener("mousedown", function(event) {
        press(event);
    }
    , false);

    document.addEventListener("mousemove", function(event) {
        paint(event);
    }, false);

    document.addEventListener("mouseup", function(event) {
        draw = false;
    }, false);

    function press(event) {
        draw = true;
        context.moveTo(event.pageX, event.pageY);
    }
    
    function paint(event) {
        if(draw) {
            context.beginPath();
            context.arc(event.pageX, event.pageY, 10, 0, 2 * Math.PI);
            context.fill();
        }
    }
}
