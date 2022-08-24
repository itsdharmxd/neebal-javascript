
/**
 * This key will point to the owner of calling function 
 * but in arrow function "this" key word will be  equal to the "this" of parent 
 */

let name='dharmesh'
console.log(this.name)   // this print window object in borowser

let obj={
    name:'dharmesh',
    s:this,  // pointing to parent of obj
    func:function (){
        const name='func'
        console.log( this)    // pointing obj
        const self =this;
        const func3=function (){
            const name='func'
           
   console.log(self);             // because this will be treated as regular function call which make this key as regular function this
        }
        const func4=()=>{
            console.log(this)
        const name='func4'
        }
        func3()
        func4()
        // pointing to parent of function which is obj
    },
    func2:()=>{
        
        const name='func2'
        console.log(this)   // this is a arrow function so it is pointing to parent of paren 
    }
}
console.log( obj)
obj.func();
obj.func2();


function func3(){
    // console.log(this)  // function called by node js thats  why this is print s node object 
}
func3()
