const fs = require("fs");

function parallelFileOperation(file1, file2, textData) {
  let reqArr = [];
  fs.readFile(file1, "utf-8", (err, data) => {
    if (err) {
      throw err;
    }
    reqArr[0] = data;
    fs.writeFile(file2, textData, "utf-8", (err) => {
      if (err) {
        callback(data, 0);
      } else {
        callback(data, 1);
      }
    });
  });
  return reqArr;
}

function callback(data, value) {
  console.log([data, value]);
  //   return [data, value];
}

parallelFileOperation("./6prob1.txt", "./6prob2.txt", "Hello!");

//!return yields empty [] as async operations are invloved
