function func(a,...rest){
    console.log(a,...rest)
}

func(1,23,4,34,5,5,5)

let obj={
    name:"dharmesh",
    arr:[
      1,2,3,4,5
    ],
    age:23
  
  }
  
const {name,...rest}=obj
console.log(name,rest)  


/**
 *  Short Circutting
 */
  
console.log(''||'dharmesh')    // first value , second if first is false
console.log(''||0)             // second if both are false
console.log(''&&'dharmesh')   // second if first is true , first if false
console.log(''&&0)            // fisrt if both are false


console.log(''||0||null ||undefined||'dharmesh' )                          // first true value or last value

console.log(1&&null &&undefined&&'dharmesh' )                            //  first  false value or last  value


/**
 * Nully coalesing value
 */


// for Nullish value null or undefine
k=3
const s= 0??k  //  "in Java script"    , return default value only when first value in null or undeifine
console.log(s)

/**
 *   ||  work with falsy values  (0,'', null ,undeifen ,NaN)
 *   ?? work woth null or undefine only 
 * 
 */