// Default Parameter in function arguments
function printName2(name: string, wish: string = 'Good Day'):string {
    return 'Hi ' + name + (wish ? ' ' + wish: '');
}
const res3 = printName2('Selva');
console.log(res3);

const res4 = printName2('Naru', 'Good Morning!');
console.log(res4);
