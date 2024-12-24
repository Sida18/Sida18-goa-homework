

// day 77


// function

// first classwork

/*
function i(){
  let name =   prompt('hello what is your name')

    alert(`hello ${name} wish you good luck`)

}  

*/
// second homework

/*
function S(width,hight){
    width = 200

    hight = 100

    alert(`the rectengles S is ${Number(width * hight)} `)
}

*/
// DOM

// First homework
/*
let up = document.getElementById('up')

up.textContent = 'hello'

// second

up.style.color = 'blue'

// third homework



let click = document.getElementById('first')

click.addEventListener('click', function(){
    alert('hello')
})

*/
// prompt
/*
let random = Math.floor(Math.random() * 1000)+1

console.log(random)

let enter = Number(prompt('enter an number 1---1000 you have 3 trys '))














   if(random<enter) {
    alert('lower')  
     let u = Number(prompt('enter nother number'))
     
     if(u>random){
        alert('lower')
     }

     else if(u<random){
        alert('bigger')
     }
     else if(u===random){
        alert('you won')
     }


     let b = Number(prompt('enter nother number'))

     if(b>random){
        alert('lower')
     }

     else if(b<random){
        alert('bigger')
     }
     else if(b===random){
        alert('you won')
     }

    
}
   if(enter === random){
        alert('you won')
        
     }
    


    
     else if(enter<random){
     alert('bigger')
    let r = Number(prompt('enter nother number'))
        
 if(r>random){
    alert('lower')
 }

 else if(r<random){
    alert('bigger')  
 }

 else if(r===random){
    alert('you won')
    
 }

 let c = Number(prompt('enter nother number'))
        
 if(c>random){
    alert('lower')
 }

 else if(c<random){
    alert('bigger')  
 }

 else if(c===random){
    alert('you won')
    
 }

     }
       

    

       
// second homework

function o(){
   
   let prompt0 = Number(prompt('enter all of your things'))
   let thisIsKayToEndMySuffiringOnTHisClassWORK = prompt0
   if(prompt0 < 0){
      alert('error')
   }  

for(let i = 2;i<=thisIsKayToEndMySuffiringOnTHisClassWORK;i+=1){

let prompt1 = Number(prompt('enter the things prices'))
   
    if(prompt1<0){
      alert('error')
   }
   alert(`the total price is ${prompt0*=prompt1}`)

  
   }
   

}



 







o()



   
 
 // third homework



 function y(){
    
    let kg = Number(prompt('enter you weight'))

    let m = Number(prompt('enter your hight'))

    let BMI =  Number(kg /= m * m)

    if(BMI<18.5){
        alert('underweight')
    }

    else if(BMI<=24.9){
        alert('normal weight')
    }

    else if(BMI<=29.4){
        alert('overweight')
    }
    else if(BMI>=30){
        alert('fat')
    }

    console.log(BMI)
 }

 y()

*/

 //  OPERATOR <=>

/*
 console.log(10>5)

 console.log(5<1)

 console.log(9>1
 )

 console.log(0>1)


 console.log(10>9)

 console.log(3<1)

 console.log(9>8
 )

 console.log(2>1)

 console.log(8===8
 )
console.log(2>3)
   
*/

/*
 // logic operators

 // ?


// second homework

function i(){
    
  alert('hello if you want to get the status you need to a have 50000 thousend or more total money and GPA 3.0 or more go it')
    let gpa1 = Number(prompt('enter your familys total money'))

let gpa2 = Number(prompt('enter your GPA'))
    if(gpa2<=3.0 && gpa1 <50000){
            alert('you cant get the status')
    } 
    else if(gpa2>=5 && gpa1>=50000){
        alert('you can get the status')
    }
}


 i()

 */
 //   

// data types
/*
 let first = 1

 let second = 'hello'

 let third = true

 let forth = 10.1

 console.log(typeof first)

 console.log(typeof second)

 console.log(typeof third)

 console.log( typeof forth)

*/





/*

// conditional sasteiments



function students(){

alert('hello if you passed the test you need to get 70 or more average score if its over 100 its error  ')

   let score = Number(prompt('how many scores you have '))
  
   let total = Number(prompt('how much is your score'))

   let average = total/=score
   console.log(average)
if(average>100){
   alert('error')
}

else if(average<100){
   if(average>70){
      alert('you passed')
   }
   else if(average<70){
      alert('you didnt passed')
   }
}
}

students()

*/
// second homework 
/*
function driver(){
   alert('if you want to get licens then you need to have 1 year or more practis and you need to be more the 18 years old')
   let age = Number(prompt('enter you age please'))

   let drives = Number(prompt('enter how log have you bin driving'))

   if( age < 0){
      alert('error')
   }
   if(age<18){
      alert('you will not gone have licens')
   }

   else if (age>=18 && drives < 1){
          alert('you at least need to have 1 year of driving prictis you cant get the licens')
   }
   else if(age>=18 && drives>1){
      alert('you can have licens')
   }

   
}

driver()
*/

