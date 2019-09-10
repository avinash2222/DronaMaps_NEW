$(window).ready(()=>{
    console.log('Hello');
    $('#construction').click(()=>{
        $("#selection2").addClass('H_theme_line_2_active');
        $("#selection2").removeClass('H_theme_line_2_5');
        $("#selection1").removeClass('H_theme_line_2_active');
        $("#selection1").addClass('H_theme_line_2_5');
        $("#selection3").removeClass('H_theme_line_2_active');
        $("#selection3").addClass('H_theme_line_2_5');
        /*document.getElementById('flight').style.boxShadow ='none';
        document.getElementById('construction').style.boxShadow ='0 2px 30px gainsboro';
        document.getElementById('analytic').style.boxShadow ='none';*/
    });
    $("#flight").click(()=>{
        console.log('1 Clicked');
        $("#selection1").addClass('H_theme_line_2_active');
        $("#selection1").removeClass('H_theme_line_2_5');
        $("#selection2").removeClass('H_theme_line_2_active');
        $("#selection2").addClass('H_theme_line_2_5');
        $("#selection3").removeClass('H_theme_line_2_active');
        $("#selection3").addClass('H_theme_line_2_5');
        /*document.getElementById('flight').style.boxShadow ='0 2px 30px gainsboro';
        document.getElementById('construction').style.boxShadow ='none';
        document.getElementById('analytic').style.boxShadow ='none';*/

    });
    $('#analytic').click(()=>{
        console.log('3 clicked');
        $("#selection3").addClass('H_theme_line_2_active');
        $("#selection3").removeClass('H_theme_line_2_5');
        $("#selection2").removeClass('H_theme_line_2_active');
        $("#selection2").addClass('H_theme_line_2_5');
        $("#selection1").removeClass('H_theme_line_2_active');
        $("#selection1").addClass('H_theme_line_2_5');
        /*document.getElementById('flight').style.boxShadow ='none';
        document.getElementById('construction').style.boxShadow ='none';
        document.getElementById('analytic').style.boxShadow ='0 2px 30px gainsboro';*/
    });








   /*
    if($('#construction').click()){
        console.log('2 clicked');
        $("#selection2").addClass('H_theme_line_black');
        $("#selection1").removeClass('H_theme_line_black');
        $("#selection3").removeClass('H_theme_line_black');
    }
    else if($("#flight").click(function(){console.log("mc");})){
        console.log('1 Clicked');
        $("#selection1").addClass('H_theme_line_black');
        $("#selection2").removeClass('H_theme_line_black');
        $("#selection3").removeClass('H_t   heme_line_black');
    }
    else if($("#analytic").onactive){
        console.log('3 clicked');
        $("#selection3").addClass('H_theme_line_black');
        $("#selection1").removeClass('H_theme_line_black');
        $("#selection2").removeClass('H_theme_line_black');
    }
    else
        console.log('Default');
        $("#selection2").addClass('H_theme_line_black');
        */
});

