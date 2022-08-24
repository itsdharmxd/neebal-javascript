/**
 *   Higher order function are those  function
 *  which receive or return or both a function
 * 
 * function trated as object which can be stored and passesd
 * 
 * A callback is a function passed as an argument to another function.
 */


function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}

function calutate(value1,value2,func){

    return func(value1,value2)
}

console.log(calutate(3,4,add))
console.log(calutate(3,4,sub))

/**
 * using function
 */
let greet=function(greeting){

    return function(namee){
       return `${greeting} for ${namee}  default dunction`
    }
}
console.log(greet('congratulations')('dharmesh'))

/**
 * Using arrow functions
 */

greet=greeting=>namee=>`${greeting} for ${namee}  arrow function`;

console.log(greet('congratulations')('dharmesh'))



/**
 * Call and apply method
 */

const obj={
   names:'Dharmesh u',
   age:34,
   place:'delhi',
   details(qualification){
    
    console.log(`${this.names} ${this.age} ${this.place} ${qualification}`)

   }
   
}

const details=obj.details

details('BCA')    // will give undefine because this is pointing to windows

details.call(obj,'BCA')  // function is a object in which we can pass 'this' calue pointing

details.apply(obj,['BCA'])

/**
 * Using Bind function
 */

let newBind=  details.bind(obj,['Bind'])  // bind with default parameter
newBind('BCA')


let newBind2=  details.bind(obj)  // bind with default parameter
newBind2('new bind 2 BCA');


/**
 * IIFE   imediate invoked function
 */

(function (){ console.log('Imediately invoked function expresion')})();

(()=>{console.log('Imediately invoked function expresion')})()