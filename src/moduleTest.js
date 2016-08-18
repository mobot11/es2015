export default class Dog {
  constructor(breed, age) {
    this.breed = breed;
    this.age = age;
  }

  print() {
    console.log(this.breed + this.age);
  }
}
