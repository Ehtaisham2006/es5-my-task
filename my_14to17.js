// //  Q # 1 Declare an empty array using JS literal notation to store
// // student names in future.

//  var studentNames = [];

// //  Q # 2. Declare an empty array using JS object notation to store
// // student names in future.
// var studentNamesObj = new Array();

// // Q #  3. Declare and initialize a strings array.

//  var fruits = ["Apple", "Banana", "Mango"];

// //  Q # 4. Declare and initialize a numbers array.
//   var num = [10, 20, 30, 40];

// //  Q # 5. Declare and initialize a boolean array.

// var boolArr= [true, false, true];

// //Q # 6. Declare and initialize a mixed array.
// var mixedArray = ["Ali", 21, true, 3.5];

// //  Q # 7. Declare and Initialize an array and store available mobile
// // networks in Pakistan.

// var mobileNetworks = ["Jazz", "Zong", "Telenor", "Ufone"];

// //   Q # 8. Declare and Initialize an array and store available education
// // qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS,
// // M. Phil., PhD). Show the listed qualifications in your browser
// // like:

// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

//     // Display qualifications in browser
//     document.write("<h2>Qualifications:</h2>");

//  for (var i=0; i<qualifications.length;i++){
//     document.write((i+1) + ")"+ qualifications[i]+ "<br>");
//  }

// // Q # 9 :   Declare and initialize an empty array to store top movies of
// // 2015. Add movies one by one in an array. Display the elements
// // & length of array in your browser. (Use array’s length method)

// var topMovies2015 = [];

//     topMovies2015.push("Star Wars: The Force Awakens");
//     topMovies2015.push("Jurassic World");
//     topMovies2015.push("Furious 7");
//     topMovies2015.push("Avengers: Age of Ultron");

//     document.write("<h2>Top Movies of 2015</h2>");

//     for (var i = 0; i < topMovies2015.length; i++) {
//         document.write((i + 1) + ") " + topMovies2015[i] + "<br><br>");
//     }

//     document.write("<b>Length of the array:</b> " + topMovies2015.length);

//  Q # 10 : Declare and Initialize an array with your favorite cars. Show
// a. First index of the array
// b. Car at first index of the array
// c. Last index of the array
// d. Car at last index of the array

// var fav_Car = ["Audi", "BMW", "Mercedes", "Tesla"];
//     document.write("<h1>Favourite Cars</h1>")
//     document.write("<b>First index of the array:</b> 0 <br>");

//     document.write("<b>Car at first index:</b> " + fav_Car[0] + "<br>");

//     document.write("<b>Last index of the array:</b> " +  (fav_Car.length - 1) + "<br>");

//     document.write("<b>Car at last index:</b> " + fav_Car[fav_Car.length - 1]);

// Q # 11 :  Write a program to store 3 student names in an array. Take
// another array to store score of these three students. Assume
// that total marks are 500 for each student, display the scores &
// percentages of students like:

// var studentNames = ["Ali", "Irtiza", "Huzaifa"];

// var studentScores = [320, 230, 480];

// var totalMarks = 500;

// for (var i = 0; i < studentNames.length; i++) {

//     var percentage = (studentScores[i] / totalMarks) * 100;

//     document.write("Score of " + studentNames[i] + " is " + studentScores[i] + ". Percentage: " + percentage + "%");
// }

//  Q # 12 Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end &
// add that color to the end of the array. Display the updated
// array in your browser.
// c. Add two more color to the beginning of the array. Display
// the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color &
// color name. Then add the color to desired position/index.
// . Display the updated array in your browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

// var colors = ["Red", "Blue", "Green", "Yellow"];
//     document.write("<b>Initial array:</b> " + colors.join(", ") + "<br><br>");

//     // a. Add color to beginning
//     var colorToAddBeginning = prompt("Enter a color to add to the beginning:");
//     colors.unshift(colorToAddBeginning);
//     document.write("<b>After adding to beginning:</b> " + colors.join(", ") + "<br><br>");

//     // b. Add color to the end
//     var colorToAddEnd = prompt("Enter a color to add to the end:");
//     colors.push(colorToAddEnd);
//     document.write("<b>After adding to end:</b> " + colors.join(", ") + "<br><br>");

//     // c. Add two more colors to the beginning
//     colors.unshift("Purple", "Orange");
//     document.write("<b>After adding two colors to beginning:</b> " + colors.join(", ") + "<br><br>");

//     // d. Delete the first color
//     colors.pop();
//     document.write("<b>After deleting first color:</b> " + colors.join(", ") + "<br><br>");

