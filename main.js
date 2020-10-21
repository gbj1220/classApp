const convertToC = require('./f2c.js');
const convertToF = require('./c2f');



// this is our from end file
// it is in charge of user interaction ONLY
// here's how the data goes through our app:
// 1. user types node main.js and some arguments
// 2. when they hit enter, node puts their inputs into process.argv
// 3. we're going to send that input to our back end function
// 4. the back end function will return an answer
// 5. we'll print out that answer to the user
// console.log(process.argv[3]);
// const arr = 'node main.js 60 f'.split(' ')
// console.log(arr[2])
// console.log('node main.js 60 f')
// console.log(process)
// console.log(process.argv)
// grab the temperature from the user
const temp = process.argv[2];
//grab the unit from the user
const unit = process.argv[3];
// console.log('0 degree celsius is 32 degrees fahrenheit.')
// feer the temperature to our function and get an answer back
// if the unit is "c" (celsius), go get answer from convertToC
// if(unit === 'c'){
//     const celsius = convertToC(temp);
//     console.log(celsius);
// } else {
//     // otherwise, go get the answer from convertToF
//     // then print it
//     const fahrenheit = convertToF(temp);
//     console.log(fahrenheit);
// }
// const result = convertToC(temp);
// print that answer for the user
// console.log(result);
// or, as a ternary
console.log(unit === 'c' ? convertToC(temp) : convertToF(temp));