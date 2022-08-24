/**
 * All Numbers internaly are float
 */
console.log(23===23.0)  

console.log((0.1+0.2)==0.3)  // error

/**
 * solution EPSILON number is a small number
 */
console.log(Math.abs((0.1+0.2)-0.3)<Number.EPSILON)    // IMPORTANT


// coverting 

const a=new Number(0.1)

console.log(Number.parseInt('2.5rem'))

console.log(Number.parseFloat('2.5rem'))

/**
 *  MAth
 * 
 */
console.log(Math.sqrt(25))

console.log(25**(1/2))  // sqrt 

console.log(25**(1/3))  // cube root

console.log(Math.round(3.5))

console.log( Math.trunc( 3.7))   // eleminate fractional  part

console.log(Math.random()) // indecimal random

console.log(Math.ceil(0.6))

console.log(Math.floor(0.9))

console.log(2.34.toFixed(5))   //  returns string


/**
 *   remaider
 * 
 */

console.log(5%2)  // mod

console.log((0.5)%(0.1))



/**
 *  Number seerator
 */

const diameter=287_0_0_0_0_000  // numberic separators   we can use infnne
console.log(diameter)

const Pi=0.234_234  // only between numbers
console.log(Pi)

/**
 *     BIGINTEGERS
 */

console.log(2**100)  // very large number

console.log(23456789987654321234567898765432345678998762345678765432345678)  // very large number
/**
 *  n means Normal number to BIGINT
 */
 console.log(23456789987654321234567898765432345678998762345678765432345678n)  // very large number

console.log(2**1200)

console.log(BigInt( 2**100))

console.log(20n===20) //  (false) Bigint with int

console.log(20n+20n)

console.log(20n/3n)

console.log(20n+20n)


console.log(20n*20n)

















