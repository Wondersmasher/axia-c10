// FUNCTION DECLARATION
const value = addTwoNumbers(1, 2);
function addTwoNumbers(a, b) {
  const result = a + b;
  console.log(result, "Result from inside the function");
  return result;
  //   console.log("After return"); This will not run because of the return above
}
console.log(value, "Result from outside the function");

// 2. FUNCTION EXPRESSION
const subtractTwoNumbers = function (a, b) {
  const result = a - b;

  console.log(result, "Result from inside the function of subtractTwoNumbers");
  return result;
};
const value2 = subtractTwoNumbers(1, 2);
console.log(value2, "Result from outside the function of subtractTwoNumbers");

// 3. ARROW FUNCTION
const subtractTwoNumbers2 = (a, b) => {
  const result = a - b;
  console.log(result, "Result from inside the arrow function");
  return result;
};

const value3 = subtractTwoNumbers2(1, 2);
console.log(value3, "Result from outside the arrow function");

// Function in functions

const funcInFunc = (a, b) => {
  // parent function
  const result = a + b;
  console.log(result, "Result from inside the parent function");

  function innerFunc() {
    // chid function
    const result2 = result * a * b;
    console.log(result2, "Result from inside the inner function");
    return result2;
  }
  return innerFunc;
};
console.log(funcInFunc(1, 2)(), "Result from outside the parent function");

// 4. IIFE => Immediately Invoked Function Expression // anonymous function
//  - IIFE is a function that is executed immediately
//  - IIFE is a function that is executed once

(function (a, b) {
  const result = a + b;
  console.log(result, "Result from inside the IIFE");
})(1, 2);

// 5. VARIADIC FUNCTION
// - A function that can take any number of arguments

function sum(...args) {
  let result = 0;
  for (let i = 0; i < args.length; i++) {
    result += args[i];
  }
  return result;
}

console.log(sum(1));
console.log(sum(1, 2, 4));
console.log(sum(1, 10, -5, 23, 21, 32, 43, 11, 2, 3));

// 6. DEFAULT PARAMETERS (BONUS)

function add(a = 4, b = 10) {
  return a + b;
}

console.log(add(6, 40), "Add with parameters");
console.log(add(5), "Add with one parameters");
console.log(add(undefined, 20), "Add with one parameters");
console.log(add(), "Add with no parameters");
