// Creating a function in ES6
const add = (x,y) => {
    return x + y;
}

/* This is an even more simplified version
const add = (x,y) => x + y ;
*/

// A simple function which contains only 1 argument and returns itself
const identity = x => x;

// Creating an array using a function
const array = (...elements) => {
    console.log(elements);
}
array('Jonathan', 23, 'basketball');

// Inserting default values on function parameters
const greet = (name = 'stranger', greeting = 'Wassup?') => {
    console.log(greeting, name);
}
greet();                                                // Calling the function and leaving the default values
greet('Tavonga');                                       // Inserting the name for a custom greeting

// A function that doubles numbers in an array
const doubledNumbers = (...numbers) => {
    return numbers.map(x => x * 2);
}
console.log(doubledNumbers(1, 4, 13))                   // returns [2, 8, 26]