'use strict'
$(document).ready(function () {

	// =============================
	// Set up global variables first
	// =============================

	// initialize global variables
	let rangerOneValue, rangerTwoValue, rangerThreeValue, rangerFourValue, rangerFiveValue;
	let wins = 0;
	let losses = 0;
	// randomNumber is the random digit computer will generage
	let randomNumber;
	// userScore is the ongoing sum of ranger values user has picked
	let userScore;

	// Sound EFX
	let biteSound = new Audio('./assets/sounds/bite.wav');
	let kickSound = new Audio('./assets/sounds/kick.wav');
	let hitSound = new Audio('./assets/sounds/hit.wav');
	let slapSound = new Audio('./assets/sounds/slap.wav');
	let uppercutSound = new Audio('./assets/sounds/uppercut.wav');
	let winSound = new Audio('./assets/sounds/win-rangers.mp3');
	let loseSound = new Audio('./assets/sounds/you-lose.wav');



	// ================
	// Set up functions
	// ================

	// function that initializes the variables for each new round of the game
	function setVariables() {
		// have computer pick a number between 19-120
		randomNumber = 19 + Math.floor(Math.random() * 102);
		// pick random ranger values between 1-12
		rangerOneValue = 1 + Math.floor(Math.random() * 12);
		rangerTwoValue = 1 + Math.floor(Math.random() * 12);
		rangerThreeValue = 1 + Math.floor(Math.random() * 12);
		rangerFourValue = 1 + Math.floor(Math.random() * 12);
		rangerFiveValue = 1 + Math.floor(Math.random() * 12);


		// set initial value of user's ongoing ranger selections sum to 0
		userScore = 0;
		// update the html for the game board
		$("#winsTally").html("Wins: " + wins);
		$("#lossesTally").html("Losses: " + losses);
		$("#randomNumber").html(randomNumber);
		$("#userScore").html(userScore);
		consoleLogVariables();
	}



	// function to check if user has won or lost
	// increment wins / losses in either case
	// and then re-initialize variables for new round
	// if user hasn't won or lost then nothing happens

	function gameStatus() {
		// check if user has lost
		if (userScore > randomNumber) {
			losses++;
			loseSound.play();
			console.log("user lost");
			setVariables();
		}

		// check if user has won
		if (userScore == randomNumber) {
			wins++;
			winSound.play();
			console.log("user won");
			setVariables();
		}
	}




	// debugging functionality function
	function consoleLogVariables() {
		console.log("wins: " + wins + " losses: " + losses);
		console.log("rangerOneValue: ", rangerOneValue + " rangerTwoValue: " + rangerTwoValue + " rangerThreeValue: " + rangerThreeValue + " rangerFourValue: " + rangerFourValue + " rangerFiveValue: " + rangerFiveValue);
		console.log("randomNumber: " + randomNumber + " userScore: " + userScore);
		console.log("----------------------------------");

	}

	// =====================================
	// Main Game Functionality
	// =====================================

	setVariables();

	// listen for clicks on any of the rangers by targeting the ranger class
	$(".ranger").on("click", function () {
		// each ranger has a value attribute of ranger1 - ranger5
		// use this attribute to identify which ranger the user actually clicked
		var pressed = $(this).attr("value");
		console.log(pressed);
		// add the value of the ranger to the user's ongoing score tally
		if (pressed == "ranger1") {
			userScore += rangerOneValue;
			biteSound .play();
		} else if (pressed == "ranger2") {
			userScore += rangerTwoValue;
			kickSound.play();
		} else if (pressed == "ranger3") {
			userScore += rangerThreeValue;
			kickSound.play();
		} else if (pressed == "ranger4") {
			userScore += rangerFourValue;
			slapSound.play();
		} else if (pressed == "ranger5") {
			userScore += rangerFiveValue;
			uppercutSound.play();
		}
		else {
			console.log("error");
		}
		// then update the html for the user score
		$("#userScore").html(userScore);
		consoleLogVariables();
		// call the function to see if user has won or lost
		gameStatus();
	});

});