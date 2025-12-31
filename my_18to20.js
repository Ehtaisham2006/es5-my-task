// chapter : 18 to 20
// Q # 1 :
// Write a program to display the message “Hello World” 5 times
// in your browser using for loop.

for(var i=0;i<5;i++){
    document.write("Hello World"+ "<br>")
}

// Q # 2.
//  Write a program to print numeric counting from 1 to 10.

for(var i=1;i<=10;i++){
    document.write(i+"<br>");
}

// Q # 3.
//  Write a program to print multiplication table of any number
// using for loop. Table number & length should be taken as an
// input from user.

var num = Number(prompt("Enter a number to print its multiplication table"));
var length = prompt("Enter length of the table");

document.write("<h1>Multiplication Table of " + num + "</h1>");
document.write("<h1>Length  " + length + "</h1>");

for (var i = 1; i <= length; i++) {
  document.write(num + " x " + i + " = " + num * i + "<br>");
}

// Q # 4 :
//  You have an array
// A = [“Nokia”, “Samsung”, “Apple”, “Sony”, “Huawei”]
// Write each element on new line with the help of for loop.

var A=[];
A = ["Nokia","Samsung","Apple","Sony", "Huawei"];

for(var i=0;i<A.length;i++){
    document.write(A[i]+" <br>")
}

Q # 5
Write a program to print items of the following array using for
loop:
fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]

fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (var i = 0; i < fruits.length; i++) {
  document.write(fruits[i] + " <br>");
}
for (var i = 0; i < fruits.length; i++) {
  document.write("Element at index " + i + " is " + fruits[i] + "<br>");
}

// Q # 6.
//  Write a program to initialize an array of N items by using
// prompt. Where N is number of items as entered by the user.

var elements=Number(prompt("Enter the number of items"));

var item1=prompt("Enter element for index 0");
var item2=prompt("Enter element for index 1");
var item3=prompt("Enter element for index 2");
var item4=prompt("Enter element for index 3");

document.write("<h2>Number of items " +elements+ "</h2>")

document.write("<h2>Items:</h2>")
var arr=[];
arr.push(item1);
arr.push(item2);
arr.push(item3);
arr.push(item4);

for(var i=0;i<elements;i++){
    document.write(arr[i]+ "<br>")
}

// Q # 7 :
// Generate the following series in your browser. See example
// output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

document.write("<h2>Counting: </h2>")
for(var i=1;i<=15;i++){
    document.write(i+" ");
}

document.write("<h2>Counting: </h2>")
for(var i=1;i<=15;i++){
    document.write(i+" ");
}

document.write("<h2>Even : </h2>")
for(var i=0;i<=20;i+=2){
    document.write(i+" ");
}

document.write("<h2>Odd : </h2>")
for(var i=1;i<=20;i+=2){
    document.write(i+" ");
}

document.write("<h2>Series  : </h2>")
for(var i=2;i<=20;i+=2){
    document.write(i+"k"+ " ");
}

// Q # 8
// You have an array
//// Write a program to enable “search by user input” in an array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

A = ["cake", "apple pie", "cookie", "chips", "patties"];

var input = prompt("Welcome to Zahid Bakery , what do you want to sir / madam");
var found = false;
for (var i = 0; i < A.length; i++) {
  if (A[i] === input) {
    alert(A[i] + " is available at index " + i + " in our bakery");
    found = true;
    break;
  }
}

if (found === false) {
  alert(input + " is not available in our bakery");
}

// Q # 9 :
//  Write a program to identify the largest number in the given
// array.
A = [24, 53, 78, 91, 12]

var A = [24, 53, 78, 91, 12];

var largest = A[0];

for (var i = 1; i < A.length; i++) {
    if (A[i] > largest) {
        largest = A[i];
    }
}

document.write("Array items: " + A.join(", ") + "<br>");
document.write("The largest number is: " + largest);

// Q # 10 :
//  Write a program to identify the smallest number in the given
// array.
A = [24, 53, 78, 91, 12]

var A = [24, 53, 78, 91, 12];

var smallest = A[0];

for (var i = 1; i < A.length; i++) {
    if (A[i] < smallest) {
        smallest = A[i];
    }
}

document.write("Array items: " + A.join(", ") + "<br>");
document.write("The smallest number is: " + smallest);

var A = [24, 53, 78, 91, 12];

var largest = A[0];
var smallest = A[0];

