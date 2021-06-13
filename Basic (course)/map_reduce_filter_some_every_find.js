//<--------------------MAP------------------>

//map ---> it can be apply on any array,iterable and map the values for your output

employee1 = {
    name : "iti",
    position : "cto",
    salary : "5000"
}
employee2 = {
    name : "meet",
    position : "manager",
    salary : "10001"
}
employee3 = {
    name : "anuj",
    position : "ceo",
    salary : "75002"
}
employee4 = {
    name : "mayur",
    position : "pieon",
    salary : "8003"
}
employee5 = {
    name : "poojan",
    position : "employe",
    salary : "56004"
}

employees = [employee1,employee2,employee3,employee4,employee5];

//Task: increase the salary of all by 25%

// employees.map(employee =>{
//     employee['salary'] = 1.25 * employee['salary']
//     //employee['salary'] *= 1.25;
//     console.log(employee);
// });

//here it directly returns the output to the newSalaryList
let newSalaryList = employees.map((employee) => employee['salary']*1.25);
 console.log(newSalaryList)   

 console.log(employees)

//<-------------------REDUCE-------------------->

 //USING REDUCE
 //Task : find total salary of the new increased salaries
 
 //newSalaryList.reduce((previousValue,currentValue) => )
 let fianlTotalSalary = newSalaryList.reduce((totalSalary,currentEmployeeSalary) => totalSalary + currentEmployeeSalary);
 console.log(fianlTotalSalary)

//<--------------------FILTER---------------------->

 //USING FILTER ---->if condition is true it returns the entire item
 //Task: To find the employees who have salary less than 40,000

//  let BasicEmployee = employees.filter(employee => employee['salary']<=40000)
//  console.log(BasicEmployee)

 //<--------------------SOME-------------------------->
//same as filter , just gives true and false NOT the whole array
 //USING SOME---->it returns true when atleast one item is satisfied
 //Task: find out an employee whos salary is less than 15,000

//  let isSalLessThan50 = employees.some(employee =>employee['salary']<0)
// console.log(isSalLessThan50)

//<-------------------- EVERY------------------------->
//same as same , just all items should satisfy
//USING EVERY
//Task : find out if all employees have salary above 20,000

let isSalMoreThan20 = employees.every((employee) =>employee['salary']>20000)

console.log(isSalMoreThan20)

//<---------------------FIND----------------------->
//USING FIND
//Task: getting the employee details with the name "iti"

let itiDetails = employees.find(employee=>employee["name"]==="iti")
console.log(itiDetails)

//<-------------------FINDINDEX--------------------->
//USINGFINDINDEX

let poojanDetails = employees.findIndex(employee=>employee["name"]==="meet")
console.log(poojanDetails)







