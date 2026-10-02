// Optional Chaining, Logical Operators & Ternary Operator
// &&, ||, ?:

const name = "Bayjid";
const age = 19;
const isMatured = true;


// && — প্রথম condition true হলে দ্বিতীয় value return করে
const test = isMatured && name;
console.log(test); // Bayjid


// || — প্রথম value truthy হলে সেটি return করে
// প্রথমটি falsy হলে দ্বিতীয় value return করে
const test2 = isMatured || name;
console.log(test2); // true


// Ternary — condition true হলে প্রথম value, false হলে দ্বিতীয় value
const isMarried = isMatured ? true : false;
console.log(isMarried); // true


const person = {
    name: "Bayjid",
    age: 19,
    address: {
        city: "Dhaka",
        country: "Bangladesh"
    }
};


// Without optional chaining
// Property না থাকলে error হতে পারে
console.log(person.address.city);


// With optional chaining — property না থাকলে undefined return করে
console.log(person.address?.city);
console.log(person.contact?.phone); // undefined