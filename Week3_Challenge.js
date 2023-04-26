/*
First Reverse
Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH.
Examples
Input: "coderbyte"
Output: etybredoc
Input: "I Love Code"
Output: edoC evoL I
 */

// function FirstReverse(str) {
//   str = str.split("").reverse().join("");
//   return str;
// }

// // keep this function call here
// console.log(FirstReverse(readline()));

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function reverseString(str) {
  return str.split("").reverse().join("");
}

rl.question("Enter a string: ", function (input) {
  console.log(reverseString(input));
  rl.close();
});
