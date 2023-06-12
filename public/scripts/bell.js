$(document).ready(function(){

    $("#test").click(function(){
        var bell = new Audio("audio/notification-bell.wav");
    bell.play();});
  });

function playAudio(){
    var bell = new Audio("audio/notification-bell.wav");
    bell.play();
}

//document.getElementById("test").onclick(playAudio());
