
enum sexEnum {male, female, tg}; // default: { 0, 1, 2 }
let sex:sexEnum = sexEnum.male;
console.log('sex:', sex, 'typeof sex:', typeof sex);
sex = 2; // even the value is allowed as its number
// sex = 3; // not allowed

enum languageEnum { 'Tamil' = 101, 'English' = 102, 'Telugu' = 103 };
let language:languageEnum = languageEnum.Tamil;
language = languageEnum.English; // allowed
language = 103; // allowed
// language = 104; // not allowed
console.log(language);
console.log(languageEnum[101]);