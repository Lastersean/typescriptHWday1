/* Since TS is a superset of JS, we can still write regular JS code in 
a TS file */

console.log(testing)

// Homework Exercises

// 1. For each of these values, what type will the TypeScript compiler infer?
let a = 118;
// A: number

let b = 'Thieves';
// A: string

let c = [true, false, false];
// A: boolean

let d = {age: number};
// A: tupil

let e = [3]
// A: array number


let f;
// A: any

let g = []
// A: string array



// 2. What are the compilation errors in each of the following code snippets?
let song: {
    title: string,
    releaseYear: number,
} = {
    title: 'Lose Yourself'
};
// A:releaseYear has no endtype, its not expressed in the values

let prices = [100, 200, 300];
prices[0] = '$100';
// A:the datatype in the array is not declared, prices contains numbers, the second line adds a string

function myFunc(a: number, b: number): number {}
// A: tupil

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and 
// be case insensitive. The string can contain any char.
function XO(str) {
    const lowerCaseString = str.toLowerCase(); // Convert string to lowercase
    let countX = 0;
    let countO = 0;
    
    for (let i = 0; i < lowerCaseString.length; i++) {
      if (lowerCaseString[i] === 'x') {
        countX += 1
      } else if (lowerCaseString[i] === 'o') {
        countO += 1
      }
    }
    
    return countX === countO;
  }

//   In this kata you will create a function that takes a list of non-negative integers and strings and 
// returns a new list with the strings filtered out.

function filter_list(l) {
    return l.filter(function(v) {return typeof v == 'number'})
  }