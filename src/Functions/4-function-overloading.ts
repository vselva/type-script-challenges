// Function Overloading

// Overload signatures
function greet(person: string): string;
function greet(persons: string[]): string;

// Function implementation
function greet(personOrPersons: string | string[]): string {
  if (Array.isArray(personOrPersons)) {
    return "Hello, " + personOrPersons.join(" and ");
  } else {
    return "Hello, " + personOrPersons;
  }
}

// Usage
console.log(greet("Selva"));             // Hello, Selva
console.log(greet(["Selva", "Kumar"]));  // Hello, Selva and Kumar
