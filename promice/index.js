function printNumber(from, to) {
  let current = from;
  let timerId = setInterval(function () {
    console.log(current);
    if (current == to) {
      clearInterval(timerId);
    }
    current++;
  }, 1000);
}
printNumber(1, 5);

function printNumbers(from, to) {
  let current = from;
  setTimeout(function go() {
    console.log(current);
    if (current < to) {
      setTimeout(go, 1000);
    }
    current++;
  }, 1000);
}
printNumbers(1, 5);

const delayedLoop = () => {
  for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
};

delayedLoop();

const randomPromise = () => {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.random();

    if (randomNumber >= 0.5) {
      resolve("Promise виконаний УСПІШНО!!!");
    } else {
      reject(new Error("404 not found"));
    }
  });
};

randomPromise()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    throw error;
  });

const users = [
  {
    id: 1,
    name: "Taras",
    age: 30,
    movies: [],
  },
  {
    id: 2,
    name: "Kate",
    age: 45,
    movies: ["Titanic", "Avatar"],
  },
];

const getUserData = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find((user) => user.id === id);
      if (user) {
        resolve(user);
      } else {
        reject(new Error("Not Users"));
      }
    }, 2000);
  });
};

getUserData(2)
  .then((data) => console.log(data))
  .catch((error) => {
    throw error;
  });
