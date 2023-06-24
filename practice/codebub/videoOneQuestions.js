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

const newString = (str) => (str.includes("New!") ? console.log(str) : console.log("New! " + str));
// const newStr = (str) => (str.indexOf("New!") === 0 ? console.log(str) : console.log("New! " + str));

newString("car");
newString("New! toy");

// newStr("car");
// newStr("New! toy");

