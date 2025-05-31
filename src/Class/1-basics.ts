// Class is blueprint of objects
// Supports - Access Modifies, Encapsulation, Abstract, Inheritance, 

class Person {
    public name: string;
    
    constructor(name:string) {
        this.name = name;
    }

    greet(): void {
        console.log('Hello', this.name);
    }
}

const selva = new Person('Selvakumar');
selva.greet();
