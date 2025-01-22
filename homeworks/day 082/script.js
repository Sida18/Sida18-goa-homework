
let first = document.getElementById('image1')
let second = document.getElementById('img1')
let third = document.getElementById('image2')
let forth = document.getElementById('image3')
let btn = document.getElementById('go')
let all = document.getElementById('all')
let body = document.getElementById('body')
let img = 'images/image-product-1.jpg'
let next = document.getElementById('first')
let next1 = document.getElementById('next1')
let show = document.getElementById('show')
let show1 = document.getElementById('show1')
let show2 = document.getElementById('show2')
let close1 = document.getElementById('close')
let pluse = document.getElementById('pluse')
let minus = document.getElementById('minus')
let zero = document.getElementById('zero')
let cart = document.getElementById('Cartimage')
let empty = document.getElementById('empty')

let count3 = 0



first.addEventListener('mouseover', function(){
    second.src = first.src
})

btn.addEventListener('click', function(){
            second.src = img
})

third.addEventListener('mouseover', function(){
    second.src = third.src
})

forth.addEventListener('mouseover', function(){
    second.src = forth.src
})

first.addEventListener('click',function(){
   
    all.style.opacity = 1
   show1.style.opacity = 0
})

let array = ['images/image-product-2.jpg','images/image-product-2.jpg','images/image-product-3.jpg','images/image-product-4.jpg']
let count = 0
next.addEventListener('click', function(){
count++
let i = array[count]
show.src = i

if(count>3){
    show.src = img
}
})

let array1 = ['images/image-product-3.jpg','images/image-product-3.jpg','images/image-product-2.jpg','images/image-product-4.jpg']
let count1 = 0




third.addEventListener('click', function(){
    all.style.opacity = 1
    show.style.opacity = 0
    show1.style.opacity = 1
})
next.addEventListener('click', function() {
     count1++
   
    let o = array1[count1]
    show1.src  = o

    if(count1>3){
        show1.src = img
    }

})
let array2 = ['images/image-product-4.jpg','images/image-product-4.jpg','images/image-product-2.jpg','images/image-product-3.jpg']
let count2 = 0
forth.addEventListener('click', function(){
    all.style.opacity =  1
    show.style.opacity = 0
    show1.style.opacity = 0
    show2.style.opacity = 1
   
})

next.addEventListener('click', function(){
  count2++
  let r = array2[count2]
  show2.src = r
  if(count2>3){
    show2.src = img
  }
 
})
next1.addEventListener('click', function(){
  count-=1
  let w = array[count]
  show.src = w

  if(count<img){
    all.src = show.src
  }
})



next1.addEventListener('click', function(){
  count1-=1
  let c = array1[count1]
  show1.src = c
})


next1.addEventListener('click', function(){
  count2-=1
  let r = array2[count2]
  show2.src = r
})

close1.addEventListener('click', function(){
   all.style.opacity = 0
})


pluse.addEventListener('click', function(){
  count3+=1
  zero.textContent = count3
})

minus.addEventListener('click', function(){
  count3-=1
  zero.textContent = count3
})


cart.addEventListener('mouseover', function(){
  empty.style.opacity= 1
})

cart.addEventListener('mouseout', function(){
  empty.style.opacity = 0
})