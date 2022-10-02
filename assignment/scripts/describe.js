// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
//We created a variable called "name" and entered Dane as the name.
//Then we created an if/else statement to decide the console log output with the name as "Mary".
//When "Dane" ran through the first course of action, the code recognized that Dane does not equal Mary, skipped that action and went to the next one.
//And, since Dane does not strictly equal Mary we console log "How do you do?".

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
//We created a variable called "secret" and then created a variable called "code" and gave it a value of "123". 
//Then we created an if statement that says if "code" is strictly equal to "123" then "secret" will = "super"
//and will also multiply the "code" variable by 2.
//Then we created another if statement that says if "code" is greater than 250 then "secret" will = "duper".
//Then we console.log(secret) and it will come out "super" because as it passed through the two if statements, that was the outcome. 


//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We created 3 variables and gave them each names and an operator, first was iStudent = true, second was age = 34, and last was zip = 55407.
//Next we created an if/else statement that ran through 4 options. If iStudent is true AND the zip is greater than 80000 we console log "You're a student on the West Coast!",
//if isStudent was false or the age of the student was less than 30 we console log "What are your hobbies?", if iStudent is true we console log "Welcome to Prime!" and
//if any other outcome takes place we console log "How about the weather?".

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*

//FIX colorOne is supposed to be blue and colorTwo is supposed to be red.
//So, it should be let colorOne = 'blue; let colorTwo = 'red';

let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

//FIX colorOne and colorTwo should now be purple.
//if (mix === true) {
//  colorOne && colorTwo = 'purple';
//}

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

// FIX it is supposed to be and not or so
// if (temp > 39 && time >=4) {
//  console.log('throw away the food!);  
//}
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

//FIX we are supposed to allow people in who are 21 and above in age, so
//if(minAge <= age) {
//  console.log ('enter');
//} else {
//  console.log ('no entry');
//}  

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