/*
function schoolColigeUniversity(){
   let array = ['school','colige','university']

   let smart = String(prompt('what were you going school colige or university'))

   if(smart === array[0]){
      let exp = Number(prompt('enter your work exp'))

      if(exp<5){
         alert('we cant have an talk')
      }
      else {
         alert('we can have an talk')
      }
      

   }

 else  if(smart === array[1]){
      let exp1 = Number(prompt('enter your work exp'))

      if(exp1<2){
         alert('we cant have an talk')
      }
      else {
         alert('we can have an talk')
      }
   }

   else if(smart === array[2]){
      alert('we can have an talk')
   }

   else {
      alert('error')
   }
}


schoolColigeUniversity()


*/

// for and while loops

/*

let first = Number(prompt('enter an number so i can guess'))



for(let i = 0;i<10;i++){
    let second = Number(prompt('enter an number'))
    if(first>second){
        alert('bigger')
    }

    else if(first===second){
        alert('you won')
            break
    }

    else if (first<second){
        alert('lower')
    }
}

*/
// second homework


// მართივი რიცხვი არის რიცხვი რომელსაც 2 გამყოფი აქვს 
/*
function IsItPrime(number){
      if(number<=1){
         return 'its not an prime'
      }

      for(let i = 0;i<=number;i++){
         if(i % 2 === 0){
            return 'its not prime number'
         }

         else{
             return 'its prime number'
         }
      }
}

*/
// object literal and object constractor

// object literal
/*
let user = { 
   name: 'sandro',
   LastName : 'sidamonidze',
   age: 11, 
   country: 'Giorgia',
   favoriteColor: 'blue',
   favoriteFood: 'burger and hotdog',
   favoriteCar: 'lemborgine',
   favoriteProgrammingLanguage: 'javascript',
   FavoriteAcademy: ' it step',

     
      
     }
user.FavoriteAcademy = 'GOA'
     console.log(`hello i m ${user.name} and lastname is ${user.LastName} and my age is ${user.age} my country is ${user.country} my favorite color is ${user.favoriteColor} my favorite food is ${user.favoriteFood} my favorite 
      car is ${user.favoriteCar } and my favorite programming language is ${user.favoriteProgrammingLanguage} and my favorite academy is ${user.FavoriteAcademy}`)


*/


// objact constractor

/*

function user(name,lastName,age,country,favoriteColor,favoriteFood,favoriteCar,favoriteProgrammingLanguage,FavoriteAcademy){
   this.name = name
   this.lastName = lastName
   this.age = age
   this.country = country
   this.favoriteColor = favoriteColor
   this.favoriteFood = favoriteFood
   this.favoriteCar = favoriteCar
   this.favoriteProgrammingLanguage = favoriteProgrammingLanguage
   this.FavoriteAcademy = FavoriteAcademy
   this.i = function(){
      return `hello i m ${me.name} and my lastname is ${me.lastName} and my age is ${me.age} my country is ${me.country} my favorite color is ${me.favoriteColor} my favorite food is ${me.favoriteFood} my favorite 
      car is ${me.favoriteCar } and my favorite programming language is ${me.favoriteProgrammingLanguage} and my favorite academy is ${me.FavoriteAcademy}`
   }
}


let me = new user('sandro','sidamonidze',11,'Giorgian','blue','burger and hotdog','lamborgini','javascript','it step')

me.FavoriteAcademy = 'GOA'


console.log(me.i())

*/


// array

// first homework
/*
let array = ['gio','sidamonidze',12,'USA','blue','pizza','lamborgini','javascript','it step']

array[9] = 'GOA'

array[5] = 'burger an hotdog'

array[3] = 'Giorgia' 

array[0] =  'sandro'

array[2] = 11

console.log(array)


*/
// second homework
/*
let array = ['gio','sidamonidze',12,'USA','blue','pizza','lamborgini','javascript','it step']
for(let i = 0;i<array.length;i++){
   
 console.log(array[i])

}


*/
