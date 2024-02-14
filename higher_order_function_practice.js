//map fucntion deconstructed
let numbers = ["2",4,6,2,3,4]
const newNum = numbers.map( x=>Number(x))
console.log(newNum)
const sum = newNum.reduce((total,current)=>total+current)
console.log(sum)
// const string = "666Password1234"
// const regex = /\d{3}/g

// const checker = regex.test(string)
// console.log(checker)

// const returns = string.match(regex)
// console.log(returns)

