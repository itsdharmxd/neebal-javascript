function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function  add(a,b){
    await sleep(5000);  
    return a+b;
}

console.log(   add(23,45))

/**
 * Async function returns Promis<>
 * if we use await then it return object 
 */


async  function  getJSON(url){
    const res= await fetch(url,{method:'GET'}); 
    const body=await res.json();    
    return body;
}


/** 
 *  Multiple Promises to one Promises   
 * 
 */
async function allto_one_promise(c1,c2,c3){
 const path='https://restcountries.com/v3.1/name/';

    //   const res1=  getJSON(path+c1)

    //   const res2=  getJSON(path+c2)

    //   const res3=  getJSON(path+c3)

 // rejects if any of the  promises rejects
  const [res1,res2,res3]=   await Promise.all([   // deStructuring
        getJSON(path+c1),
        getJSON(path+c2),
        getJSON(path+c3)
      ])

      console.log(res1,res2,res3) 


}

//  allto_one_promise('india','pakistan','bhutan');



/**
 *  Racing of promises 
 *  we receive req object of
 * the promise who wins the race
 */ 



 async function racing_of_promise(c1,c2,c3){
    const path='https://restcountries.com/v3.1/name/';
   
       //   const res1=  getJSON(path+c1)
   
       //   const res2=  getJSON(path+c2)
   
       //   const res3=  getJSON(path+c3)
   
    // rejects if any of the  promises rejects
     const res1=   await Promise.race([   // deStructuring
           getJSON(path+c1),
           getJSON(path+c2),
           getJSON(path+c3)
         ])
   
         console.log(res1)//,res2,res3) 
   
   
   }
   
    racing_of_promise('india','pakistan','bhutan');
   
/** 
 *  Multiple Promises to one Promises   with allSetteled
 * 
 */
 async function allto_one_promise_using_allSetteled(c1,c2,c3){
    const path='https://restcountries.com/v3.1/name/';
   
       //   const res1=  getJSON(path+c1)
   
       //   const res2=  getJSON(path+c2)
   
       //   const res3=  getJSON(path+c3)
   
    //  if any of the  promises 
     const [res1,res2,res3]=   await Promise.allSettled([   // deStructuring
           getJSON(path+c1),  // fullfield 
           getJSON(c2),       // rejected
           getJSON(path+c3)   // fullfield
         ])
   
         console.log(res1,res2,res3) 
   
   
   }
   allto_one_promise_using_allSetteled('india','pakistan','bhutan');