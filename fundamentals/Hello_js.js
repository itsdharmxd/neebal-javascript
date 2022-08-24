// my name is dharmesh
console.log("Hello dharmesh")

/**
 *   in variable name _ and $ these two varibles are allowed
 */
let $dharmesh="dharmesh";
    $dharmesh='dharmesh'

console.log(typeof 23)
console.log(typeof 34.43)
console.log(typeof true)
console.log(typeof {name:"sd"})
console.log(typeof 'string')
console.log(typeof "string")
let empty;
console.log(typeof empty )
console.log(typeof '')

/**
 * values deside data type(container)
 */
empty=33
console.log(typeof empty)
empty='asd'
console.log(typeof empty)


console.log(typeof null)   // this is a bug in JS which says null as Object , cant resolve because of legacy reasons


// let ,var ,const
let l;  //    local mutable
var v;  //    global mutable
const c=0 //  local immutable        we need o initialize while decaliring


/**
 * Operators
 *   ** (power operator)
 */
console.log(2/2,2*2,2**2 );

/**
 *  String and Template literals
 */
let str='DHarmesh   ❤'    // for emoji "Window Key + ."🤢
str="Dharmesh"
str=`My name is   ❤ \n\
                       ${str}`
console.log(str)

if(true){

}else if(false){

}else ;

/**
 * Type Conversion    <= when we convert
 * Type Coercion      <= when JS convert 
 */

console.log(Number.parseInt('34')-Number.parseInt('4'));
console.log(typeof NaN)

console.log(34+34+' number')   //  left to right  '+' means concatination and addition both
console.log(' number'+ 34+34)  // left to right  
console.log(' number'+ (34+34))  // left to right  
console.log('23'-'3'-4)
console.log('23'*'3')


/**
 * Truely ans Falsy values 5 falsy values   0,'',null,undefined,NaN
 */

console.log(Boolean(0))
console.log(Boolean(''))
console.log(Boolean(null))
console.log(Boolean(undefined))
console.log(Boolean(NaN))

/**
 * Equality operators '==' vs '===' ; '===' also check the type
 * 
 */

if('18'==18){
    console.log("equal value")
}else{
    console.log("non equal value")
}

if( Number.parseInt( '18')===18){
    console.log("equal value and type")
}else{
    console.log("non equal value or type")
}


switch ('a'){
  case 'a':  // strict comparision '==='
  case 'b':
   console.log('check')
   break;
  case 'c':
    console.log('uncheck')  
   default: console.log('default')

}