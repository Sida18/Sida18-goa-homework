
// first homework
/*
// JS functions
let num = [1,2,3,5,4]
let sum = 0
function calculateAverage(){
    for(let i = 0;i<num.length;i++){
      
        let z = sum += num[i]/=num.length
        console.log(z)
       
        
    }
}


calculateAverage()


// second homework


findMax()


// third homework

/*
// revesrs string



// DOM


// first homework




// second homework
let body = document.getElementById('body')
let btn = document.getElementById('second')
let array = ['blue','blue','red','green']
btn.addEventListener('click', function(){
let random = Math.floor(Math.random()*array.length)
body.style.background = array[random]
})
// third homework
let tg = document.getElementById('third')
function toggleVisibility(){
  tg.style.visibility = 0
}



// prompt

// area

let prompt1 = Number(prompt('enter your total width'))

let prompt2 = Number(prompt('enter you total hight '))

function  calculateRectangleArea(){
     alert(`your area is ${Number(prompt1)+Number(prompt2)}`)
}

calculateRectangleArea()

// second homework
let C = Number(prompt('enter your temperature'))
function convertTemperature(){
    let F = (C*9/5)+32
    alert(F)
}

convertTemperature()


// third homework

// ?


//  Comparison Operators

// first homework


let prompt1 = Number('enter your age')
let prompt2 = Number('enter your age too')

function compareAges(){
    if(prompt1>prompt2){
        alert('first age is greater then second age')
    }

    else if(prompt1<prompt2){
        alert('second age is greater then first age')
    }

    else if(prompt1===prompt2){
        alert('equel')
    }

    else{
        alert('error')
    }
}

compareAges()


// second homework



// third homework

let prompt1 = Number(prompt('enter your score'))

let prompt2 = Number(prompt('enter your score too'))

function compareScores(){
    if(prompt1>prompt2){
        alert('first score is greater then second score')
    }

    else if(prompt1<prompt2){
        alert('second score is greater then first score')
    }

    else if(prompt1===prompt2){
        alert('equel')
    }

    else{
        alert('error')
    }
}
compareScores()
*/


// Logical Operators


// first homework
/*
confirm('are you citizan?')
function checkAdmissionEligibility(){
  if(prompt1 < 18 && c1 === false){
    alert('you cant be elible')
  }
  else if (prompt1>=18 && c1===true ){
    alert('you can be elible')
  }
  else {
    alert('error')
  }
}
checkAdmissionEligibility()



// second homework

let prompt1 = Number(prompt('enter your test score in math'))
let prompt2 = Number(prompt('enter your test score in english'))
function checkAdmissionEligibility(){
   if(prompt1<60 && prompt2<60){
    alert('you failde')
   }
   else if(prompt1>=60 && prompt2>=60){
        alert('you passed')
   }
   else {
    alert('error')
   }
}


// third homework

let prompt1 = Number(prompt('enter you age'))

function checkDrivingEligibility(){
    if(prompt1>18){
        alert('you can get licens')
    }
    else if(prompt1<18){
        alert('you cant get licen')
    }
    else{
        alert('erorr')
    }
}


// date types
// first homework
let prompt1 = Number(prompt('enter number'))
let prompt2 = prompt('enter string')
let prompt3 = Boolean(prompt('enter  boolen'))

function displayDataTypes(){
    alert(typeof prompt1)
    alert(typeof prompt2)
    alert(typeof prompt3)
}
displayDataTypes()



// second homework

let prompt1 = prompt('enter an string number')
function  convertStringToNumber(){
    alert(  parseFloat(prompt1))
    alert( prompt1)
}

convertStringToNumber()

// third homework

let prompt1 = Number(prompt('enter an number'))
let prompt2 = prompt('enter an string')

function  concatenateStringAndNumber(){
    alert(`if we concatenatet it is ${String(prompt1) + String(prompt2)}`)
    alert(typeof prompt1)
    alert(typeof prompt2)
}

concatenateStringAndNumber()



//  Conditional Statements


// first homework

let prompt1 = Number(prompt('enter your test scores'))

function  classifyGrade(){
    if(prompt1>=90){
        alert('you go an A')
    }
    else if(prompt1>=80){
        alert('you got an B')
    }

    else if(prompt1>=70){
        alert('you got an C')
    }

    else if(prompt1>=60){
       alert('you got an D')
    }
    else if(prompt1<60) {
        alert('you got an F')
    }
}

classifyGrade()

// second homework

let prompt1 = Number('enter an number')

function  checkEvenOrOdd(){
    if(prompt1 % 2 === 0){
        alert('Even')
    }
    else{
        alert('Odd')
    }

}

checkEvenOrOdd()



// third homework

let prompt1 = Number(prompt('enter your age'))

function checkAgeGroup(){
    if(prompt1<=12){
        alert('Child')
    }
    else if(prompt1<=19){
        alert('Teeneger')
    }

    else if(prompt1<=64){
        alert('Adult')
    }

    else if(prompt1>=65){
        alert('Senior')
    }
    else {
        alert('error')
    }
    
}
checkAgeGroup()



// For and While Loops

// first homework

// idk how to calculate factorial

// second homework

let prompt1 = Number(prompt('enter an number'))
let sum = 0
for(let i = 0;0<=prompt1;i++){
    if( i % 2 === 0){
         sum+=prompt1
         alert(sum)
    }
   else {
    alert(sum)
   }
    
}

// third homework

// ?


// Object Literal & Object Destructuring


// first homework

let book = {
    title: 'the great trees',
    aouthor: 'bob bilsmith',
    year: 1999,

    displayBookInfo(){
          return `the title is ${book.title} the aouthor is ${book.aouthor} and year is ${book.year}`
    }
        
    }

    console.log(book.displayBookInfo())


// second homework


let student = {
    name : 'sandro',
    age: 12,
    grade: 'seventh',

    displayStudentInfo(){
         return `students name is ${student.name} age is ${student.age} and he is in ${student.grade} `
    }
    
}

console.log(student.displayStudentInfo())


// third homework

let employee = {
    name: 'sandro',
    position: 'general',
    salary: 500000,

    displayEmployeeInfo(){
           return`the name is ${employee.name} his position is ${employee.position} and his salary is ${employee.salary} monthly`
    }
}

console.log(employee.displayEmployeeInfo())



// array
// first homework
let array = [1,2,3]

let max = Math.max(...array)

console.log(max)



// second homework

// i already did that in first homework

// third homework
  
let array = [1,2,3,4]

for(let i = 4;i<=array.length;i--){
    alert(array[i])
    if(i===0){
        break
    }
}

*/

