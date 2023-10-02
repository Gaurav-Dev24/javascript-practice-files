// ************** ASYNC FUNCTION ****************
// ==============================================

// 1. It uses "async" keyword to create async function
// 2. It always returns promise.
// 3. We can directly return "promise" as well as "normal values" inside async function.
// 4. One thing to note is that, if we return normal value inside async function then async will automatically wrap it into a promise. For Example :-

// Returning NORMAL VALUE inside the async function
// async function getData(){
//     return "Hello Normal Value";
// }
// const data = getData();
// console.log(data); 
// o/p-- instead of returning normal value we get the output as promise

// Promise {<fulfilled>: 'Hello Normal Value'}
// [[Prototype]]: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: "Hello Normal Value"

// to get data from promise we use ".then" like :-
// data.then(res => console.log(res));
// o/p--
// Hello Normal Value


// Returning PROMISE inside async function

// first of lets create a simple promise
// const p = new Promise((resolve,reject) => {
//     resolve("Promise Resolved");
// })

// async function getData(){
//     return p;
// }
// const data = getData();
// console.log(data) // return the promise as it is

// o/p--
// Promise {<fulfilled>: 'Promise Resolved'}
// [[Prototype]]: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: "Promise Resolved"


// ************** AWAIT FUNCTION ****************
// ==============================================

// 1. "Await" along with "Async" are used to handle promises
// 2. Always use await before the promise
// 3. "Await" keyword will always be used in "Async" function


// ********* How do we use to handle promises before "ASYNC/AWAIT"? ***********
// ============================================================================

// Promise
// const p = new Promise((resolve,reject) => {
//     resolve("Promise Resolved");
// })

// ****** USING NORMAL FUNCTION *******
// ====================================
// 1. In normal function we use ".then" to get the response
// EX:-
// function getData(){
//     p.then(res => console.log(res)) // ".then" is used in normal function
// }
// getData(); // o/p-- Promise Resolved


// ********* How do we use to handle promises using "ASYNC/AWAIT"? ***********
// ============================================================================

// ****** USING ASYNC/AWAIT FUNCTION *******
// =========================================
// 1. In async/await we use "await" to get the response
// async function getData(resolve, reject) {
//     const val = await p; // instead of ".then" we are using await
//     console.log(val);
// };
// getData(); // o/p-- Promise Resolved


// ******* Understanding the difference b/w "Normal function" & "async/await" to handle promises *******
// =====================================================================================================

// Now lets create a promise which takes some time to get the response
// const p = new Promise((resolve,reject) => {
//     setTimeout(()=>{
//         resolve("Promise Resolved")
//     }, 10000);
// });

// **** In Normal function ****
// ============================
// function getData1(){
    // console.log("Hello World")
//     // JS engine will not wait for the promise to resolve
//     p.then(res => console.log(res));
//     console.log("Hello Promise");
// }
// getData1();
// o/p -- as we know that js engine will not wait for promise response in line 99, it will print 
// Hello World -- at 1st then 
// Hello Promise -- will be printed & after 10 sec 
// Promise Resolved --- will be printed on to the console, which is bit confusing for developers

// ***** In async/await *****
// ==========================
// async function getdata2(){
        // console.log("Hello World")
//     // JS engine will wait for the promise to resolve
//     const val = await p;
//     console.log("Hello Promise")
//     console.log(val);
// }
// getdata2();
// o/p -- Anything before await will be executed and then js engine will wait for the promise to resolve and it will only move to next line once the promise will be resolved.
// Hello World -- will be printed as it is declared before await then after 10 seconds
// Hello Promise, Promise Resolved -- will be printed immediately

// CONCLUSION from above code is as follwed:-
// 1. In normal function JS engine will not wait for the promise to resolve and move on to the next line
// 1. In async/await function anything before await will be executed, once JS encounters "await" keyword it will wait for the promise to resolve and it only move on to the next line once the promise is resolved


// ******** What if there are multiple promises to resolve? *********
// ==================================================================

// Let see the examples for multiple promises handling with async/await function
// Taking the time duration of 1st promise more than the 2nd promise then
// const p1 = new Promise((resolve,reject) => {
//     setTimeout(()=>{
//         resolve("Promise Resolved")
//     }, 10000);
// });

// const p2 = new Promise((resolve,reject) => {
//     setTimeout(()=>{
//         resolve("Promise Resolved")
//     }, 5000);
// });


// async function handleMultiplePromises(){
//     // JS engine will wait for the promise to resolve
    
//     const val1 = await p1;
//     console.log("Hello Promise 1");
//     console.log(val1);
    
    
//     const val2 = await p2;
//     console.log("Hello Promise 2")
//     console.log(val2);
// }
// handleMultiplePromises();

// In the above code things to note are:-
// 1. As promise 1 is taking more time (10 seconds) to reslove and promise 2 is taking less time (5 seconds) then JS engine will wait for maximum time duration (10 secs) and then prints all the "console.log" statements at a time.

// o/p-- all will be printed after 10 seconds
// Hello Promise 1
// Promise Resolved
// Hello Promise 2
// Promise Resolved


// Taking the time duration of 1st promise less than the 2nd promise then
const p1 = new Promise((resolve,reject) => {
    setTimeout(()=>{
        resolve("Promise Resolved")
    }, 5000);
});

const p2 = new Promise((resolve,reject) => {
    setTimeout(()=>{
        resolve("Promise Resolved")
    }, 10000);
});

async function handleMultiplePromises(){
    // JS engine will wait for the promise to resolve
    
    const val1 = await p1;
    console.log("Hello Promise 1");
    console.log(val1);
    
    
    const val2 = await p2;
    console.log("Hello Promise 2")
    console.log(val2);
}
handleMultiplePromises();

// In the above code things to note are:-
// 1. As promise 1 is taking less time (5 seconds) to reslove and promise 2 is taking more time (10 seconds) then JS engine will resolve the promise 1 after 5 secs and then promise 2 after 10 sec.

// o/p-- 
// after 5 seconds
// Hello Promise 1
// Promise Resolved

// after 10 seconds 
// Hello Promise 2
// Promise Resolved