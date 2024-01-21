 
//   1. Write a function which removes from a string all non-digit characters, and parse the remaining digits to a number. 
//   - Ex: "hell5o wor6ld" -> 56
   
  function removeNonDigitsAndParse(inputString){
    // takes string as an input
    const digitString = inputString.replace(/\D/g, '');
 // use the replace method with a regualr expression to remove non digit characters
    // the \D means that it will match any non digit character
    // the g flag means global, it will replace all occurences
    return parseInt(digitString,10);
    // then converts the remaining digit string to an integer using ParseInt
    // 10 represents the base or decimal in numerical system
    //parseInt with non digit characters removed.
  }

//   2.Write a function that when given a string, returns a string in which each character (case-sensitive) is repeated once. (empty spaces and symbols included)
//   - Ex:
//       "String"      -> "SSttrriinngg"
//       "Hello World" -> "HHeelllloo  WWoorrlldd"
//        "1234!_ "     -> "11223344!!__  "
 function repeatCharactersOnce(inputString){
    const repeatedString = inputString.split('').map(char => char + char).join('')
    return repeatedString
 }

//   3. Write a function that squares every digit of a given number and concatenate them.
//   *Note: The function accepts an integer and returns an integer.
//   - Ex: 
//       input: 9119  
//       output: 811181
//       9^2 is 81, 1^2 is 1, 1^2 is 1, and 9^2 is 81. (81-1-1-81)


//   Bonus(optional):
//     Remove all exclamation marks from the end of a sentence without using regular expressions or the replace/replaceAll methods.
    
//     "Hi!"     ---> "Hi"
//     "Hi!!!"   ---> "Hi"
//     "!Hi"     ---> "!Hi"
//     "!Hi!"    ---> "!Hi"
//     "Hi! Hi!" ---> "Hi! Hi"
//     "Hi"      ---> "Hi"
