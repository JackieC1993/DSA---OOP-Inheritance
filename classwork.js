
- CAREFULLY READ AND UNDERSTAND THE PROBLEM FIRST
- INCLUDE APPROPRIATE NAMED VARIABLES AND PSEUDO CODE/COMMENTS IN YOUR SOLUTION
- FOCUS ON WRITING CLEAN/READABLE CODE

Part 1:
Dogs communicate with eachother by barking using the sound/word "woof".
Implement a recursive function that takes in a numerical value (n) and outputs a string.
  
// const bark = (n) => {
//     if ( n === 0){
//         return '';
//     }
//     return "woof-" + bark( n - 1)
// }

// use the arrow function name bark and takes parameter of (n)
const bark = (n) => {
// ternary conditional expression 
// check if the value is n is equal to 0
(n === 0) 
//? optional chain operator
? '' 
// if condition is true  , return an empty string
: 'woof-' + bark(n - 1)
// if the condition is false , it concatenates the string "woof-" with the result of the recursive call `bark(n -1)`"
}

Ex:
bark(4) //output: woof-woof-woof-woof


Bonus:
Write a recursive function to search for a specific value within a nested object. The function should return true if the value is found and false if not.

const recursiveObjectSearch = (obj, value) = {}

Ex:
const nestedObject = {
    a: 1,
    b: {
        c: 32,
        d: {
            e: 13,
            f: 4
        }
    }
};
recursiveObjectSearch(nestedObject,13) // true
recursiveObjectSearch(nestedObject,8) // false

*/


//  Destiny Bonus

function recursiveObjectSearch (obj, targetValue) {
// at each recursive call pass an obj into the function with the traget value
// loop through given obj, check value at each key for either the target value or if a nested object exist

for(let key in obj){
  // check if obj[key] is nested object or if target value
  const keyValue = obj[key]
  const keyArr = Object.keys(keyValue) // returns an array of keys in object 
  const isNestedObject = keyArr.length > 0
  
  if(keyValue === targetValue){
    return true
  }
  else if(isNestedObject){
    // if nested object, recursively call function, pass the nested object into my function
    return recursiveObjectSearch(keyValue, targetValue)
  }
  
}
// if iterate through all keys in object and nested objects and target value isn't found return false
return false;
}



