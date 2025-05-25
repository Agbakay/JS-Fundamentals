const arg = process.argv[2];
const x = Number(arg);

if (Number.isInteger(x) && x > 0) {
  let i = 0;
  while (i < x) {
    console.log("C is fun"); 
    i++;
  }
} else {
  console.log("Missing number of occurrences");
}
