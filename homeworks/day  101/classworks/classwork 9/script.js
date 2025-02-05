
// obj litteral
let movie = {
    title: 'the guy',
    author: 'arnold popman',
    year: 2000,
    reputation: '3 stars',
     
    TheAll: function(){
        return `the title is ${movie.title} aouthor is ${movie.author} it is published in ${movie.year} and this film has ${movie.reputation}`
    }
}


console.log(movie.TheAll())


console.log(movie.title)
console.log(movie.author)
console.log(movie.year)
movie.reputation = 'now it has 5 stars'
console.log(movie.reputation)


// obj constractor


function RealMovie(title,author,year,reputation){
    this.title = title
    this.author = author
    this.year = year
    this.reputation = reputation
    this.my = function(){
          return this.title + ' ' + this.author + ' ' + this.year
    }
}


let first = new  RealMovie('the hero','mr bob',1999,'4 stars')

let second = new RealMovie('my hero','mr tyeson',1950,'5 stars')

let third = new RealMovie('mr kok','kia sain',2001,'3 stars')





console.log(first)
console.log(second)
console.log(third)

console.log(first.title)
console.log(first.author)
console.log(first.year)

console.log(first.my())


console.log(second.my())