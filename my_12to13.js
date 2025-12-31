
// Chap 12 to 13
// Q # 1 :
// Write a program to check whether the given input number is
// divisible by 3 or else show a message “Number is not divisible
// by 3”.

var num=Number(prompt("Enter a number to check divisible by 3 or not "));

if(num%3===0){
    alert(num+" is divisible by 3")
}
else{
    alert(num+" is  not divisible by 3")
}

//   Q # 2 :
// Write a program that checks whether the given input is an even
// number or an odd number.

var num = Number(prompt("Enter a number:"));

if (num % 2 === 0) {
  alert(num + " is an EVEN number");
} else {
  alert(num + " is an ODD number");
}

// Q # 3
// if/else statement with the following condition:
// If the variable age is greater than 18, output "Old enough",
// otherwise output "Too young".

var age = Number(prompt("Enter your age:"));

if (age > 18) {
    alert("Old enough");
} else {
    alert("Too young");
}

// Q # 4
// Write a program that prompts the user for their name, and then
// displays a special greeting to that person if their name is the
// same as yours. If the name entered by the user is anything
// other than your name, your code should not produce any
// output.

var myName = "Muhammad Ehtaisham Ali";
var userName = prompt("Enter your name:");

if (userName === myName) {
  alert("Hello " + myName + "! Nice to see you");
}

// Q # 5
// Write a program to check whether the given input number is
// divisible by 3 or not by using Switch Case statements. Show a
// message “Number is not divisible by 3” or “Number is divisible
// by 3”.

var num = Number(prompt("Enter a number:"));

switch (num % 3) {
  case 0:
    alert(num+ " is divisible by 3");
    break;
  default:
    alert(num +" is not divisible by 3");
}

// Q # 6
// Write a program that takes a character(number or string) in a
// variable & checks whether the given input is a number,
// uppercase letter or lower case letter. (Hint: ASCII codes:-
// A=65, Z=90, a=97, z=122)

var ch = prompt("Enter a character:");

var ascii = ch.charCodeAt(0);

if (ascii >= 48 && ascii <= 57) {
  alert("The given input is a NUMBER");
} else if (ascii >= 65 && ascii <= 90) {
  alert("The given input is an upperCase letter");
} else if (ascii >= 97 && ascii <= 122) {
  alert("The given input is a lowerCase letter");
} else {
  alert("The given input is neither a number nor a letter");
}

// Q # 8 :
// Write a program that takes time as input from user in 24 hours
// clock format like: 1900 = 7pm. Implement the following case
// using if, else & else if statements

var time = Number(prompt("Enter time in 24-hour format (e.g. 1900):"));

    if (time >= 0 && time < 1200) {
        alert("Good morning");
    }
    else if (time >= 1200 && time < 1700) {
        alert("Good afternoon");
    }
    else if (time >= 1700 && time < 2100) {
        alert("Good evening");
    }
    else if (time >= 2100 && time <= 2359) {
        alert("Good night");
    }
    else {
        alert("Invalid time entered");
    }

// Q # 9
// Write a program that takes a calendar year in YYYY format in
// a variable. Check & notify the user whether it is a leap year or
// not.

var year = Number(prompt("Enter a year in YYYY format:"));

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  alert(year + " is a leap year");
} else {
  alert(year + " is not a leap year");
}

// Q # 10
// Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then give
// message “ Please enter your password”
// ii. Check if both passwords are same. If they are same,
// show message “Correct! The password you entered
// matches the original password”. Show “Incorrect
// password” otherwise.

var correctPassword = "abc123";

var userPassword = prompt("Enter your password:");

if (userPassword === "" || userPassword === null) {
  alert("Please enter your password");
} else if (userPassword === correctPassword) {
  alert("Correct! The password you entered matches the original password");
} else {
  alert("Incorrect password");
}

// Q # 11
// Write a program that adds an else statement to the following
// script to display “You are not Fahad”
// var firstName = "Ali";
// if (firstName === "Fahad") {
// document.write("Hello Fahad!");
// }

var firstName = "Ali";

