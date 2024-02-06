let array=[1,2,3,4,5]
console.log(array);

//instance
let secondArray=new Array()
secondArray[0]="apple"
secondArray[1]="banana"
console.log(secondArray);

//constructor
let thirdArray=new Array(1,2,3,4,5)
console.log(thirdArray);


// concat

let newArray=array.concat(secondArray,thirdArray)

console.log(newArray);


let entry=newArray.entries()


for(let value of entry)
{
    console.log(value);
}

//

let isValid=array.every(function(element){
    return element>0
})
console.log(isValid);



array.fill(0,1,array.length)

console.log(array);



let data="Hii i am there"

let dataArray=Array.from(data)
console.log(dataArray);

let mixedArray=[1,2,3,4,5,6,7,8]

let filteredArray=mixedArray.filter(function(element)
{
    return element%2==0
})

console.log(filteredArray);


let valueFound=mixedArray.find(function(element){
    return element>4
})
console.log(valueFound);
valueFound=mixedArray.findIndex(function(element){
    return element>4
})
console.log(valueFound);


mixedArray.forEach(function(value){
    console.log(value);
})

let fruits = {
    nameOrange:'Orange',
    nameMango:'mango'
}
Object.defineProperty(fruits,'namekiwi',{
    value:'Kiwi',
    writable:true,
    enumerable:true
})
console.log(fruits);


// Doubled Numbers Array 
new_Array = [2,4,5,6,7,9,8,2]

function doubled_array(new_Array){
    return new_Array.map(function(element){
        return element*2 
    })
};

new_doubled_array = doubled_array(new_Array)
console.log(new_doubled_array);




let fruits_1=["apple","banana","kiwi","orange"]

let new_arr=fruits_1.splice(2,0,"grapes")
console.log("removed element", new_arr);
console.log("original element", fruits_1);

let arr = "vikash";
let result = Array.from(arr);

console.log(result.reduceRight(function(accum,element){
    return accum+=element;
}))
