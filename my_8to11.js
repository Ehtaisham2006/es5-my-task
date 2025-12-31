//  Q # 1  : Write a program that takes input a name from user & greet the
// user like this:

var name = prompt("Please enter your name");
alert(name);

// Q # 2 : Write a program to take input a number from user & display
// it’s multiplication table on your browser. If user does not enter
// a new number, multiplication table of 5 should be displayed by
// default.

var num = prompt("Enter a number for table");
if (num === "" || num === null) {
  num = 5;
} else {
  num = Number(num);
}

document.write("<h2>Multiplication Table of " + num + "</h2>");

for (var i = 1; i <= 10; i++) {
  document.write(num + " x " + i + " = " + num * i + "<br>");
}

// Q # 3 :Write a program to take “city” name as input from user. If user
// enters “Karachi”, welcome the user like this: “Welcome to city
// of lights”

var input=prompt("Enter your city name");

if(input==="Karachi"){
  alert("Welcome to the city of light")
}

//  Q # 4 : Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the user is
// female, give the message: Good Morning Ma’am.

var type = prompt("Enter your gender");
if (type === "male") {
  alert("Good Morning Sir!");
} else if (type === "female") {
  alert("Good Morning Madam!");
}

// Q # 5 : Write a program to take input color of road traffic signal from
// the user & show the message according to this table:

// var color=prompt("Enter the color for its description");

// if (color==="red"){
//     alert("Vechile must stop")
// }

// if (color==="yellow"){
//     alert("Vechile should get ready to move ")
// }

// if (color==="green"){
//     alert("Vechile can move now ")
// }

//  Q #  6 : Write a program to take input max age & current age from
// user. If the current age is less than or equal to max age, show the message “You are welcome”

var cur=prompt("Enter your current age");
var  maxAge=prompt("Enter a estimated maximum  age ")

if (cur <= maxAge){
  alert("You are welcome")
}

// Q # 7 Write a program to take input remaining fuel in car (in litres)
// from user. If the current fuel is less than 0.25litres, show the
// message “Please refill the fuel in your car”

 var fuel = Number(prompt("Enter remaining fuel in litres"));
   if (fuel < 0.25) {
        alert("Please refill the fuel in your car");
    }

//   Q # 8 : Run this script, & check whether alert message would be
// displayed or not. Record the outputs.

 var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

if (true){
alert("True");
}
if (false){
alert("False");
}

if("car" < "cat"){
alert("car is smaller than cat");
}

// Q # 9 :  Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute grade as
// per following table:

document.write("<h1>Marksheet</h1>");

var obtained = Number(prompt("Enter the marks you scored"));
var total = Number(prompt("Enter your total marks"));
var grade;
var remarks;
var percentage = (obtained * 100) / total;

if (percentage >= 80) {
  grade = "A-1";
  remarks = "Excellent";
} else if (percentage >= 70) {
  grade = "A";
  remarks = "Good";
} else if (percentage >= 60) {
  grade = "B";
  remarks = "You need to improve ";
} else if (percentage < 60) {
  grade = "Fail";
  remarks = "Sorry";
}

document.write("<h2>Total Marks: " + total + "</h2>");
document.write("<h2>Obtained Marks: " + obtained + "</h2>");
document.write("<h2>Percentage: " + percentage + "%</h2>");
document.write("<h2>Grade: " + grade + "</h2>");
document.write("<h2>Remarks: " + remarks + "</h2>");

// Q # 10 :  Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Take input
// from users, the following:
// a. Name of item1
// b. Name of item2
// c. Price of item 1
// d. Price of item 2
// e. Ordered quantity of item 1
// f. Ordered Quantity of item 2
// g. Shipping charges
// Compute the total cost. If the total cost is above 2000 PKR ,
// offer them 10% discount & show the receipt in your browser.

var item1 = prompt("Enter name of item 1");
var item2 = prompt("Enter name of item 2");

var price1 = Number(prompt("Enter price of item 1"));
var price2 = Number(prompt("Enter price of item 2"));

