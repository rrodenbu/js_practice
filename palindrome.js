function isPalindrome(string) {
  const reg = /[\W]/g;
  const s = string.replace(reg, '').toLowerCase();
  console.log('cleaned string:' + s);

  const l = s.length;
  for (let i = 0; i < l / 2; i++) {
    if (s.charAt(i) !== s.charAt(l - i - 1)) {
      return false;
    }
  }

  return true;
}

const strings = [
  'anna', // true
  'tacocat', // true
  'Hannah', // true
  'A man, a plan, a canal: panama!', // true
  'test', // false
  '1221', // true
];

strings.forEach(string => {
  const result = isPalindrome(string);
  console.log(string, result);
});
