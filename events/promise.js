// promise


const firstPromise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let isError = true
        if (!isError) {
            console.log("Hii i am a promise");
            resolve({id:"110",
                    message:"Hii promise has been completed"})
        }
        else{
            console.log();
            reject({error: "Somethng wrong"})
        }

    }, 2000)



})



//arrow
// const firstPromiseArrow=new Promise((resolve,reject)=>
// {

// })


firstPromise.then((data) => {
    console.log("Promise has been completed");
    console.log("Resolve Dta: ",data);
    return true
}).then((isValid)=>{
    console.log("Give Promise is completed:", isValid);
    return "Hii i am ending"
}).then((message)=>{
    console.log(message);
})
.catch((error)=>{
    console.log(error);
})




console.log("Promise Executed");
