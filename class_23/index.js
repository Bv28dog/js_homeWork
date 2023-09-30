class BankAccount {
  constructor(accountHolder, initialBalance) {
    this._accountHolder = accountHolder;
    this._balance = initialBalance;
  }

  get accountHolder() {
    return this._accountHolder;
  }

  set accountHolder(newAccountHolder) {
    this._accountHolder = newAccountHolder;
  }

  get balance() {
    return this._balance;
  }

  set balance(newBalance) {
    if (newBalance >= 0) {
      this._balance = newBalance;
    } else {
      console.log("Баланс не може бути від'ємним.");
    }
  }

  deposit(amount) {
    if (amount > 0) {
      this._balance += amount;
      console.log(`Депозит у розмірі ${amount} грн виконано.`);
    } else {
      console.log("Сума повинна бути більше 0.");
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this._balance) {
      this._balance -= amount;
      console.log(`Знято ${amount} грн з рахунку.`);
    } else {
      console.log("Недостатньо коштів або неправильна сума.");
    }
  }
}

const account = new BankAccount("Остап", 5000);

console.log("Власник рахунку: " + account.accountHolder);
console.log("Початковий баланс: " + account.balance);

account.deposit(500);
console.log("Баланс після депозиту: " + account.balance);

account.withdraw(200);
console.log("Баланс після зняття грошей: " + account.balance);

account.balance = -1000;
console.log("Баланс після неправильного встановлення: " + account.balance);

class Animal {
  constructor(name, habitat) {
    this.name = name;
    this.habitat = habitat;
  }
  getInfo() {
    return `Ця тварина зветься ${this.name} живе в ${this.habitat}`;
  }
}
class Mammal extends Animal {
  constructor(name, habitat) {
    super(name, habitat);
  }
  run() {
    return `${this.name} і він біжить! `;
  }
  getInfo() {
    return super.getInfo() + " " + "це є савець";
  }
}
class Bird extends Animal {
  constructor(name, habitat) {
    super(name, habitat);
  }
  fly() {
    return `${this.name} летить!`;
  }
  getInfo() {
    return super.getInfo() + " " + "це є птах";
  }
}
class Dog extends Mammal {
  constructor(name, habitat, breed) {
    super(name, habitat, breed);
    this.breed = breed;
  }
  whoIsGoodDog() {
    return `woof woof`;
  }
  getInfo() {
    return super.getInfo() + " " + "це є хороша собака";
  }
}
class Penguin extends Bird {
  constructor(name, habitat, noFly) {
    super(name, habitat);
    this.noFly = noFly;
  }
  swim() {
    return `${this.name} плаває`;
  }
}
const lion = new Mammal("лев", "Саванна");
console.log(lion.getInfo(), lion.run());

const eagle = new Bird("Орел", "Небі");
console.log(eagle.getInfo(), eagle.fly());

const dog = new Dog("Чарлі", "будинку", "Охонтік");
console.log(dog.getInfo(), dog.whoIsGoodDog());

const pingvi = new Penguin("Пінгвін", "Антарктиді");
console.log(pingvi.getInfo(), pingvi.swim());

class Vehicle {
  constructor(power, gasTank, mass) {
    this.power = power;
    this.gasTank = gasTank;
    this.mass = mass;
    this.started = false;
  }

  getMaxSpeed() {
    return (0.84 * this.power) / this.mass;
  }

  getGasUsage() {
    return Math.round((this.getMaxSpeed() / this.power) * 100);
  }

  startEngine() {
    this.started = true;
  }

  stopEngine() {
    this.started = false;
  }

  drive(speed, distance) {
    if (!this.started || speed < 0 || speed > this.getMaxSpeed()) {
      console.log(
        "Неможливо рухатися з такою швидкістю або автомобіль не запущений."
      );
      return;
    }

    const gasUsed = (distance * this.getGasUsage()) / 100;
    if (gasUsed > this.gasTank) {
      console.log("Недостатньо газу для подорожі на таку відстань.");
    } else {
      this.gasTank -= gasUsed;
      console.log(
        `Пройдено ${distance} км зі швидкістю ${speed} км/год. Залишилось газу: ${this.gasTank} л.`
      );
    }
  }

  addGas(gas) {
    if (gas > 0) {
      this.gasTank += gas;
      console.log(
        `Додано ${gas} л. газу. Загальний об'єм газу: ${this.gasTank} л.`
      );
    } else {
      console.log("Об'єм доданого газу повинен бути більше 0.");
    }
  }

  printInfo() {
    console.log(`Характеристики транспортного засобу:
      Потужність: ${this.power} кВт
      Резервуар для газу: ${this.gasTank} л
      Маса: ${this.mass} т
      Максимальна швидкість: ${this.getMaxSpeed()} км/год
      Рівень газу: ${this.gasTank} л
      Використання газу на кілометр: ${this.getGasUsage()} л/100 км
      Двигун: ${this.started ? "запущено" : "вимкнено"}
    `);
  }
}

class Car extends Vehicle {
  constructor(power, gasTank, mass, type, maxPassengerCount) {
    super(power, gasTank, mass);
    this.type = type;
    this.maxPassengerCount = maxPassengerCount;
  }

  printInfo() {
    super.printInfo();
    console.log(`Тип автомобіля: ${this.type}
      Максимальна кількість пасажирів: ${this.maxPassengerCount}`);
  }
}

class Bus extends Car {
  constructor(power, gasTank, mass, type, maxPassengerCount) {
    super(power, gasTank, mass, type, maxPassengerCount);
    this.passengerCount = 0;
  }

  updatePassengers(passengerCount) {
    if (passengerCount >= 0 && passengerCount <= this.maxPassengerCount) {
      this.passengerCount = passengerCount;
      console.log(`Кількість пасажирів оновлено до ${passengerCount}`);
    } else {
      console.log(
        `Недійсна кількість пасажирів. Введіть значення від 0 до ${this.maxPassengerCount}`
      );
    }
  }

  printInfo() {
    super.printInfo();
    console.log(`Пасажирська інформація:
      Кількість пасажирів: ${this.passengerCount}`);
  }
}

const car = new Car(150, 50, 1.5, "SEDAN", 5);
const bus = new Bus(200, 80, 3, "MINIVAN", 15);

car.startEngine();
car.drive(60, 100);
car.addGas(20);
car.drive(100, 200);

bus.startEngine();
bus.updatePassengers(10);
bus.drive(70, 150);
