//-----------this is object----------------
let student = {
    usn : "114",
    firstName : "iti",
    lastname : "Patel",
    greet : function(){ return"Hello Guys"},
    subjects : ["web","kali","ML"]
}
console.log("Output is : ", student.firstName);
console.log("Output is : ", student.greet());
console.log("Output is : ", student.subjects[1]);

//-----------object constructor------------
let myLaptop = new Object();
//let propertyName = "resolution";

myLaptop.brand = "Dell";
myLaptop.course = "8";
myLaptop.storage = "1TB";
myLaptop["resolution"] = "1080p";
//myLaptop[propertyName] = "1080p";

console.log("myLaptop Info : " , myLaptop.brand ,"course :" ,myLaptop["course"], "Storage : ", myLaptop.storage);

//object.create()------>create object without constructor
const occupation = {
    type : "none",
    displayType : function(){
        console.log(this.type);
    }
}

//object 
let police = Object.create(occupation);
police.type = "police";
police.displayType();

