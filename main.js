// //PROMISE CHAINING AND CALLBACK

// const promise1 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("promise 1 done");
//   }, 2000);
// });

// const promise2 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("promise 2 done");
//   }, 2000);
// });
// const promise3 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("promise 3 done");
//   }, 2000);
// });
// const promise4 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("promise 4 done");
//   }, 2000);
// });
// const promise5 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("promise 5 done");
//   }, 2000);
// });

// promise1
//   .then((result) => {
//     console.log(result);
//     return promise;
//   })

//   .then((result) => {
//     console.log(result);
//   });

//FETCHING DATA AND DISPLAY
// function getdata() {
//   new Promise((resolve, reject) => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((res) => res.json())
//       .then((data) => {
        
        
//         console.log(data);
//       });
//   });
// }
// getdata();



const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
// Expected output: Array [3, 42, "foo"]
