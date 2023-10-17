// // Write a function shout that takes a string and returns this string duplicated. In addition, the return should be logged. Example: shout('Fire') should return 'FireFire' and should log 'FireFire'.

// // topic- Logging and Strings
// function shout(message){
//     console.log(message+message);
//     return message+message;
//     }

// shout("Fire") // FireFire // FireFire

// // Write a function length that takes a string and returns the number of characters of the string. Example: length('sun') should return 3.

// // topic- String: length
// function lengthChar(char){
//     let charNumber = char.length;
//     return charNumber;
//     }

// lengthChar("Gaurav"); // 6

// //  Write a function toCase that takes a string and returns that string in lowercase and uppercase with - as delimiter. Example: toCase('Mthatha') should return 'mthatha-MTHATHA'.

// //  topic- String: toUpperCase()
// function toCase(word){
//     let charLower = word.toLowerCase();
//     let charUpper = word.toUpperCase();

//     return charLower + '-' + charUpper;
//     }

// toCase("Mthatha"); // 'mthatha-MTHATHA'

// // Write a function shortcut that takes two strings and returns the initial letters of theses strings. Example: shortcut('Amnesty', 'International') should return 'AI'.

// // topic- String: charAt()
// function shortcut(str1,str2){
//     return  str1.charAt(0) + str2.charAt(0);
//     }

// shortcut('Amnesty', 'International') // 'AI'

// // Write a function firstChar, which returns the first character that is not a space when a string is passed.Example: firstChar(' Rosa Parks ') should return 'R'.

// // topic- String: trim()
// function firstChar(name){
//     let char = name.trim();
//     return char.charAt(0);
//     }

// firstChar(' Rosa Parks '); // 'R'

// // Write a function indexOfIgnoreCase taking two strings and determining the first occurrence of the second string in the first string. The function should be case insensitive. Example: indexOfIgnoreCase('bit','it') and indexOfIgnoreCase('bit','IT') should return 1.

// // topic- String: indexOf()
// function indexOfIgnoreCase(s1,s2){
//     s1 = s1.toLowerCase()
//     s2 = s2.toLowerCase();
//     return s1.indexOf(s2);
//     }

// indexOfIgnoreCase('bit','IT'); // 1

// // Write a function secondIndexOf, taking two strings and determining the second occurrence of the second string in the first string. If the search string does not occur twice, -1 should be returned. Example: secondIndexOf('White Rabbit', 'it') should return 10.

// // topic- String: indexOf() with from index
// function secondIndexOf(s1,s2){
//     let result = s1.indexOf(s2);
//     let secondResult = s1.indexOf(s2, result+1);
//     return secondResult;
//     }

// secondIndexOf('White Rabbit', 'it'); // 10

// // Write a function firstWord, taking a string and returning the first word in that string. The first word are all characters up to the first space. Example: firstWord('see and stop') should return 'see'.

// // topic- String: substr()
// function firstWord(s1){
//     let firstSpace = s1.indexOf(' ');
//     return s1.substr(0, firstSpace);
//     }

// firstWord('see and stop'); // 'see'

// // Write a function normalize, that replaces '-' with '/' in a date string. Example: normalize('20-05-2017') should return '20/05/2017'.

// // topic- String: replace()
// function normalize(date){
//     date = date.replace('-','/');
//     let newDate = date.replace('-','/');
//     return newDate;
//     }

// normalize('20-05-2017'); // '20/05/2017'

// // Write a function toFahrenheit that converts a temperature from Celsius to Fahrenheit. Example: toFahrenheit(0) should return 32.

// // topic- Fahrenheit
// function toFahrenheit(c){
//     let f = (c*1.8)+32;
//     return f;
//     }

// toFahrenheit(0); // 32

// // Write a function onesDigit that takes a natural number and returns the ones digit of that number. Example: onesDigit(2674) should return 4.

// // topic- Modulo
// function onesDigit(n){
//     let onesDigit = n % 10;
//     return onesDigit;
//     }

// onesDigit(2674); // 4

// // Write a function mean that takes 2 numbers and returns their mean value. Example: mean(1, 2) should return 1.5.

// // topic- Parentheses
// function mean(x,y){
//     let mean= (x+y)/2;
//     return mean;
//     }

// mean(1, 2); // 1.5

// // Write a function hypotenuse that calculates the length of the hypotenuse of a right triangle. The length of the two legs is passed to the function. Tip: In a right triangle the Pythagorean theorem is valid. If a and b are the lengths of the two legs and c is the length of the hypotenuse, the following is true: a² + b² = c². Since 3² + 4² = 5² applies, hypotenuse(3, 4) should return 5.

