//HH:MM:SS AM/PM
setInterval(() => {
  const date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  // HH:MM:SS
  // console.log(`${hh}:${mm}:${ss}`);
  let suffix = hh >= 12 ? "PM" : "AM";

  hh = hh % 12 || 12;
  hh = hh.toString().padStart(2, "0");
  mm = mm.toString().padStart(2, "0");
  ss = ss.toString().padStart(2, "0");

  console.log(`${hh}:${mm}:${ss} ${suffix}`);
}, 1000);
