
let div1 = document.getElementById('div12')
let div2 = document.getElementById('div13')
let div3 = document.getElementById('div14')
let img1 = document.getElementById('img11')
let img2 = document.getElementById('img22')
let img3 = document.getElementById('img33')


img1.addEventListener('mouseover', function(){
    div1.style.opacity = 1
})

img1.addEventListener('mouseout', function(){
    div1.style.opacity = 0
})

img2.addEventListener('mouseover', function(){
    div2.style.opacity = 1
})

img2.addEventListener('mouseout', function(){
    div2.style.opacity = 0
})


img3.addEventListener('mouseover', function(){
    div3.style.opacity = 1
})

img3.addEventListener('mouseout', function(){
    div3.style.opacity = 0
})