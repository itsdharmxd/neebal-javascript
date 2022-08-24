

/**
 *   Api requests
 *   https://github.com/public-apis/public-apis
 */

const main=document.querySelector('.main')


//'''''''''''''''''''''''''''''''''''''''''
const request=new XMLHttpRequest();
// 'https://restcountries.com/v3.1/name/{name}'
request.open('GET','https://restcountries.com/v2/name/peru')

request.send()
console.log(request.responseText)
/**
 * Use default function not array function
 */
request.addEventListener('load',function(){
    console.log(this.responseText)
    console.log(JSON.parse(this.responseText))
    main.innerHTML=this.response
})

// callback hell in notes
// => callback inside callback which 
// => make a nested call back pyramid   which hard to understand and debug