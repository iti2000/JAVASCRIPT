var x = 2;

if(x<0){
    console.log("iti");
}
else{
    console.log("meet");
}

grade = "A"

switch (grade) {
    case "A" : {
        console.log("puchu");
        break
    }
    default :{
        console.log("invalid");
    }
}

//---------looping-------
//FOR LOOP

var x = 3;
var fac = 1;

for(let i=x;i>=1;i--){
   if(i == 2){
       continue
   }
    fac *= i;
    // if(i==3){
    //     break
    // }
}

console.log(fac);

//FOR IN
var object = {'iti':'name','puchu':'nickname'}

for (let prop in object){
    console.log(object[prop]);
}

//FOR OF
for ( let item of [10,12,34]){
    console.log(item);
}

//WHILE

var y = 3;
var fact = 1;

while(y>=1){
    fact *= y;
    y--
}
console.log(fact);
