
const optionalChainingInObj = {
    Profile: {
        name: 'Selva',
        age: 24
    },
    /* Address: {
        street: 'Rice Mill Street'
    }, */
    greet: () => {
        console.log('Hi');
    }
}

console.log('name:', optionalChainingInObj.Profile?.name); // exists
// console.log('street:', (optionalChainingInObj).Address?.street); // does not exists
console.log('street:', (optionalChainingInObj as any).Address?.street); // does not exists => undefined
optionalChainingInObj.greet?.();

// optional chaining in array 
const optionalChainingInArray: number[] | null = [];
console.log('optionalChainingInArray:', optionalChainingInArray?.[0]); // => undefined
