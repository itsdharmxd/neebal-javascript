/**
 *   let , const have block scope
 *   var   have a functonal scope
 */


let   globallet='globalLet';
const globalconst="globalConst"
var   globalvar='globalVar'



function func(){
    let   functionlet='functionlLet';
    const functionconst="functionlConst"
    var   functionvar='functionlVar'
    
    

   if(true){   
    let   locallet='locallLet';
    const localconst="locallConst"
    var   localvar='locallVar'   
    
    
console.log('---------- local')
console.log(globallet)
console.log(globalconst)
console.log(globalvar)
console.log(functionlet)       
console.log(functionconst)
console.log(functionvar)
console.log(locallet)
console.log(localconst)
console.log(localvar)
console.log('---------- local')
           }   

           console.log('---------- function')
           console.log(globallet)
           console.log(globalconst)
           console.log(globalvar)
           console.log(functionlet)
           console.log(functionconst)
           console.log(functionvar)
        //    console.log(locallet)         // not define error
        //    console.log(localconst)       // not define error 
           console.log(localvar)                                 // this have a closest functional scope
           console.log('---------- function')


}

console.log('---------- global')
console.log(globallet)
console.log(globalconst)
console.log(globalvar)
// console.log(functionlet)        //  not define error
// console.log(functionconst)      //  not define error
// console.log(functionvar)       //   not define error
// console.log(locallet)          //   not define error  
// console.log(localconst)        //   not define error    
// console.log(localvar)          //   not define error
console.log('---------- global')

func()


//  Hoisting means => function and var variable can be used before declairation ,function with defined function and var with undefined value
// TDZ const ,var have a Temprorary Dead Zone  bacause of which we cannot use  it before declairation



function  a(){
    b() 
    function b(){
        console.log("Hoinsting function inside function")
      }
     
}
a();
// scope is only in inside function
// b()