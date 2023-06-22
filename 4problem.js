function filterArray(array, callback) {
  let arrNew = array.filter(callback);
  return arrNew;
}

function callback(x) {
  return x >= 0;
}

console.log(filterArray([0, 1, -1, 2, -2, 3, -3], callback));
