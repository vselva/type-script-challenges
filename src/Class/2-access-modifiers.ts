// Base Class
class Employee {
    public name: string;
    private password: string;
    protected email: string; 

    constructor(name:string, password:string, email:string) {
        this.name = name;
        this.password = password;
        this.email = email;
    }
    getDetails():void {
        console.log('Details:', this.name, this.email);
    }
}

const diana = new Employee('Diana', 'Welcome@123', 'diana@mail.com');
diana.getDetails();
diana.name = 'Arocka Diayna'; // allowed
// diana.email = 'change@email.com'; // not allowed
// diana.passport = 'NewPassword'; // not allowed

// Derived Class 
class SoftwareEngineer extends Employee {
    constructor(name:string, password:string, email:string) {
        super(name, password, email);
    }

    getEmail(): void {
        console.log('Protected variable can be accessed from derived class. Email:', this.email);
    }

    getPassword(): void {
        console.log('Private variable can NOT be accessed from derived class. Password: <not-allowed>');
        //console.log(this.passport); // not allowed
    }

}

const narumugai = new SoftwareEngineer('Narumugai', 'Welcome@123', 'naru@email.com');
narumugai.getEmail();
narumugai.getPassword(); // not allowed