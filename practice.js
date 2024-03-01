

var marks=20

if(marks>=70 && marks<=100)
{
    console.log("Grade A");
}
else if(marks>=50 && marks<=69)
{
    console.log("grade B");
}
else if(marks>=30 && marks<=49)
{
    console.log("grade C");
}
else if(marks<0 || marks>100)
{
    console.log("Not a valid marks");
}
else{
    console.log("Fail..");
}