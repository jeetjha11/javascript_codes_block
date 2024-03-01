var person={
    id:1
}

var address={
    city:"Bhopla",
    pin:123
}

address.state="MP11"

// add one property

Object.defineProperty(address,'state',{
    value:"MP"
})


 person=Object.defineProperties(person,{
    'name':{
        value:"Mohan"
    },
    'age':{
        value:72
    },
    'height':
    {
        value:1.6
    }
})
console.log("Updated Address: ", address);
console.log("Updated person: ", person.name,person.age,person.height);


var emp=new Object()
emp.id=110
emp.name="Rohit"
emp.salary=10000000

console.log(emp);

var all_data={}

Object.assign(all_data,person,address)

console.log("all data: ", all_data);
console.log(person);

var addressData=Object.entries(address)

console.log(addressData);



var school={
    schoolName:"A.B.C.E school",
    numberOfTeachers:13,
}

school.numberOfStudent=144
console.log(school);


// Object.freeze(school)
school.numberOfGirls=11

console.log(Object.isFrozen(school));

school.numberOfTeachers=188


console.log(school);

var discription=Object.getOwnPropertyDescriptor(school,'numberOfTeachers')
var allDiscription=Object.getOwnPropertyDescriptors(school)

console.log(discription);
console.log(allDiscription);




