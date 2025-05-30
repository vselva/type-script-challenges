
function variables() {
    if (true) {
        let l = 10;
        var v = 10;
        const c = 10;
    }

    // print variable outside function scope
    console.log('var variable:', v); // allowed
    // console.log('let variable:', l); // not allwoed
    // console.log('const variable:', c); // not allwoed
    // var variable only will work because of function scope
    // let and const variable will not work because of block scope

    // redeclaration 
    var v = 20; // allowed
    // let l = 20; // not allowed
    // const c = 20; // not allowed
}

variables();