// // topic - Math object
// function hypotenuse(l,b){
//     let hyp = Math.sqrt(Math.pow(l,2) + Math.pow(b,2));
//     return hyp;
//     }

// hypotenuse(3,4); // 5

// // Write a function midrange, that calculates the midrange of 3 numbers. The midrange is the mean of the smallest and largest number. Example: midrange(3, 9, 1) should return (9+1)/2 = 5.

// // topic- Math.min() && Math.max()
// function midrange(x,y,z){
//     let midrange = (Math.min(x,y,z) + Math.max(x,y,z)) / 2;
//     return midrange;
//     }

// midrange(4,6,10); // 7

// // Write a function area that calculates the area of a circle. The function is given the radius of the circle. Example: area(1) should return π and area(2) should return 4 * π.

// // topic- Math.PI
// function area(r){
//     let area = (r*r) * Math.PI;
//     return area;
//     }

// area(10); // 100 *  PI

// // Write a function round100 that rounds a number to the nearest hundred. Example: round100(1749) should return 1700 and round100(856.12) should return 900.

// // topic - rounding
// function round100(number) {
//     var integer = Math.floor(number);
//     var remainder = integer % 100;

//     if (remainder < 50) {
//       return integer - remainder;
//     } else {
//       return integer + (100 - remainder);
//     }
//   }

//   console.log(round100(1749));    // Output: 1700
//   console.log(round100(856.12));  // Output: 900
//   console.log(round100(49.999));     // Output: 0
//   console.log(round100(50));     // Output: 100

// // Write a function dice that returns like a dice a random number between 1 and 6.

// // topic- Random numbers
// function dice(){
//     let n1 = Math.floor(Math.random() * 6) + 1;
//     console.log(n1);
// }

// dice(); // it will return random number between 1 to 6

// Write a function add that takes a string with a summation task and returns its result as a number. Two natural numbers should be added. The summation task is a string of the form '102+17'.

// topic- parseInt()
// function add(str){
//     let n1 = parseInt(str, 10);
//     let indexPlus = str.indexOf('+');
//     let strAfterPlus = str.substr(indexPlus + 1);
//     let n2 = parseInt(strAfterPlus, 10);
//     console.log(n1 + n2);
//     }
// add('1+2'); // return 3
// add('10+100') // return 110
// add('10123+456') // return 10579

// Write a function nand that takes two Boolean values. If both values are true, the result should be false. In the other cases the return should be true.

// topic- boolean, nand gate operation
// function nand(x1,x2){
//     x1 = x1 && x2;
//     x1 = !x1;
//     console.log(x1);
// }

// nand(true,true); // return false
// nand(true,false); // return true
// nand(false,false); // return true
// nand(false,true); // return true

// Write a function nor that takes two Boolean values. If both values are false, the result should be true. In the other cases the return should be false.

// topic- boolean, nor gate operation
// function nor(x1,x2){
//     x1 = x1 || x2;
//     x1 = !x1;
//     console.log(x1);
// }

// nor(false,false); // return true
// nor(true,false); // return false
// nor(true,true); // return false
// nor(false,true); // return false

// Write a function xor that takes two Boolean values. If both values are different, the result should be true. If both values are the same, the result should be false.

// topic- boolean, xor gate operation
// function xor(x1,x2){
//     console.log(x1 !== x2);

// }

// xor(true,true); // return false
// xor(false,true); // return true
// xor(true,false); // return true
// xor(false,false); // return false

// Write a function isEven that checks if a passed number is even. If the given number is even, true should be returned, otherwise false.

// topic- strict equality
// function isEven(n){
//     console.log(n % 2 === 0);
// }

// isEven(0); // print true
// isEven(101); // print false
// isEven(37); // print false
// isEven(100); // print true

// Write a function isThreeDigit that checks if a number is greater than or equal to 100 and less than 1000.

// topic- comparing numbers
// function isThreeDigit(n){
//     console.log (n >= 100 && n < 1000);
// }

// isThreeDigit(100) // print true
// isThreeDigit(999) // print true
// isThreeDigit(99) // print false
// isThreeDigit(1000) // print false

// Write a function equals that checks two values for strict equality. If the two values are equal, the string 'EQUAL' should be returned. If they are unequal, you should get 'UNEQUAL'.

// topic- if condition
// function equal(a,b){
//     if (a === b){
//         return "EQUAL";
//     }
//     return"UNEQUAL";
// }

// var result1 = equal(1,1);
// var result2 = equal(1,2);
// var result3 = equal("gaurav","gaurav");
// let result4 = equal("gaurav","Gaurav");

// console.log(result1); // print EQUAL
// console.log(result2); // print UNEQUAL
// console.log(result3); // print EQUAL
// console.log(result4); // print UNEQUAL