for (var i = 1; i < A.length; i++) {
    if (A[i] > largest) {
        largest = A[i];
    }
}

for (var i = 1; i < A.length; i++) {
    if (A[i] < smallest) {
        smallest= A[i];
    }
}

document.write("Array items: " + A.join(", ") + "<br>");
document.write("The largest number is: " + largest + "<br>");
document.write("The smallest number is: " + smallest);

// Q # 12.
// Write a program to print multiples of 5 ranging 1 to 100

for(var i=5;i<=100;i+=5){
    document.write(i + " ");
}

// Q # 13.
//  You have given the following arrays:
// var students = ["Ali", "Sami", "Taha", "Inam"];
// var scores = [58, 73, 89, 90];

var students = ["Ali", "Sami", "Taha", "Inam"];
var scores = [58, 73, 89, 90];

document.write("<table border='1' cellpadding='10'>");

document.write("<tr>");
document.write("<th>Students</th>");
document.write("<th>Scores</th>");
document.write("</tr>");

for (var i = 0; i < students.length; i++) {
  document.write("<tr>");
  document.write("<td>" + students[i] + "</td>");
  document.write("<td>" + scores[i] + "</td>");

  document.write("</tr>");
}

document.write("</table >");

// Q # 14.
// Write a program that prints number from start of the array
// to desired stop value. Given array:
// var scores = [12, 45, 3, 22, 34, 50];
// (Hint: take stop value from user)
// E.g. if user gives 3 as input value print 12, 45, 3
// if user gives 34 as input value print 12, 45, 3, 22, 34

var scores = [12, 45, 3, 22, 34, 50];
var req = Number(
  prompt("Enter elements at which u want to stop from  start to end ")
);

for (var i = 0; i < scores.length; i++) {
  document.write(scores[i]+ ", ");

  if (scores[i] === req)
    break;
}

// Q # 15
// You have an array
// A = [ [1,2,3] , [4,5,6] , [7,8,9] ]
// Write each element on new line with the help of nested for
// loops.

A = [ [1,2,3] ,
       [4,5,6] ,
       [7,8,9]
    ]
var rows=3;
var cols=3;

for(var i=0;i<rows;i++){
    for(var j=0;j<cols;j++){
        document.write(A[i][j]+ " ")
    }
    document.write("<br>")
}

// Q # 16.
// Write a program to repeatedly print the value of the variable
// num which is input by user. Value should be decreasing by 0.5
// each time, as long as x Value remains positive.

var num =Number(prompt("Enter a number fropm which u are willing to start "));

for(i=num;i>=0;i-=0.5){
    document.write(i+ ", ");
}

// Q # 17.
//  The even/odd reporter
// Write a for loop that will iterate from 0 to 20. For each
// iteration, it will check if the current number is even or odd, and
// report that to the screen (e.g. "2 is even").

for(var i=0;i<=20;i++)
{
    if(i%2!==0){
        document.write(i+ " is odd"+"<br>")
    }
    else
    {
        document.write(i+ " is even"+"<br>")
    }
}

// Q # 18.
// Write a program to calculate the product of the odd integers
// from 1 to 7.

var oddProduct=1;
for(var i=1;i<=7;i++){
    if(i%2!==0){
        oddProduct*=i;
    }
}

document.write("The product of the odd integers from 1 to 7 is "+oddProduct);

// Q # 19.
//  Write a program that will write out a wedge of stars. The user
// will enter the initial number of stars, and the program will write
// out lines of stars where each line has one few star than the
// previous line. Initial number of stars: 7

document.write("<h1>Pattern of Queation 19</h1>");
for (var i = 7; i >= 1; i--) {
  for (var j = 1; j <= i; j++) {
    document.write("*");
  }
  document.write("<br>");
}

// Q # 20.
// Write a program to create the following patterns in your
// browser. Take number of lines as an input.

document.write("<h1>Pattern 1</h1>");
for (var i = 1; i <= 5; i++) {
  document.write("*****" + "<br>");
}
document.write("<h1>Pattern 2</h1>");
for (var i = 1; i <= 5; i++) {
  for (var j = 1; j <= i; j++) {
    document.write("*");
  }
  document.write("<br>")
}
document.write("<h1>Pattern 3</h1>");
for (var i = 5; i>=1; i--) {
  for (var j = 1; j <= i; j++) {
    document.write("*");
  }
  document.write("<br>")
}
