/**
 * classes are not HOISTED
 * classes are first class citizens
 * classes are executed in strict mode by default
 */

// class expresion
const PersonCE=class {
     // varuable inside constructor 
     constructor(first,birth){
        this.first=first
        this.birth=birth

    } 
    calage(){
        console.log(2034-this.birth)
    }



}
let  dhar=new PersonCE('dhar',44)
console.log(dhar)
// class declairation
class PersonCD {

    // varuable inside constructor 
    constructor(first,birth){
        this.first=first
        this.birth=birth

    } 

    //methods
    /**
     * This willbe automaticaly added to proto type insted of  object
     * which is good 
     */
    calage(){
        console.log(2034-this.birth)
    }

}

const jessica=new PersonCD('Dharmesh',34);

console.log(jessica)

console.log(jessica.__proto__===PersonCD.prototype)


/**
 * Getters and setters
 * _<name> in setters other wise recustion will occure
 * setter treated as property
 *   "_<menter>"" means private merber we should not touch it
 */

class Person{
    constructor(fname,lname){
        console.log('constructor')
     this._fname=fname;
     this._lname=lname;
    }

    static  species(){
        return 'humans'
    }

    // instance method
    city(){
        return 'WB'
    }

    get fname(){
        return this._fname;
    }
    set names(name){  // treated as => this.fname=name
        
        console.log('fname')
        this._fname=name;  
    }
    get lname(){
        return this._lname;
    }
    set lname(name){
        
        console.log('lname')
        this._lname=name;
    }
    

}

const nam=new Person('DHarmesh','Upadhyay');

console.log(nam)
nam.fname='sd'
console.log(nam.lname)


/**
 *    Stabtic method 
 * => function  not attached to prototype 
 * => can be acces by constructor  like Array.from()
 * => cannot be access by instanes  
 *  
 */

console.log(Person.species())   // statics only called by constructor function

console.log(nam.species)  // nusll  cannot access by instances


/**
 *  Object.create( )  for making prototype and linking
 */

const Human={
    birth:2022,
    cal(){
        console.log(2331-this.birth)
    }
}
console.log(Human)

const lal=Object.create(Human)  //Human will be prototype of lal,  // all define in Human will be transfer to proto

lal.name='dharmesh';// local meber
console.log(lal)
lal.cal()  // from prototype






