//map fucntion deconstructed
let numbers = [2,4,6,2,3,4]
// const newNum = numbers.map( x=>Number(x))
// console.log(newNum)
// const sum = newNum.reduce((total,current)=>total+current)
// console.log(sum)

function hello(callback){  //don't call it back as this is the name
    console.log("Hello")
    if(callback){
    callback()
    }
}

hello(function() {console.log("Say bye now")})

//callback is now a function. What is a Json

let multiplier= (factor)=>{
  x => console.log( x*factor)
}

let doubler = multiplier(2)
//doubler is now a function which takes a function


//sends a function in or returns it.

//one line of code means return is assumed

// const string = "666Password1234"
// const regex = /\d{3}/g

// const checker = regex.test(string)
// console.log(checker)

// const returns = string.match(regex)
// console.log(returns)

