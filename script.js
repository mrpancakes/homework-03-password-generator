// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", passwordPrompt);



// Using charcodes to generate a to set the range of available characters. Uses the function created further down for arrayFromLowToHigh:

const lowercaseCharCodes = arrayFromLowToHigh(97, 122);
const uppercaseCharCodes = arrayFromLowToHigh(65, 90);
const numbersCharCodes = arrayFromLowToHigh(48, 57);
const symbolsCharCodes = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58,64).concat(arrayFromLowToHigh(91,96)).concat(arrayFromLowToHigh(123,126)));
const passwordBeginning = [];

var passwordLength;
var wantLowercase;
var wantUppercase;
var wantNumbers;
var wantSymbols;

// Prompts for user's password critera
function passwordPrompt (){
  passwordLength = window.prompt("How many characters? (min 8, max 128)");
  if (passwordLength < 8 || passwordLength > 128){
    alert("Your password must be between 8-128 characters")
  } else {
    wantLowercase = window.confirm("Do you want lowercase letters?");
    wantUppercase = window.confirm("Do you want uppercase letters?");
    wantNumbers = window.confirm("Do you want numbers?");
    wantSymbols = window.confirm("Do you want symbols?");
  }
}

passwordPrompt();





console.log(passwordLength, wantLowercase, wantUppercase, wantNumbers, wantSymbols); // testing that the prompts work

// The final password string
const thePassword = passwordGenerator(passwordLength, wantLowercase, wantUppercase, wantNumbers, wantSymbols);

// Generates the password and stores it
function passwordGenerator(passwordLength, wantLowercase, wantUppercase, wantNumbers, wantSymbols){
  let charCodes = []
  if (wantLowercase) charCodes = charCodes.concat(lowercaseCharCodes)
  if (wantUppercase) charCodes = charCodes.concat(uppercaseCharCodes)
  if (wantNumbers) charCodes = charCodes.concat(numbersCharCodes)
  if (wantSymbols) charCodes = charCodes.concat(symbolsCharCodes)

  const passwordCharacters = [];
  for(let i = 0; i < passwordLength; i++) {
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join('');
};


function arrayFromLowToHigh(low, high) {
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
}



console.log(thePassword);
