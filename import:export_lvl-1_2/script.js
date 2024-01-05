// import data
let { names, numbers } = require('./data.js');

// import all functions
let { returnFirstElement, 
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
 } = require('./function.js');

// call functions & output results

const firstName = returnFirstElement(names);
console.log("firstName: ", firstName);

const firstNum = returnFirstElement(numbers);
console.log("firstNum: ", firstNum);

const removeLastName = removeLastElement(names);
console.log("removeLastName: ", removeLastName);

const removeLastNumber = removeLastElement(numbers);
console.log("removeLastNumber: ", removeLastNumber);

const lastName = returnLastElement(names);
console.log("lastName: ", lastName);

const lastNum = returnLastElement(numbers);
console.log("lastNum: ", lastNum);

const removeFirstName = removeFirstElement(names);
console.log("removeFirstName: ", removeFirstName);

const removeFirstNum = removeFirstElement(numbers);
console.log("removeFirstNum: ", removeFirstNum);

const removeCertainName = removeCertainElement(names, "Eric");
console.log("removeCertainName: ", removeCertainName);

const removeCertainNum = removeCertainElement(numbers, 1);
console.log("removeCertainNum: ", removeCertainNum);

const removeDuplicates = uniqueElements(numbers);
console.log("removeDuplicates: ", removeDuplicates);

const arraySum = sumAllElements(numbers);
console.log("arraySum: ", arraySum);

const randNum = returnRandomNum(0, 5);
console.log("randNum: ", randNum);

const firstLetterUpperCase = firstLetterToUppercase("hallo");
console.log("firstLetterUpperCase: ", firstLetterUpperCase);

const stringToUpperCase = toUpperCase("hallo");
console.log("stringToUpperCase: ", stringToUpperCase);

const letterMatch = compareLetters("Hallo", "o");
console.log("letterMatch: ", letterMatch);

