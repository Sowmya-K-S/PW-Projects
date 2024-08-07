function greet(name) {
    return new Promise((resolve) => {
      const greeting = `Hello, ${name}!`; // Fixed template literals and assignment
      resolve(greeting);
    });
  }
  
  greet("Mithun").then((message) => console.log(message)); // "Hello, Mithun!"
  