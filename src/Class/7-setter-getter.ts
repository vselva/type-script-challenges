// getter and setter also knows as ansestors

class Student {
    private _name: string;

    constructor(name:string) {
        this._name = name;
    }

    get name(): string {
        return this._name;
    }

    set name(value:string) {
        if(value) {
            this._name = value;
        }
    }
}

const naru = new Student('Naru');
// getter
console.log('getter:', naru.name);
// setter
naru.name = 'narumugai';
console.log('getter:', naru.name);
