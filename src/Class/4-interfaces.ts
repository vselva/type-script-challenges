
interface LivingBeings {
    name:string;
    age?:number; // Optional 
    myName: () => void; // myName => function name, () => no args, void => no return value 
    myAge:() => number;
}

interface Animal {
    walk(): void;
}

interface AnimalLivingBeing extends LivingBeings, Animal {
}

// class Cat implements LivingBeings, Animal { // supports multiple interfaces as well
class Cat implements AnimalLivingBeing { // This is a interface which is extended interface of LivingBeings and Animal 
                                         // So this will yeild the same result 
    public name:string;
    public age: number; // this is optional 
    constructor(name:string, age:number = 0) { // age is optional and default will be assigned
        this.name = name;
        this.age = age;
    }

    walk():void {
        console.log('I can walk!');
    }

    myName():void {
        console.log('name:', this.name);
    }

    myAge():number {
        return this.age;
    }
}

const beta = new Cat('beta', 8);
beta.walk();
beta.myName();
console.log('myAge:', beta.myAge());