// find the Maximum value
/*
function findMax(){ 
  let numbers = [1,2,3,8]

  let max = Math.max(...numbers)
  console.log(max)
}

findMax()
*/
/*
function reverseString(str) {
    let StringReversed = "" // hello
    for (let i = str.length - 1; i >= 0; i--) {
        StringReversed += str[i]
    }
    alert(StringReversed)
}

console.log(reverseString(prompt(`Enter text (String)`)))

reverseString()


*/
// dom
/*
let DOM = document.getElementById('firts')

DOM.textContent = 'first'
*/
/*
let body = document.getElementById('body')
let btn = document.getElementById('second')
let array = ['blue','blue','red','green']
btn.addEventListener('click', function(){
let random = Math.floor(Math.random()*array.length)
body.style.background = array[random]
})
*/
/*
let tg = document.getElementById('third')
let tg1 = document.getElementById('first1')
let tg2 = document.getElementById('second2')
function toggleVisibility1(){
     tg.style.display = 'none'
}

function toggleVisibility2(){
    tg.style.display = 'block'
}
*/
/*
let prompt1 = Number(prompt('enter your total width'))

let prompt2 = Number(prompt('enter you total hight '))

function calculateRectangleArea(){
     alert(`your area is ${Number(prompt1)*Number(prompt2)}`)
}
calculateRectangleArea()
*/
/*
let C = Number(prompt('enter your temperature'))
function convertTemperature(){
    let F = (C*9/5)+32
    alert(F)
}

convertTemperature()
*/

/*
let prompt1 = Number('enter your age')
let prompt2 = Number('enter your age too')

function compareAges(){
    if(prompt1>prompt2){
        alert('first age is greater then second age')
    }

    else if(prompt1<prompt2){
        alert('second age is greater then first age')
    }

    else if(prompt1===prompt2){
        alert('equel')
    }

    else{
        alert('error')
    }
}

compareAges()
*/
/*
let prompt1 = Number(prompt('enter your hight'))

let prompt2 = Number(prompt('enter your hight too'))

function compareHeights(){
    if(prompt1>prompt2){
        alert('first hight is greater then second hight')
    }

    else if(prompt1<prompt2){
        alert('second hight is greater then first hight')
    }

    else if(prompt1===prompt2){
        alert('equel')
    }

    else{
        alert('error')
    }
}
compareHeights()
*/

/*
let prompt1 = Number(prompt('enter your score'))

let prompt2 = Number(prompt('enter your score too'))

function compareScores(){
    if(prompt1>prompt2){
        alert('first score is greater then second score')
    }

    else if(prompt1<prompt2){
        alert('second score is greater then first score')
    }

    else if(prompt1===prompt2){
        alert('equel')
    }

    else{
        alert('error')
    }
}
compareScores()
*/

/*
let c1 = confirm('are you citizan?')
let prompt1   = Number(prompt('how old are you'))
function  checkVotingEligibility(){
  if(prompt1 < 18 && c1 === false){
    alert('you cant be elible')
  }
  else if (prompt1>=18 && c1===true ){
    alert('you can be elible')
  }
  else{
    alert('error')
  }
}
 checkVotingEligibility()
*/
/*
let prompt1 = Number(prompt('enter your test score in math'))
let prompt2 = Number(prompt('enter your test score in english'))
function checkAdmissionEligibility(){
   if(prompt1<60 && prompt2<60){
    alert('you failed')
   }
   else if(prompt1>=60 && prompt2>=60){
        alert('you passed')
   }
   else {
    alert('error')
   }
}
*/
/*
let prompt1 = Number(prompt('enter you age'))

function checkDrivingEligibility(){
    if(prompt1>=18){
        alert('you can get licens')
    }
    else if(prompt1<18){
        alert('you cant get licen')
    }
    else{
        alert('erorr')
    }
}

*/
/*
let prompt1 = Number(prompt('enter number'))
let prompt2 = prompt('enter string')
let prompt3 = Boolean(prompt('enter  boolen'))

function displayDataTypes(){
    alert(typeof prompt1)
    alert(typeof prompt2)
    alert(typeof prompt3)
}
displayDataTypes()
*/


// done 