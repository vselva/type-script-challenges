class Customer {
    public name: string;

    // to declare this function in constructor 
    public myName: () => void; // myName => function name, () => no args, void => no return value 

    constructor(name: string) {
        this.name = name;
        // function in constructor
        this.myName = () => {
            console.log('My name is', this.name);
        }
    }

    // 1. Standard Method
    morning(): void {
        console.log('Hi', this.name, 'Good Morning!');
    }

    // 2. Arrow Function
    afternoon = ():void => {
        console.log('Hi', this.name, 'Good Afternoon!');
    } 

    // 3. public Method
    public night():void {
        this._night();
        this.#dreams();
    }
    
    // 4. Private Methods
    // Old Style
    private _night():void {
        console.log('Hi', this.name, 'Good Night!');
    }
    // ESNext Style
    #dreams():void {
        console.log('Sweet Dreams!');
    }

    // 3. Static Method
    static evening():void {
        console.log('Hi', this.name, 'Good Evening!')
    }
}

const imran = new Customer('Selva');
imran.morning();
imran.afternoon();
Customer.evening(); // access static method
imran.night();
// imran._night(); // private access from outside class is not allowed
// imran.#dreams(); // private access from outside class is not allowed
imran.myName();