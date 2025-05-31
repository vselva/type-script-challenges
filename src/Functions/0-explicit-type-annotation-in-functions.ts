// 1. regular function 
function regularFunction(name:string):void {
    console.log('Hi', name);
}
regularFunction('Selva');

// 2. Anonymous Function 
const anonymousFunction: (name: string) => string = function(name: string): string {
    return 'Hi ' + name;
}
console.log(anonymousFunction('Naru'));
