//test of jquery and to see if the minutes warning voice clips work

$(document).ready(function(){

    $("#test").click(function(){
        var bell = new Audio("audio/osce-recordings/one.wav");
    bell.play();});
  });

  

// function playAudio(){
//     var bell = new Audio("audio/school-bell.wav");
//     bell.play();
// }

// document.getElementById("test").onclick(playAudio());


