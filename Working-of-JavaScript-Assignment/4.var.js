{
    console.log(x); // undefined due to hoisting
    console.log(y); // throws ReferenceError
    console.log(z); // throws ReferenceError
    
    var x = "PW";
    let y = "Skills";
    const z = "!";
    
    console.log(x); // "PW"
    console.log(y); // "Skills"
    console.log(z); // "!"
}
