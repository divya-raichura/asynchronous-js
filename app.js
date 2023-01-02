// -----------------------------------------------

// console.log("START");

// const url = "https://jsonplaceholder.typicode.com/users";

// const api = fetch(url)
//   .then((res) => res.json())
//   .then((res) => {
//     console.log(res);
//     res.forEach((user) => console.log(user.username));
//   });

// console.log(api);

// console.log("something something...100 line code");

// console.log("END");

// -----------------------------------------------

console.log("START");

const url = "https://jsonplaceholder.typicode.com/users";

const api = async () => {
  const resp = await fetch(url);
  const jsonData = await resp.json();
  //   console.log(jsonData);
  //   jsonData.forEach((user) => console.log(user.username));
  return jsonData;
};

// console.log("API", api)

// api.then((res) => { // incorrect cause api is function so we need to invoke it to get the return value which is a promise
//   console.log("inside then", res);
// });

api().then((res) => {
  // correct
  console.log("inside then", res);
});

console.log(api()); // pending

(async function () {
  console.log("using await directly", await api());
  const data = await api();
  data.forEach((user) => console.log(user.username));
})();

// console.log("using await directly", await api());

console.log("something something...100 line code");

console.log("END");
