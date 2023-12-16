const { log } = require("console");
const fs = require("fs");

let data = "Hey, I was wriiten by fs module.";

fs.writeFile("file_write.txt", data, (err) => {
  if (err) {
    console.error("We got an error: " + err);
  } else {
    console.log("Done");
  }
});

console.log("Before expensive operation call");

let count = 0;
for (let i = 0; i < 10000000000; i++) {
  count++;
}

console.log("After expensive operation call", count);
