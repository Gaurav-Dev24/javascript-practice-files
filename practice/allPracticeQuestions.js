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

// Write a javascript prog. to check two numbers and return true if any of the numbers are 100 or there sum is equal to 100.

// const getNumber = (n1,n2) => {
//     (n1 === 100 || n2 === 100 || (n1+n2) === 100) ? console.log(true) :  console.log(false);
// }
// getNumber(20,80);       // true
// getNumber(100,50);      // true
// getNumber(60,100);      // true
// getNumber(20,40);       // false
// getNumber(10,50);       // false

// // Write a prog. to get the extension of the filname

// const getExtension = (fileName) => {
//     indexOfDot = fileName.lastIndexOf(".");
//     console.log(`Extension of ${fileName} file is : `  + fileName.slice(indexOfDot));
// } 
// getExtension("abcgfgsgds.xml");     //Extension of abcgfgsgds.xml file is : .xml
// getExtension("gsgds.html");     //Extension of gsgds.html file is : .html
// getExtension("sg.ds.css");       //Extension of sgds.css file is : .css
// getExtension("abcgf.js");       //Extension of abcgf.js file is : .js

// Write a prog. in javascript to replace every character in a given string with the character following it in the alphabet.

// const moveCharsFwd = (str) => 
// str
// .split('')
// // charCodeAt() will give us the integer between 0 to 65535 representing UTF-16 code
// // String.fromCharCode() will give us the equivalent string of the UTF-16 code
// .map(char => String.fromCharCode(char.charCodeAt(0) + 1))
// .join('');

// console.log(moveCharsFwd("abcd"));      // bcde
// console.log(moveCharsFwd("defg"));      // efgh
// console.log(moveCharsFwd("ghij"));      // hijk

// WAP to get the current date in format "mm-dd-yy", "mm/dd/yyyy" or "dd-mm-yyyy" , "dd/mm/yyyy"

// const getCurrentDate = () => {
//     const now =  new Date();
//     const days = now.getDate() < 10 ? "0"+now.getDate() : now.getDate() ;
//     const months = now.getMonth()+1 < 10 ? "0"+(now.getMonth()+1) : (now.getMonth()+1) ;
//     const years = now.getFullYear();
        
//     console.log(`Format is "DD-MM-YYYY" or "DD/MM/YYYY" : ${days}-${months}-${years} or ${days}/${months}/${years}`);
//     console.log(`Format is "MM-DD-YYYY" or "MM/DD/YYYY" : ${months}-${days}-${years} or ${months}/${days}/${years}`);
// }

// getCurrentDate("05/11/2020");
// o/p-
// Format is "DD-MM-YYYY" or "DD/MM/YYYY" :24-06-2023 or 24/06/2023
// Format is "MM-DD-YYYY" or "MM/DD/YYYY" :06-24-2023 or 06/24/2023

// Write a javascript prog to create a new string adding "!New" in front of a given string. If the given string already consist of "!New" in it then return the original string.

// const newString = (str) => (str.includes("New!") ? console.log(str) : console.log("New! " + str));
// // const newStr = (str) => (str.indexOf("New!") === 0 ? console.log(str) : console.log("New! " + str));

// newString("car");
// newString("New! toy");
// newStr("car");
// newStr("New! toy");
 