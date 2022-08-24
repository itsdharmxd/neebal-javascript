/**
 * fetch function return a promis 
 */
const request=fetch( 
'https://restcountries.com/v3.1/name/india',{method:'GET'})

// cors = cross origin resource shareing

console.log(request)


request.then((response)=>{

response.json().then((body)=>{
    console.log(body)
})  // reading json


}).catch((error)=>{
    console.log(error)
})


/**
 *  Or we can handle by  
 */
 fetch( 
    'https://restcountries.com/v3.1/name/india'
    ,{method:'GET'})
    .then(res=>res.json())
    .then(body=>console.log(body))
    .catch(err=>console.log(err.message))
    .finally((()=>{
        console.log('Finally runs')
    }))





 /**
  * Promises have a special Callback Queue
  *  called (micro task CallBack queue)
  * and have priority over  call back queue
  */   

 console.log('Test Starts')

// both have completed in same time
// but Promise will run first as it have priority

// pushed in Callback queue
 setTimeout(()=>console.log('0 sec'),0);  // create promis

 //pushed in Microtask-Callback Queue  
 // this queue have  priority over call back queue   
 Promise.resolve('Resolve promise 1') // this promis is in queue and alredy resolved
 .then(res=>console.log(res));

 console.log('test end')


 /**
  * Defining promises
  */

 const promise=new Promise((resolve,reject)=>{
    setTimeout(
    ()=>{
      if(1<=0.5){
       resolve('random passed');
      }else{
       reject('random rejected');
      }
    },5000)
}
)

/** Promis testing */
console.log(promise.then((res)=>{
    console.log(res)
}).catch((err)=>{
  console.log(err)
}))


const wait =function (seconds){
    return new Promise(
        function(resolve,reject){
            setTimeout(resolve,seconds*1000);
        
            if(1<=0.5){
                resolve('random passed');
               }else{
                reject('random rejected');
               }        
        }
    )
}


wait(5).then((res)=>{
    console.log(res)
}).catch((err)=>{
  console.log(err)  
})


/**
 *  Already Accepted and rejected
 *  Promises
 */

Promise.resolve('abc').then(res=>console.log(res));

Promise.reject('abc').then(err=>console.log(err))



/**
 *  Using asyn await
 */


async function api  (country){

   try{
    // calling api
    const res=await fetch
    ('https://restcountries.com/v3.1/name/'+country
    ,{method:'GET'});
    
    
    // parsing in json 
    const body =await res.json();
    console.log(body)
    }
    catch(err){
        console.log(err)
    }
}

api('india');