jQuery(($)=>{
    let p = $("span.go");
    let oldPos = p.offset();
    const oldMousePos = {x:-1, y: -1};
    const currentMousePos = { x: -1, y: -1 };
    const max_offset = 4.5;
    var firsttime = true;

    function myFunctionY(a, b)
    {
        if(a-b < max_offset && a-b > -max_offset){
            if(a-b > currentMousePos.y - oldPos.top && a-b < -(currentMousePos.y - oldPos.top))
            {
                return a-b;
            }
            else
                return currentMousePos.y - oldPos.top;
        }

        else{ return max_offset;}
    }
    function myFunctionX(a, b)
    {
        if(a-b < max_offset && a-b > -max_offset){
            if(a-b > currentMousePos.x - oldPos.left && a-b < -(currentMousePos.x - oldPos.left))
            {
                return a-b;
            }
            else
                return currentMousePos.x - oldPos.left;
        }

        else{ return max_offset;}
    }


    $(document).mousemove((event)=>{

        console.log("Script Working");
        currentMousePos.x = event.clientX;
        currentMousePos.y = event.clientY;
        if(firsttime)
        {
            oldMousePos.x = currentMousePos.x;
            oldMousePos.y = currentMousePos.y;
            firsttime = false;
        }
        let top , left , moveX, moveY;
        top = oldPos.top - myFunctionY(currentMousePos.y,oldMousePos.y);
        left = oldPos.left - myFunctionX(currentMousePos.x,oldMousePos.x);
        moveX = myFunctionX(oldPos.left,currentMousePos.x);
        moveY = myFunctionY(oldPos.top,currentMousePos.y);

        if(currentMousePos.x<oldPos.left )
        {
            if(currentMousePos.y<oldPos.top + 10)
            {

                top = oldPos.top - myFunctionY(currentMousePos.y,oldMousePos.y);
                left = oldPos.left - myFunctionX(currentMousePos.x,oldMousePos.x);
                /*p.transition({x: -moveX});
                p.transition({y: -moveY});*/

                $('span.go').css({
                    "transform": `translate(${-moveX}px, ${-moveY}px)`
                });
                $('.knowmore_text').css({
                    'clip-path':`circle(20px at ${-moveX-15}px 54%)`,
                });
                $('.knowmore:hover .knowmore_text').css({
                    'clip-path':`circle(200px at ${-moveX-15}px 54%)`,
                });
                /*p.animate({
                    //backgroundPosition: left + 'px ' + top + 'px',
                    //transform: translate(left+'px',top+'px')
                },1000, ()=>{
                    console.log("Animation0");
                    console.log(-moveX+"left");
                    console.log(-moveY+"top");

                });
                /*p.offset({
                    top: oldPos.top + myFunction(currentMousePos.y,oldMousePos.y),
                    left: oldPos.left + myFunction(currentMousePos.x,oldMousePos.x)
                });*/
            }
            else
            {

                top = oldPos.top + myFunctionY(currentMousePos.y,oldMousePos.y);
                left = oldPos.left - myFunctionX(currentMousePos.x,oldMousePos.x);
                /*p.transition({x: -moveX});
                p.transition({y: moveY});*/
                $('span.go').css({
                    "transform": `translate(${-moveX}px,${moveY}px)`
                });
                $('.knowmore_text').css({
                    'clip-path':`circle(20px at ${-moveX-15}px 54%)`,
                });
                $('.knowmore:hover .knowmore_text').css({
                    'clip-path':`circle(200px at ${-moveX-15}px 54%)`,
                });
                /*p.animate(1000,{
                    //transform: translate(left+'px',top+'px')
                    //backgroundPosition: left + 'px ' + top + 'px'
                    //right: +left+'px',
                    //top: +top+'px'
                },1000, ()=>{
                    console.log("Animation1");
                    console.log(-moveX+"left");
                    console.log(moveY+"top");

                });
                /*p.offset({
                    top: oldPos.top - myFunction(currentMousePos.y,oldMousePos.y),
                    left: oldPos.left + myFunction(currentMousePos.x,oldMousePos.x)
                });*/
            }
        }
        else if(currentMousePos.x>oldPos.left )
        {
            if(currentMousePos.y<oldPos.top)
            {

                top = oldPos.top - myFunctionY(currentMousePos.y,oldMousePos.y);
                left = oldPos.left + myFunctionX(currentMousePos.x,oldMousePos.x);
                /*p.transition({x: moveX});
                p.transition({y: -moveY});*/
                $('span.go').css({
                    "transform": `translate(${moveX*moveX - 15}px,${-moveY}px)`
                });
                $('.knowmore_text').css({
                    'clip-path':`circle(20px at ${moveX*moveX - 15 - 15 }px 54%)`,
                });
                $('.knowmore:hover .knowmore_text').css({
                    'clip-path':`circle(200px at ${moveX*moveX - 15 - 15}px 54%)`,
                });
                /*p.animate(1000,{
                    //transform: translate(left+'px',top+'px')
                    //backgroundPosition: left + 'px ' + top + 'px'
                    //left: +left+'px',
                    //bottom: +top+'px'
                },10000, ()=>{
                    console.log("Animation2");
                    console.log(moveX+"left");
                    console.log(-moveY+"top");

                });
                /*p.offset({
                    top: oldPos.top + myFunction(currentMousePos.y,oldMousePos.y),
                    left: oldPos.left - myFunction(currentMousePos.x,oldMousePos.x)
                });*/
            }
            else
            {

                top = oldPos.top + myFunctionY(currentMousePos.y,oldMousePos.y);
                left = oldPos.left + myFunctionX(currentMousePos.x,oldMousePos.x);
                /*p.transition({x: moveX});
                p.transition({y: moveY});*/
                $('span.go').css({
                    "transform": `translate(${moveX*moveX - 15}px,${moveY}px)`
                });
                $('.knowmore_text').css({
                    'clip-path':`circle(20px at ${moveX*moveX - 15 - 15}px 54%)`,
                });
                $('.knowmore:hover .knowmore_text').css({
                    'clip-path':`circle(200px at ${moveX*moveX - 15 - 15}px 54%)`,
                });
                /*p.animate({
                    //transform: translate(left+'px ',top+'px')
                    //backgroundPosition: left + 'px ' + top + 'px'
                    left: +left+'px',
                    top: +top+'px'
                },1000, ()=>{
                    console.log("Animation3");
                    console.log(moveX+"left");
                    console.log(moveY+"top");

                });
                /*p.offset({
                    top: oldPos.top - 10,
                    left: oldPos.left - 10
                });*/
            }
        }
        oldMousePos.x = currentMousePos.x;
        oldMousePos.y = currentMousePos.y;


    });
});
