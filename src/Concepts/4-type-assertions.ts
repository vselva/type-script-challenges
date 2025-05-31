// Type Assertion: Telling the compilor that I know the variable type better than you!
// Compile Time Feature

// 1. Angle Bracket Syntex
// Preferred: as syntax because the angle-bracket syntax conflicts with 
// JSX syntax in React and can cause parsing errors.
let anyValue:any = 'Currently String';
let strLength:number = (<string>anyValue).length;
console.log('strLength:', strLength);

// 2. as Syntax
strLength = (anyValue as string).length;
console.log('strLength:', strLength);

// Wrongly assert type will return undefined
let myNum:any = 10;
let myMyNumLength = (myNum as string).length;
console.log('myMyNumLength:', myMyNumLength);

