console.log("Hello World!");

// single line comment
// 1 let me create a file
// 2 i will then create a function that calculates the age of 2 persons
// 3 i will then create a function that calculates the area of a circle

// multiline comment
/* 
1 let me create a file
2 i will then create a function that calculates the age of 2 persons
3 i will then create a function that calculates the area of a circle
*/

console.log("This will log too");

// DECLARING VARIABLES
// var =>
// let =>
// const =>

console.log(a, "a before a was initialized");
// console.log(b, "b before b was initialized");
// console.log(c, "c before c was initialized");

var a = 1; // var hoists
let b = 2;

console.log(a, "a");
console.log(b, "b");

a = 2; // reassigned
b = 1; // reassigned

const c = 3;
// c = 5 => would give error

console.log(a, "a");
console.log(b, "b");
console.log(c, "c");

// var => globally scoped and also can be block scoped
// let => block scoped
// const => block scoped

const add = () => {
  const aAdd = 5;
  const bAdd = 6;
  return aAdd + bAdd;
};

// console.log(aAdd, "aAdd");
// console.log(bAdd, "bAdd");

console.log(add(), "add function \n");

// Data types in JS
// number
// string
// boolean
// null
// undefined
// object
// symbol
// BigInt

// DRY principle

// first letter of the first word is small letter,
// the first letter of the second word will be a capital letter and so on and so forth

// letThemGoThere => camel case  => javascript
// let_them_go_there => snake case => python

// const PI = 3.142

// Number

let num1 = 2;
let num2 = 3;

const num3 = num1 + num2;
const num4 = num1 / num2;
const num5 = num1 * num2;
const num6 = num1 - num2;
const num7 = num1 ** num2; // exponent 2 * 2 * 2
const remainder = num1 % num2;

console.log(num3, num4, num5, num6, num7, remainder);

// String

let str1 = "Hello";
let str2 = "World";

// string concatenation
const str3 = str1 + " " + str2;

// template literals
const str4 = `${str1} ${str2} and these are the numbers i have created earlier ${num3} ${num4} ${num5} ${num6} ${num7} ${remainder}`;

console.log(str4);

// Boolean

let bool1 = true;
let bool2 = false;

const bool3 = num1 < num2;
const bool4 = num1 >= num2;
const bool5 = num1 <= num2;

const bool6 = num1 == num2; // compares the value
const bool7 = str1 === str2; // compares the value and the data type

console.log(bool3);

// Flow control

// if
// if else
// if else if
// switch

const team = "CHELSEA"; // ''
const opponent = "LIVERPOOL";

const teamScore = 0;
const opponentScore = 1;

if (teamScore > opponentScore) {
  console.log(`MY TEAM: ${team} won the match against ${opponent}`);
} else if (teamScore === opponentScore) {
  console.log(`MY TEAM: ${team} drew the match against ${opponent}`);
} else {
  console.log(`MY TEAM: ${team} lost the match against ${opponent}`);
}

// SWITCH
switch (team && opponent) {
  case teamScore > opponentScore:
    console.log(`MY TEAM: ${team} won the match against ${opponent} switch`);
    break;
  case teamScore === opponentScore:
    console.log(`MY TEAM: ${team} drew the match against ${opponent} switch`);
    break;
  default:
    console.log(`MY TEAM: ${team} lost the match against ${opponent} switch`);
}
