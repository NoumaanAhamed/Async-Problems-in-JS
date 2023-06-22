const fs = require("fs");

function readFileCallback(file, callback) {
  fs.readFile(file, "utf-8", callback);
  //   return fileContent;
}

function callback(err, data) {
  if (err) {
    throw err;
  }
  console.log(data);
  //   return data; //!async, don't return
}
readFileCallback("./5prob.txt", callback);
