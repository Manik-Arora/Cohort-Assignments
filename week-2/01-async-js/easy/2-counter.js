let count = 0;

function mySetInterval() {
  console.log(count++);
  setTimeout(mySetInterval, 1000);
}

setTimeout(mySetInterval, 1000);
