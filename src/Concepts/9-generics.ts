// Generics in Type scipt
// reusable component that work with any type of component 
// still maintaining type safetly 

// Function without Generics
function methodWithOutGenerics(arg:any):any {
    return arg;
}
console.log('Function without Generics:', methodWithOutGenerics('Hi'));

// Generic Functions
function methodWithGenerics<T>(arg:T): T {
    return arg;
}
console.log('');
console.log('Generic Function:', methodWithGenerics<number>(8));
console.log('Generic Function:', methodWithGenerics<string>('Hello'));

// Generic Interfaces
interface Public<T> {
    name: string,
    age: number,
    contact: T
}
const myPublic:Public<string> = {
    name: 'Selva',
    age: 30, 
    contact: '+91-9876543210'
}
console.log('');
console.log('Generic Interface:', myPublic);

class GenericClass<T> {
    public variable:T;
    constructor(initialValue:T) {
        this.variable = initialValue;
    }
}
console.log('');
const myGenericClass1 = new GenericClass<string>('I am string');
console.log('Generic Class:', 'typeof variable:', typeof myGenericClass1.variable, 'variable:', myGenericClass1.variable);
const myGenericClass2 = new GenericClass<number>(10);
console.log('Generic Class:', 'typeof variable:', typeof myGenericClass2.variable, 'variable:', myGenericClass2.variable);

// Default Generics
interface DefaultGenerics<T = string> {
    contact:T
}
console.log('');
const var1:DefaultGenerics = { contact: '+91-9876543210' }; // here contact is string by default 
console.log('Default Generic:', 'typeof variable:', typeof var1.contact, 'variable:', var1.contact);
const var2:DefaultGenerics<number> = { contact: 9876543210 }; // here contact is number
console.log('Default Generic:', 'typeof variable:', typeof var2.contact, 'variable:', var2.contact);
