// Assignment Code
var generateBtn = document.querySelector("#generate");
var rdmNum = ["0" , "1", "2", "3", "4", "5", "6", "7", "8", "9" ]
var lwrCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upprCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var spclChar = ["!", "@", "#", "$", "%", "&", "*", "?"]
var finalPass = []
var passGen = []
// var password = ""


// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");
  

//   passwordText.value = password;

// }

// function generatePassword() {

    var pwdLength = prompt("How long would you like the password to be?")
    // console.log(pwdLength)
    if (pwdLength < 8 || pwdLength > 128) {
      prompt("You must choose a value between 8 and 128")
    }

    

    var upCase = confirm("Would you like to an upper case character?")
    if (upCase) {
      for (i = 0; i < upprCase.length;i++) 
      finalPass.push(upprCase[i])
      // console.log(finalPass)
      

    }

    var spChar = confirm("Would you like to a special character?")
    if (spChar) {
      for (i = 0; i < spclChar.length;i++) 
      finalPass.push(spclChar[i])
      // console.log(finalPass)

    }

    var num = confirm("Would you like to an upper case character?")
    if (num) {
      for (i = 0; i < rdmNum.length;i++) 
      finalPass.push(rdmNum[i])
      console.log(finalPass)

    }

    // for ( i = 0; i < pwdLength; i++) { 
    //   pwdLength.push(finalPass)
    //   console.log(pwdLength)
      
      

      // for( i = 0; i <finalPass.length; i++){
      //   var userPassword = Math.floor(Math.random()*finalPass.length);
      //   console.log(userPassword)
      // }

      let passChar = pwdLength[Math.floor(Math.random() * pwdLength.length)];
     
// }

      

    
 

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);


