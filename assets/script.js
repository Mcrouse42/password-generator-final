// Assignment code here
var characterSelector = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?", "/", ";", ":", 
",", ".", "<", ">", "{", "}", "[", "]" ]
var numberSelector = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P",
"Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var allPossibleOptions = [];
var finalPassword = [];

function verification () {
  var length = parseInt(window.prompt("How many characters would you like your password?")) 
  if (isNaN(length)=== true) {window.alert("This must be a number") 
  verification () ; }
  if (length < 8) {window.alert("This must be more than 8 characters!")
  return}
  if (length > 128) {window.alert("This must be less than 129 characters!")
  return}
  var includeSpecialCharacter = window.confirm("Do you want to include special characters?")
  var includeLowerCase = window.confirm("Do you want lower case letters?")
  var includeUpperCase = window.confirm("Do you want upper case letters?")
  var includeNumbers = window.confirm("Do you want Numbers?")

  
  return [length, includeSpecialCharacter, includeLowerCase, includeUpperCase, includeNumbers];
}





function generatePassword() {

  var verificationArray = verification();

  var length = verificationArray[0]
  var includeSpecialCharacter = verificationArray[1]
  var includeUpperCase = verificationArray[2]
  var includeLowerCase = verificationArray[3]
  var includeNumbers = verificationArray[4]

  if (includeSpecialCharacter == true) {
    allPossibleOptions = allPossibleOptions.concat(characterSelector)
  }
  if (includeUpperCase == true) {
    allPossibleOptions = allPossibleOptions.concat(upperCase)
  }
  if (includeLowerCase == true) {
    allPossibleOptions = allPossibleOptions.concat(lowerCase)
  }
  if (includeSpecialCharacter == true) {
    allPossibleOptions = allPossibleOptions.concat(numberSelector)
  }
  // console.log(includeSpecialCharacter);
  // console.log(allPossibleOptions);
  // console.log(includeUpperCase);
  // console.log(includeLowerCase);
  // console.log(includeNumbers);
  // randomize 

  // debugger
  

  //for loop
  var i;
  for (i = 0; i < length; i++) {
    index = Math.floor(Math.random() * allPossibleOptions.length)
    finalPassword.push(allPossibleOptions[index])
  }

  var string = finalPassword.join("")

  console.log(string)

  return string;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