//     // e. Delete the last color
//     colors.pop();
//     document.write("<b>After deleting last color:</b> " + colors.join(", ") + "<br><br>");

//     // f. Add color at a specific index
//     var indexToAdd = Number(prompt("At which index do you want to add a color?"));
//     var colorToAdd = prompt("Enter the color name to add at index " + indexToAdd + ":");
//     if (indexToAdd >= 0 && indexToAdd <= colors.length) {
//         colors.splice(indexToAdd, 0, colorToAdd);
//         document.write("<b>After adding color at index " + indexToAdd + ":</b> " + colors.join(", ") + "<br><br>");
//     } else {
//         document.write("<b>Invalid index for adding color!</b><br><br>");
//     }

//     // g. Delete color(s) at a specific index
//     var indexToDelete = Number(prompt("At which index do you want to delete color(s)?"));
//     var numToDelete = Number(prompt("How many colors do you want to delete?"));
//     if (indexToDelete >= 0 && indexToDelete < colors.length && numToDelete >= 0) {
//         colors.splice(indexToDelete, numToDelete);
//         document.write("<b>After deleting " + numToDelete + " color(s) from index " + indexToDelete + ":</b> " + colors.join(", ") + "<br><br>");
//     } else {
//         document.write("<b>Invalid index or number for deletion!</b><br><br>");
//     }

//  Q # 13 : Write a program to store student scores in an array & sort
// the array in ascending order using Array’s sort method.

//NOTE :  SKIP , NOT DISCUSSED IN CLASS

// Q # 14. Write a program to sort the below mentioned array:
// var fruits = [“strawberry”, “apple”, “orange”, “banana”];

//NOTE :  SKIP , NOT DISCUSSED IN CLASS

//  Q # 15.
//  Write a program to initialize an array with city names. Copy
// 3 array elements from cities array to selectedCities array.

// document.write("<h3>Cities List</h3>")

// var cities=["Karachi" , "Lahore ","Islamabad" , "Quetta" , "Peshawar" ];

// document.write(cities.join(", "));

// document.write("<h3>Selected Cities List</h3>")
// var selected_cities;
// selected_cities=cities.slice(2,4);
// document.write(selected_cities.join(", "));

// Q # 16 :
// Write a program to create a single string from the below
// mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

// var arr = ["This ", " is ", " my ", " cat"];
// var singleString = arr.join("");

// document.write("<h1>Array:</h1>")
// document.write("<h1>This,is,my,cat</h1><br><br>")
// document.write("<h1>String:</h1>")
// document.write("<h1>"+ singleString+ "</h1><br>");

//  Q # 17
// Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they were
// stored. (FIFO-First In First Out)

// var devices = [];

// devices.push("keyboard");
// devices.push("mouse");
// devices.push("printer");
// devices.push("monitor");

// document.write("<b>Devices:</b><br>");
// document.write(devices.join(", ") + "<br><br>");

// document.write("<b>Out:</b><br>");
// document.write(devices.shift() + "<br>");
// document.write("<b>Out:</b><br>");
// document.write(devices.shift() + "<br>");
// document.write("<b>Out:</b><br>");
// document.write(devices.shift() + "<br>");
// document.write("<b>Out:</b><br>");
// document.write(devices.shift() + "<br>");

// Q # 18 :
// Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In-First
// Out)

// var devices = [];

// devices.push("keyboard");
// devices.push("mouse");
// devices.push("printer");
// devices.push("monitor");

// document.write("<b>Devices:</b><br>");
// document.write(devices.join(", ") + "<br><br>");

// document.write("<b>Out:</b><br>");
// document.write(devices.pop() + "<br>");
// document.write("<b>Out:</b><br>");
// document.write(devices.pop() + "<br>");
// document.write("<b>Out:</b><br>");
// document.write(devices.pop() + "<br>");
// document.write("<b>Out:</b><br>");
// document.write(devices.pop() + "<br>");

//Q # 19 :
//  Write a program to store phone manufacturers (Apple,
// Samsung, Motorola, Nokia, Sony & Haier) in an array. Display
// the following dropdown/select menu in your browser using
// document.write() method:

var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<select>");

for (var i = 0; i < manufacturers.length; i++) {
  document.write("<option>" + manufacturers[i] + "</option>");
}

document.write("</select>");

// Q # 20
//  Declare and initialize an empty multidimensional array.
// (Array of arrays)

var multiArray = [[], [], []];

// Q # 21
// Declare and initialize a multidimensional array representing
// the following matrix:

var multiArray = [
  [0, 1, 2],
  [2, 3, 4],
  [5, 6, 7],
];
