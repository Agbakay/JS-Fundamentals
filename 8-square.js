const sizeArg = process.argv[2];
const size = Number(sizeArg);
if (!Number.isInteger(size) || size <= 0) {
  console.log("Missing size");
} else {
  let row = '';
  for (let i = 0; i < size; i++) {
    row += 'X';
  }
  for (let i = 0; i < size; i++) {
    console.log(row);
  }
}
