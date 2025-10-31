const arrayLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const rotKey = 13;
const word = "the quick brown fox jumps over the lazy dog";
var newWord = "";

for (let j = 0; j < word.length; j++) {
  for (let i = 0; i < 26; i++) {
    try {
      if (word.charAt(j) === arrayLetters[i]) {
        if(i + rotKey > 25 ){
            newWord = newWord + arrayLetters[(i + rotKey) - 26];
        }
        else{
            newWord = newWord + arrayLetters[i + rotKey];
        }
        break;
      }
    } catch (err) {}
  }
}

console.log(newWord);
