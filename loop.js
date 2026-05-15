for (let i = 0; i < 20; i++) {
  console.log(i, "for");
}

let i = 0;
while (i < 20) {
  console.log(i, "while");
  i++;
}

i = 0;
do {
  console.log(i, "do while");
  i++;
} while (i < 20);

const arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
// 0  1  2  3  4
//   length = 5

for (const element of arr) {
  console.log(element, "for of");
}

for (const element in arr) {
  console.log(element, "for in");
}

const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
};

for (const key in obj) {
  console.log(key, obj[key]);
}

// ARRAYS

const arr1 = [1, 2, 3, 4, 5];

arr1.pop();
console.log(arr1);

// AT

const arr2 = [1, 2, "3", 4, true, false, {}, [], null, undefined];
const val = arr2.at(2);
const val2 = arr2.at(-2);

console.log(val, "val", val2, "val2");

// CONCAT

const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = ["g", "h", "i"];
const array4 = array1.concat(array2, array3);

console.log(array4);

// FILL

const arrr = Array(10).fill("jaljdfla dfl ajdjf ajdflj adfj");

const arr5 = [1, 2, 3, 4, 5];
const arr6 = arr5.fill(0);
console.log(arr6, "arr6");

console.log(arrr);

// FILTER

const arr7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arr8 = arr7.filter((value, index) => value % 2 === 0);
console.log(arr8, "arr8");
// FIND

const arr9 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arr10 = arr9.find((value, index) => value % 2 === 0);
console.log(arr10, "arr10");

// POP , SHIFT, PUSH, UNSHIFT

const arr11 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr11.pop(); // removes the last element
console.log(arr11, "pop");
arr11.shift(); // removes the first element
console.log(arr11, "shift");
arr11.push(11, 12, 14); // adds the last element
console.log(arr11, "push");
arr11.unshift(0, 7, 9.8); // adds the first element
console.log(arr11, "unshift");

// FOR EACH

const arr12 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr12.forEach((value, index) => console.log(value, index));

// MAP

const arr13 = arr12.map((value, index) => value * value);
console.log(arr13, "arr13");