if (firstName === "Fahad") {
  document.write("Hello Fahad!");
} else {
  document.write("You are not Fahad");
}

// Q # 12
// This if/else statement does not work. Try to fix it:

// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

// Answer : correct code

var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else{
greeting = "Good evening";
}

//   Q # 13 :
// Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

var num1 = Number(prompt("Enter the first integer:"));
var num2 = Number(prompt("Enter the second integer:"));

if (num1 > num2) {
  alert(num1 + " is larger than " + num2);
} else if (num2 > num1) {
  alert(num2 + " is larger than " + num1);
} else {
  alert("Both numbers are equal");
}

//Q # 14
//  Write a program that takes input a number from user & state
// whether the number is positive, negative or zero.

var num = Number(prompt("Enter a number:"));

if (num > 0) {
  alert(num + " is a positive number");
} else if (num < 0) {
  alert(num + " is a negative number");
} else {
  alert("The number is zero");
}

//Q # 15
// Ask the user what the current hour is. If the hour is between
// 6 and 9 a.m., tell the user, "Breakfast is served." If the hour is
// between 11 a.m. and 1 p.m., tell the user, "Time for lunch." If
// the hour is between 5 and 8 p.m., tell the user, "It's dinner
// time." For any other hours, tell the user, "Sorry, you'll have to
// wait, or go get a snack." (Hint: Store the hour in 24 hours clock
// format i.e. 14 for 2pm , 15 for 3pm)

var hour = Number(prompt("Enter the current hour:"));

if (hour >= 6 && hour <= 9) {
  alert("Breakfast is served.");
} else if (hour >= 11 && hour <= 13) {
  alert("Time for lunch.");
} else if (hour >= 17 && hour <= 20) {
  alert("It's dinner time.");
} else {
  alert("Sorry, you'll have to wait, or go get a snack.");
}

//  Q # 16 :
// Write a program that stores value in a variable & tell whether
// the type of that variable is a "number", "string", "boolean" or
// “undefined”

  var value = "Ehtaisham Ali";

    var type = typeof value;

    if (type === "number") {
        alert("The type of the variable is number");
    }
    else if (type === "string") {
        alert("The type of the variable is string");
    }
    else if (type === "boolean") {
        alert("The type of the variable is boolean");
    }
    else if (type === "undefined") {
        alert("The variable is undefined");
    }
    else {
        alert("The variable is of another type:");
    }

// Q # 17 :
// Write a program that takes a character (i.e. string of length 1)
// and returns true if it is a vowel, false otherwise.

var char = prompt("Enter a single character:").toLowerCase();

if (
  char === "a" ||
  char === "e" ||
  char === "i" ||
  char === "o" ||
  char === "u"
) {
  alert(true);
} else {
  alert(false);
}

// Q # 18 :  Choose the correct comparison operator to display "true",
// when:
// 10 is NOT equal to 8.
// Answer
alert (10 !== 8)

// Q # 19 :
// Use a switch statement to rewrite the following JavaScript
// code. Prompt the user for the number of a month rather than
// setting it to 8:

var month = Number(prompt("Enter  the number of month"));

switch (month) {
  case 1:
    alert("January");
    break;
  case 2:
    alert("February");
    break;
  case 3:
    alert("March");
    break;
  case 4:
    alert("April");
    break;
  case 5:
    alert("May");
    break;
  case 6:
    alert("June");
    break;
  case 7:
    alert("July");
    break;
  case 8:
    alert("August");
    break;
  case 9:
    alert("September");
    break;
  case 10:
    alert("October");
    break;
  case 11:
    alert("November");
    break;
  case 12:
    alert("December");
    break;
  default:
    alert("Invalid month number");
}

// Q # 20 : 
//  Use a conditional (ternary) operator for this exercise:
// If the variable age is a value below 18, the value of the variable
// voteable should be "Too young",
// otherwise the value of voteable should be "Old enough".

var age = Number(prompt("Enter your age:"));

var voteable = (age < 18) ? "Too young" : "Old enough";

alert(voteable);
