
/**
 * Functional class inheritnance
 */

// functional Person class
const Person =function(fname,lname){
    this.fname=fname;
    this.lname=lname;
    
  Person.prototype.fullname=function(){
        console.log(this.fname+" "+this.lname);
    }
    
}

const person=new Person('dharmesh','upadhyaya')
console.log(person)



const Student=function(fname,lname,course){
    // callers Person constructor with Student as "this"
    Person.call(this,fname,lname);
    this.course=course
    
}
 // Now to connect prototype of Person with Student   
 Student.prototype=Object.create(Person.prototype)

// this should be below linking
 Student.prototype.intro=function(){
    console.log(`I ${this.fname} ${this.lname} pursuing ${this.course}`)
}

const student=new Student('dharmesh','upadhyay','BCA')

console.log(student)
student.fullname()
student.intro()


/**
 * Classes are abstraction over constructor function
 */

class PersonC{

  constructor(fname,birth){
    this.fname=fname;
    this.birth=birth
  }

  calAge(){
    console.log(2037-this.birth);
  } 
 

}

class StudentC extends PersonC{

   constructor(fname,birth,course){
      super(fname,birth);
      this.course=course
   
    }   
   intro(){
    console.log(`I ${this.fname}  my age ${this.calAge()} and pursuing ${this.course}`)
   }
}

const studentClass=new StudentC('Dharmesh',1999,"BCA")

console.log(studentClass)

/**
 * Inheritance of objects using Object.create
 */

const Personproto={
    calAge(){
        return 2037-this.birth;
    },
   // this is only a function we call it to initialize values
    init(fname,birth){
      this.fname=fname,
      this.birth=birth
    }

}

const personproto=Object.create(Personproto);


const Studentproto=Object.create(Personproto);

Studentproto.init=function(fname,birth,couse){
    Personproto.init.call(this,fname,birth);
    this.course=couse;
}

Studentproto.intro=function(){
    console.log(`I ${this.fname}  my age ${this.calAge()} and pursuing ${this.course}`)  
}
const jay=Object.create(Studentproto)
jay.init('Jay',1999,'Computer science')

console.log(jay)
jay.intro()



