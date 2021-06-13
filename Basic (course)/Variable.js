// es5 ----> var 
/*var iti = "lion roars";
console.log(iti);
console.log("meet told " + iti);
*/

//es6  ------> let , const
// let iti = "lion roars";
// console.log("meet told " + iti);

// const x = "lion roars";
// console.log("meet told " + x);

// ------var---------->> function scoped
// for(var i=0;i<5;i++){
//     console.log(i);
// }
// console.log(i);

//--------let--------->> blocked scoped
// for(let i=0;i<5;i++){
//     console.log(i);
// }
// console.log(i);

//---const------------->> blocked scoped
// for(const i=0;i<5;i++){
//     console.log(i);
// }
// console.log(i);

// redeclaring ---> var can be redeclare and const and let can not
//---no error----
// var cat = "meowww";
// var cat = "pssssss";

//----error---

// let dog = "bhauu";
// let dog = "bhowww";

// const lion = "roar";
// const lion = "ruur";

