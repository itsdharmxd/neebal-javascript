
console.log('optional chaining')

let obj={
        n:'name',
    
    age:34,
    class:'12th'
}

//  obj=null;

// console.log(obj.n)   //  error cannot create property of null

console.log(obj?.n)   //  error cannot create property of null


/**''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
 *   Looping over Object  
 */
for(let k of Object.keys( obj)){
     console.log(k)
}
