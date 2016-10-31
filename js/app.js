$(document).foundation()

var x = [1,2,3,4,5,6,7,8,9,10]
var y = [1,2,3,4,5,6,7,8,9,10]

var gameX = x[Math.floor(Math.random() * x.length)];
var gameY = y[Math.floor(Math.random() * y.length)];

var numberCorrect = 0;

var correctPhrases = ["Awesome!", "Amazing!", "Math Whiz!", "Excellent!"]

function pushCorrectPhrases() {
  var setCorrectPhrases = correctPhrases[Math.floor(Math.random() * correctPhrases.length)];
  document.getElementById("correctPhrasesDiv").innerHTML = setCorrectPhrases;
  console.log(setCorrectPhrases);
}

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

function reset() {
  location.reload();
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
        pushCorrectPhrases();
        setTimeout(function() {reset()}, 2000);
      } else if ( userAnswerToInt(userAnswer) === answerSubtract(gameX, gameY)) {
        pushCorrectPhrases();
        setTimeout(function() {reset()}, 2000);
      } else {
        document.getElementById("correctPhrasesDiv").innerHTML = "Try again. You can do it.";
        setTimeout(function() {reset()}, 20000);
      }
      return false;
    });
});
