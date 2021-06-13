//1.ways to print in javascript
//console.log("Hello world");
//alert(me);
//document.write("this is a document");

//2.javascript console API
//console.log("Hello world");
//console.warn("its a damn waring");
//console.error("this is a error"); 

//3.javascript variables 
//what are variables ?- container to store data values.

/*
multi
line 
comment
*/

var number1 = 36;
var number2 = 56;
//console.log(number1 + number2);

//4. Datatypes in javascript.
var num1 = 455;
var num2 = 33.10;
var str1 = "This is a string";
var str2 = 'this also a string';

//5. Objects
var marks = {
    itee: 99.30,
    panda:94.67,
    diku:78.67
}

//booleans
var a = true;
var b = false;
//console.log(a.b) 

//var und = undefined;
var und;
//console.log(und);

var n = null;
//console.log(n);

/*
At very highr level of prog, there are two types of data types in javascript
1. Primitive data types: undefined,null,number,sting, boolean, symbol 
2. Reference data types: Arrays and Objects.
*/
var arr = [1,2,3,4,5]

//Operators in javascript
//arithmatic operators.
var a = 100;
var b = 10;
//console.log("The value of a + b is",a+b);
//console.log("The value of a - b is",a-b);
//console.log("The value of a / b is",a/b);
//console.log("The value of a * b is",a*b);

//Assignment operators
var c = b;
//var c += 2
c += 2;
c -= 2;//c = c -2
c /= 2;
c *= 2;
//console.log(c);

// Comparison operator.
var x = 34;
var y = 56;
//console.log(x == y);
//console.log(x >= y);
//console.log(x <= y);
//console.log(x > y);
//console.log(x < y);

//logical operator

//console.log(true && true);
//console.log(true && false);// AND operator
//console.log(false && true);
//console.log(false && false);

//console.log(true || true);// OR opearator
//console.log(true || false);
//console.log(false || true);
//console.log(false || false);

//console.log(!false);
//console.log(!true);// NOT operator

// functions in jjavascript
// DRY = do not repeat yourself 
function avg(a, b){
    c = a + b/2;
    return c;
}

c1 = avg(4, 8);
c2 = avg(310, 508);
//console.log(c1, c2)

// Conditions in javascript
/*var age = 22;
if(age <= 18 ){
    //console.log("you are matured enough to drink alcohol");
} 
else{
    //console.log("you are not matured enough to drink alcohol");
}
age = 4;
//if else ladder
if(age > 32){
    console.log("yo r not a kid");
}
else if(age >26){
    console.log("bache nahi rahe");
}
else if(age >23){
    console.log("yes bache nahi rahe");
}
else if(age >18){
    console.log("18 bache nahi rahe");
}
else{
    console.log("bachhe rahe");
}
console.log("end of ladder");
*/

var arr = [1,2,3,4,5,6,7];
//console.log(arr);
//for(i=0;i<arr.length;i++){
    //if(i==3){
      //  break; 
    //}
  //  console.log(arr[i])
//}

//arr.forEach(function(element){
//    console.log(element);
//})
//const ap = 0;
//ap++;
//ap = ap + 1;
///let j=0;
//while(j<arr.length){
//    console.log(arr[j])
    // j++;
//}

//do{
  //  console.log(arr[j]);
    //j++;
//}while(j<arr.length);

let myarr = ["fan","camera",34,null,true];
//Array methods
//console.log(myarr.length);
//myarr.pop();
//console.log(myarr);
//myarr.push("Anuj");
//myarr.shift();
//console.log(myarr.unshift("Anuj"))
//console.log(myarr);

//String Methods in javascript
let mylovelystring = "Anuj is a good boy";
//console.log(mylovelystring.length);
//console.log(mylovelystring.indexOf("good"));
//console.log(mylovelystring.lastIndexOf("good")); 

//console.log(mylovelystring.slice(0,3));
//console.log()
d = mylovelystring.replace("Anuj","panda");
//d = d.replace("iti","jadu");
//console.log(d, mylovelystring)

let myDate = new Date();
//console.log(myDate);
//console.log(myDate.getTime());
//console.log(myDate.getFullYear());
//console.log(myDate.getDay());
//console.log(myDate.getMinutes());
//console.log(myDate.getHours());

//DOM manipulation
let elem = document.getElementById('click');
//console.log(elem); 

let elemclass = document.getElementsByClassName("container")
//console.log(elemclass);
//elemclass[0].style.background = "yellow";
elemclass[0].classList.add("bg-primary");
elemclass[0].classList.add("text-success");
//console.log(elem.innerHTML);
//console.log(elem.innerText);

//console.log(elemclass[0].innerHTML);
//console.log(elemclass[0].innerText);

tn = document.getElementsByTagName('div')
//console.log(tn);
createdElement = document.createElement('p');
createdElement.innerText = "This is a Para";
tn[0].appendChild(createdElement);
createdElement2 = document.createElement('b');
createdElement.innerText = "This is a bold";
tn[0].appendChild(createdElement2, createdElement);

//Selecting using query
//sel = document.querySelector('.container');
//console.log(sel)
//sel = document.querySelectorAll('.container');
//console.log(sel)

//function clicked(){
//    console.log('The button was clicked')
//}
//window.onload = function(){
//    console.log('The document was loaded')
//}

//Events in javascript.
//firstcontainer.addEventListener('click', function(){
//    document.querySelectorAll('.container')[1].innerHTML = " <b> We have clicked </b>"
//console.log("click hua re tu")
//})

//firstcontainer.addEventListener('mouseover', function(){
//    console.log("Mouse on hua re tu")
//})    

//firstcontainer.addEventListener('mouseout', function(){
//    console.log("Mouse out hua re tu")
//})    

//let prevHTML =   document.querySelectorAll('.container')[1].innerHTML;
//firstcontainer.addEventListener('mouseup', function(){
//    document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//    console.log("Mouse up when clicked on container")
//})    

//firstcontainer.addEventListener('mousedown', function(){
//    document.querySelectorAll('.container')[1].innerHTML = " <b> We have clicked </b>"
//   console.log("Mouse down when clicked on container")
//})    

//Arrow function

//summ = (a,b) =>{
//    return a+b;
//}

//setimeout and setinterval
//logKaro = ()=>{
//    document.querySelectorAll('.container')[1].innerHTML = " <b> We have fired </b>"
//    console.log("I have logged")
//}
//clr = setTimeout(logKaro,4000);
//clr = setInterval(logKaro,4000);
// clear interval is used to cancel the iteration or settimeout/setinterval operation.

//javascript local Storage 
//localStorage.setItem('name',"Anuj")

//localStorage   //localStorage.removeItem()  //localStorage.clear()
 //Storage {name: "Anuj", length: 1}

//localStorage.getItem('name')
//"Anuj"

//json
obj = {name:"Anuj",length: 1,a:{this: 'tha"t'}}
jso = JSON.stringify(obj);
console.log(typeof jso)
console.log(jso)

//paresed = JSON.parse({name:"Anuj",length: 1,a:{this: 'tha"t'}})
//console.log(parse)