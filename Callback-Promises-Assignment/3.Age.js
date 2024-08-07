const person = {
    firstName: "Mithun",
    lastName: "S",
    age: 20,
  };
  
  function ageInDays(personObject, callback) {
    const fullName = `${personObject.firstName} ${personObject.lastName}`;
    const ageInDays = personObject.age * 365; // Fixed multiplication operator
    callback(fullName, ageInDays);
  }
  
  function logResult(fullName, ageInDays) {
    console.log(`The person's full name is ${fullName} and their age in days is ${ageInDays}.`); // Fixed template literals
  }
  
  // Expected Output
  ageInDays(person, logResult); // The person's full name is Mithun S and their age in days is 7300.
  