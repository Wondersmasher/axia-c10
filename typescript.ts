const objj: ObjType = {
  firstName: "Samson",
  lastName: "Gideon",
  age: 25,
  address: {
    city: "Pune",
    state: "Maharashtra",
    coordinates: {
      longitude: 1,
      latitude: 2,
    },
  },
};

type ObjType = {
  firstName: string;
  lastName: string;
  age: number;
  address: {
    city: string;
    state: string;
    coordinates: {
      longitude: number;
      latitude: number;
    };
  };
};

const str: string = "Hello World!";
const num: number = 10;

let str20: string | number;
let num20: number;

str20 = "Hello World!";
str20 = 4;

const bool: boolean = 6 < 10;

const und: undefined = undefined;
const nul: null = null;

const strArr: string[] = ["Hello", "World"];
const numArr: number[] = [1, 2, 3, 4, 5];
const boolArr: boolean[] = [true, false, true];
const combArr: (string | number | boolean)[] = ["Hello", 2, "World", 4, true];
const objArr: ObjType[] = [];

const add = (a: number, b: number) => {
  // if (b === undefined) {
  //   return a;
  // }
  const result = a + b;
  return result;
};

// console.log(add(1, 5));

type Stats = "pending" | "approved" | "rejected";

let stat: Stats = "rejected";

type OB1 = {
  firstName: string;
  lastName: string;
  middleName?: string;
  hobby: string;
};

type OB2 = {
  age: number;
  state: string;
  country: string;
  streetNumber: 1 | 2 | 3;
};

// type OB3 = {
//   firstName: string;
//   lastName: string;
//   middleName?: string;
//   age: number;
//   address: string;
//   country: string;
//   streetNumber: 1 | 2 | 3;
// }; NOT IDEAL

type OBConcatenate = OB1 & OB2;

const obConcatenate: OBConcatenate = {
  age: 21,
  state: "Lagos",
  country: "Nigeria",
  firstName: "Gideon",
  lastName: "Peter",
  streetNumber: 3,
  middleName: "Jacob",
  hobby: "Writing code, watching football.",
};

const ob1: OB1 = {
  firstName: "Isaac",
  lastName: "Newton",
  middleName: "Philip",
  hobby: "Playing music, watching the news, playing footbal",
};

const ob2: OB2 = {
  age: 50,
  state: "New York",
  country: "United States",
  streetNumber: 1,
};

// UTILITY TYPES
// Partial => makes all fields optional
// Required => makes all fields required
// Readonly => only allows you to read
// Pick => allows you to pick specific fields
// Omit => allows you to omit specific fields
// Array => allows you to create an array
// Record => allows you to create an object

type PartialObjType = Partial<ObjType>;
type RequiredObjType = Required<PartialObjType>;
type ReadonlyObjType = Readonly<ObjType>;
type PickObjType = Pick<ObjType, "firstName" | "lastName">;
type OmitObjType = Omit<ObjType, "firstName" | "lastName">;
type ArrayObjType = Array<ObjType>; // ObjType[]
type ArrayStringOrNumber = Array<string | number>;
type RecordObjType = Record<string, string>;

const example: RecordObjType = {
  test: "2",
  "1 -- adfj aldfj aljdf laldkfj": "3",
};

// BUG: ASSIGNMENT: TRANSFORM ALL THE FUNCTIONS IN functions.js TO USE TYPESCRIPT

const fc = (a: number, b: number) => a + b;

console.log(fc(1, 1));
