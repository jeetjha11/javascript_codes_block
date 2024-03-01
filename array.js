/*
    Array:
    A array is the collection of data 

    syntax:
    
    var array1=[]

    callback function:
    A function which is used to pass in the argument
    of the another fucntion

    syntax:

    function check(function calback()
    {

    })

 */


var fruits=["orange","apple","mango","banana","papaya","tomato","lichi","chiku"]


// fruits=fruits.splice(0,2,'lamon','green-apple')

// console.log("before sorted",fruits);
// fruits.sort()
console.log(fruits);

var slicedArray=fruits.slice(0,3)
console.log(slicedArray);

var element=fruits.shift()
console.log(element);
var age=[12,13,14,18,13]

var isGreateThen=age.some(function(value)
{
    return value>18
})

console.log(isGreateThen);


var number=[1,2,3,4,5,6]
// number.reverse()
// console.log("reversed: ",number);

number.push(7)
console.log(number);

number.unshift(12)
console.log(number);


var result=number.reduce(function(result,currentvalue)
{
    return result*currentvalue
})
console.log("Sum of all the elements in the array: ",result);
var result1=number.reduceRight(function(result,currentvalue)
{
    return result+currentvalue
})
console.log("Sum of all the elements in the array reductRight: ",result1);



var newArray=Array.of(1)

console.log(newArray);


//  Array creation

var arr=new Array(1)
// console.log(arr);
// arr.push(1)
console.log(arr);


var number1=[1,2,3,4,5,6]



var resultArray=number1.map(function(value){
    return value*25
})

console.log(resultArray);


var name=["Narendra Lodhi", "Rohit","Faizan","Jeet"]

var updatedName=name.map(function(name){
    let prefix= "Mr. "
    return prefix+name
})

console.log(updatedName);



var keys=fruits.keys()
console.log(keys);

for(let key of keys)
{   
    key+=1
    console.log(`${key}= ${fruits[key]}`);
}















// var data=fruits.entries()

// // for(data in fruits)
// // {
// //     console.log(fruits[data]);
// // }

// var age=[12,14,25,45,6,45,123,34,13]
// var filterdValue=age.filter(function (age){
//     return age>18
// })

// console.log("Filtered age: ", filterdValue);

// var numberArray=[]

// for(i=1;i<=100;i++)
// {
//     numberArray.push(i)
// }

// var odd_array=numberArray.filter(function(value){
//     return value%2==0
// })

// console.log(odd_array);




var arr1=[4,3,5,4,3,2,4,6,7]

arr.indexOf()

console.log("before sorting",arr1);

arr1.sort()
console.log(" accending order after sorting",arr1);
arr1.sort(function(a,b){
    return b-a
})
console.log(" decending order after sorting",arr1);



