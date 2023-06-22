//!Question 2

// function higherOrderAsync(callback) {
//   setTimeout(() => {
//     callback();
//   }, new Date().getDate() * 1000);
// }

function getDayOfMonth() {
  return new Date().getUTCDate();
}

function higherOrderAsync(callback) {
  setTimeout(callback, getDayOfMonth() * 1000);
}

function callback() {
  console.log("Hello");
}

higherOrderAsync(callback);
