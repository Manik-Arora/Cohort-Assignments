let count = 0;

async function callBack() {
  count++;
  console.log(count);
}

setInterval(callBack, 1000);
