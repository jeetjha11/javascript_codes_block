//Objects methods:

// assign()

let obj={
    name:'Jeet'
}

let target = {};
let source1 = { a: 1, b: 2 };
let source2 = { b: 3, c: 4 };
Object.assign(target,source1,source2)
console.log(target);

let newData=Object.create(obj)
console.log(newData.name);

Object.defineProperty(obj,'name',{
    value:'richi',
    enumerable:false,
    writable:true
})
Object.defineProperty(obj,'age',{
    value:24,
    enumerable:false,
    writable:true
})
console.log(obj.name,obj.age);

Object.defineProperties(obj,{
    address:{
        value:'Bhopal',
        enumerable:true,
        writable:true
    },
    gender:{
        value:'male',
        enumerable:false,
        writable:false
    }
})

console.log(obj.name,obj.age,obj.address,obj.gender);


//entries()
let value=Object.entries(source1)
console.log(value);


function person(name,id,age)
{
    this.name=name
    this.age=age
    this.id=id
}
var person_obj=new person('jeet',1,12)
console.log(person_obj);

for(let data in person_obj)
{
    console.log(`${data}: ${person_obj[data]}`);
}

let descriptor=Object.getOwnPropertyDescriptor(person_obj,'name')
console.log(descriptor);
let descriptors=Object.getOwnPropertyDescriptors(person_obj,'name')
console.log(descriptors);

// this function is used to make the object as extensiations false
// Object.preventExtensions(person_obj)
// console.log(Object.isExtensible(person_obj));

console.log(Object.is(person_obj));
// Object.freeze(person_obj)
console.log(Object.isFrozen(person_obj));


// Object.seal(person_obj)
console.log(Object.isSealed(person_obj));


Object.defineProperties(person_obj,{
    data:{
        value:111111
    }
})

Object.defineProperty(person_obj,'newProperties',{
    value:121212121
})
console.log(Object.keys(person_obj));
// console.log(Object.values(person_obj));

console.log(person_obj.data);
console.log(person_obj.newProperties);


let p_dis=Object.getOwnPropertyDescriptors(person_obj)
console.log(p_dis);

// let P1=Symbol('P1')

// symbol is the unique propertes which is used to make make the unique 


Object.defineProperties(person_obj,{
    [Symbol('P1')]:{
        value:122
    }
})

// console.log(person_obj.P1);
console.log(Object.getOwnPropertySymbols(person_obj));

console.log(Object.getOwnPropertyNames(person_obj))



