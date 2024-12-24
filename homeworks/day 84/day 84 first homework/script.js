
let h31 = document.getElementById('h31')
let h32 = document.getElementById('h32')
let h33 = document.getElementById('h33')
let day = document.getElementById('day')
let month = document.getElementById('month')
let year = document.getElementById('year')
let first= document.getElementById('first')
let second = document.getElementById('second')
let third = document.getElementById('third')
let img = document.getElementById('img')
let error1 = document.getElementById('error1')
let error2 = document.getElementById('error2')
let error3 = document.getElementById('error3')
day.value = 'DD'
month.value = 'MM'
year.value = 'YYYY'



day.addEventListener('input', function(){
   
     if(day.value>31) {
    error2.style.opacity = 1
    h31.style.color = 'red'
    day.style.borderColor = 'red'
    error2.textContent = 'must be a vaild day'
    first.textContent = '--'
    second.textContent = '--'
    third.textContent = '--'
   }

   else if(day.value<=31 ){
      error2.style.opacity = 0
      h31.style.color = 'grey'
      day.style.borderColor = 'black'
      first.textContent = '38'
      second.textContent = '3'
      third.textContent = '26'
   }

})

month.addEventListener('input', function(){
    if(month.value>12){
    error3.style.opacity = 1
    h32.style.color = 'red'
    month.style.borderColor = 'red'
    error3.textContent = 'must be a vaild month'
    first.textContent = '--'
    second.textContent = '--'
    third.textContent = '--'
   }

   else if(month.value<=12 ){
      error3.style.opacity = 0
      h32.style.color = 'grey'
      month.style.borderColor = 'black'
      first.textContent = '38'
      second.textContent = '3'
      third.textContent = '26'
   }

})


year.addEventListener('input', function(){
   
   if(year.value>2024){
      error1.style.opacity = 1
      h33.style.color = 'red'
      year.style.borderColor = 'red'
      error1.textContent = 'must be in past'
      first.textContent = '--'
      second.textContent = '--'
      third.textContent = '--'
   }

   else if(year.value<=2024 ){
      error1.style.opacity = 0
      h33.style.color = 'grey'
      year.style.borderColor = 'black'
      first.textContent = '38'
      second.textContent = '3'
      third.textContent = '26'
   }

})
   


   

 
   

   
