/**
 * INTRODUCTION
 * 
 * sometimes you may want to reuse values in your program. at some points you may want to also
 *  change the value e.g change the balance of a bank account when a user makes a deposit or 
 * withdraw from their account.
 * in order to store these values for reuse or modification in future, we place them in 
 * placeholders called variables. dont worry, i am not taking you back to math class. most of 
 * the time you wont be required to do much than just add or subtract or multiply two or more 
 * variables .
 * 
 * consider a program that requests a user to enter ther name and age and later displays this 
 * information on the screen.
 * it would be usefull for us to store this information as its being entered into the program 
 * so as to use or modify it at a later date
*/


/*
* create the variable name and assign it a value like so:
*/
const name = "lee";

/**
 * create another variable age and assign it a value like so :
 * 
*/
const age = 22;

/**
 * ### please not that name is a string i.e sequence of individual characters placed between
 * ### quatotation marks. in the case of age ,we just use the number 22. javascript is smart 
 * ## enough to know that anything between quotation marks is a string or sequence of 
 * ##characters and that numbers are just numbers :-)
 * 
 * lets see how we can use this knowledge in a simple exercise below.
*/


/*
* 1. write to the console the name and age of the user.
*/

console.log("the name of the user is ", name," and he/she is ",age,"years old" );

/**
 * Run the following piece of code and see how the programm outputs a beatiful statement on the
 *  screen ## the name of the user is lee and he/she is 22 years old ##
*/

/**
 * the basic formula for declaring variables in javascript is :
 * 
 *          const <identifier> = <value> 
 *          let   <identifier> = <value>
 * 
 * try to replace "const" with "let" in the above exercise and run the program again. do you 
 * notice anything different ? i believe the program should run the same way. i will label to 
 * explain the differences between "const" and "let" later on the series. for now we shall use "const" to decalare our variables. "const" is short hand for "constant".
 * 
*/

/*
* if you have the run the above exercise, pleae go on to the next lesson. thanks
* for participating. see you in the matrix!
*/