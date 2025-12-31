// chap 5 to 7
//  Q # 1 :Write a program that take two numbers & add them in a new
// variable. Show the result in your browser.

var num1=5;
var num2=7;
var Num1= num1 + num2;

alert("Sum of "+num1+ " and "+ num2+ " is "+ Num1);

//  Q # 2 :Repeat task1 for subtraction, multiplication, division &
// modulus. E.g.

var num3=13;
var num4=4;
var Num2= num3 - num4;

alert("Result  of Subtracting "+num4+ " from  "+ num3+ " is "+ Num2);

var num5=13;
var num6=4;
var Num3= num5 * num6;

alert("Result  of multiplying "+num5+ " and  "+ num6+ " is "+ Num3);

var num7=13;
var num8=4;
var Num4= num7 / num8;

alert("Result  of dividing "+num7+ " by  "+ num8+ " is "+ Num4);

var num9=13;
var num10=4;
var Num5= num9 % num10;

alert("Remainder  of dividing "+num9+ " by  "+ num10+ " is "+ Num5);

// Q # 3 :  Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.

// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 3”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 4”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// after addition is: 11”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 10”.
// k. Show the remainder after dividing the variable’s value by
// 3. Output : “The remainder is : 1”

var num;
alert("Value after variable declaration is : " +num);

num=3;
alert ("Initial value "+num)
num++;
alert ("Value after increment is "+num);

num+=7;
alert("Value after addition is "+num);
num-=1;
alert("Value after decremment is "+num);
num=num%9;
alert ("The remainder is "+num);

// Q # 4 :Cost of one movie ticket is 600 PKR. Write a script to store
// ticket price in a variable & calculate the cost of buying 5 tickets
// to a movie. Example output:

var cost = 600;
var newcost;
newcost = cost * 5;
alert("Total cost to buy 5 movie tickets is " + newcost);

//Q # 5 :  Write a script to display multiplication table of any number in
// your browser

var num = 6;
document.write("<h2> Table of 6 </h2>");
for (i = 1; i <= 10; i++) {
  document.write(num + " * " + i + " = " + num * i + "<br>");
}

// Q : Temperature conversion
var Ctemp=12;
var Fehtemp;
Fehtemp=(Ctemp * 9/5)+ 32;

var Ftemp=68;
var CelTemp;
CelTemp=(Ftemp-32)*5/9;

alert(Ctemp + "°C is " +Fehtemp +  "°F" + "\n"+ Fehtemp + "°F is " +CelTemp +  "°C" );

// Q # 6 :Write a program to implement checkout process of a shopping
// cart system for an e-commerce website. Store the following in
// variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

document.write("<h2>Product details</h2>")
var price1=1000;
var quantity1=2;

var price2=2000;
var quantity2=3;

var shipchg= 1500;

var total= price1+ quantity2+ price2+ quantity2+shipchg;

var result="Total cost of your order is "+total;

document.write("Price of item 1 is "+ price1 + "<br>");
document.write("Quantity  of item 1 is "+ quantity1 + "<br>");
document.write("Price of item 2 is "+ price2 + "<br>");
document.write("Quantity of item 2 is "+ quantity2 + "<br>");
"<br>"
document.write("Shipping charges  "+ shipchg+ "<br>");

// document.write("Total cost of your order is  "+ total);

// Q # 7 : Write a script to take total marks & marks obtained by a
// student. Compute the percentage & show the result in your
// browser.

var marks = 1100;
var obtained = 899;

var percentage = (obtained * 100) / 1100;
percentage = percentage.toFixed(2);
document.write("<h1>Marksheet</h1>");
document.write("Total marks are " + marks + "<br>");
document.write("Obtained  marks are " + obtained + "<br>");
document.write("Total percentage is  " + percentage);

// Q # 8 : Assume we have 10 US dollars & 25 Saudi Riyals. Write a script
// to convert the total currency to Pakistani Rupees. Perform all
// calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104 Pakistani Rupee and
// 1 Saudi Riyal = 28 Pakistani Rupee)

var totalInPKR = 10 * 280 + 25 * 74;
document.write("<h1>Currency in PKR</h1>");
document.write(
  "The Total of the two currencies after conversion is " + totalInPKR
);

// Q # 9 : Write a program to initialize a variable with some number
// and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression.

var calculations=((10+5)*2)/2;
alert(calculations);

// Q # 10 : The Age Calculator: Forgot how old someone is? Calculate
// it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: “They are either NN or NN
// years old”.

var currentYear = 2025;

var birthYear = 2006;

var age1 = currentYear - birthYear;
var age2 = age1 - 1;

document.write("<h1>The Age Calculator</h1>");
document.write("Current year :" + currentYear + "<br>");
document.write("Birth year :" + birthYear + "<br>");
document.write("He is either " + age1 + " or " + age2 + " years old");

// Q # 11 The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The area is
// NN”. (Hint : Area of a circle = π r2, π = 3.142)

var radius = 5;

var pi = 3.142;

var circumference = 2 * pi * radius;

var area = pi * radius * radius;

// document.write("<h2>Geometrizer</h2>");
// document.write("Radius of circle: " + radius + "<br>");
// document.write("The circumference is: " + circumference + "<br>");
// document.write("The area is: " + area);

// Q # 12 :  Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

var a = 10;

document.write("Result:<br>");
document.write("The value of a is: " + a + "<br>");
document.write("................................................<br><br>");

document.write("The value of ++a is: " + ++a + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a++ is: " + a++ + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of --a is: " + --a + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a-- is: " + a-- + "<br>");
document.write("Now the value of a is: " + a + "<br>");

// Q # 13. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

var a = 2,
  b = 1;
var result = --a - --b + ++b + b--;

document.write(" the value of a is: " + a + "<br>");
document.write(" the value of b is: " + b + "<br>");
document.write(" the value of result is: " + result + "<br>");

// Q # 12 Ever wonder how
// much a “lifetime supply” of your favorite snack is? Wonder no
// more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.

// Output the result to the screen like so: “You will need NNNN to
// last you until the ripe old age of NN”.

var favoriteSnack = "Chocolate chips";

var currentAge = 19;
var maxAge = 80;
var snackPerDay = 2;

var remainingYears = maxAge - currentAge;
var totalDays = remainingYears * 365;
var totalSnacks = totalDays * snackPerDay;
document.write("<h1>The Lifetime Supply Calculator</h1>");
document.write("Favourite Snacks " + favoriteSnack + "<br>");

document.write("Current age " + currentAge + "<br>");
document.write("Estimated  age " + maxAge + "<br>");
document.write("Snacks per day " + snackPerDay + "<br>");

document.write(
  "You will need " +
    totalSnacks +
    " " +
    favoriteSnack +
    " to last you until the ripe old age of " +
    maxAge
);
