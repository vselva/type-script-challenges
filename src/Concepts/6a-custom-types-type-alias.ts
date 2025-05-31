// Custom types can be created using the type alias or interface. 
// Both are used to define the shape of an object but have differences:
// type can represent primitives, unions, intersections, and tuples.
// interface is mainly for object shapes and supports declaration merging.

console.log('==================== Type Alias ====================');
type Gender = 'Male' | 'Female' | 'Transgender';
let myGender: Gender;

myGender = 'Male';
myGender = 'Female';
myGender = 'Transgender';
// myGender = 'some-thing-else'; // not allowed
console.log(myGender);

console.log('');
console.log('==================== Union & Intersection ====================');
type nameType = { name: string };
type ageType = { age: number };

type Union = nameType | ageType;
type Intersection = nameType & ageType;

let unionVar1: Union = { name: 'Selva' } // any one is allowed
let unionVar2: Union = { age: 30 } // any one is allowed
let unionVar3: Union = { name: 'Selva', age: 30 } // both also are allowed
console.log(unionVar1);

let intersection1: Intersection = { name: 'Selva', age: 30 } // both must be there
// let intersection2: Intersection = { name: 'Selva' } // this is not allowed
console.log(intersection1);

console.log('');
console.log('==================== Discriminated Union ====================');
type Shape = { type: 'rectangle', size: number } |
    { type: 'circle', radius: number };

function area(shape: Shape): number {
    switch (shape.type) {
        case 'rectangle':
            return shape.size * shape.size;
        case 'circle':
            return Math.PI * shape.radius * shape.radius;
        default:
            return 0;
    }
}

const rectShape: Shape = { type: 'rectangle', size: 10 };
const circleShape: Shape = { type: 'circle', radius: 10 };

console.log('Area of Rectangle:', area(rectShape));
console.log('Area of Circle:', area(circleShape));

console.log('');
console.log('==================== Type Extend (Intersection) ====================');
type A = { id: number };
type B = { age: number };
type extendByIntersection = A & B;
const variable: extendByIntersection = { id: 10, age: 20 };
console.log(variable);

console.log('');
console.log('==================== Partial Type ====================');
interface Hero {
    name: string,
    power: number
}

const myHero: Partial<Hero> = {
    name: 'Rajni',
    // power: 123 // since this is partial type we need not to include all types mentioned in the interface
}

console.log('MyHero:', myHero);