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


export {addToCart as atc ,addToCart ,cart} ;