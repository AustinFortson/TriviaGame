//Time Left Countdown
var seconds = 60;
var timeRemaining = setInterval(function(){
    seconds--;
document.getElementById("countdown").textContent = seconds;
//Stops From Going Into Negative Numbers
if(seconds <=0)
    clearInterval(timeRemaining);
},1000);

//End Quiz And Show Answers BAsed on Time Up
var timesUp =setInterval(showAnswers, 60000);

function showAnswers(){
        var p1 = $("<nav><h2>Times Up!<br>These Are The Results:<br>Correct:<br>Wrong:</h2></nav>")


    $("body").append(p1);
}
