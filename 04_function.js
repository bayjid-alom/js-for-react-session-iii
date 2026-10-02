// Traditional Function
function add(a, b) {
  console.log(a, b); // Output: 10 20
}

add(10, 20);


// Function Expression
const multiply = function (a, b = 1) {
  console.log("Multiply value is :", a * b);   // Multiply value is : 100
};

multiply(10, 10);


// Arrow Function → Single line, implicit return
const square = (number) => number * number;

console.log("Square value is:", square(20)); // Output: Square value is: 400


// Arrow Function → Multiline, explicit return required
const calculate = (x, y) => {
  const add = x + y;
  const sub = x - y;
  const result = add * sub;
  return result;
};

console.log("Result is:", calculate(25, 15)); // Output: Result is: 400