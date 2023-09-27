const universityPrototype = {
  universityName: "Polytechnic",
  dean: "Taras Samoilenko",
};

const university = Object.create(universityPrototype);

const facultyPrototype = {
  facultyName: "IT-Technology",
  groups: [],
  enlistStudent(studentName) {
    let currentGroup = this.groups[this.groups.length - 1];

    if (!currentGroup || currentGroup.length >= 12) {
      currentGroup = [];
      this.groups.push(currentGroup);
    }

    currentGroup.push(studentName);
    console.log(`Зараховано студента ${studentName}`);
  },
};
const faculty = Object.create(facultyPrototype);
faculty.universityName = university.universityName;
faculty.dean = university.dean;

faculty.enlistStudent("Taras");
faculty.enlistStudent("YAna");
faculty.enlistStudent("YAna");
faculty.enlistStudent("YAna");
faculty.enlistStudent("YAna");
faculty.enlistStudent("YAna");
faculty.enlistStudent("YAna");
faculty.enlistStudent("YAna");
faculty.enlistStudent("YAna");
faculty.enlistStudent("YAna");
faculty.enlistStudent("YAna");
faculty.enlistStudent("YAna");
faculty.enlistStudent("YAna");
faculty.enlistStudent("YAna");
faculty.enlistStudent("YAna");
faculty.enlistStudent("YAna");

console.log(faculty.groups);
console.log(faculty.universityName);
console.log(faculty.dean);

function Animal(name) {
  this.name = name;
}
Animal.prototype.getInfo = function () {
  return `Це є ${this.name}`;
};

function Mammal(name, live) {
  Animal.call(this, name);
  this.live = live;
}
Mammal.prototype = Object.create(Animal.prototype);
Mammal.prototype.run = function () {
  return `${this.name} is running`;
};

function Bird(name, live) {
  Animal.call(this, name);
  this.live - live;
}
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.fly = function () {
  return `${this.name} can fly`;
};

function Dog(name, live, breed) {
  Mammal.call(this, name, live);
  this.breed = breed;
}

Dog.prototype.whoIsGoodDog = function () {
  return `${this.name} ${this.breed} woof woof`;
};
function Penguin(name, live, species) {
  Bird.call(this, name, live);
  this.species = species;
}
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.swim = function () {
  return `${this.name} can swim`;
};
Penguin.prototype.canfly = function () {
  return `${this.name} can't fly`;
};

const rabbit = new Mammal("rabbit", "Land");
console.log(rabbit.getInfo());
console.log(rabbit.run());

const eagle = new Bird("Eagle", "Sky");
console.log(eagle.getInfo());
console.log(eagle.fly());

const goldenRetriever = new Dog("Buddy", "Land", "Golden Retriever");
console.log(goldenRetriever.whoIsGoodDog());

const penguin = new Penguin("Penguin", "Water", "Emperor");
console.log(penguin.swim());
console.log(penguin.canfly());
