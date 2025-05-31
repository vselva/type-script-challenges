
// Explicit Typing or Explicit Type Annotation 
// we can specify the type of a variable 
// format: let|var|const <var-name>:<var-type;

let num:number = 10;
let str:string = 'str';
let bool:boolean = true;
let numArr:number[] = [1, 2, 3];
let strArr:string[] = ['a', 'b', 'c'];

enum sexEnum {male, female, tg}; // default: { 0, 1, 2 }
let sex:sexEnum = sexEnum.male;
console.log('sex:', sex, 'typeof sex:', typeof sex);
sex = 2; // allowed
// sex = 3; // not allowed

enum languageEnum { 'Tamil' = 101, 'English' = 102, 'Telugu' = 103 };
let language:languageEnum = languageEnum.Tamil;
language = languageEnum.English; // allowed
language = 103; // allowed
// language = 104; // not allowed
