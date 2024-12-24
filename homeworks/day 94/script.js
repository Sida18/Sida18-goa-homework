

// first homework

let img1 = document.getElementById('img1')
let next = document.getElementById('next')
let prev = document.getElementById('prev')


let array1 = ['apple-1834639_1280.jpg','apple-1834639_1280.jpg','images (1).jpg','istockphoto-477836156-612x612.jpg']
let count = 0
next.addEventListener('click', function(){
      count++
      let i = array1[count]
      img1.src = i
})


prev.addEventListener('click', function(){
    count--
    let i = array1[count]
    img1.src = i
})


// second homework

let obj = {
    name: 'sandro',
    lastName: 'sidamonidze'
}


for(obj1 in obj){
    console.log(obj[obj1])
}


let array2 = ['sandro','sidamonidze']

for(item of array2){
    console.log(item)
}

// done