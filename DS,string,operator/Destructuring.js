let obj={
  name:"dharmesh",
  arr:[
    1,2,3,4,5
  ],
  age:23

}

// default
let {arr:menu=[],ar:menu1=[]}=obj   // destructure  with default value
console.log(menu,menu1)

let {name,arr,age}=obj   // destructure

console.log(name,arr,age)

// muating
console.log(name,arr,age)
//    obj={arr:45,age:34}
   
//   ({arr,age} = obj ); // assigning to already declaired variable
obj.obj={
    bhai:"Bhai"
}
const {obj:{bhai}}=obj;     // nested object destructure
console.log(bhai)


/**
 *   Spread
 */
// SPread operator  object
let k ={...obj}
console.log({...k})

// spread operator array
let q=[1,2,3,4,5,6]
console.log(...q)

// spread operator string
let str='dharmesh'
console.log(...str)
str=[...str,'','d']

console.log(...str)


// spread operator  with updated value

const objet={a:'a',b:'b',c:'c'}

console.log({a:'d',...objet})    // assign left  to right

console.log({...objet,a:'d'})    // assign left  to right

