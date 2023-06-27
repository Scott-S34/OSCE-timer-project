
//////toggling appearance of timers/////


//unneeded functions which makes each of the 3 timers appear and disappear 


function toggleMainTimer(){
    var mainTimer = document.getElementById("timer");
    if(mainTimer.style.display === "none"){
        mainTimer.style.display = "block";
    } else {
        mainTimer.style.display = "none";
    }
}


function toggleReadTimer(){
    var readTimer = document.getElementById("readingTimer");
    if(readTimer.style.display === "block"){
        readTimer.style.display = "none";
    } else {
        readTimer.style.display = "block";
    }
}

function toggleSwitchTimer(){
    var switchTimer = document.getElementById("switchingTimer");
    if(switchTimer.style.display === "block"){
        switchTimer.style.display = "none";
    } else {
        switchTimer.style.display = "block";
    }
}






function triggerTimer(){
    var timerStart = document.createElement("p");
    timerStart.innerHTML = "Exam timer has started";
    timer = setInterval(updateTimer, 1000);
    return timer;
}

function countReadingTimer(){
    var rTimerStart = document.createElement("p");
    rTimerStart.innerHTML = "Reading timer has started";
    readingTimer = setInterval(updateReadingTimer, 1000);
    return readingTimer;
}

function triggerSwitchingTimer(){
    var sTimerStart = document.createElement("p");
    sTimerStart.innerHTML = "Switching timer has started";
    switchingTimer = setInterval(updateSwitchingTimer, 1000);
    return switchingTimer;
}


 

                                        /////////////////READING TIMER/////////////////

//extracting location search string in the url to obtain the amount of minutes to read per station
var query = document.location.search; 
var pairs = query.split('&');
//reading = pairs[3].substr(pairs[3].length-1).toString();

var reading = pairs[3].slice(pairs[3].indexOf("=") + 1).toString();
//alert(reading);

var readingInInt = parseInt(reading);
//alert(readingInInt);
var readingTime = readingInInt * 60;


//variable which will contain the reading timer inside the readingTimer div 
var readingTimerEle = document.getElementById('readingTimer');

//variable which stores the bell alert for when the timer runs out
var readingBell = new Audio("audio/happy-bells.wav");

var readingTimer;


//function which initiates the timer counting down

//function which helps to format the look of the timer a well as calculate the amount of minutes and seconds in the timer
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

//function inside the update funtion which alloes the timer to be stopped
    function stopReadingTimer(){
        clearInterval(readingTimer);
    }






    //if the time for the reading timer hits 0; the function to stop the timer is called,
    // the bell rings and the notification alert saying the reading timer is over appears
    if(readingTime < 0){
        stopReadingTimer();
        readingTimerEle.innerHTML = "TIME'S UP!";
        var rTimerFinish = document.createElement("p");
        rTimerFinish.innerHTML = "Reading time is over";
        readingBell.play();
        triggerTimer();

    }}

    

                            ////////////////////MAIN TIMER/////////////////////////



//extracting location search string in the url to obtain the amount of minutes in the exam per station
var minutes = pairs[1].slice(pairs[1].indexOf("=") + 1).toString();

var minutesInInt = parseInt(minutes);
//alert(minutesInInt);
var time = minutesInInt * 60;



//variable which will contain the exam timer inside the timer div 
var timerElement = document.getElementById('timer');


//variable which stores the bell alert for when the timer runs out
var bell = new Audio("audio/notification-bell.wav");




var timer;


