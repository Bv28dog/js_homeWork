const randomResolve = () => {
  const rundomNumber = Math.floor(Math.random() * 5) + 1;
  const rundomDelayFn = Math.floor(Math.random() * 5) + 1;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      rundomNumber % 2 === 0 ? resolve(rundomNumber) : reject(rundomNumber);
    }, rundomDelayFn * 1000);
  });
  return promise;
};
randomResolve()
  .then((data) => console.log(`resolved promise ${data}`))
  .catch((e) => console.log(`rejected ${e}`));

const createPromiseArr = (n) => {
  const promises = [];
  for (let i = 0; i < n; i++) {
    promises.push(randomResolve());
  }
  Promise.all(promises)
    .then(() => console.log("🥳 Yasss"))
    .catch(() => console.log("🫠🫡 ok"));
};
createPromiseArr(2);

const printResponse = async (n) => {
  try {
    await createPromiseArr1(n);
    console.log("🥳 Yasss");
  } catch {
    console.log("🫠🫡 ok");
  }
};

const createPromiseArr1 = async (n) => {
  const promises = [];

  for (let i = 0; i < n; i++) {
    promises.push(randomResolve());
  }

  try {
    await Promise.all(promises);
  } catch {
    throw new Error("At least one promise rejected");
  }
};

printResponse(5)