var quan1 = Number(prompt("Enter quantity of item 1"));
var quan2 = Number(prompt("Enter quantity of item 2"));

var shipChg = Number(prompt("Enter shipping charges"));

var totalItem1 = price1 * quan1;
var totalItem2 = price2 * quan2;

var totalCost = totalItem1 + totalItem2 + shipChg;

var discount = 0;
if (totalCost > 2000) {
  discount = (totalCost * 10) / 100;
}

var finalAfterDiscount = totalCost - discount;

document.write("<h2>Shopping Cart</h2>");

document.write("<p>" + item1 + " price: " + price1 + "</p>");
document.write("<p>" + item1 + " quantity: " + quan1 + "</p>");
document.write("<p>" + item1 + " total: " + totalItem1 + "</p>");

document.write("<p>" + item2 + " price: " + price2 + "</p>");
document.write("<p>" + item2 + " quantity: " + quan2 + "</p>");
document.write("<p>" + item2 + " total: " + totalItem2 + "</p>");

document.write("<p>Shipping Charges: " + shipChg + "</p>");

document.write("<h3>Total Cost: " + totalCost + " PKR</h3>");
document.write("<h3>Discount: " + discount + " PKR</h3>");
document.write("<h2>Final Amount Payable: " + finalAfterDiscount + " PKR</h2>");

//  Q # 11 : Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

var secretNumber = 7;

var Guess = Number(prompt("Guess the secret number (1 to 10):"));

if (Guess === secretNumber) {
  alert("Bingo! Correct answer");
} else if (Guess + 1 === secretNumber) {
  alert("Close enough to the correct answer");
} else {
  alert("Try again!");
}

// Q # 12 : Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number is
// divisible by 3.

var number=Number(prompt("Enter your number to check"))
if(number%3==0){
  alert("Yes , your given number is divisible by 3");
}else {
  alert("Division not possible")
}

//  Names & Total scores of two teams are taken as input. Write
// a program that shows which team has won the game or show if
// there is a tie. (Team A or Team B)

var name1 = prompt("Enter name of team 1");
var total1 = Number(prompt("Enter total score of " + name1));

var name2 = prompt("Enter name of team 2");
var total2 = Number(prompt("Enter total score of " + name2));

if (total1 > total2) {
  alert("Team " + name1 + " has won the game");
}
else if (total1 < total2) {
  alert("Team " + name2 + " has won the game");
}
else {
  alert("Game tie");
}

// Q # 14
// Take a string, a number and a Boolean in three variables.
// Write a program that checks the type of variables & responds
// accordingly. Like :

var input = prompt("Enter anything:");

if (input === "true" || input === "false") {
  alert(input + " is a boolean");
} else if (!isNaN(input) && input !== "") {
  alert(input + " is a number ");
} else {
  alert(input + " is a string");
}

// Q # 15
// Write a program that checks whether the given input is an
// even number or an odd number.
var input = Number(prompt("Enter a number:"));

if (input % 2 === 0) {
  alert(input+ " is an EVEN number");
} else {
  alert(input + " is an ODD number");
}

// Q # 16 :
// Weather in Karachi nowadays is too cool, write a program
// that takes temperature as input and shows a message based on
// following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

var temp = Number(prompt("Enter the temperature in Karachi:"));

if (isNaN(temp)) {
  alert("Please enter a valid number for temperature!");
} else {

  if (temp > 40) {
    alert("It is too hot outside.");
  } else if (temp > 30) {
    alert("The Weather today is Normal.");
  } else if (temp > 20) {
    alert("Today's Weather is cool.");
  } else if (temp > 10) {
    alert("OMG! Today's weather is so Cool.");
  } else {
    alert("Brrr! It is really cold today.");
  }
}

// Q # 17
// Write a program to create a calculator for +,-,*, / & % using if
// statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

