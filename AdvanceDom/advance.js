
/**
 * Document is a global object
 */
console.log(document)

console.log(document.body)

console.log(document.head)

console.log(document.documentElement)  // root node

const array=document.querySelector('.box')

console.log(array)   // a node list


const main=document.querySelectorAll('.main')[1]

const createNew=document.createElement('div')
createNew.classList.add('box')

console.log(createNew.style.backgroundColor='blue')

console.log(main.append(createNew) )
console.log(main.prepend(createNew.cloneNode()) )    // for cloning

/**
 * Styling 
 * 
 */
createNew.style.backgroundColor='green'

console.log( getComputedStyle(createNew).backgroundColor)  // for getting style

createNew.style.setProperty('--color-primary','orangered')


/**
 * Setting element attribute
 */

createNew.setAttribute('name','Dharmesh')

/**
 * Smooth schlloring
 */

console.log(createNew.getBoundingClientRect())  // get the section recatangle

const section1=document.querySelector('.section1')

const section2=document.querySelector('.section2')

const rect1=document.querySelector('.section1').getBoundingClientRect()

const rect2=document.querySelector('.section3').getBoundingClientRect()


console.log(section1.getBoundingClientRect(),section2.getBoundingClientRect())
// DOMRect {x: in_PIX_FROM_TOP_LEFT_COrner, y:top_right_corner, width: 1349, height: 600, top: 3, …}
// DOMRect {x: 3, y: 3, width: 648, height: 600, top: 3, …}
// bottom: 603
// height: 600
// left: 3
// right: 651  => left+width
// top: 3
// width: 648
// x: 3
// y: 3
// [[Prototype]]: DOMRect

createNew.addEventListener('click',(e)=>{
    createNew.remove()

/**
 * Old way
 */
//    window.scrollTo(
//     {  left: rect2.left  ,
//       top: rect2.top ,
//       behavior:'smooth',     

//     })

/**
 * New Way 
 */
    section2.scrollIntoView({behavior:'smooth'})

  })

