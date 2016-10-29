$(document).foundation()

var x = [1,2,3,4,5,6,7,8,9,10]
var y = [1,2,3,4,5,6,7,8,9,10]

var gameX = x[Math.floor(Math.random() * x.length)];
var gameY = y[Math.floor(Math.random() * y.length)];

function randomX() {
  document.getElementById("x").innerHTML = gameX.toString()
  console.log(gameX);
};

function randomY() {
  document.getElementById("y").innerHTML = gameY.toString();
  console.log(gameY);
}

function answerAdd(gameX, gameY) {
	return gameX + gameY
}

function answerSubtract(gameX, gameY) {
  return gameX - gameY
}

function setAdd() {
  document.getElementById("operator").innerHTML = "+";
}

function setSubtract() {
  document.getElementById("operator").innerHTML = "-";
}

$(document).ready(function() {
    console.log( "ready!" );

    $("#play-addition").on( "click", function() {
      setAdd();
      randomX();
      randomY();
      answerAdd();
      console.log(answerAdd(gameX, gameY));
    });

    $("#play-subtraction").on( "click", function() {
      setSubtract();
      randomX();
      randomY();
      answerSubtract();
      console.log(answerSubtract(gameX, gameY));
    });

    $("#answerForm").submit(function(){
      var userAnswer = $("#userAnswer").val()
      function userAnswerToInt (userAnswer) {
        return parseInt(userAnswer, 10);
      }
      console.log(userAnswer);
    	if ( userAnswerToInt(userAnswer) === answerAdd(gameX, gameY)) {
        alert("CORRECT")
      } else if ( userAnswerToInt(userAnswer) === answerSubtract(gameX, gameY)) {
        alert("CORRECT")
      } else {
        alert("TRY AGAIN")
      }
    });

});
