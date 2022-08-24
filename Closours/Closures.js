/**
 * Most mystical concept
 * 
 */

let v=4;
function func(){
    let  passenger=0;
   return function(){
    v++;
    passenger++;
    console.log(passenger+" passenger called ", v)    
}
}


/**
 * Function remenber variable which were present in their birth place
 */

let booker=func()
v=0
booker();
booker();
booker();
booker();
/**
 * Open [[scope]] 
 */
console.dir(booker)
/**
 * Closures have priority over the scope chains
 */


function called(n,wait){
  const p= n/3
  /**
   * only bacaue of closure
   */
    setTimeout(function (){
        console.log(n+" "+(p)) 
    },wait*1000)
    console.log('wait for 3 sec')
}
/**
 * closures  have priority over scope chain
 */
let p= 123

called(180,5)