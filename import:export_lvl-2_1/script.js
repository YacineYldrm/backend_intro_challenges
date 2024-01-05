// import functions and data
let { filterGreatCity, filterSmallCity } = require('./function.js');
let { data } = require('./data.js');

const smallCity = filterSmallCity(data);
const greatCity = filterGreatCity(data);

// output results
console.log("Population less then 100000: ", smallCity);
console.log("Population greater then 100000: ", greatCity);