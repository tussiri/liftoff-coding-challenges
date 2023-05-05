/**Longest Word
Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"
Examples
Input: "fun&!! time"
Output: time
Input: "I love dogs"
Output: love */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function LongestWord(sen) {
  // code goes here
  let longestWord = "";
  let words = sen.split(" ");
  for (let i = 0; i < words.length; i++) {
    let word = words[i].replace(/[^a-zA-Z0-9]/g, "");
    if (word > longestWord) {
      longestWord = word;
    }
  }
  return longestWord;
}

rl.question("Enter a string: ", function (input) {
  console.log(reverseString(input));
  rl.close();
});
