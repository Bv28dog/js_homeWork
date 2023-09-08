const filterRange = (arr, from, to) => arr.filter(el => el >= from && el <= to);
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(filterRange(arr, 3, 7));

const sortArr = arr => arr.sort((a, b) => a - b);
const arr1 = [324, 32423, -3242, 544, 0, 23, -454, 22, 4];
console.log(sortArr(arr1));

const sortStr = arr => arr.sort((a, b) => a.length - b.length);
const arrStr = ["4534", "a", "bb", "sdfds", "", " ", "r4rdv-"];
console.log(sortStr(arrStr));

const arr2 = [
  { name: "John", age: 25 },
  { name: "Pete", age: 30 },
  { name: "Mary", age: 29 },
  { name: "Taras", age: 25 },
  { name: "Kate", age: 74 },
  { name: "Chris", age: 14 },
  { name: "Alan", age: 5 },
  { name: "Boris", age: 55 },
  { name: "Elizabeth", age: 48 },
];
const averageAge = (arr) => {
  const minAgeRange = 17;
  const maxAgeRange = 55;
  const average = arr.reduce((acc, el) => {
    return el.age > minAgeRange && el.age < maxAgeRange ? acc + el.age : acc;
  }, 0);
  const filteredAge = arr.filter(el => el.age > minAgeRange && el.age < maxAgeRange
  );
  return average / filteredAge.length;
};
console.log(averageAge(arr2));

const arr3 = [
  { name: "John", age: 25 },
  { name: "John", age: 5 },
  { name: "John", age: 2 },
  { name: "John", age: 45 },
  { name: "Pete", age: 30 },
  { name: "Mary", age: 29 },
  { name: "Mary", age: 2 },
  { name: "Taras", age: 25 },
  { name: "Taras", age: 19 },
  { name: "Kate", age: 74 },
  { name: "Chris", age: 14 },
  { name: "Alan", age: 5 },
  { name: "Alan", age: 32 },
  { name: "Boris", age: 55 },
  { name: "Elizabeth", age: 48 },
  { name: "Elizabeth", age: 8 },
];
const sortUsers = (arr) => {
  return (newArr = arr.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return a.age - b.age;
  }));
};
console.log(sortUsers(arr3));

const arr4 = [
  { name: "John", age: 25 },
  { name: "Pete", age: 30 },
  { name: "Mary", age: 29 },
  { name: "Taras", age: 25 },
  { name: "Kate", age: 74 },
  { name: "Chris", age: 14 },
  { name: "Alan", age: 5 },
  { name: "Boris", age: 55 },
  { name: "Elizabeth", age: 48 },
];
const minMaxAge = (arr) => {
  return (obj = arr.reduce(
    (acc, el) => {
      if (el.age < acc.min) {
        acc.min = el.age;
      }
      if (el.age > acc.max) {
        acc.max = el.age;
      }
      return acc;
    },
    { min: Infinity, max: -Infinity }
  ));
};
console.log(minMaxAge(arr4));

const strings = [
  "HELLO",
  "World",
  "JS",
  "Js",
  "HI",
  "Hello",
  "HTML",
  "CSS",
  "js",
];
const unique = (arr) => {
  const uniqueArr = [];
  for (const str of arr) {
    const lowerCaseStr = str.toLowerCase();
    if (!uniqueArr.includes(lowerCaseStr)) {
      uniqueArr.push(lowerCaseStr);
    }
  }
  return uniqueArr;
};
console.log(unique(strings));
