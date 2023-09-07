const funcStr = (str) => {
  const strreverse = str.split("").reverse().join("");
  return strreverse;
};
console.log(funcStr("Hello"));

const countWords = (str) => {
  const regularExpression = /\b\w+\b/g;
  const result = str.match(regularExpression);
  if (result) {
    return ` Кількість слів в реченні:) ${result.length}`;
  }
  return 0;
};
console.log(countWords("Hi my name is Taras"));

const clearWhiteSpace = (str) => str.replace(/\s/g, "");
console.log(clearWhiteSpace("1  2  3"));

const cutStr = (str, maxLength) => {
  const result = str.slice(0, maxLength);
  return str.length > maxLength ? result + "..." : result;
};
console.log(cutStr("Hello there", 5));

const palindrome = (str) => {
  return str === str.split("").reverse().join("");
};
console.log(palindrome("tenet"));
