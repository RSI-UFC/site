
let i =0;
let timing = 5000;
let continue_s= true;
$( "div.slider-root" ).children().css('display','none');
let origin_slid = $( "div.slider-root" ).children();
let check_slid = $("div.check_slid");
let child_slid = $( "div.slider-root" ).children();
child_slid[0].style = origin_slid[0].style
$(document).ready(function(){
    window.setInterval(function(){
        if(continue_s){
            child_slid[i].style.display= 'none'
            i++;
            if(i==child_slid.length){
                i=0;
            }
            child_slid[i].style = origin_slid[i].style

        }
      }, timing);
  });




function slide_value(val){
    $( "div.slider-root" ).children().css('display','none');
    // child_slid[i].style.display= 'none'
    // i++;
    if(val>=child_slid.length){
        val=0;
    }
    if(val<0){
        val=origin_slid.length-1;
    }
    child_slid[val].style = origin_slid[val].style;
    continue_s=false;
}

function slide_next(){
    child_slid[i].style.display= 'none'
    i++;
    if(i==child_slid.length){
        i=0;
    }
    child_slid[i].style = origin_slid[i].style;
    continue_s=false;
}
function slide_previous(){
    child_slid[i].style.display= 'none'
    i--;
    if(i<=0){
        i=origin_slid.length-1;
    }
    timing=timing+5000;
    child_slid[i].style = origin_slid[i].style
    continue_s=false;
}