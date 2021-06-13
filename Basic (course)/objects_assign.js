//object.assign()

//----cloning------
// let student = {
//     name : "iti",
//     age : 20
// }

// let tutor = {};

// tutor = Object.assign({},student);

// console.log("student:" , student);
// console.log("tutor :", tutor);

//------appending-------
// let student = {
//     name : "iti",
//     age : 20
// }
 
// let skills = {
//     languages : "python,js",
//     exp : 3
// }
// student = Object.assign({},student,skills);
// console.log(student)
// console.log(skills)


//------merging------
let student = {
        name : "iti",
        age : 20
    }
     
let skills = {
        languages : "python,js",
        exp : 3,
        lang : 5
    }
student = Object.assign(student,student,skills);
console.log(student)
console.log(skills)
    
    
    
    
