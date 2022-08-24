/**
 * Constructor function are normal function with new  key word
 */

const Person=function(firstname,birth){
   this.firstname=firstname
   this.birth=birth
  console.log(this)

  /**
   * Never do this because 
   * for every new objet this function will be haing a new copy
   * which will degrade performance use proto type
   */
//   this.calage=function(){
//     console.log(2037-this.birth)
//    }

}
const john =new  Person('Dharmesh',1991)   //new  oprator
console.log(john)
//  New {} object is created
//  function is called , this ={}
//  {} linked to protorype
//  function autometicaly return {}  empty 

const matila=new Person('matila',3023)

console.log(matila instanceof Person)  // for checking


/**
 * Constructor functon have a proto type  property
 * Prototype
 */
 console.log(Person.prototype)

Person.prototype.calage=function(){
    console.log(2037-this.birth)
   }
 
Person.prototype.species='human'  // ptoto type variable
console.log(Person.prototype)
john.calage()

console.log(john.__proto__===Person.prototype)   // proto type in person and class

// is not  the proto type of person ,
// it is the proto type to be use  among all abjects
console.log( Person.prototype.isPrototypeOf(john))
console.log( Person.prototype.isPrototypeOf(Person)) //  prototype  of  linked objects


console.log(john)

console.log(matila)

/**
 * SEEE PDF DOC :)
 */

console.log(john.__proto__)   // Person prototype

console.log(john.__proto__.__proto__)  // Object  prototype

console.log(john.__proto__.__proto__.__proto__)   // Object prototype pointing to NULL

/**
 * There is a hirarchy of prototype pointing to parent prototype
 */

const arr=[1,2,3,4,5,6]

console.log(arr.__proto__)

console.log(arr.__proto__=== Array.prototype)   // behine the scene instance  of Array

console.log(arr.__proto__.__proto__) // object prototype


console.log(arr.__proto__.__proto__.__proto__) // null



const dhar=new Person.prototype.constructor('DHarmesh',32) // will point object  constructor
console.log(dhar)  








  
