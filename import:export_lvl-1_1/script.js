// import functions and data
let { sortArr } = require('./function.js');
let { arrayNumbers, arrayCars } = require('./data.js');

// sort data imported data
let sortedNums = sortArr(arrayNumbers);
let sortedCars = sortArr(arrayCars);

// output results
console.log(sortedNums);
console.log(sortedCars);