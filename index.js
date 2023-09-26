const fs = require('fs');
const option = process.argv[2];
const studentName = process.argv[3];

if (option === 'add') {
  fs.appendFile('./students.txt', studentName + '\n', (err) => {
    if (err) throw err;

    console.log('file written successfully!');
  });
}

if (option === 'list') {
  fs.readFile('./students.txt', 'utf8', (err, data) => {
    if (err) throw err;

    var names = data.trim().split(/\r?\n/g);

    console.log(names);
  });
}












// const userName = process.argv[2];
// const age = process.argv[3];

// console.log(userName, age);

// const a = +process.argv[2];
// const b = +process.argv[3];
// const operator = process.argv[4];

// // console.log(a, b, operator);
// // If the operator equals a "+" then print out the sum of a and b
// if (operator === '+') {
//   console.log('The sum is', a + b);
// }

// if (operator === '*') {
//   console.log('The product is', a * b);
// }