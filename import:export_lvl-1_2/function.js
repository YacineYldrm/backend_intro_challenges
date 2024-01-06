// return firts element of the array

const returnFirstElement = (data) => data[0];

// return all except the last element of the array

const removeLastElement = (data) => data.slice(0, -1);

// return only the last element of the array

const returnLastElement = (data) => [...data].pop();

// return all except the first element of the array

const removeFirstElement = (data) => data.slice(1);

// remove certain element of the array

const removeCertainElement = (data, remove) => data.filter((element) => element !== remove)

// remove duplicate elements

const uniqueElements = (data) => [...new Set(data)];

// return sum of the elements of the array

const sumAllElements = (data) => data.reduce((sum, num) => sum += num);

// return random number that lies between the two values

const returnRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

// first letter to uppercase

const firstLetterToUppercase = (string) => string.charAt(0).toUpperCase().concat(string.slice(1));

// string to uppercase

const toUpperCase = (string) => string.toUpperCase(); 

// compare last letter of first argument with second argument

const compareLetters = (string, letter) => string.charAt(string.length-1).toLowerCase() === letter.toLowerCase() ? true : false; 

module.exports = {
    returnFirstElement,
    removeLastElement,
    returnLastElement,
    removeFirstElement,
    removeCertainElement,
    uniqueElements,
    sumAllElements,
    returnRandomNum,
    firstLetterToUppercase,
    toUpperCase,
    compareLetters
}