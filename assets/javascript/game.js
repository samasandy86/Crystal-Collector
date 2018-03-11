'use strict'


/* ---- INFORMATION ABOUT THE GAME ---  */

// A game with 4 crsytals and Random Result
// Every cyrstal needs to have a random number between 1  - 50
// A new random number should be generated every single time we Win or Lose to those crystals
// Matching the target number is your GOAL.

// When clicking any CRYSTAL, it should add with the previous result, until it equal the TOTAL SCORE
// If it is GREATER than the RANDOM NUMBER, then we START OVER and DECREMENT the lost counter
// Iif it DOES equal, then we increment a win counter



//List of variables

let counter = 0;    //Counter starts off with 0 but will change based on your points
let winCount;       //Total number of Wins
let lossCount;      //Total Number of Losses
let targetNumber;   //Number that is randomly generated for the player to try


/* LOOP */

//This FOR LOOP generates 4 random numbers that are injected into our buttons/players.
for (let i = 0; i < 4; i++) {
    let random = Math.floor(Math.random() * 15) + 1; // this math random will randomly store numbers between
                                                    // 1 and 15
    
    let button = $("<div>");
        button.attr({
            "class": "btn-group",
            "data-random": random
        });

        $(".btn-group").append(button);
   
    console.log(random);             // This console log shows the random numbers being generated
                                    //  is injecting it into  the BUTTON GROUP class (".btn-group")
}


/* --- RANDOM NUMBER CODE --- */

// As a user when you open the game, you should see a randomly generated TARGET NUMBER. 
// This is the fuction for the random number generator
// Once the random number is generated I need to assign the random number to
// variable to used later.

function randomNumber() {
    return Math.floor(Math.random() * 70) + 20;
}; 
    targetNumber = randomNumber();              // This assigns random number to the to the TARGET NUMBER variable.
    $('#target-number').text(targetNumber);     // Now the Random number needs to displayed on the screen.  So we write a jQuery selector to display to the DOM.


// As a user the game needs default settings; everything is set to 0.
// This function will be used for reset, when you win, lose and default.
// This will set the target number and counter to 0 and regenerate a number for your crystals.

function reset() {
    counter = 0;
    targetNumber = randomNumber();
    $('#counter-number').text(counter);

};









