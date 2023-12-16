const fs = require("fs");

function fileCleaner() {
  return new Promise((resolve, reject) => {
    fs.readFile("file.txt", "utf-8", (err, data) => {
      if (err) {
        reject(err);
      }
      console.log(data);
      let updatedData = data.replace(/\s+/g, " ");
      resolve(updatedData);
    });
  });
}

fileCleaner()
  .then((data) => {
    fs.writeFile("file.txt", data, (err) => {
      if (err) {
        console.error("Error: " + err);
      } else {
        console.log("File updated!!!");
      }
    });
  })
  .catch((err) => {
    console.log(err);
  });
