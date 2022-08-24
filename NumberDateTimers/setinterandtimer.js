
/**
 * We are not calling   this function JS  is calling  
 */  
const timer= setTimeout((name)=>console.log("set time out ",name),3000,"Dharmesh")// (callback,timmer, arguments)


clearTimeout(timer)// this will clear ther timer out and no think will be printed

/**
 *  Set interval
 */

 const inter= setInterval((name)=>console.log("set time out ",name),3000,"Dharmesh")// (callback,timmer, arguments)

