// Javascript Object
// ho we can define
let person = {
    name: 'abc',
    age: 21
}
console.log(person.name, person.age);


let man = new Object()
man.name = 'vvv'
man.age = 222


Object.defineProperties(man,{
    walk:
    {
        value:"slow walk"
    }
})

console.log(man.name, man.age);
console.log(typeof (person));


function employee(name, age, salary) {
    this.name = name
    this.age = age
    this.salary = salary
}
let employee1 = new employee("vikash", 22, 40000)
let employee2 = new employee("David", 22, 40000)

console.log(employee1, typeof (employee1), employee2);

// javascript method

// Object.assign()

let dummyObject = {}
dummyObject = Object.assign(employee1, dummyObject)
console.log(dummyObject.name, dummyObject.salary);


let data = Object.create(employee1)
console.log(data.name);


Object.defineProperty(employee1, 'address', {
    value: 'Bhopal',
    enumerable: true,
    writable: true
})
console.log(employee1.address);

Object.defineProperties(employee1, {
    department: {
        value: 'HR',
        // enumerable: true,
        // writable: true
    },
    company:
    {
        value: 'Google',
        // enumerable: true,
        // writable: true
    },
    emp_id:
    {
        value: 100,
        // enumerable: true,
        // writable: true
    }
})

console.log(employee1.emp_id, employee1.department, employee1.company);

console.log(employee1)
// entries
let entries=Object.entries(employee1)
console.log(entries);


// Object.freeze(employee1)
employee1.name="ravi"
console.log(employee1.name);



// getOwnPropertyDescriptor()

console.log(Object.getOwnPropertyDescriptor(employee1,'name'));
console.log(Object.getOwnPropertyDescriptor(employee1,'age'));

// getOwnPropertyDescriptors()

console.log(Object.getOwnPropertyDescriptors(employee1));



// Object.preventExtensions(employee1)

// Object.freeze(employee1)
// Object.defineProperty(employee1,'gender',{
//     value:'Male',
//     enumerable:true,
//     writable:true,
//     configurable:true
// })

// console.log(Object.getOwnPropertyDescriptors(employee1));
console.log(Object.isExtensible(employee1));
console.log(Object.isFrozen(employee1));


Object.seal(employee1)
console.log(`employee is sealed: ${Object.isSealed(employee1)}`);

let keys=Object.keys(employee1)
console.log(keys);

let values=Object.values(employee1)
console.log(values);
for(let key in keys)
{
    console.log(employee1.valueOf(key));
}







