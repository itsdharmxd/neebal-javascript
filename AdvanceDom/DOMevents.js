

document.addEventListener('DOMContentLoaded',(e)=>{
    console.log('runs when all Text(html css js) documets are loaded')
})

window.addEventListener('load',(e)=>{
    console.log('runs when page is fully loaded')
})

window.addEventListener('beforeunload',(e)=>{
   e.preventDefault()
    console.log(e)
    console.log('messages when page is being unload')
    e.returnValue=''
})