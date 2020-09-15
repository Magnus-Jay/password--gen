Hello! I worked on trying to create a password generator.

The goal here was to prompt a user to create a password and let them choose to add certain complexities to it.

They are:
- lower case
- upper case
- special haracter
- number
- password length between 8-128 characters

After they choose these options they should be able to click a generate button and with their slected criteria showing up.

I have setup a prompt that asks the user for their password length as well as added an if statement to alert them if the length is off.

Then created several if statements with for loops to generate all needed chracters to be pushed to a blank finalPass array.

<!-- Unfortuntaely I am unable to get my generator going. I have been unable to get my final loop function/logic to work with extracting randomly the characters from the array to match the users choices and then write to the index page. -->

I plan to keep working on this as I know these concepts are important for js.

UPDATE!

I have finally been able to get my final loop to work thats push all characters needed from the user selections. I was able to do this by creating a new Var called randChar and setting it to = my total character string and using math random and math floor to generate a random number and multiply it by the password string length.

Additonally I realized my function was not worling because I never called it! Coming back to make sure I understood how to do this has been very rewarding!

