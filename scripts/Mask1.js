var move = true;
var safari = false;
var ua = navigator.userAgent.toLowerCase();
if (ua.indexOf('safari') !== -1) {
    if (ua.indexOf('chrome') > -1) {

    } else {
        safari = true; // Safari
    }
}

function moveMask(e) {
    var posX = e.clientX;
    var posY = e.clientY;
    var check = checkPos(posX,posY);

    if(move && check)
    {
        document.getElementById("Mask").style.opacity = 1;
        document.getElementById("Mask_border").style.opacity = 1;

        if(safari){
            document.getElementById("Mask").style.webkitClipPath = `circle(10% at ${posX}px ${posY}px)`;
            document.getElementById("Mask_border").style.webkitClipPath = `circle(10.30% at ${posX}px ${posY}px)`;
            // $('#Mask').css('-webkit-clip-path', `circle(10% at ${posX}px ${posY}px)`);
            // $('#Mask_border').css('-webkit-clip-path', `circle(10.30% at ${posX}px ${posY}px)`);
        }
        else{

            document.getElementById("Mask").style.clipPath = `circle(10% at ${posX}px ${posY}px)`;
            document.getElementById("Mask_border").style.clipPath = `circle(10.30% at ${posX}px ${posY}px)`;
        }
    }
    else
    {
        document.getElementById("Mask").style.opacity = 0;
        document.getElementById("Mask_border").style.opacity = 0;

    }

}

function moveBoolF()
{
    move = false;
}

function moveBoolT()
{
    move= true;
}

function checkPos(x,y)
{
    var check = false;
    var slope = ( window.screen.height ) / ( (window.screen.width*0.62) - (window.screen.width*0.52) );
    var fx =  slope * x -(slope *window.screen.width * 0.52)  - y;
    console.log(fx);
    fx < 0 ? check = true : check = false;
    return check;
}