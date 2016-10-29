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

function answer(gameX, gameY) {
	return gameX + gameY
}

$(document).ready(function() {
    console.log( "ready!" );

    $("#play").on( "click", function() {
      randomX();
      randomY();
      answer();
      console.log(answer(gameX, gameY));
    });

    $("#answerForm").submit(function(){
      var userAnswer = $("#userAnswer").val()
      function userAnswerToInt (userAnswer) {
        return parseInt(userAnswer, 10);
      }
      console.log(userAnswer);
    	if ( userAnswerToInt(userAnswer) === answer(gameX, gameY)) {
        alert("CORRECT")
      } else {
        alert("TRY AGAIN")
      }
    });

});
