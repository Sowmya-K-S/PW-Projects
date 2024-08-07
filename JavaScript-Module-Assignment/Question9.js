// Define two pairs of numbers for comparison
let a = 10;
let b = 5;
let c = 10;
let d = 15;

// Greater than (>)
console.log(`${a} > ${b} : ${a > b}`); // true
console.log(`${a} > ${d} : ${a > d}`); // false

// Less than (<)
console.log(`${b} < ${a} : ${b < a}`); // true
console.log(`${d} < ${a} : ${d < a}`); // false

// Greater than or equal to (>=)
console.log(`${a} >= ${b} : ${a >= b}`); // true
console.log(`${b} >= ${a} : ${b >= a}`); // false

// Less than or equal to (<=)
console.log(`${a} <= ${c} : ${a <= c}`); // true
console.log(`${d} <= ${a} : ${d <= a}`); // false

// Equal to (==)
console.log(`${a} == ${c} : ${a == c}`); // true
console.log(`${a} == ${b} : ${a == b}`); // false

// Not equal to (!=)
console.log(`${a} != ${b} : ${a != b}`); // true
console.log(`${a} != ${c} : ${a != c}`); // false

// Strict equal to (===)
console.log(`${a} === ${c} : ${a === c}`); // true
console.log(`${a} === ${b} : ${a === b}`); // false

// Strict not equal to (!==)
console.log(`${a} !== ${b} : ${a !== b}`); // true
console.log(`${a} !== ${c} : ${a !== c}`); // false

// Comparing different types
let e = '10';
console.log(`${a} == '${e}' : ${a == e}`); // true, because == does type coercion
console.log(`${a} === '${e}' : ${a === e}`); // false, because === does not do type coercion
