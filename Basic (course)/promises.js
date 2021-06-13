//Promises----------->js is single threaded
let certificatePromise = new Promise((resolve,reject)=>{
    //some processing happens and candidate gets the certificate
    certified = true
    if (certified){
        setTimeout(()=>{resolve("certificate obtained")},3000)
        
    }
    else{
        reject("certificate rejected")
    }
});

let jobPromise = new Promise((resolve,reject)=>{
    //some processing happens and candidate gets the certificate
    jobObtained = true
    if (jobObtained){
       resolve("job obtained")
        
    }
    else{
        reject("job rejected")
    }
});

certificatePromise.then((successResult)=>{
    console.log(successResult)
    return jobPromise;
}).catch((failure)=>{
    console.log(failure)
}).then((successResult)=>{
    console.log(successResult)
    return jobPromise;
}).catch((failure)=>{
    console.log(failure)})

console.log("rest of code")


//------------summary of promises-----------
thatfunction.then(()=>{
    //code to be run if its successful

}).catch(()=>{
    //code to be run if its unsuccessful
})

//promise.all and promise.race--------