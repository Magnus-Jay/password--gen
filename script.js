// Assignment Code
var generateBtn = document.querySelector("#generate");
var rdmNum = ["0" , "1", "3", "4", "5", "6", "7", "8", "9" ]
var lwrCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upprCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var spclChar = ["!", "@", "#", "$", "%", "&", "*", "?"]
var finalPass = []

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}

var pwdLength = prompt("How long would you like the password to be?")
    console.log(pwdLength)

var loCase = confirm("Would you like to a lower case character?")
    if (loCase) {
      finalPass.push(loCase)

    }

    var upCase = confirm("Would you like to an upper case character?")
    if (upCase) {
      finalPass.push(upCase)

    }

    var spChar = confirm("Would you like to a special character?")
    if (spChar) {
      finalPass.push(spChar)

    }

    var num = confirm("Would you like to an upper case character?")
    if (num) {
      finalPass.push(num)

    }

    

function generatePassword() {





}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// TODO: Create the generatePassword function that returns the final password and all of my code should live inside this unction

// TODO: Create a prompt to ask the length of the password and save it to a VAR

// TODO: Create a Confirm to ask the user if they want lowercase char

// TODO: Create a Confirm to ask the user if they want uppercase char

// TODO: Create a Confirm to ask the user if they want numbers 

// TODO: Create a Confirm to ask the user if they want special char


// TODO: After I'm done with the prompts I have to Create the password

// TODO: Create arrys with all needed char (an array for lowercase char, one for uppercase char etc)

// TODO: create a new var that holds all the chosen char

// TODO: create a Conditional situation that saves the choisen char from our confirms to our chosen char var (using an if statement)

// TODO: We have to select the specific number of char randomly from our final collection based on the user's answer to how long they want the length of their pass to be
 
// TODO: create an array to hold the final results

// I can use Math.floor(Math.random()) to get a random number
// for loop that runs as long as the prompt to the lenght answer [ for(var i=0 ; i<"charactor length prompt" ; i++ ){"logic goes here"}]

// TODO:  inside the forloop, push each char into the final char var

// TODO: Add validations to make sure atleast one type of char is selected and alert the user if there are no types being selected

// TODO: Add validation to the length to make sure it is between 8-128 char
