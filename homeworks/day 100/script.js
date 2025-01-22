// 1 
console.log('hi')
setTimeout(() => {
    console.log('Hello world')
}, 3000)


// 2

setTimeout(()=>{
    console.log('first sentens')
},1000)


setTimeout(()=>{
    console.log('second sentens')
},2000)


// 3

// wdym

// 4


function showMessage(){
    console.log('goodbye')
}

setTimeout(showMessage(), 3000)

// 5 

function first(){
    console.log('time ran out')
}

function second(){
    console.log('prank')
}

function third(){
    console.log('continiud')
}

setTimeout(first(), 5000)
setTimeout(second(), 1000)
setTimeout(third(), 3000)



