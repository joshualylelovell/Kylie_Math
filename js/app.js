$(document).foundation()

var x = [1,2,3,4,5,6,7,8,9,10]
var y = [1,2,3,4,5,6,7,8,9,10]

var gameX = x[Math.floor(Math.random() * x.length)];
var gameY = y[Math.floor(Math.random() * y.length)];

function setGameBoard() {
  if (gameX > gameY) {
    document.getElementById("x").innerHTML = gameX.toString()
    console.log(gameX);
    document.getElementById("y").innerHTML = gameY.toString();
    console.log(gameY);
  } else {
    document.getElementById("y").innerHTML = gameX.toString()
    console.log(gameX);
    document.getElementById("x").innerHTML = gameY.toString();
    console.log(gameY);
  }
}

function answerAdd(gameX, gameY) {
	return gameX + gameY
}

function answerSubtract(gameX, gameY) {
  if (gameX >= gameY) {
    return gameX - gameY
  } else {
    return gameY-gameX
  }
}

function setAdd() {
  document.getElementById("operator").innerHTML = "+";
}

function setSubtract() {
  document.getElementById("operator").innerHTML = "-";
}

/***************
GAME PLAY
***************/

$(document).ready(function() {
    console.log( "ready!" );

    $("#play-addition").on( "click", function() {
      setAdd();
      setGameBoard();
      answerAdd();
      console.log(answerAdd(gameX, gameY));
    });

    $("#play-subtraction").on( "click", function() {
      setSubtract();
      setGameBoard();
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
