/**
 * By convention
 * this dont add any feature but socially accpeted
 */

class Private{
 
  constructor(fname,lname){
    this._fname=fname;
    this._lname=lname
  }

  set fname(nm){
      this._fname=nm;
  }
  get fname() {return this._fname}
     
  set lname(nm){
    this._lname=nm;
}
get lname() {return this._lname} 

}
const private=new Private('dharmesh','upadhyay')
console.log(private)

console.log()

/**
 *  By #
 */
 class Private2{
    #fname;
    #lname;
    constructor(fname,lname){
      this.#fname=fname;
      this.#lname=lname
    }
  
    set fname(nm){
        this.#fname=nm;
    }
    get fname() {return this.#fname}
       
    set lname(nm){
      this.#lname=nm;
  }
  get lname() {return this.#lname} 
  
  }

const private2=new Private2('Dharmesh','Upadhyay')  

console.log(private2.fname)  // we cannot use #fname outside of class

  console.log(private2)

//   const #name='df'; // Private identifiers are not allowed in variable declarations

/**
 * Chaining   
 * 
 */
