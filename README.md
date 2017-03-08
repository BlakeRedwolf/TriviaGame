# HW - {hw_TriviaGame}

## Live Link (If relevant)

 - https://blakeredwolf.github.io/TriviaGame/

## Description

- Click start button.
- You will have 15 seconds to answer all the questions.
- Your final score will appear at the end of the game.

## Requirements

- In this assignment, You'll create a Trivia game using JavaScript for the logic and jQuery to manipulate HTML. Be sure to layout this app with valid HTML and stylish CSS.

## Technologies Used

- HTML
- CSS
- Bootstrap
- Javascript
- Jquery

## Code Explaination
- Using Javascript, i created multiple functions playGame(), setInterval(setInterval), ckgame, and guess(userguess) i made a basic JS countdown timer, removed my start button on click, added a non breaking space to hold space where the button was located, then used an if statement to show a modal with the class of FinalModal to display the final user's score. Also added some cool animations via the .fadein and .fadeout methods.

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

-------------
