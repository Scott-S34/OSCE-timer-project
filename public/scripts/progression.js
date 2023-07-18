//Function which reloads the page to move onto the next station and restart the timers
function showNextStation(){
    window.location.reload(true);
    alert("Next Station commencing...");
}

//function which tells the user the exam has ended 
// and then go back to the home page


document.getElementById("end").addEventListener("click", finishExam);

function finishExam(){
    var stopExamAudio = new Audio("audio/new-recordings/exam_ended.wav");
    stopExamAudio.play();
    alert("The Examination has ended. Well Done!");
    console.log("played")
    
}
