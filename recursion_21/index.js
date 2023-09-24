let printValue = (x) => {
  return x * 2;
};
const cachingDecorator = (func) => {
  let cahce = new Map();
  return function (x) {
    if (cahce.has(x)) {
      console.log("Я взяв число з кешу");
      return cahce.get(x);
    }
    let result = func(x);
    cahce.set(x, result);
    console.log("Я взяв число не з кешу!");
    return result;
  };
};
printValue = cachingDecorator(printValue);
console.log(printValue(2));
console.log(printValue(2));
console.log(printValue(2));

function fact(x) {
  if (x === 0) {
    return 1;
  }
  return x * fact(x - 1);
}
console.log(fact(4));

const fib = (length) => {
  if (length <= 0) {
    return [];
  } else if (length === 1) {
    return [0];
  } else if (length === 2) {
    return [0, 1];
  } else {
    const prevSequence = fib(length - 1);
    const nextNumber = prevSequence[length - 2] + prevSequence[length - 3];
    return [...prevSequence, nextNumber];
  }
};
console.log(fib(5));

const list = {
  title: "lesson-1",
  next: {
    title: "lesson-2",
    next: {
      title: "lesson-3",
      next: {
        title: "lesson-4",
        next: {
          title: "lesson-5",
          next: null,
        },
      },
    },
  },
};

const readList = (list) => {
  if (list) {
    console.log(list.title);
    readList(list.next);
  }
};
readList(list);

const arr = [
  1,
  "string",
  null,
  undefined,
  { a: 15, b: 10, c: [1, 2, 3, { a: 4 }], d: undefined, e: true },
  true,
  false,
];

const deepCopy = (item) => {
  if (typeof item !== "object" || item === null) {
    return item;
  }

  if (Array.isArray(item)) {
    const copyArr = [];
    for (let i = 0; i < item.length; i++) {
      copyArr[i] = deepCopy(item[i]);
    }
    return copyArr;
  }

  const copyObj = {};
  for (const key in item) {
    if (item.hasOwnProperty(key)) {
      copyObj[key] = deepCopy(item[key]);
    }
  }
  
  return copyObj;
};

const copiedArr = deepCopy(arr);
console.log(copiedArr);
