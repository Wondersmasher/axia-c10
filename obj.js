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
};

console.log(obj);

const firstNameType1 = obj.firstName;
const firstNameType2 = obj["firstName"];

console.log(firstNameType1, firstNameType2);

const keys = Object.keys(obj); // ["firstName", "lastName" .....]

console.log(keys, "keys");

for (let i = 0; i < keys.length; i++) {
  const key = keys[i];
  const value = obj[key];
  console.log(key, value, "value");
}

console.log(obj, "OBJ Before reassignment");

obj.firstName = "John";
obj.lastName = "Adams";

console.log(obj, "OBJ after reassignment");

obj.country = "Nigeria";

console.log(obj, "OBJ after adding a new property");

delete obj.fnc;

console.log(obj, "OBJ after deleting a property");

const deleteKeys = (strings) => {
  for (const key of strings) {
    console.log(`Deleting ${key} key from object`);
    delete obj[key];
  }
};

deleteKeys(["firstName", "lastName"]);
console.log(obj, "OBJ after deleting multiple properties");
