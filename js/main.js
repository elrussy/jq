

$(".openIcon").click(function(){
    $(".slide").css("left","0");
})

$(".closeIcon").click(function(){
    $(".slide").css("left","-280px");
})






$(".titel h3").click(function(){
    $(this).next().slideToggle();
    $(".titel .titel-main").not($(this).next()).slideUp();
})



$("textarea").keyup(function(){
    let len = $(this).val().length;
    $("#num").text(
        100 - len <= 0 ? "your avilable characters finished" : 100 - len
    )
   })








let ele = document.querySelector("h1");

function getTime(){

 let x = new Date();
 let days = x.getDay()
 days = days< 365?`0${days}` : days
 let hours = x.getHours();
 hours = hours< 10 ?`0${hours}` : hours
 let mins = x.getMinutes();
 mins = mins< 10 ?`0${mins}` : mins;

 let seconds = x.getSeconds();
 seconds = seconds< 10 ?`0${seconds}` : seconds;

 ele.innerHTML = ` ${days}D ${hours}H ${mins}M ${seconds}S`
 setTimeout(getTime,1000)
}


getTime();