// Exercise One

let userSum = 0;
let userInput = prompt("Enter a Number!").toLowerCase(); 
for (let num = 1; num <= userInput; num++) {
  userSum += num;
}
console.log(userSum);


// Exercise Two

let start = prompt("Do you want to play?").toLowerCase();
let output = "";
let repeat;

if (start === "no") {
  console.log("Maybe next time?");
} else if (start == "yes") {
  // console.log("Enter a word");
  do {
    let word = prompt("Enter a word").toLowerCase();
    output = output += word + " ";
  } while ((repeat = prompt("Would you like to play again?").toLowerCase() === "yes")
)
  console.log(output);
}

// // Exercise Three

let userName = prompt("What is your name?").toLowerCase();
let begin = prompt("Would you like to print your name?").toLowerCase();
let again;

if (begin === "yes") {
   console.log("Hello. My name is " + userName);
   let i = "!";
   while (again = prompt("Would you like to print your name again?").toLowerCase() === "yes") {
     console.log("Hello. My name is " + userName + i);
     i += "!";
   }
} else if (begin === "no") {
  console.log("Maybe next time?");
}


// // Exercise Four


let timeOfDay = prompt("What time of the day is it? Morning, noon or evening?").toLowerCase();

if (timeOfDay === "morning") {
  console.log ('Since it is the morning, you should be eating breakfast. We suggest eggs and toast.');
} else if (timeOfDay === "noon") {
  console.log('Since it is noon, you should be eating lunch. We suggest a salad.');
} else if (timeOfDay === "evening") {
  console.log('Since it is the evening, you should be eating dinner. We suggest chicken and rice.');
} else {
  console.log ('Incorrect time');
}