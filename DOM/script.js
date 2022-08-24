/**
 * JS use programing Interface to manupulate
 */


function onc(){
    document.body.getElementsByClassName('box')[0].textContent+=' Upadhyay';
    document.body.style.backgroundColor='green'
console.log(document.body.getElementsByClassName('box')[0].style['background-color']='blue')
}

// Event listners
document.body.getElementsByClassName('box')[0].addEventListener('click',()=>{
    onc();
});

document.body.classList.add('main')

/**
 * Key board key
 */
document.addEventListener('keydown',(e)=>{
    console.log(e.key)
})

for(let i=0;i<10;i++){
    console.log("dharmehs")
}

console.log(this)    

function func(){

   function  func2(){
      console.log(this)
    }
func2()

}
func()



/**##########################################################
 *  for of loop
 */
let arr=[2,1,3,4,5,6,45]

for(let i of arr.entries()){
    console.log(i)
}

const keys=['1','2','3']

/**
 * Keys with arrays
 */

const obj={
  [keys[0]]:0,
  [keys[2]]:2,
  [keys[1]]:1,
}