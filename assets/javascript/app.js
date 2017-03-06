function playGame() {
	$('#startbtn').hide();
	setTimeout(function(){ 
		var finalScore = $('#CorrectGuesses').val();
		alert(finalScore); }, 10000);

};

function guess(userguess) {
	if (userguess == "choose_c1" || userguess == 'choose_b2' || userguess == 'choose_d3' || userguess == 'choose_b4' || userguess == 'choose_d5') {
		alert("Correct!");
		var score = $('#CorrectGuesses').val();
		if (!score){NewScore = 1}
		else{	
		NewScore = Number(score) +1;
		$('#CorrectGuesses').val(Number(NewScore));
	}
	}
	else alert('Wrong Fucker!!!');
};

$( document ).ready(function() {
	$( '.guessBtn' ).click(function() {
    guess(this.id);
	});
});

//set the amount of time to countdown
//var countDownTime = '';

//updates count every 1 second
/*
var x = setInterval(function() {

	var seconds = Math.floor(())

	//if the countdown is finished, append text
	if (  < 0) {
		clearInterval(x);
		document.getElementById("time")
	}

}, 1000);
*/