 function playGame() {
 	$('#startbtn').html('&nbsp;');
 	$('#startbtn').removeClass('btn-success');
 	
 	var tmr = setInterval(ckgame, 1000); 
 		$('#header h4').html('&nbsp;')
 		seconds = 15000;
 		function ckgame(){
 			seconds = seconds-1000;
 			s = seconds / 1000;
 			// console.log(seconds);
 			$("#tremain").text(s);
 			if(seconds <=0){
 			clearInterval(tmr);
 			//alert('Done');
 			var finalScore = $('#CorrectGuesses').val();
 			//alert(finalScore);
			$('#FinalModal').css({'display':'block'}); 
 			$('#FScore').text(finalScore);
 			
 			return;
 			}
 		}

 };

function guess(userguess) {
	if (userguess == "choose_c1" || userguess == 'choose_b2' || userguess == 'choose_d3' || userguess == 'choose_b4' || userguess == 'choose_d5') {
		//alert("Correct!");
		$( ".alert-success" ).fadeIn( "fast", function() {
			// Animation complete
			$( ".alert-success" ).fadeOut( "slow", function() {
			// Animation complete
			});
		});
		var score = $('#CorrectGuesses').val();
		if (!score){NewScore = 1}
		else{	
		NewScore = Number(score) +1;
		$('#CorrectGuesses').val(Number(NewScore));
	}
	}
	else{ 
		//alert('Wrong Fucker!!!');
			$( ".alert-danger" ).fadeIn( "fast", function() {
			// Animation complete
			$( ".alert-danger" ).fadeOut( "slow", function() {
			// Animation complete
			});
		});
	}	
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