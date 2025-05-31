
// Nullish Coalesing:
// provide a default value when left side is null
// const result = value ? defaultValue

let userName: null | string = null;
let result = userName ?? 'Guest'; 
console.log('Nullish Coalesing: when left side is null:', result);
userName = 'Selva';
result = userName ?? 'Guest'; 
console.log('Nullish Coalesing: when left side is not null:', result);
