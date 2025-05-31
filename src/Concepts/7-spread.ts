// spread in array 
let arr1 = [1, 2, 3];
let arr2 = [5, 6, 7];
let newItem = 1;
const mergedArray = [...arr1, ...arr2, newItem];
console.log('merge array with rest operator:', mergedArray);

// spread in objects 
const oldPerson = { name: 'John' };
const newPerson = { age: 20 };
const mergedObj = { ...oldPerson, ...newPerson, gender: 'male' }
console.log('merged onject with spread operator:', mergedObj);
