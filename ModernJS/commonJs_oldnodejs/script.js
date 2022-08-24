
//importing with full name
const {addToCart, atc,cart}= require('./shopping')  // this code executed first

// creating a namespace
// import * as shop from './shopping'


console.log('importing in script')



addToCart('ice')

atc('creame')

console.log(cart)
