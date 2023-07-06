// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

// const lessThan100 = (x,y) => {
//     (x + y < 100) ? console.log(true) : console.log(false); 
// }

// lessThan100(77, 30) // return false
// lessThan100(20,40) // return true
// lessThan100(90,40) // return false
// lessThan100(20,50) // return true

// Create a function that takes an array containing only numbers and return the first element.

// const getFirstValue = (arr) => {
//     console.log(arr[0]);
// }

// getFirstValue([1, 2, 3]) // return 1
// getFirstValue([80, 5, 100]) // return 80
// getFirstValue([-500, 0, 50]) // return -500

// Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.

// const nextEdge = (side1, side2) => {
// 	let maxRange = (side1 + side2) - 1 ;
//     console.log(maxRange);
// }

// nextEdge(8, 10) // print 17
// nextEdge(5, 7) // print 11
// nextEdge(9, 2) // print 10

// Create a function that takes length and width and finds the perimeter of a rectangle.

// const findPerimeter = (l,w) => {
//     let perimeter = 2*(l+w);
//     console.log(perimeter);
// }

// findPerimeter(6, 7) // print 26
// findPerimeter(20, 10) // print 60
// findPerimeter(2, 9) // print 22

// A student learning JavaScript was trying to make a function. His code should concatenate a passed string name with string "Edabit" and store it in a variable called result. He needs your help to fix this code.

// const nameString = (name) => {
// 	var b = "Edabit";
// 	var result = name + b ;
//   	console.log(result);
// }

// nameString("Mubashir") // print "MubashirEdabit"
// nameString("Matt") // print "MattEdabit"
// nameString("javaScript") // print "javaScriptEdabit"

// Write a function that takes an integer minutes and converts it to seconds.

// const convertSeconds = (minutes) => {
// 	minutes = minutes * 60;
// 	console.log(minutes);
// }

// convertSeconds(5) // print 300
// convertSeconds(3) // print 180
// convertSeconds(2) // print 120

// Assign the following three lines of text into the single variable myStr using escape sequences.

// FirstLine
//      \SecondLine
// ThirdLine

// topic- Escape Sequences in Strings
// \'	single quote
// \"	double quote
// \\	backslash
// \n	newline
// \t	tab
// \r	carriage return
// \b	backspace
// \f	form feed

// const myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
// console.log(myStr);

// Use Bracket Notation to Find the Last Character in a String

// const lastName = "Lovelace";
// const lastLetterOfLastName = lastName[lastName.length - 1]; 
// console.log(lastLetterOfLastName)

// Use Bracket Notation to Find the Nth-to-Last Character in a String

// const lastName = "Lovelace";
// const secondToLastLetterOfLastName = lastName[lastName.length - 2]; 
// console.log(secondToLastLetterOfLastName)

// In this challenge, we provide you with a noun, a verb, an adjective and an adverb. You need to form a complete sentence using words of your choice, along with the words we provide

// const myNoun = "dog";
// const myAdjective = "big";
// const myVerb = "ran";
// const myAdverb = "quickly";

// const wordBlanks = "I have a "+ myAdjective + " " + myNoun + " who "+ myVerb + " very "+ myAdverb + "."; 
// console.log(wordBlanks);

// Access Multi-Dimensional Arrays With Indexes

// One way to think of a multi-dimensional array, is as an array of arrays. When you use brackets to access your array, the first set of brackets refers to the entries in the outermost (the first level) array, and each additional pair of brackets refers to the next level of entries inside.

// Example

// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [[10, 11, 12], 13, 14]
// ];

// const subarray = arr[3]; // return [[10, 11, 12], 13, 14]
// const nestedSubarray = arr[3][0]; // return [10, 11, 12]
// const element = arr[3][0][1]; // 11

// 