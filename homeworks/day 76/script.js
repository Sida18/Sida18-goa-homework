
let first = document.getElementById('first-input')

let second = document.getElementById('second-input')

let NumberPrompt = Number(prompt('enter an number'))


first.value = NumberPrompt

second.value = Math.sqrt(first.value)
