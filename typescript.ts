const obj: ObjType = {
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

let str2: string | number;
let num2: number;

str2 = "Hello World!";
str2 = 4;

const bool: boolean = 6 < 10;

const und: undefined = undefined;
const nul: null = null;

const strArr: string[] = ["Hello", "World"];
const numArr: number[] = [1, 2, 3, 4, 5];
const combArr: (string | number | boolean)[] = ["Hello", 2, "World", 4, true];
const objArr: ObjType[] = [];

// const add = (a: number, b: number) => {
//   if (b === undefined) {
//     return a;
//   }
//   const result = a + b;
//   return result;
// };

console.log(add(1, 5));

// type Stats = "pending" | "approved" | "rejected";
// let stat: Stats = "rejected";

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
type RecordObjType = Record<string, string>;

const example: RecordObjType = {
  test: "2",
};

// BUG: ASSIGNMENT: TRANSFORM ALL THE FUNCTIONS IN functions.js TO USE TYPESCRIPT
