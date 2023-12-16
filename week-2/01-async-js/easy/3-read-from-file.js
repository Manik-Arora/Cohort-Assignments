const fs = require("fs");

fs.readFile("file_ead.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("We got an error: " + err);
  } else {
    console.log(data);
  }
});

console.log("Before expensive operation call");

let count = 0;
for (let i = 0; i < 10000000000; i++) {
  count++;
}

console.log("After expensive operation call", count);
