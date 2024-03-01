function itr() {
    const id = setInterval(() => {
        console.log("hii");
    }, 100);

    setTimeout(() => {
        clearInterval(id)
        console.log("Interval stoped");
    }, 1000);
}

// const data = null
// async function printMessage() {
//     try {
//         await fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json').then((res) => {return res.json() }).then((data) => data = data)
//         return data
//     }

//     catch
//     {
//         console.error("ssss");
//     }
// }





const data = null;

async function printMessage() {
    try {
        await fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json')
            .then((res) => { return res.json(); }) // Parse the JSON response
            .then((jsonData) => { data = jsonData; }); // Assign the parsed JSON data to the 'data' variable
        return data; // Return the fetched and parsed data
    } catch {
        console.error("ssss"); // If an error occurs during the fetching or parsing, log "ssss"
    }
}
response = printMessage()
console.log(response);
console.log("data");


const pr=new Promise(
    resolve=>{
        console.log("hiii");
    },
    reject=>{
        console.log("giiii");
    }
)
console.log(pr);