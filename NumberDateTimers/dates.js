const n=new Date(Date.now())

/**
 * TImestamp are time in milisecond
 */
console.log(n)

console.log(n)

console.log(new Date(2023,10,19,15,23,2)) // year month day hour minute sec

console.log(n.getDate())

console.log(n.getMonth()) //  0 index in JAN =0

console.log(n.toISOString())

console.log(((new Date(2022,3,1))-(new Date(2021,2)))/(1000*60*60*24)) //(mili*sec*min*24) will give no of days

/**
 *  international
 * 
 */
const now =new Intl.DateTimeFormat('en-us').format(n)

console.log(now,'international')