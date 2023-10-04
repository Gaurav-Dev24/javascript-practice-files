// Closures
// Example
// function x(){ // Outer Function
//     var a = 7;
//     function y(){ // Inner Function
//         console.log(a);
//     }
//     y();
// }
// x();
// o/p-->
// 7

// What if we return the function y() in the above code

// function x(){ // Outer Function
//     var a = 7;
//     function y(){ // Inner Function
//         console.log(a);
//     }
//     return y; // returning y()
// }
// var z = x();
// console.log(z)
// z();
// o/p--> refernce of the function y() will be returned

// ƒ y(){ // Inner Function
//     console.log(a);
// }

// 7

// ********** Uses of Closures **********
// Module Design Pattern
// Currying
// Functions like once
// Memoize
// Maintaining state in async world
// setTimeouts
// Iterators and many more ....


// ************* setTimeout + closures Interview questions ************
// ====================================================================

// Example 1 -- setTimeout alongwith closure
// function x(){
//     var i = 1;
//     setTimeout(function(){
//         console.log(i);
//     }, 3000);
//     console.log("Namaste Closures")
// }
// x();

// o/p -->
// Namaste Closures -- immediately printed
// 1 --- printed after 3 seconds

// Example 2 --- If we want to print 1 to 5 one after another
// function x(){
//     var i = 1;
//     for (var i = 1; i <= 5; i++) {
//         setTimeout(function(){
//             console.log(i);
//         }, i * 3000);
//     }
//     console.log("Namaste Closures")
// }
// x();

// o/p --
// Namaste Closures
// 6
// 6
// 6
// 6
// 6

// Note -- As we know that, var i stored the refernce of "i" not the exact value, and JS engine will not wait for the setTimeout to be executed, it will execute the for loop and by the time setTimeout is excuted the value of i = 6, therefore we get the above output.

// To get the desired output we have two ways ---
// First way is using "let"

// function x(){
//     for (let i = 1; i <= 5; i++) {
//         setTimeout(function(){
//             console.log(i);
//         }, i * 3000);
//     }
//     console.log("Namaste Closures")
// }
// x();

// o/p -- 
// Namaste Closures
// 1
// 2
// 3
// 4
// 5

// Note -- We get the desired out because "let" is block scope so each time the loop executed the new copy of "i" is being passed to setTimeout giving the desired result

// Second Way is by using closure function & var

function x(){
    for (var i = 1; i <= 5; i++) {
        function close(i){ // passing "i" to the closure function
            setTimeout(function(){ // enclosing the setTimeout within closure to get desired copy
                console.log(i);
            }, i * 3000);
        }
        close(i);
    }
    console.log("Namaste Closures")
}
x();

// o/p -- 
// Namaste Closures
// 1
// 2
// 3
// 4
// 5

// Note -- Despite using var keyword we are getting the desired output because we enclose the setTimeout within closure function which is "close(i)" and passed "i" into it. This creates a new copy each time the for loop is executed.