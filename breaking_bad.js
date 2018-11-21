function formatAsElement(input) {
  return input.length > 1
    ? `[${input.charAt(0).toUpperCase()}${input.charAt(1).toLowerCase()}]`
    : `[${input.toUpperCase()}]`;
}

function formatBreakingBad(targetString, elementsArray) {
  if(elementsArray.length <= 0 || !elementsArray) return targetString;

  const elementsRegex = new RegExp(elementsArray.join('|'), 'ig');
  return targetString.replace(elementsRegex, formatAsElement);
}

function formatBreakingBad(targetString, elementsArray) {
  const words = targetString.split(' ');
  const finishedWordArray = [];

  // first we have to split the words up and iterate over them
  words.forEach(word => {
    let hasMatched = false;

    // now we have to iterate over each of the elements
    elementsArray.forEach(element => {
      // now check if this word includes this element
      if (!hasMatched && word.toLowerCase().includes(element.toLowerCase())) {
        hasMatched = true;

        const firstPart = word.substring(
          0,
          word.toLowerCase().indexOf(element.toLowerCase()),
        );
        const elementMatch = formatAsElement(
          word.substring(
            word.toLowerCase().indexOf(element.toLowerCase()),
            word.toLowerCase().indexOf(element.toLowerCase()) + element.length,
          ),
        );
        const lastPart = word.substring(
          word.toLowerCase().indexOf(element.toLowerCase()) + element.length,
        );
        console.log(firstPart, elementMatch, lastPart);
        finishedWordArray.push(firstPart + elementMatch + lastPart);
      }
    });
  });

  return finishedWordArray.join(' ');
}

const tests = [{
  string: 'Harry Potter',
  elements: ['Br', 'H', 'Po'],
  expected: '[H]arry [Po]tter',
}, {
  string: 'Charlie Brown',
  elements: ['Br', 'H', 'Po'],
  expected: 'C[H]arlie [Br]own',
}, {
  string: 'Ford Prefect',
  elements: ['F', 'O'],
  expected: '[F][O]rd Pre[F]ect',
}, {
  string: 'Zaphod Beeblebrox',
  elements: [],
  expected: 'Zaphod Beeblebrox',
}];

tests.forEach(({ string, elements, expected }) => {
  const result = formatBreakingBad(string, elements);
  console.log(`${result} === ${expected}: `, result === expected);
});
