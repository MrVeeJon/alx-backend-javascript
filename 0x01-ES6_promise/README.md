0x01. ES6 Promises
Weight: 1
Project started Apr 23, 2024

Promises are objects representing the eventual completion or failure of an asynchronous operation. They allow you to handle asynchronous operations more easily and avoid "callback hell".

Creating a Promise
You can create a Promise using the Promise constructor. It takes a function with two parameters: resolve and reject.

Consuming a Promise
Once you have a Promise, you can consume its result using the then and catch methods.

Chaining Promises
You can chain multiple asynchronous operations using then. Each then call returns a new Promise, allowing you to chain them together.

Async/Await (ES8)
Async functions make working with Promises even more convenient. async functions always return a Promise, and the await keyword can be used inside them to wait for the resolution of a Promise.
