// Assignment Code
var generateBtn = document.querySelector("#generate");
// Declaring variables for user's password critera
var passwordLength;
var wantLowercase;
var wantUppercase;
var wantNumbers;
var wantSymbols;
// Write password to the #password input
function writePassword(password) {
  console.log(password);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Start of my code
// Function with prompt/windows asking for user's password critera, and writing the values to the previously declared variables based on the user's choices.
function passwordPrompt() {
  passwordLength = window.prompt("How many characters? (min 8, max 128)");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Your password must be between 8-128 characters")
  } else {
    wantLowercase = window.confirm("Do you want lowercase letters?");
    wantUppercase = window.confirm("Do you want uppercase letters?");
    wantNumbers = window.confirm("Do you want numbers?");
    wantSymbols = window.confirm("Do you want symbols?");

    // The final password string
    const finalPassword = passwordGenerator(passwordLength, wantLowercase, wantUppercase, wantNumbers, wantSymbols);
    console.log(finalPassword);
    writePassword(finalPassword);
  }
}

// Function using a for loop that creates arrays of charcodes when called
function arrayFromLowToHigh(low, high) {
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
}

// Uses the function arrayFromLowToHigh() created above to generate and set the range of available characters in an array
const lowercaseCharCodes = arrayFromLowToHigh(97, 122);
const uppercaseCharCodes = arrayFromLowToHigh(65, 90);
const numbersCharCodes = arrayFromLowToHigh(48, 57);
const symbolsCharCodes = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126)));


// Generates the password and stores it
function passwordGenerator(passwordLength, wantLowercase, wantUppercase, wantNumbers, wantSymbols) {
  let charCodes = []
  if (wantLowercase) charCodes = charCodes.concat(lowercaseCharCodes)
  if (wantUppercase) charCodes = charCodes.concat(uppercaseCharCodes)
  if (wantNumbers) charCodes = charCodes.concat(numbersCharCodes)
  if (wantSymbols) charCodes = charCodes.concat(symbolsCharCodes)
  const passwordCharacters = [];
  for (let i = 0; i < passwordLength; i++) {
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join('');
};


// Add event listener to generate button
generateBtn.addEventListener("click", passwordPrompt);
