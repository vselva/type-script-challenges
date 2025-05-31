
// An abstract class is a class 
// that cannot be instantiated directly. 

// It is used as a base class and can contain:
// 1. Abstract methods (without implementation)
// 2. Concrete methods (with implementation)

abstract class Bird {
    // abstract property
    abstract name:string;

    // concrete property
    speed:number;
    constructor() {
        this.speed = 10;
    }

    // abstract method
    abstract fly():void;

    // concrete method
    eat():void {
        console.log('I can eat')
    }
}
// const newBird = new Bird(); // can not initialize abstract classes 

// Interface
interface greet {
    greet():void;
}

class Parrot extends Bird implements greet {
    name:string;

    constructor(name:string) {
        super();
        this.name = name;
    }

    // implementing the abstract method from abstract class
    fly():void {
        console.log('I can fly!');
    }

    // implementing the abstract method from interface
    greet():void {
        console.log('Hi Parrot!')
    }
}

const myParrot = new Parrot('kutty');
myParrot.fly(); // abstract methods from abstract class
myParrot.eat(); // concrete methods from abstract class
myParrot.greet(); // abstract method from interface