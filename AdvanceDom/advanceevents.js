/**
 *   Capturing phase => top to bottom
 *   Target phase    => only target   
 *   Bubbling phase  => botom to top
 */
 //   true/false for all ansesters
// box.addEventListener(_,_,false)  // fro bubbling   4 3 2 1   if clicked on 4th inherit

// box.addEventListener(_,_,true)  // fro capturing phase  1 2 3 4  if clicked on 4th inherit


const boxes=document.querySelectorAll('.box')

boxes.forEach((box)=>{
   const func= ()=>{
        box.removeEventListener('mouseenter',func)
    //   alert("hover")
      }
   box.addEventListener('mouseenter',func)      /// removing event listerns
})
 
/**
 *  IMPORTANT Bubbling  event  from root to ansestor
 *  e.target = > on which the event initialy happens
 *  e.currenttarget => element onwhich this event is hapening
 *   
 *   e.stopPropagation()  to stop propagation to ansestors
 */


 const main=document.querySelector('.main')
 const box=document.querySelector('.box')


 main.addEventListener('click',(e)=>{
    console.log(this,e.currentTarget,e.target)
    console.log('main')

 },true)

 box.addEventListener('click',(e)=>{

    console.log(this,e.currentTarget,e.target)
    console.log('box')
    // e.stopPropagation()  // for target phase
 },true)  // true for Bubbling phase bottom to top 
