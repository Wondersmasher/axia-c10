const obj = {
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
  fnc: () => {},
  und: undefined,
  nul: null,
  arr: [1, 2, 3, 4, 5, 6],
  obj: {},
};

// console.log(obj);

const firstNameType1 = obj.firstName;
const firstNameType2 = obj["firstName"];

const longitude = obj.address.coordinates.longitude;
// console.log(longitude, "longitude");

const longitude2 = obj["address"]["coordinates"]["longitude"];
// console.log(longitude2, "longitude2");

// console.log(firstNameType1, firstNameType2);
// const addressKeys = Object.keys(obj.address);
// console.log(addressKeys, "address keys");
const keys = Object.keys(obj); // ["firstName", "lastName" .....]

// console.log(keys, "keys");

for (let i = 0; i < keys.length; i++) {
  const key = keys[i]; // keys[0] => "firstName", keys[1] => "lastName", keys[2] => "age", keys[3] => "address", keys[4] => "fnc", keys[5] => "und", keys[6] => "nul", keys[7] => "arr", keys[8] => "obj"
  const value = obj[key];
  // console.log("key: ", key, "value: ", value);
}

// console.log(obj, "OBJ Before reassignment");

obj.firstName = "John";
obj.lastName = "Adams";

// console.log(obj, "OBJ after reassignment");

obj.country = "Nigeria";

// console.log(obj, "OBJ after adding a new property");

delete obj.fnc;

// console.log(obj, "OBJ after deleting a property");

const deleteKeys = (strings) => {
  for (const key of strings) {
    // console.log(`Deleting ${key} key from object`);
    delete obj[key];
  }
};

deleteKeys(["firstName", "lastName", "address", "akdfj ajlfk ajdkjf aldj "]);
// console.log(obj, "OBJ after deleting multiple properties");

//

const object = {
  a: "some string",
  b: 42,
  c: false,
};
const objectKeys = Object.keys(object); // returns only the keys of an object in an array
const objectValues = Object.values(object); // returns only the values of an object in an array
const objectEntries = Object.entries(object);
const objectHasOwn = Object.hasOwn(object, "c");
// Object.freeze(object);
const isFrozen = Object.isFrozen(object);
Object.seal(object);
const isSealed = Object.isSealed(object);
const isExtensible = Object.isExtensible(object);

delete obj.a;
delete obj.b;
delete obj.c;

object.a = 2;

console.log(object, "object after reassignment");
console.log(objectKeys, "object keys");
console.log(objectValues, "object values");
console.log(objectEntries, "object entries");
console.log(objectHasOwn, "object has own");
console.log(isFrozen, "object isFrozen");
console.log(isSealed, "object isSealed");
console.log(isExtensible, "object isExtensible");

// for (const [key, value] of objectEntries) {
//   console.log(`${key}: ${value}`);
// }

const is = Object.is(obj, object);

console.log(is, "is");
