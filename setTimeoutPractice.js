//map 
//callback setTimeout
//promise
//async- await

//setTimeout( ()=>{console.log("First print")},2000)

// let one = function(){
// console.log("First thing")
// }

// let two = function(call_One) {
// console.log("Second thing")
// call_One()
// }

// two(one)

let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

 let order = (fruit_name, call_production)=>{
    setTimeout( ()=>{
        console.log("Flavour is " + stocks.Fruits[fruit_name])
        call_production()
    },2000)
    
 }

 let production = ()=>{
setTimeout( ()=>{
    console.log("Production has started")
    setTimeout( ()=>{
        console.log("Chop the fruit")
        setTimeout( ()=>{
            console.log("add the cream")
            setTimeout( ()=>{
                console.log(`Icecream placed on ${stocks.holder[1]}`)
                setTimeout(()=>{
                    console.log(`${stocks.toppings[0]} added`)
                },1000)
            },3000)
        },1000)
    },2000)
},0000)
 }

 order(1,production)

