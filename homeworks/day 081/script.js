
let text = document.getElementById('HaxText')

let body = document.getElementById('body')

let click = document.getElementById('me')

let haxText = ['1', '2' , '3' ,'4','5','6','7','8','9','A','B','C','D','E','F']

click.addEventListener('click', function(){
    let hax = '#'
  for(let i = 0;i<6;i++){
     hax += haxText[Math.trunc(Math.random()*haxText.length)]
  }

 text.textContent = hax
 body.style.backgroundColor = hax
}
 

)
