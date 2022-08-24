'use strict';

console.log(add(4,5));   // we  can sue this before declaraition


// function declairation
function add( a , b){    
 return a+b;
}


// function expretion
const sub=function(a,b){
    return a-b;
}


console.log(sub(5,4))


// Arrow Function

const mul=(a,b)=>a*b;

console.log(mul(4,6));