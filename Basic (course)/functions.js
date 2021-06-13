function hello (){
    console.log("Hello World");
}

hello();

//returning function

function iti(){
    console.log("return");
    return 5;
}
console.log(iti());

//parametrized function

function add(x,y){
    return x+y;
}
console.log(add(5,10));

//default function parameter

function add(x,y=5){
    return x+y;
}
console.log(add(5));

//rest parameters

function lenghtOfMe(...x){
    console.log(x)
    return x.length;
}
console.log(lenghtOfMe(5,6,7,8));

//function constructor

let func = new Function("x","y","return x*y;");

console.log(func(5,6));

//recursion

function fac(num){
    if(num<=0){
        return 1;
    }
    else{
        return (num * fac(num-1));
    }
}
console.log(fac(3));

//aonymous function

(function(){
    console.log("anonymous");
})();

//lamba function --> arrow function
//*parametrs
//*fat arrow notation
//*statements

var food = (x,y,z) =>{
    return x+y+z;
}
console.log("food:",food(10,20,30));

//----or------

var food = (x,y,z) =>x+y+z;

console.log("food:",food(10,20,30));

//--or---

var food = x =>x + 100;

console.log("food:",food(10));

//generator function

function* query(){
    const name = yield "name?";
    const sport = yield "age?";
    return ` name ${name} and age is ${sport}`;
}
const instance = query();
console.log(instance.next());
console.log(instance.next("iti"));
console.log(instance.next("20"));





