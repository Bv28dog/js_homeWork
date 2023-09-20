const getDaysInYear = (year) => {
  if (year % 4 === 0) {
    return "Рік високосний, має 366 днів";
  } else {
    return "Рік не високосний, має 365 днів.";
  }
};
console.log(getDaysInYear(2021));
console.log(getDaysInYear(2020));

const getDayNumber = (datestr) => {
  const date = new Date(datestr);
  const startOfYear = new Date(date.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((date - startOfYear) / 86400000);
  return dayOfYear;
};
console.log(getDayNumber("2023-01-12"));
console.log(getDayNumber("2023-02-26"));

function getQuarters(dateString) {
  const date = new Date(dateString);
  const month = date.getMonth() + 1;

  if (month >= 1 && month <= 3) {
    return "I квартал";
  } else if (month >= 4 && month <= 6) {
    return "II квартал";
  } else if (month >= 7 && month <= 9) {
    return "III квартал";
  } else if (month >= 10 && month <= 12) {
    return "IV квартал";
  } else {
    return "Невідомий квартал";
  }
}

console.log(getQuarters("2023-02-26"));

const obj = {
  from: 1,
  to: 10,
};

const createArr = () => {
  obj.arr = Array.from(
    { length: obj.to - obj.from + 1 },
    (_, i) => obj.from + i
  );
};
createArr();
console.log(obj.arr);

const obj1 = {
  from: 1,
  to: 10,
};

const createArr1 = function () {
  this.arr = Array.from(
    { length: this.to - this.from + 1 },
    (_, i) => this.from + i
  );
}.bind(obj1);
createArr1();
console.log(obj1.arr);

const obj2 = {
  from: 1,
  to: 10,
};

const createArr2 = function () {
  this.arr = Array.from(
    { length: this.to - this.from + 1 },
    (_, i) => this.from + i
  );
};

createArr2.call(obj2); // або createArr.apply(obj);
console.log(obj2.arr);

const calculator = {
  result: 0,
  getResult: function () {
    return this.result;
  },
  sum(num) {
    this.result += num;
    return this;
  },
  sub(num) {
    this.result -= num;
    return this;
  },
  mul(num) {
    this.result *= num;
    return this;
  },
  div(num) {
    this.result /= num;
    return this;
  },
};
console.log(calculator.sum(2).sum(2).mul(4).getResult());

const d = new Date();
console.log(d);

function Car(model, color, age, speed, gasTank, started) {
  this.model = model;
  this.color = color;
  this.age = age;
  this.speed = speed || 0;
  this.gasTank = gasTank || 0;
  this.started = started || false;

  this.startEngine = function () {
    if (this.gasTank > 0) {
      this.started = true;
    }
  };

  this.drive = function () {
    if (this.started && this.gasTank > 0) {
      this.speed = Math.min(this.speed + 30, 200);
      this.gasTank -= 5;
    }
  };

  this.stop = function () {
    this.started = false;
    this.speed = 0;
  };

  this.speedUp = function (amount) {
    if (this.started) {
      this.speed = Math.min(this.speed + amount, 200);
      this.gasTank -= 5;
    }
  };

  this.slowDown = function (amount) {
    if (this.started) {
      this.speed = Math.max(this.speed - amount, 0);
      this.gasTank -= 5;
    }
  };

  this.addGas = function (arg) { 
    this.gasTank = Math.min(this.gasTank + arg, 20);
  };
}

const myCar = new Car('Mazda6.', 'white');
myCar.addGas(5)
myCar.startEngine()
myCar.drive()
myCar.slowDown(15)
myCar.speedUp(5)
myCar.stop()
console.log(myCar.speed)

