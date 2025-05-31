
class ReadOnly {
    readonly var1:string = 'I am read only';
    readonly var2:number;
    static readonly PI:number = 3.14;

    constructor() {
        this.var2 = 10;
    }

    myFunction():void {
        // this.var1 = "Trying to chage this variable is not allowed";
        // this.var2 = 20; // not allowed
        console.log('Unable to change read only members!')
    }
}

const myReadOnly = new ReadOnly();
myReadOnly.myFunction();
console.log(ReadOnly.PI);
