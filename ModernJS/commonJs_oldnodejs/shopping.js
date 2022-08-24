//  exporting modules

console.log('shopping cart')


 let cart=[];

// export default addToCart=(product)=>{
//    cart.push(product)
//    console.log(product+' added')
// }



const addToCart=(product)=>{
   cart.push(product)
   console.log(product+' added')
}
const atc=addToCart
// exports.addToCart=addToCart  
exports.addToCart=addToCart
exports.cart =cart
exports.atc=atc

