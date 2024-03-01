console.log("Hello world")

// variables
//  var let const

var num1=12   // it is used to give the global access to the variable
let num2=13  // it is used to give the bloack access to the variable

num1=17

const num3=14  // it is used to make a variable as constant we cant cant change the value of the varivale once we have defined it.

console.log(num1);
console.log(num2);
console.log(num3);


// datatype

var number1="abc"
console.log(typeof(number1));


//operators

// Arithemetic Operator  +,-,/,*,%
console.log(12+12);

// conditional operator
// greate then-  >, less then-<, less then and equal to- <=, greater then and equal to-  >=, equal to- ==,  strictly equal to ===  
// this operator returs either true or false depend upon conditions

/*
    what is the difference between the == and ===

    == is used  to check the equality of two variables value
    === is uesd to check the equality of the two variables value with data types

    - logical Operator:
    it is used to perform the logic between
    two operands
    type of logical operator:
    and-  &&
    or- ||
    not- !



    conditionals:

    It is the type of block which is used
    to perform the conditions bessed operations

    ex:
    if(conditions)
    {

    }
    else{

    }

    loops:
    it is used to itrate a code again  and again tll the condition is satisfied

    types of loops:

    for
    while
    do-while
    forEach


    if we know the number of itrations then we will use for loop else while loop


    function

    Function is the block of code which is used to perform the particuler task

    syntax:

    function functionName()  -> function decleration
    {

        code  --- function defination or body
        return something  - return keyword is used to return something from the function


    }

    calling of the function:

    functionName()
 */

var value1=12
var value2="12"
console.log(value1===value2);


// write a program to check the age is greater then 18 or not
var age=121
var gender="female"
if(age>=18 || gender=="male")
{
    console.log("age is greate then 18 nad your gender is male");
}
else{
    console.log("age is less then 18");
}


// write a program to print all the odd numbers from 1 to 100


for(i=1;i<100;i++)
{
    if(i%2!=0)
    {
        console.log(i);
    }
}


condition=100
while(condition<100)
{
    if(i%2!=0)
    {
        console.log(i);
    }
    condition+=1
}


var isValid=true
// do{
//     console.log("Hello");

// }
// while(isValid)


var v1=12

function checkValue()
{
    let v2=123
    console.log(v1);
    console.log(v2);
    return "function has been executed"
}


console.log(checkValue());











