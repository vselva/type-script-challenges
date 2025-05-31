// Rest Parameters 
function useRestParameters(greeting:string, ...names: string[]) {
    console.log(greeting, names.join(', '));
}
useRestParameters('Hello', 'Selva', 'Diana', 'Naru');