// Write a function addWithSurcharge that adds two amounts with surcharge. For each amount less than or equal to 10, the surcharge is 1. For each amount greater than 10, the surcharge is 2.

// function addWithSurcharge(a, b) {

//     let surcharge = 0;

//     if (a <= 10) {
//       surcharge = surcharge + 1;
//     } else {
//       surcharge = surcharge + 2;
//     }

//     if (b <= 10) {
//       surcharge = surcharge + 1;
//     } else {
//       surcharge = surcharge + 2;
//     }

//     console.log(a + b + surcharge);
//   }
// addWithSurcharge(5,15);  // 23
// addWithSurcharge(10, 10);  // 22
// addWithSurcharge(11, 10);  // 24
// addWithSurcharge(11, 11);  // 26

// Write a function addWithSurcharge that adds two amounts with surcharge. For each amount less than or equal to 10, the surcharge is 1. For each amount greater than 10 and less than or equal to 20, the surcharge is 2. For each amount greater than 20, the surcharge is 3.

// function addWithSurcharge(a, b) {
//   let surcharge = 0;
//   if (a <= 10) {
//     surcharge = surcharge + 1;
//   } else if (a > 10 && a <= 20) {
//     surcharge = surcharge + 2;
//   } else {
//     surcharge = surcharge + 3;
//   }
//   if (b <= 10) {
//     surcharge = surcharge + 1;
//   } else if (b > 10 && b <= 20) {
//     surcharge = surcharge + 2;
//   } else {
//     surcharge = surcharge + 3;
//   }
//   console.log(a + b + surcharge);
// }

// addWithSurcharge(1, 1) // returns 4
// addWithSurcharge(10, 10) // returns 22
// addWithSurcharge(11, 10) // returns 24
// addWithSurcharge(21, 11) // returns 37.

// Write a function setFirstElement that takes an array and an arbitrary variable. The variable should be inserted as the first element in the array. The array should be returned.

// function setFirstElement(anArr, firstElement) {
//   anArr[0] = firstElement;
//   console.log(anArr);
// }

// setFirstElement([1, 2], 3) // returns [ 3, 2 ].

// setFirstElement([], 1) // returns [ 1 ].

// setFirstElement(['a', 'b', 'c'], 'x') // returns [ 'x', 'b', 'c' ].

// Write a function sort that takes an array filled with 3 numbers and returns these 3 numbers sorted in ascending order as an array.

// function sort([a,b,c]){
//     let arr = [a,b,c];
//     arr.sort((a,b) => a-b);
//     console.log(arr);
// }

// sort([1,2,3]); returns [ 1, 2, 3 ]
// sort([2,3,1]); returns [ 1, 2, 3 ]
// sort([3,2,1]); returns [ 1, 2, 3 ]
// sort([3,1,2]); returns [ 1, 2, 3 ]

// Write a function rotate that rotates the elements of an array. All elements should be moved one position to the left. The 0th element should be placed at the end of the array. The rotated array should be returned.

// function rotate(arr){
//     let moveLast = arr.shift();
//     arr.push(moveLast);
//     console.log(arr);
// }

// rotate(["a","b","c"]); returns [ 'b', 'c', 'a' ]
// rotate([1,2]); returns [ 2, 1 ]
// rotate([1, 'b', 'c', 37]) returns [ 'b', 'c', 37, 1 ]

// Write a function add that adds an element to the end of an array. However, the element should only be added if it is not already in the array.

// function add(arr, addValue){
//     if(!arr.includes(addValue)){
//         arr.push(addValue)
//     }
//     console.log(arr)
// }

// add([1, 2], 2); // [ 1, 2 ]
// add([1, 2], 3) // [ 1, 2, 3 ]
// add(['J'], 'S') // [ 'J', 'S' ]
// add(['J'], 'J') // [ 'J' ]

// Write a function concatUp that concatenate two arrays. The longer array should be appended to the shorter array. If both arrays are equally long, the second array should be appended to the first array.

// function concatUp(firstArray, secondArray) {

//     if (secondArray.length >= firstArray.length) {
//       return firstArray.concat(secondArray);
//     }

//     return secondArray.concat(firstArray);
//   }

//   concatUp([5, 7], [6]) returns [ 6, 5, 7 ]
//   concatUp(['x'], ['a', 'b']) returns [ 'x', 'a', 'b' ]
//   concatUp([5, 7], [6, 8]) returns [ 5, 7, 6, 8 ]

// Write a function halve that copies the first half of an array. With an odd number of array elements, the middle element should belong to the first half.

// const halve = (arr) => {
//   let halveIndex = Math.ceil(arr.length / 2);
//   arr = arr.slice(0, halveIndex);
//   console.log(arr);
// }

