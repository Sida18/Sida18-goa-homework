function* wspG(){
    let index = 0
    while(index<1000){
        yield index++
    }

}


let generator = wspG()
console.log(generator.next())