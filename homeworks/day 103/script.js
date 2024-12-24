// 1

let arr = [1,2,3,4,5,6,7,8,9].filter((item, index) => item % 2 == 0 )
let arr1 = [1,2,3,4,5,6].map((item, index) => [item, index])
let arr2 = [1,2,3,4].find((item,index) => item>1)
let arr3 = [1,2,3,4,5,6].indexOf(3)
console.log('hello mate how are u'.startsWith('hel',0))
console.log('im good how about we drink tea'.endsWith('im',0))
console.log('ye good idea'.includes('good',3))
console.log('okay shall we go to restaurant'.includes('oka',2))
console.log('yep'.includes('ye',2))

console.log(arr)
console.log(arr1)
console.log(arr2)
console.log(arr3)

// done 