let arr=[3,4,5,1,2,45,9,8,76];


console.log(arr)

console.log(arr.slice(0,4))
arr=arr.concat(arr)
console.log(arr.sort())

/**
 *   .entries() return array with index
 */
for(let k of arr.entries()){
    console.log(k[0]+" "+k[1])

}

arr.forEach((value,index,)=>{
 console.log(value,index)
})

const set=new Set(arr);

console.log(set)
set.forEach((value)=>{
  
})



const map =new Map()
map.set('a',1)
map.set('b',2)
map.set('c',3)
map.set('d',4)
map.set('e',5)

console.log(map)
map.forEach((value,key)=>{
console.log(key+' => '+value)

})


/**
 *   Three important methods
 *   Map,filter, reduce
 */

let arr2= arr.map((value,index)=>{      // return value to form new  array
     return 2
})
console.log(arr2)


arr2=arr.filter((value,inde)=>{           // use to filter
    if(value<9)return  true;
    else false
})
console.log(arr2)

/**
 * Accumulator is  like a snow ball which rolls
 */
const balance=arr.reduce((accmulator,currvalue,index)=>{
   return accmulator+currvalue
},500)// 500 = initial value of  accumulator
console.log(balance)


/**
 *  find method    
 * return first element which full fill condition
 */
console.log(arr.find(value=>(value>4)))
console.log(arr.findIndex(value=>(value>4)))


/**
 *  Some and every
 */

// alleast one
console.log(arr.some((value)=>value<5));
// all elements
console.log(arr.every((value)=>value<5));


/**
 * flat  the array  and single array is created
 */
let flat=[1,2,[3,4,[4,[5,67]]]]

flat=flat.flat(4)
console.log(flat)


// flat=flat.flatMap((num)=>{num>2;})
// console.log(flat)