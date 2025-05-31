// Optional Parameter in function arguments
function printName1(name: string, wish?: string):string {
    return 'Hi ' + name + (wish ? ' ' + wish: '');
}
const res1 = printName1('Selva');
console.log(res1);

const res2 = printName1('Naru', 'Good Morning!');
console.log(res2);