var num1 = Number(prompt("Enter the first number:"));
var num2 = Number(prompt("Enter the second number:"));
var operation = prompt("Enter an operation (+, -, *, /, %):");
var result;
if (operation === "+") {
  result = num1 + num2;
  alert(num1 + "+"+  num2 + " is " + result);
} else if (operation === "-") {
  result = num1 - num2;
    alert(num1 + "-"+  num2 + " is " + result);

} else if (operation === "*") {
  result = num1 * num2;
    alert(num1 + "*"+  num2 + " is " + result);

} else if (operation === "/") {
  if (num2 === 0) {
    alert("Division by zero is not allowed!");
  } else {
    result = num1 / num2;
      alert(num1 + "/"+  num2 + " is " + result);

  }
} else if (operation === "%") {
  result = num1 % num2;
    alert(num1 + "%"+  num2 + " is " + result);

} else {
  alert("Invalid operation!");
}

//  Q # 18 :
// Write a program that takes user input day name. If the day is
// Monday, Tuesday, Wednesday, Thursday or Friday, then show
// “It’s a week day”. If the day is Saturday then show “It’s
// weekend”. If the day is Sunday then show “Yay! It’s a holiday”.

var day = prompt("Enter a day to check its status ").toLowerCase();

if (
  day === "monday" ||
  day === "tuesday" ||
  day === "wednesday" ||
  day === "thursday" ||
  day === "friday"
) {
  alert("It's a week day");
} else if (day === "saturday") {
  alert("It's weekend");
} else if (day === "sunday") {
  alert("Yay! It's a holiday");
} else {
  alert("Please enter a valid day name!");
}

// Q # 19 :
// Write a program that takes input user’s score, if it’s greater
// than 50, say “You are passed”. Otherwise, show “Try again!”

var score = Number(prompt("Please enter your score"));

if (isNaN(score)) {
  alert("Please enter a valid number");
}
else {
  if (score > 50) {
    alert("You are passed");
  } else {
    alert("Try again!");
  }
}

// Q # 20 :
// Write a program that:
// a. takes 2 numbers.
// b. tells whichever number is the greater (higher) number.
// c. tells if they are equal
// Show the output to make sure it works (e.g. "The greater
// number of 5 and 10 is 10.").

var num1 = Number(prompt("Enter the first number:"));
var num2 = Number(prompt("Enter the second number:"));

if (num1 == num2) {
  alert("The two numbers " + num1 + " & " + num2 + " are equal");
} else if (num1 > num2) {
  alert("The greater numbers  of " + num1 + " and " + num2 + " is " + num1);
}
else if (num1 < num2) {
  alert("The lesser numbers  of " + num1 + " and " + num2 + " is " + num2);
}
else {
  alert("Enter a valid number ");
}

// Q # 21 :
// Write a program that:
// a. takes 1 input, a language code (e.g. "es", "de", "en")
// b. tells "Hello, World" for the given language, for atleast 3
// languages. It should default to returning English.
// (Hint: use translate.google.com to check the translation of
// hello world in different languages)

 var langCode = prompt("Enter a language code (e.g. 'en', 'es', 'de'):").toLowerCase();
    var greeting;

    if (langCode === "es") {          // Spanish
        greeting = "¡Hola, Mundo!";
    }
    else if (langCode === "de") {     // German
        greeting = "Hallo, Welt!";
    }
    else if (langCode === "fr") {     // French
        greeting = "Bonjour le monde!";
    }
    else {                            // Default English
        greeting = "Hello, World!";
    }

    alert(greeting);


// Q # 22 : 
//  Write a program to take input a number & tell whether it’s a
// positive or negative number.

var num = Number(prompt("Enter a number:"));
if (num > 0) {
  alert(num + " is a positive number");
} else if (num < 0) {
  alert(num + " is a negative number");
} else {
  alert("The number is zero");
}


// Q # 23 :
// The Pluralizer: Write a program that:
// a. takes 2 inputs, a noun and a number.
// b. tells the number and pluralized form, like "5 cats" or "1
// dog".
// Run the program for a few different inputs and show the result
// to make sure it works.

var number=Number(prompt("Enter a number"));
var noun=prompt("Enter a noun");

var plural_noun;


if(number===1){
  plural_noun=noun;
}
else if(number>1){
  plural_noun = noun+"s";
}

alert(number + " "+plural_noun);