// halve([1, 2, 3, 4, 5]); // returns [ 1, 2, 3 ]
// halve([1, 2, 3, 4]); // returns [ 1, 2 ]
// halve([1, 2, 3]); // returns [ 1, 2 ]
// halve([1, 2]); // returns [ 1 ]

// Write a function list that takes an array of words and returns a string by concatenating the words in the array, separated by commas and - the last word - by an 'and'. An empty array should return an empty string.

// function list(words) {
//   if (words.length === 0) {
//     return "";
//   }

//   if (words.length === 1) {
//     return words[0];
//   }

//   let wordsExLast = words.slice(0, words.length - 1);
//   let lastWord = words[words.length - 1];
//   return wordsExLast.join(", ") + " and " + lastWord;
// }

// list([]);
// list(["love"]);
// list(["Ernie", "Bert"]);
// list(["Huey", "Dewey", "Louie"]);
// list(["C", "C++", "Python", "PHP"]);

// Write a function flat that flattens a two-dimensional array with 3 entries. 

// Example: flat(loshu) should return [4, 9, 2, 3, 5, 7, 8, 1, 6]. Thereby loshu is the magic square from the example above.

// function flat(arr) {
//   const flattened = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       flattened.push(arr[i][j]);
//     }
//   }
//   console.log(flattened); 
// }

// flat([[], [], []]) // returns []
// flat([[1], [], []]) // returns [ 1 ].
// flat([[1], [2], [3]]) // returns [ 1, 2, 3 ].
// flat([[1, 2], [3, 4], [5, 6]]) // returns [ 1, 2, 3, 4, 5, 6 ].

// ********** Milan Practice *******************
// *** Basics History ****

// Introduced in 1995 
// Netscape browser programmer "Brandon Eich" created in just 10 days
// Internet Explorer (Microsoft) -- JScript
// Names ---
// 1. Mocha -> // 2. LiveScript -> // 3. JavaScript
// ECMA International -- Founded in 1996 --> set standards for JS
//  Javascript + ECMA == ECMAScript (ECMA--rule)
// All browsers can use javascript for programming

// ECMA- Script Version 
// ES- 1 -- 1997 (till 2009)
// ES- 5 -- 2009 (lots of new features where added)
// ES- 6 -- 2015 (till 2015) (Biggest update of JS) --> Modern JS

// ***** Features of JS *******
// case sensitive
// dynamically typed
// cross-platform
// interpreted lang.
// A compiled language is converted into machine code so that the processor can execute it. An interpreted language is a language in which the implementations execute instructions directly without earlier compiling a program into machine language
// Backward compatible

// **** Javascript Variables *****
// variables --> stores data that can be used or changed when needed
// There are "keywords" to define variables in JS
// -- var (global scope)
// -- let (local scope/blocked scope)
// -- const (local scope/blocked scope)

// Rules for defining variables
// 1. Variable names must start with a letter, underscore (_), or a dollar sign ($)
// eg->
// var firstName = "Gaurav"; --(camel case)
// var first_Name = "Gaurav"; --(snake case)
// var _firstName = "Gaurav";
// var $firstName = "Gaurav";

// Note-- Varibales name never starts with numbers

// 2. You cannot use reserved keywords as variable names.
// (e.g., if, else, while, function, class, etc)
// var 123Name = "Gaurav"; -- error - Invalid or unexpected token
// console.log(123Name);

// VAR 
// -- It is keyword to declare variables in JS, the variables declared with "var" are global scope
// -- Variables declared with var are hoisted (process in JS where variables are called even before initialization)
// -- variable declarations and function declarations are hoisted

// console.log(name); // undefined
// console.log(age); // undefined
// console.log(sex); // undefined
// console.log(bool); // undefined
// console.log(data); // undefined
// console.log(arr); // undefined
// console.log(obj); // undefined

// Primitive Data Type
var name = "Milan"; // string identifier 
// console.log(name); // Milan
var age = 23; // number identifier 
// console.log(age); // 23 
var sex = null; // null identifier 
// console.log(sex); //null
var bool = true; //boolean identifier 
var data = undefined; //boolean identifier 

// Non-Primitive data types
var arr = [1,2,3]; // array identifier 
var obj = {
  user: "Milan",
  age: 24,
  Mobile: 895815
}; // object identifier 

message1(); // calling the function

// Traditional ways
function message1(){
  console.log("Traditional hello")
  var first = "Gaurav";
} // Traditional Hello
// undefined

console.log(message2); //undefined
// Arrow function
var message2 = () => {
  console.log("Arrow function Hello")
} // undefined

// Notes-- 
// variables when hoisted they have "undefined" allocated in the memory
// when normal function are hoisted they have exact copy of there declaration
  +9