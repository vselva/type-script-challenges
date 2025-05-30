// TypeScript is statically typed,
// meaning once a variable's type is inferred or declared,
// it cannot be changed to another incompatible type.

// Type Inference: The compiler automatically determines the variable's type
// based on the initial value assigned at declaration.

console.log('');
console.log('<Auto Type Assignment>');
// When declaring a variable with an initial value,
// TypeScript automatically infers the type from that value.

let number = 100; // inferred as number type
// number = 'selva'; // Error: Type 'string' is not assignable to type 'number'
console.log('typeof number:', typeof number);

let string = 'string'; // inferred as string type
// string = 19 // Error: Type 'number' is not assignable to type 'string'
console.log('typeof string:', typeof string);

let boolean = true; // inferred as boolean type
// boolean = 1 // Error: Type 'number' is not assignable to type 'boolean'
console.log('typeof boolean:', typeof boolean);

console.log('');
console.log('<Array Type Inference>');
let numberArray = [1, 2, 3]; // inferred as number[]
// numberArray = ['a', 'b'] // Error: Type 'string' is not assignable to type 'number'
console.log('typeof numberArray:', typeof numberArray); // returns 'object'
// To check element types at runtime, a custom check is needed:
let isNumberedArray = numberArray.every((item) => typeof item === 'number');
console.log('is Numbered Array:', isNumberedArray ? 'true' : 'false');

console.log('');
let strArray = ['a', 'b', 'c']; // inferred as string[]
// strArray = [1, 2, 3] // Error: Type 'number' is not assignable to type 'string'
console.log('typeof strArray:', typeof strArray); // returns 'object'
let isStrArray = strArray.every(item => typeof item === 'string');
console.log('is String Array:', isStrArray ? 'true' : 'false');

console.log('');
let numberStrArray = [1, 2, 'a', 'b']; // inferred as (string | number)[]
// numberStrArray = [true, false]; // Error: Type 'boolean' is not assignable to type 'string | number'
console.log('typeof numberStrArray:', typeof numberStrArray); // returns 'object'
let hasInvalidType = numberStrArray.some(item => typeof item !== 'string' && typeof item !== 'number');
console.log('is Number/String Array:', !hasInvalidType ? 'true' : 'false');

console.log('');
console.log('<Any Type>');
let any; // implicitly of type 'any'
// variables of type 'any' can hold any value without type errors
console.log('typeof any:', typeof any);
any = 1; // now a number
console.log('typeof any:', typeof any);
any = 's'; // now a string
console.log('typeof any:', typeof any);
