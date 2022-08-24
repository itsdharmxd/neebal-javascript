/**
 *  Accesing parent siblingd childs in DOM
 */


const h1=document.querySelector('.box');

console.log(h1)
h1.style.backgroundColor  ='green'

console.log(h1.parentElement )   // parent

console.log(h1.parentNode )     // parent

/**
 *  Ancestor traverse
 */

let parent;
console.log(  parent= h1.closest('.main'))    // closest ansestor query selector

console.log(parent.querySelectorAll('.box'))

console.log(parent.children)

console.log(parent.childNodes)
/**
 * specific child
 * 
 */
console.log(parent.firstElementChild)

console.log(parent.lastElementChild)

/**
 * Siblings 
 */
console.log(parent.previousElementSibling)  // previous sibling

console.log(parent.nextElementSibling)     // next sibling

/**
 * Passing value in event handlers
 */
const func=(e,value)=>{
 console.log(e,value)
}
parent.addEventListener('click',(e)=>{
    func(e,4)
})

/**
 * use Function not arrow function
 */
parent.addEventListener('dblclick',(function(){
    console.log('db click',this)
    
}).bind(45))
