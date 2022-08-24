/**
 *  SETS
 */
const set=new Set();
const set2=new Set([1,2,3,4,5,6,7])
set.add(1)
set.add(2)
set.add(3)
set.add(4)
set.add(5)
set.add(6)
set.add(7)
set.add(8)
set.add(10)
set.add(1)
set.add(2)
set.add(3)
set.add(4)
set.add(5)
set.add(6)
set.add(7)
set.add(8)
set.add(10)

console.log(set)

for( let i of set2){
    console.log(i)
}

/**
 *  MAPS 
 */

const map=new Map()

map.set('name',"dharmesh")
map.set('name',"dharmesh")
map.set('nme',"dharmesh")
map.set('nae',"dharmesh")
map.set([1,2],"dharmesh")  // both are  different key because [1,2] 
map.set([1,2],"dharmesh")  //  have different location

map['kry']='lalit'       // this is not key value

console.log(map.has('name'))  // true

console.log(map )   // true
/**
 * Map iteration
 */
for (let [key,value] of map){
    console.log(key +" "+value)
}

/**
 *  STRINGS
 */

let str="Dharmesh Dharmesh"
console.log(str[0])
console.log(str.indexOf('a'))
console.log(str.indexOf('z'))
console.log(str.length)
console.log(str.replace('ar','me'))
console.log(str.split(''))   // split by empty
console.log(str.lastIndexOf('e'))
console.log(str.slice(0,4))    // from 0 to 3 

console.log(str.slice(-4))    // last  four 


console.log(str.slice(-4,-2))    // last  four excuding last two 

console.log(str.toLocaleLowerCase())

console.log(str.replaceAll('mesh','gate'))

console.log(str.replaceAll(/mesh/g,'gate'))  // regular expretion

console.log(str.startsWith('Dhar'))

console.log(str.endsWith('mesh'))


let s='kite'

console.log(s=='kite')

console.log(s==='kite')
 let ss= new String('kite')
 console.log(s==ss)

 console.log(s===ss)
/**
 * Join method
 */
let  c=['Dharmesh','Upadhyay']
console.log(c.join(' + '))
 
console.log(s.padStart(30,'+'))
console.log(s.padEnd(8,'+').padStart(12,"+"))