//function which helps to format the look of the timer a well as calculate the amount of minutes and seconds in the timer
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

    //the warning notification is stored in a ddiv section of its own
    var warningElement = document.getElementById("warningIndicator");


    

    

    

    //creating warning which matches with users inputs
    if(minutesInTimer === minutesWarningInt && secondsInTimer === 0){
        // console.log(minutesWarningInt)
        // //createWarning();
        // if(minutesWarningInt === 1){
        //     warningElement.innerHTML = minutesWarningInt + " minute left for this station!!";
        //     oneMinuteLeft.play();
        // } else {
        //     warningElement.innerHTML = minutesWarningInt + " minutes left for this station!!";
        //     twoMinutesLeft.play();
        // }


        //switch statement plugging in the right audio recordings with the corresponding warning text
        switch(minutesWarningInt){
            case 1: 
                var oneMinuteLeft = new Audio("audio/osce-recordings/one.wav");
                warningElement.innerHTML = minutesWarningInt + " minute left for this station!!";
                oneMinuteLeft.play();
                break;
            case 2:
                var twoMinutesLeft = new Audio("audio/osce-recordings/two.wav");
                warningElement.innerHTML = minutesWarningInt + " minutes left for this station!!";
                twoMinutesLeft.play();
                break;
            case 3:
                var threeMinutesLeft = new Audio("audio/osce-recordings/three.wav");
                warningElement.innerHTML = minutesWarningInt + " minutes left for this station!!";
                threeMinutesLeft.play();
                break;
            case 4:
                var fourMinutesLeft = new Audio("audio/osce-recordings/four.wav");
                warningElement.innerHTML = minutesWarningInt + " minutes left for this station!!";
                fourMinutesLeft.play();
                break;
            case 5:
                var fiveMinutesLeft = new Audio("audio/osce-recordings/five.wav");
                warningElement.innerHTML = minutesWarningInt + " minutes left for this station!!";
                fiveMinutesLeft.play();
                break;
            case 6:
                var sixMinutesLeft = new Audio("audio/osce-recordings/six.wav");
                warningElement.innerHTML = minutesWarningInt + " minutes left for this station!!";
                sixMinutesLeft.play();
                break;
            case 7:
                var sevenMinutesLeft = new Audio("audio/osce-recordings/seven.wav");
                warningElement.innerHTML = minutesWarningInt + " minutes left for this station!!";
                sevenMinutesLeft.play();
                break;
            case 8:
                var eightMinutesLeft = new Audio("audio/osce-recordings/eight.wav");
                warningElement.innerHTML = minutesWarningInt + " minutes left for this station!!";
                eightMinutesLeft.play();
                break;
            case 9:
                var ninesMinutesLeft = new Audio("audio/osce-recordings/nine.wav");
                warningElement.innerHTML = minutesWarningInt + " minutes left for this station!!";
                ninesMinutesLeft.play();
                break;
            case 10:
                var tenMinutesLeft = new Audio("audio/osce-recordings/ten.wav");
                warningElement.innerHTML = minutesWarningInt + " minutes left for this station!!";
                tenMinutesLeft.play();
                break;
            case 11:
                var elevenMinutesLeft = new Audio("audio/osce-recordings/eleven.wav");
                warningElement.innerHTML = minutesWarningInt + " minutes left for this station!!";
                elevenMinutesLeft.play();
                break;
            case 12:
                var twelveMinutesLeft = new Audio("audio/osce-recordings/twelve.wav");
                warningElement.innerHTML = minutesWarningInt + " minutes left for this station!!";
                twelveMinutesLeft.play();
                break;
            case 13:
                var thirteenMinutesLeft = new Audio("audio/osce-recordings/thirteen.wav");
                warningElement.innerHTML = minutesWarningInt + " minutes left for this station!!";
                thirteenMinutesLeft.play();
                break;
            case 14:
                var fourteenMinutesLeft = new Audio("audio/osce-recordings/fourteen.wav");
                warningElement.innerHTML = minutesWarningInt + " minutes left for this station!!";
                fourteenMinutesLeft.play();
                break;
            case 15:
                var fifteenMinutesLeft = new Audio("audio/osce-recordings/fifteen.wav");
                warningElement.innerHTML = minutesWarningInt + " minutes left for this station!!";
                fifteenMinutesLeft.play();
                break;
            case 16:
                var sixteenMinutesLeft = new Audio("audio/osce-recordings/sixteen.wav");
                warningElement.innerHTML = minutesWarningInt + " minutes left for this station!!";
                sixteenMinutesLeft.play();
                break;
            case 17:
                var seventeenMinutesLeft = new Audio("audio/osce-recordings/seventeen.wav");
                warningElement.innerHTML = minutesWarningInt + " minutes left for this station!!";
                seventeenMinutesLeft.play();
                break;
            case 18:
                var eighteenMinutesLeft = new Audio("audio/osce-recordings/eighteen.wav");
                warningElement.innerHTML = minutesWarningInt + " minutes left for this station!!";
                eighteenMinutesLeft.play();
                break;
            case 19:
                var nineteenMinutesLeft = new Audio("audio/osce-recordings/nineteen.wav");
                warningElement.innerHTML = minutesWarningInt + " minutes left for this station!!";
                nineteenMinutesLeft.play();
                break;
            case 20:
                var twentyMinutesLeft = new Audio("audio/osce-recordings/twenty.wav");
                warningElement.innerHTML = minutesWarningInt + " minutes left for this station!!";
                twentyMinutesLeft.play();
                break;
            default:
                console.log("not working");
                break;
        }

    }


    //function which stops the timer 
    function stopTimer(){
        clearInterval(timer);
    }


    // var examTimer = document.getElementById("timer");
    // if(examTimer.style.display === "block"){
    //     examTimer.style.display = "none";
    //     stopTimer();
    // } else {
    //      examTimer.style.display = "block";
    // }

    
    //if the time for the timer hits 0; the function to stop the timer is called,
    // the bell rings and the notification alert saying the reading timer is over appears
    if(time < 0){
        stopTimer();
        timerElement.innerHTML = "TIME'S UP!!!";
        bell.play();
        triggerSwitchingTimer();
        //var bell = document.getElementById("bellId").play();
    }}



                /////////////////////////SWITCHING TIMER//////////////////////////



//extracting location search string in the url to obtain the amount of seconds to switch to
// the next station

var switching = pairs[4].slice(pairs[4].indexOf("=") + 1).toString();
//alert(switching);

var switchingInInt = parseInt(switching);
    
var switchingTime = switchingInInt;

    

//variable which will contain the switching timer to be inside the switchingTimer div 
var switchingTimerEle = document.getElementById('switchingTimer');
    
//variable which stores the bell alert for when the switching timer runs out
var switchingBell = new Audio("audio/school-bell.wav");




var switchingTimer;
//function which initiates the timer counting down

    

//function which helps to format the look of the timer a well as calculate the amount of minutes and seconds in the timer
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

    ///function which stops the switching timer 
    function stopSwitchingTimer(){
        clearInterval(switchingTimer);
    }
    //if the time for the switching timer hits 0; the function to stop the timer is called,
    // the bell rings and the notification alert saying the reading timer is over appears
        if(switchingTime < 0){
        stopSwitchingTimer();
        switchingTimerEle.innerHTML = "TIME'S UP!!"
        var sTimerFinish = document.createElement("p");
        sTimerFinish.innerHTML = "Switching time is over, you should be into your new station";
        switchingBell.play();
        stopTimer();
        
        
}}
    



    














