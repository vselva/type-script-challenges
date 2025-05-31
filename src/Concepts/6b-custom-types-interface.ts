// Interface is a structure that defines contract for object, 
// ensuring specific properties / methods
// format interface <name-of-interface> { <property-name>: <property-type>, ... }
interface User {
    name: string,
    age: number,
    aadhar: string,
    passport? : string // optional 
};

// interface can extend multiple interfaces
interface Income {
    salary: number
}
interface Employee extends User, Income { // mergting User and Income interfaces 
    empId: string
}

// Interface in Function Arg Types
function addEmployee(employeeDetails:Employee) {
    console.log(employeeDetails);
}

const Selva = {
    name: 'Selva',
    // age: '24', // diofferent data type is not allowed
    age: 24,
    aadhar: 'XXXX XXXX XXXX',
    // passport: 'XXXXXX' // not necessary - optional
     salary: 500000,
    empId: '800648'
}

addEmployee(Selva);

// Generic interfaces
interface ApiResponse<T> { // T => Type 
    status: number, 
    data: T,
    err?: string
}

const userResponse:ApiResponse<{name: string}> = { // Mentioning actual type of data here. 
    status: 200,
    data: { name: 'Selva' } // allowed format
    //data: { age: 20 } // not allowed
}
console.log('userResponse:', userResponse);

// if multiple interfaces exist; TypeScript will merge

interface Car {
    cost: number
}

interface Car {
    model:string
}

const Vehicle: Car = {
    cost: 700000,
    model: 'Etios'
}
console.log(Vehicle);
