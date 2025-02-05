// first classwork

let propt1 = Number(prompt('enter an number'))
let click = document.getElementById('click')
let zero = document.getElementById('zero')
let click1 = document.getElementById('Click1')
let body = document.getElementById('body')
let array = ['blue','blue','red','green','yellow']
click.addEventListener('click', function(){
   zero.textContent = Math.floor(Math.random()*10)
}    
   
)
    
// second classwork

click1.addEventListener('click', function(){
    let randomColor = Math.floor(Math.random()*array.length)
    body.style.backgroundColor = array[randomColor]
})




