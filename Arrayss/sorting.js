let arr=[3,4,5,1,2,45,9,8,76];

/**
 *  by dafault sort as string
 */


/**
 * Have to pass comparator function
 */
console.log(arr.sort((a,b)=>{
    if(a>b)return 1;       // 1 means swaping
    if(a<b)return -1;     // dont swap
    return 0;            // same elements

}))

/**
 *  Filling an array
 */

const array=[1,2,3,4,5,6,7,8]
console.log(array)
 
/**
 * aal elements to 3
 */

console.log(array.fill(3,2,5))   // filling partial

console.log(array.fill(3))      //   filling fully


