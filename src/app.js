import Dog from './moduleTest';

const dog = new Dog('labrador', ' puppy');

dog.print();

class Cat extends Dog {

  sound () {
    console.log('meow');
  }
}

const cat = new Cat('tabby', 'kitten');

cat.sound();
