/**
 * Calling await in global added in 2022
 * for module  so we have to specify that  this
 * is a module
 */  
//  <script type="module"  src= "./ModernJS/toplevelawait.js"></script>

const request=await fetch( 
    'https://restcountries.com/v3.1/name/india',
    {method:'GET'})
    
const body=await request.json()


console.log(body)