'use strict';

let arr=[1,2,4]

arr.forEach(element => {
    console.log(element)
});

arr=Array.of(1,2,3,4,5)
arr.forEach(element => {
    console.log(element)
});

arr=new Array(1,2,3,4,5,6)

arr.forEach(element => {
    console.log(element)
});

arr=new Array('dharmesh','upadhyay',[1,2,3],6)


arr.forEach(element => {
    console.log(element)
});

const obj={
    name:'dharmesh',
    age:34,
    choise:[1,2,3,4,5],
    calage:function (a){   // function within object
        return this.age;
    }
}

 
console.log(obj.name);
console.log(obj['name'])

console.log(obj.calage(34));

console.log(obj['calage'](43));

//   console.log(prompt("enter name"))


console.log(Math.pow(4,3))










