function cleanWord(word) {
  const reg = /[\W]/g;
  const cleanedWord = word.replace(reg, '')
    .split('')
    .sort()
    .join('');
  return cleanedWord;
}

function isAnagram(firstWord, secondWord) {
  return cleanWord(firstWord) == cleanWord(secondWord);
}

const strings = [
  {
    firstWord: "astronomer",
    secondWord: "moon starer"
  },
  {
    firstWord: "test",
    secondWord: "best"
  }
]

strings.forEach(words => {
  const firstWord = words.firstWord;
  const secondWord = words.secondWord;
  const result = isAnagram(firstWord, secondWord);
  console.log(result);
});
