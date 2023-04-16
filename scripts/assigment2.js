//day 3 task 2


// calculate the fitrah amount, first, ask the user to enter the total number of family
// members using the prompt and store the value in a variable called
// "familyMembers". Next, ask the user to choose a fitrah method by providing them
// options using the prompt, and store the selected method and its price in variables.
// Then, use an if-else block to check the user's input and calculate the fitrah amount
// by multiplying the selected method's price with the number of family members.
// Finally, display the calculated fitrah amount using an alert message.


//  alert("welcom in fitrah calculation")

//   var familyMembers = prompt("How Many Members In Your Family");

//  var user = prompt(" Enter Which Method Do You Want For Fitrah;  Wheat, Date Fruit, Hunger , Raisin");

//  if (user == "Wheat" || user == "wheat" ) 
//  {
//   var method = 250*familyMembers;
//   alert("Your Fitrah Amount Is " +method);
//  }
// else if (user == "Datefruit" || user == "datefruit" ) {
//   var method = 2100*familyMembers;
//   alert("Your Fitrah Amount Is " +method);
// }
// else if (user == "Hunger" || user == "hunger" ) {
//   var method = 450*familyMembers;
//   alert("Your Fitrah Amount Is " +method);
// }
// else if (user == "Raisin" || user == "raisin" ) {
//   var method = 2800*familyMembers;
//   alert("Your Fitrah Amount Is " +method);
// }
// else {
//   alert("You Did Not Choose Anything");
// }




//task 3

// Create a program that generates a random number between 1 and 10 and stores it
// in a variable called "secretNumber". Then, ask the user to enter a guess for the
// secret number using a prompt.
// Use an if-else statement to check if the user's guess matches the secret number. If
// the guess is correct, display a message using an alert saying "Congratulations! You
// guessed the secret number". Otherwise, if the guess is too high or too low, display
// an appropriate message informing the user to guess again.


//  alert("welcom")
//  var secretNumber = 5 ;
//  var userInput = +prompt("Enter a guess no between 1 to 10 for the secret number")

// if (secretNumber == userInput ) {
//   alert("Congratulations! Your Guessed Is Correct")
// }
//  else if (secretNumber >userInput){
// alert("Your Guess Is Too low Guess Again")
// }

// else if (secretNumber <userInput) {
//   alert("Your Guess Is Too Heigh Guess Again ")
// }



// Task 4:


// Create a program that asks the user to enter a name, and then prints out the name
// with the first letter capitalized (Make your name in capitalized case).

// var userName = prompt("Enter Your Name Please");
// var ahead = userName.slice(1);
// var firstLetter = userName.slice(0,1);
// alert(firstLetter.toUpperCase()+ahead.toLowerCase());
  



//task 5

// In this task, you will be creating two empty arrays called "contactNumbers" and
// "contactNames". Using the prompt, you will ask the user to enter a contact number
// and contact name. You will then push these values into their respective arrays
// using the push method. After adding all the contacts, you will display the contact
// numbers and names in the console. To do this, you will need to use a for loop to
// iterate through both arrays and log each element to the console.
// Make sure to use descriptive variable names and comment on your code for clarity.

//   var contactName = [];
//    var contactNumber = [];
//   for(var a=0; a<3; a++)
// {
//  var user = prompt("Enter Your Name Please");

//   var number = prompt("Enter Your Contact Number Please");

//   }
//   contactName.push(user);
//  contactNumber.push(number);

// console.log(contactName);
//  console.log(contactNumber);


// Task 6:


// Create an Array that contains different products, and get input from the user in which you
// ask your user to give the position of that element he/she wants. Now remove that Item
// from your array and console the removed item, Also display the remaining items in the
// array and total number of items remaining.

//  var products = ['FaceWash', 'chocolates', 'biskuits', 'Oil', 'handWash', 'makeUp', 'soap', ' creams']
// console.log('FaceWash', 'chocolates', 'biskuits', 'oil', 'handWash', 'makeUp', 'soap', ' creams')

// var user = prompt("Give The Position Of That Element Who You Want")

// products.splice(7)

// console.log(products[user]+ "   remove item");
// console.log('remain items in the list ' + products);
// console.log("number of items"+ products.length);


// Task 7:

// Create a program that asks the user for their nationality, gender, and age using the prompt
// function. The program should then use nested if-else statements to determine if the
// person is eligible to vote.
// First, the program should check if the person is Pakistani or Indian. If they are not, the
// program should display a message saying they are not eligible to vote.
// If they are Pakistani or Indian, the program should then check their gender. If the person is
// male and over the age of 18, they are eligible to vote. If the person is female and over the
// age of 18, the program should ask if they are married. If they are married, they are eligible
// to vote. If they are not married, they are not eligible to vote.
// If the person is under 18, the program should display a message saying they are not eligible
// to vote.



// alert("welcome")

// var nationality = prompt("Enter Your Nationality")
// var gender = prompt("Enter Your Gender")
// var age = +prompt("Enter Your Age")

// if (nationality == 'Pakistani' || nationality == 'pakistani' && nationality == 'Indian' || nationality== 'indian')

//    {
// if (age<18) {
//     alert("You Are Not Eligible To Vote")
// }

// else if(gender == 'Femail' || gender == 'femail'  && age>18){
//     alert("you are eligible to vote")
//     }


//  else if(gender == 'Femail' || gender == 'femail'  && age>18){
// alert("you are eligible to vote")
//  }
// }
// else{
//     alert("you are not eligible to vote")
// }
 



// Task 8:



// You have an array of that contains the name of Pakistani Teams Player selected for
// WorldCup (15 Players) named as WorldCupSquad. Now tomorrow we have a match with
// India, So make an array of final team players (11 Players) that will be playing in tomorrows
// match from the WorldCupSquad array.
// (Hint : Make sure it should not disturb the array that contains 15 players instead you have
// to make a copy of this array



// var WorldCupPlayers = ['babarAzam','haris','afridi','naseemShah','shahid','imran','bilal','babarAli','raouf','shahid','navab','ali','hassan','hasnain','arif'] 

// var finalPlayers = ['babarAzam','haris','afridi','naseemShah','shahid','imran','babarAli','rouf','shahid','navab','ali']

// console.log(WorldCupPlayers)
// console.log(finalPlayers)


