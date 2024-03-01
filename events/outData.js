const url='https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json'


// fetch the currency data 

async function getAllCurrencyData()
{
    try{
        const response=await fetch(url)
        const data= await response.json()
        console.log(data.usd.jpy);
    }
    catch{
        console.log("Something Wrong");
    }
}
getAllCurrencyData()
