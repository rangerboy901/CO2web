/*
JWD:  
  Joseph DeWeese
  1 July 2022
  CE02 / Story Time 
*/

alert("You will be asked a series of questions, from which your answers will create a story.")


//Prompt the user and catch their response in a variable 
let userName = prompt("What is your first name?");
let userColor = prompt("Enter a choice of color.");
let userNumber = prompt("Choose a number.");
let userMovie = prompt("Enter the title of your favorite movie.");
let userAnimal = prompt("Enter the name of any animal.");
let userAdjective = prompt("Enter the first adjective you think of. 🤔");

//CONSOLE REPORTS
console.log("At the conclusion of this story " + userName + ", you shall be known as a different name.");

console.log("This new name is a blessing handed down from the great spirit.  This name will guide you through your life.");

console.log("From this day forward, you shall be known as: " + userAdjective + userAnimal + ".");

console.log("For this blessing to root in your soul, you must watch the movie " + userMovie + ", " + userNumber + " consecutive times.");
console.log("Also, a " + userColor + " light bulb, must light your front porch for the next " + userNumber + " days.");

alert("To view your story, remember to right click -> select 'inspect' -> choose 'console' tab at top of inspection window.")
