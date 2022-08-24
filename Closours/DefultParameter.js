
/**
 * 
 * if there are multiple functions with the same name,
 * the function that is defined at the last gets executed. 
 * 
 * 
 */
 function func(a,b){  

    console.log(a,b)
}
function func(a,b,c){  /// this function will be used

    console.log(a,b,c)
}


func(1,2)

/**
 * Default parameter
 */

function dfunc(a,b,c=2){     // set default parameter  from right to left
    console.log(a,b,c)
}

dfunc(1,3)

function dfunc(a,b=2,c){     // set default parameter  from right to left
    console.log(a,b,c)
}

dfunc(1,undefined,3)   // trick to in between default value

dfunc(1,null,3)   // trick to in between default value



/**
 *  Js dont have refrence  for primitive type
 *  but heap memory object can be pass
 */
let num=23
let obj= {
    namee:'dharmesh',
    age:23
}

function ref(num,ob){  // object is an instance store in HEAP memory
 num=45;
 ob.namee='lalit'

}
ref(num,obj)
console.log(num,obj)