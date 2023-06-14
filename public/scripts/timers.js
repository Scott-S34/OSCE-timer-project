
//////toggling appearance of timers/////













/////////////////Reading Timer////////////

//reading = pairs[3].substr(pairs[3].length-1).toString();
var reading = pairs[3].slice(pairs[3].indexOf("=") + 1).toString();
//alert(reading);

var readingInInt = parseInt(reading);
//alert(readingInInt);
var readingTime = readingInInt * 60;




var readingTimerEle = document.getElementById('readingTimer');

var readingBell = new Audio("audio/happy-bells.wav");

var readingTimer;
readingTimer = setInterval(updateReadingTimer, 1000);



function updateReadingTimer(){
    var readingMinutesInTimer = Math.floor(readingTime / 60);
    var readingSecondsInTimer = readingTime % 60;
    if (readingSecondsInTimer < 10 && readingMinutesInTimer < 10){
        readingTimerEle.innerHTML = "0"+ readingMinutesInTimer + ":0" + readingSecondsInTimer;
    }else if(readingSecondsInTimer < 10){
        readingTimerEle.innerHTML = readingMinutesInTimer + ":0" + readingSecondsInTimer;
    } else if(readingMinutesInTimer < 10){
        readingTimerEle.innerHTML = "0"+ readingMinutesInTimer + ":" + readingSecondsInTimer;
    } else{
        readingTimerEle.innerHTML = readingMinutesInTimer + ":" + readingSecondsInTimer;
    }
    readingTime--;


    function stopReadingTimer(){
        clearInterval(readingTimer);
    }

    // var readTimer = document.getElementById("readingTimer");
    //     if(readTimer.style.display === "none"){
    //         readTimer.style.display = "block";
    //     } else {
    //         readTimer.style.display = "none";
    //         stopReadingTimer();
    //     }



    if(readingTime < 0){
        stopReadingTimer();
        readingBell.play();
        alert("Reading time is over!" );

    }}


///////////////MAIN TIMER/////////////////

var minutes = pairs[1].slice(pairs[1].indexOf("=") + 1).toString();

var minutesInInt = parseInt(minutes);
//alert(minutesInInt);
var time = minutesInInt * 60;


//var timer;
var timerElement = document.getElementById('timer');


alert("Station started");

var bell = new Audio("audio/notification-bell.wav");
//timer = setInterval(updateTimer, 1000);


var timer;
timer = setInterval(updateTimer, 1000);

function updateTimer() {
    var minutesInTimer = Math.floor(time / 60);
    var secondsInTimer = time % 60;
    if (secondsInTimer < 10 && minutesInTimer < 10){
            timerElement.innerHTML = "0"+ minutesInTimer + ":0" + secondsInTimer;
        }else if(secondsInTimer < 10){
            timerElement.innerHTML = minutesInTimer + ":0" + secondsInTimer;
        } else if(minutesInTimer < 10){
            timerElement.innerHTML = "0"+ minutesInTimer + ":" + secondsInTimer;
        } else{
            timerElement.innerHTML = minutesInTimer + ":" + secondsInTimer;
        }
    time--;

    //isolating the value entered for the warning as its own string in a unique variable
    
    var minutesWarning = pairs[2].slice(pairs[2].indexOf("=") + 1).toString();

    //the type is converted to an int for comparing and output
    var minutesWarningInt = parseInt(minutesWarning);

    var warningElement = document.getElementById("warningIndicator");

    //creating warning which matches with users inputs
    if(minutesInTimer === minutesWarningInt && secondsInTimer === 0){
        //createWarning();
        if(minutesWarningInt === 1){
            warningElement.innerHTML = minutesWarningInt + " minute left for this station!!";
        } else {
            warningElement.innerHTML = minutesWarningInt + " minutes left for this station!!";
        }

    }

    //function which stops the timer 
    function stopTimer(){
        clearInterval(timer);
    }

    var delay = readingTime * 1000;
    setTimeout(updateTimer(),delay);
    

    var examTimer = document.getElementById("timer");
    if(examTimer.style.display === "block"){
        examTimer.style.display = "none";
        stopTimer();
    } else {
         examTimer.style.display = "block";
    }

    //if the seconds and minutes are both 0 the function is called to stop the timer - so no negative numbers in timer
    if(time < 0){
        stopTimer();
        bell.play();
        alert("Station finished!");
        //var bell = document.getElementById("bellId").play();
    }} 



/////////////////////////SWITCHING TIMER//////////////////////////

var switchingTimer
switchingTimer = setInterval(updateSwitchingTimer, 1000);


var switching = pairs[4].slice(pairs[4].indexOf("=") + 1).toString();
//alert(switching);

var switchingInInt = parseInt(switching);
    
var switchingTime = switchingInInt;
    

    
    
//var switchingTimer;
var switchingTimerEle = document.getElementById('switchingTimer');
    
var switchingBell = new Audio("audio/school-bell.wav");
//switchingTimer = setInterval(updateSwitchingTimer, 1000);


    
function updateSwitchingTimer(){
    var switchingMinutesInTimer = Math.floor(switchingTime / 60);
    var switchingSecondsInTimer = switchingTime % 60;
    if (switchingSecondsInTimer < 10 && switchingMinutesInTimer < 10){
        switchingTimerEle.innerHTML = "0"+ switchingMinutesInTimer + ":0" + switchingSecondsInTimer;
    }else if(switchingSecondsInTimer < 10){
        switchingTimerEle.innerHTML = switchingMinutesInTimer + ":0" + switchingSecondsInTimer;
    } else if(switchingMinutesInTimer < 10){
        switchingTimerEle.innerHTML = "0"+ switchingMinutesInTimer + ":" + switchingSecondsInTimer;
    }  else{
        switchingTimerEle.innerHTML = switchingMinutesInTimer + ":" + switchingSecondsInTimer;
    }

    switchingTime--;
    
    function stopSwitchingTimer(){
        clearInterval(switchingTimer);
    }
        var switchTimer = document.getElementById("switchingTimer");
        if(switchTimer.style.display === "block"){
            switchTimer.style.display = "none";
            stopSwitchingTimer();
        } else {
            switchTimer.style.display = "block";
        }
        

if(switchingTime < 0){
        stopSwitchingTimer();
        switchingBell.play();
        stopTimer();
        alert("Switching time is over! You should be in your new stations now" );
        
}}
    
    














