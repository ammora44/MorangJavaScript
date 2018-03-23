// Exercise One

var userSum = 0;
var userInput = prompt("Enter a Number!"); 
for (var num = 1; num <= userInput; num++) {
  userSum += num;
}


// Exercise Two


prompt("Do you want to play?");

var repeat, words = []

do {
  words.push(prompt("Enter a word"));
  repeat = prompt("Do you want to play again?")
} while (repeat !== "no") 
console.log(words.toString());




// Exercise Three


var userName = prompt("What is your name?");
var printName = prompt("Would you like to print your name?");
console.log("Hello. My name is " + userName);


while (printName !== "no") //condition

{
var printAgain = console.log("Hello. My name is " + userName + "!");
var printName = prompt("Would you like to print this again?");

printName !== "yes"

} console.log("Hello. My name is " + userName + "!");





// Exercise Four


let timeOfDay = prompt('What time of day is it?').toUpperCase();

   switch (timeOfDay){
    case 'MORNING':
    console.log ('Since it is the morning, you should be eating breakfast. We suggest eggs and toast.');
    break;
   case 'NOON':
    console.log('Since it is noon, you should be eating lunch. We suggest a salad.');
    break;
   case 'EVENING':
    console.log('Since it is the evening, you should be eating dinner. We suggest chicken and rice.');
    break;
   default:
    console.log ('Incorrect time');
}
