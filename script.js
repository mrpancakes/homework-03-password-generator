// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// ****** My Attempt ******


// Prompts for user's password critera
var passwordLength = window.prompt("How many characters? (min 8, max 128)");
var wantLowercase = window.confirm("Do you want lowercase letters?");
var wantUppercase = window.confirm("Do you want uppercase letters?");
var wantNumbers = window.confirm("Do you want numbers?");
var wantSpecial = window.confirm("Do you want special characters?");

console.log(passwordLength, wantLowercase, wantUppercase, wantNumbers, wantSpecial); // testing that the prompts work




// Based on the length and true/false values of the character types they want, I need to spit out a random password.

/* One array for "Characters" and sub-arrays inside it maybe, with all the possible character types? 
  and then if the user choose 10 characters and True for all, then a random number function that iterates through the qualifying sub-arrays?
/*



// Generator Functions

/* Multiply a random decimal (btwn 0-1) times 26 (numbers of letters in alphabet). 
    Then adds 97 to input the result between 97 - 123 (range of lowercase characters in the Browser charset) */
function randomLower () {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function randomUpper () {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65); 
}

function randomNumber () {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48); 
}

function randomSymbol () {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48); 
}
console.log(randomLower());
console.log(randomUpper());
console.log(randomNumber());
console.log(randomSymbol());


// loops through all of the 'random' generator funnctions X amount of times, based on the password length chosen by user
function generateTest (testLength) {
  for (var i = 0; i <= testLength; i++) {
    
  }
}







// Can do also randomly generate characters with a set of arrays instead of using charset. Lowercase example:

var lowercaseArr = ["a", "b", "c", "d", "e", "f", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
var lowerChoice;

function newLower(){
    lowerChoice = lowercaseArr[Math.floor(Math.random() * lowercaseArr.length)];
    return lowerChoice;
}

newLower();

console.log(lowerChoice);

