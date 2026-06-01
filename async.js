// const promise = Promise.resolve(10);
// const rejectedPromise = Promise.reject("Error").catch((err) =>
//   console.log(err),
// );

// chaining promises
// promise
//   .then((num) => {
//     console.log(num, "num from chaining!");
//     return Promise.resolve(num + 10);
//   })
//   .then((num) => console.log(num, "num from chaining 2!"))
//   .catch((err) => console.log(err))
//   .finally(() => console.log("finally"));

// console.log(rejectedPromise, "rejectedPromise");

// console.log("Before fetcher");
const fetcher = () => {
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => console.log(data, "data from fetcher"))
    .catch((err) => {
      console.log(err);
    });
};

// fetcher(); // kinda taken out of the call stack

// console.log("After fetcher");

const fetcher2 = async () => {
  const [response1, response2, response3, response4] = await Promise.all([
    fetch("https://fakestoreapi.com/products"),
    fetch("https://fakestoreapi.com/products"),
    fetch("https://fakestoreapi.com/products"),
    fetch("https://fakestoreapi.com/products"),
  ]); //2s

  const anyy = await Promise.any([
    fetch("https://fakestoreapi.com/products"),
    fetch("https://fakestoreapi.com/products"),
    fetch("https://fakestoreapi.com/products"),
    fetch("https://fakestoreapi.com/products"),
  ]);

  const race = await Promise.race([
    fetch("https://fakestoreapi.com/products"),
    fetch("https://fakestoreapi.com/products"),
    fetch("https://fakestoreapi.com/products"),
    fetch("https://fakestoreapi.com/products"),
  ]);

  //   const response = await fetch("https://fakestoreapi.com/products"); //2s
  //   const response2 = await fetch("https://fakestoreapi.com/products"); //2s
  //   const response3 = await fetch("https://fakestoreapi.com/products"); //2s
  //   const response4 = await fetch("https://fakestoreapi.com/products"); //2s
  const data1 = await response.json();
  const data2 = await response2.json();
  const data3 = await response3.json();
  const data4 = await response4.json();
  console.log(data1, "data1 from fetcher2 using async await!");
  console.log(data2, "data2 from fetcher2 using async await!");
  console.log(data3, "data3 from fetcher2 using async await!");
  console.log(data4, "data4 from fetcher2 using async await!");
};

fetcher2();
