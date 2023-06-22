function mapArray(array, callback) {
  //   return callback(array); //return don't just call
  let arrayNew = array.map(callback); //takes fn
  return arrayNew;
}

function callback(a) {
  return Math.pow(a, 2);
}

console.log(mapArray([1, 2, 3, 4, 5], callback));
