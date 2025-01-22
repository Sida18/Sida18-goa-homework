

// first homework



/*
let first = Number(prompt('enter an  number'))

let second = Number(prompt('enter second number'))


console.log(first+second)
console.log(first-second)
console.log(first*second)
console.log(first/second)

*/

// second homework


/*
let first = prompt('enter your name')


let second = prompt('enter your lastname')

alert(`welcome ${first + ' ' + second}`)

*/

// third homework

//  შექმენით ფუნქცია რომელსაც გადაეცემა ორი რიცხვი start და end, ფუნქციაში for ციკლის გამოყენებით გამოიანგარიშეთ ამ რიცხვებს შორის ყველა რიცხვის ჯამი და დააბრუნეთ მიღებული შედეგი

/*
function i(){
let end = 100

let zero = 0
       for(let start = 0;start<=end;start++){
        
         zero += start
          console.log(zero)
       }
}

i()


*/
// forth homework


// შექმენით ფუნქცია რომელსაც გადაეცემა ორი რიცხვი start და end, ფუნქციაში for ციკლის გამოყენებით გამოიანგარიშეთ ამ რიცხვებს შორის ყველა ლუწი რიცხვის ჯამი და დააბრუნეთ მიღებული შედეგი გამოიყენეთ if

/*
function evenSum(){
    let end = 10
    let zero = 0
    for(let start = 0; start <= end; start+=1){
        if(start % 2 === 0){
            zero += start
            console.log(zero) 
        } 
    }
}


evenSum()


*/


// fifth homework
/*
let w = confirm('are you 13 years old or more') 


if (w===true){ 
   
  let j = Number(prompt('so be shure that you are 13 or more what hour to you sleep'))  
     if (j>11){
        alert('so  you are an teenager or more')
    }
  

   
 let i = Number(prompt('so at last how old are you'))
 if (i>19){
    alert('oh so you are an adult now')
}

if (i<13){
    alert('error ')
}
  
else if (i===13,14,15,16,17,18){
    alert('thank for information')
}


}

 






if (w===false){
    alert('so you are not an teeneger or adult')
}


*/

// sixth homework

//   შექმენით ფუნქცია სახელად isValidCoupon, რომელიც იღებს ორ პარამეტრს: couponCode (სტრინგი) და totalAmount (რიცხვი). ფუნქცია უნდა დაბრუნდეს true, თუ კუპონის კოდი არის "SALE" ან "BIGSALE" და ჯამური თანხა მეტია ან ტოლია 50-ზე, ან თუ კუპონის კოდი არის "LILSALE" მთლიანი თანხის მიუხედავად. წინააღმდეგ შემთხვევაში, ის უნდა დაბრუნდეს false. გამოიყენეთ "და" (&&) და "ან" (||)

/*
function isValidCoupon( couponCode,totalAmount){
    couponCode = prompt('enter an code')

    totalAmount = Number(prompt('enter your total amount'))

    if( couponCode === 'SALE' || 'BIGSALE' && totalAmount >=50 ){
        return true
    }

    else if ( couponCode === 'LILSALE' && totalAmount < 50){
        return false
    } 

    else{
        return 'error'
    }
}

alert(isValidCoupon())


*/


let r = new Array('OIL','HELLO')

console.log(r[0])

