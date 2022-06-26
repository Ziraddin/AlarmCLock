
const audio = new Audio("clock-alarm-sound.mp3");
audio.loop = true;
function displayTime(){

  var dateTime = new Date();
  var hrs = dateTime.getHours();
  var min = dateTime.getMinutes();
  var sec = dateTime.getSeconds();
  var session = $("#session");
  $("#hours").text(hrs);
  $("#minutes").text(min);
  $("#seconds").text(sec);
  if(hrs>=12){
    hrs-=12;
    $("#hours").text(hrs);
    $("#session").text("PM");
  }
  else{
    $("#hours").text("0"+hrs);
    $("#session").text("AM");
  }
  if(hrs<10){

        $("#hours").text("0"+hrs);
  }
  if(min<10){
    $("#minutes").text("0"+min);
  }
  if(sec<10)
  {
    $("#seconds").text("0"+sec);
  }

}

setInterval(displayTime, 500);
let alarmTime
function setAlarmTime(value){

    alarmTime = value;
    console.log(alarmTime);
}

function setAlarm(){

const current = new Date();
const timeToAlarm = new Date(alarmTime);
if(timeToAlarm > current){
const timeout =  timeToAlarm.getTime() - current.getTime();
   alarmTimeout = setTimeout(function(){
     audio.play();
      }, timeout);
}
}

function clearAlarm(){

  audio.pause();
  if(alarmTimeout){
    clearTimeout(alarmTimeout);
  }
}

$(".set-alarm").click(function(){


  $(".set-alarm").addClass("pressed");
  setTimeout(function(){

    $(".set-alarm").removeClass("pressed");
  },100);

if(new Date(alarmTime)> new Date){

$(".set-alarm").css("transition","0s");
$(".set-alarm").css("visibility","hidden");
$("h2").css("visibility","visible");
$("h2").text("alarm is set");
$(".clear-alarm").css("visibility","visible");
$(".clear-alarm").css("transition","0.3s");
}
})

$(".clear-alarm").click(function(){


  $(".clear-alarm").addClass("pressed");
  $(".clear-alarm").css("transition","0s");
  setTimeout(function(){

    $(".clear-alarm").removeClass("pressed");
  },100);
  $(".set-alarm").css("transition","0.3s");
  $(".clear-alarm").css("visibility","hidden");
  $("h2").text("");
  $("h2").css("visibility","hidden");
  $(".set-alarm").css("visibility","visible");
})
