'use strict'


//variables
const counter = "";
const targetNumber;

function randomNum() {
//random number code here
//assign random number to the random variable
randomNumber = Mat.random();
$('#someID').text(randomNumber)
};

$(".image-name").on("click", function() {
    counter
})



//PsuedoCode Information

//List of variables


let counter = 0;    //Counter starts off with 0 but will change based on your points
let winCount;       //Total number of Wins
let lossCount;      //Total Number of Losses
let targetNumber;   //Number that is randomly generated for the player to try


//As a user when you open the game, you should see a randomly generated target number. 
//This is your goal target.

//This is the fuction for the random number generator
function randomNumber() {
    return Math.floor(Math.random() * Math.floor(50));
};

//Once the random number is generated I need to assign the random number to
//variable to used later.
targetNumber = randomNumber();

//Random number needs to displayed on the screen

//Target this ID/element and inject text into this ID.
$('#target-number').text(targetNumber);


//As a user the game needs default settings; everything is set to 0.
// This state will be used for reset, when you win, lose and default

//This will set the target number and counter to 0 and regenerate a number for your crystals.
function reset() {
    counter = 0;
    targetNumber = randomNumber();
    $('#counter-number').text(counter);
    
};









