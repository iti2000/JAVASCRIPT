//comparing variables and objects

//comparing variables
let a = 1
let b = 1

console.log("a==b", a==b);
console.log("a==b", a===b);

//comparing objects
//----false-------
// let obj1 = new Object();
// obj1.name = "iti";

// let obj2 = new Object();
// obj2.name = "iti";

// console.log(obj1==obj2)
// console.log(obj1===obj2)
// console.log(Object.is(obj1,obj2));

//-----ture-----
let obj1 = new Object();
obj1.name = "iti";

let obj2 = obj1;

console.log(obj1==obj2)
console.log(obj1===obj2)
console.log(Object.is(obj1,obj2));




