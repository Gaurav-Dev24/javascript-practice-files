// Promise is used to handle asynchronous operations & returns promise object as "Key/Value" pairs.
// let take an example to understand, suppose we are creating an e-commerce website using some async APIs.

// cart
// const cart = ["Shoes","Pants", "Kurtas"];

// API 1 -- is an api which gives us orderId
// createOrder(cart); 
// API 2 -- is an api which uses the orderId to proceed to payment
// proceedToPayment(orderId); 


// ******** Handling ASYNC OPERATIONS using CallBacks ********
// ***********************************************************

// === How async operations are handled before promises ? ===
// ==> Before promises async operations are handled by callback functions, for example

//  we will wrap the proceedToPayment(orderId) function into callback function
// function(){
//     proceedToPayment(orderId);
// }

// then we design our API 1 in such a way that we can pass callback function into the api to get orderId, for example
// createOrder(cart, function(){
//     proceedToPayment(orderId);
// });

// Now it's the responsibility of "createOrder" api to create order and call the "proceedToPayment" api to proceed to payment once the order is created.
//  ==> So, in this way callback handles async operations before promises, but there was a major issue with callbacks which is called as "Callback hell" or "Inversion of control". Here we are waiting or dependent on API 1 to perform the task, which might cause an issues likes "caling the api twice" or "may be we won't get any data from the API 1" as API 1 is an external API created by some other developers etc. 



// ******** Handling ASYNC OPERATIONS using PROMISE ********
// ***********************************************************
// === How async operations are handled by promises ? ===
// Now we will design our API 1 in such a way that it will no longer takes any callback but it will just take the cart details which is declared above in line number 5 and it will return a promise.

// const promise = createOrder(cart); // returns promise object as "Key/Value" pairs

// Now we will attch callback function to promise obj. in our case ite is promise in line 39, for example

// promise.then(function(orderId){
//     proceedToPayment(orderId);
// });

// ******* CONCLUSION ************
// When handling async operations with callback we loose the control as we are dependent on some external api i.e. API 1 to resolve it, which may cause issues as discussed above in line 30. Whereas in promise we have full control over the code as we are not directly passing callbacks to api instead we attach it to promise using ".then". 
// Apart form this the code will be resolved only once with status of either of two "resolved or rejected" eliminating "Inversion of control". 

// ****************** PROMISE OBJECT *************************
// ***********************************************************

// Taking a public api of github
// const GITHUB_API = "https://api.github.com/users/Gaurav-Dev24";

// using fetch() to make external call of api and return us a promise

// const user = fetch(GITHUB_API);
// console.log(user);

// user.then(res => console.log(res));
// o/p--
// PROMISE OBJECT looks like 
// Promise {<pending>}
// [[Prototype]]: Promise // tells the type of object
// [[PromiseState]]: "fulfilled" // state of the promise
// [[PromiseResult]]: Response // response of the promise


// Response {type: 'cors', url: 'https://api.github.com/users/Gaurav-Dev24', redirected: false, status: 200, ok: true, …}
// body: ReadableStream
//     locked: false
// [[Prototype]]: ReadableStream
// bodyUsed: false
// headers: Headers {}
// ok: true
// redirected: false
// status: 200
// statusText: ""
// type: "cors"
// url: "https://api.github.com/users/Gaurav-Dev24"
// [[Prototype]]: Response


// *************** Things to Remember ****************
// 1. Promise obj. data/response is immutable
// 2. Promise always resolves the callback only once.
// 3. Promise solves the problem of "Inversion of control".

