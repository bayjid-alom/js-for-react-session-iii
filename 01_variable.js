// var - accessible before declaration due to hoisting
console.log(status);
var status = "Single";

let age = 20;
const name = "Bayjid Alom";
// name = "Bayjid Alom Jihad"; // const variable cannot be reassigned

const arr = [10, 20, 30, 40, 50];
arr.push(100, 200); // const prevents reassignment, but array contents can still be modified
console.log(arr);