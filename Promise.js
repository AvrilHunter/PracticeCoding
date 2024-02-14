const inventory = {
  sunglasses: 0,
  pants: 1088,
  bags: 1344
};

const canTheyOrder = new Promise ((resolve,reject)=>{
 if(inventory.pants>50){
    resolve('Yes you can order')
  } else{
    reject("No you can't have pants!")
  }
 })

 
 const handleSuccess = (resolved)=>{
  console.log(resolved)
 }

 const handleFailure = (fails)=>{
  console.log(fails)
 }

 canTheyOrder.then(handleSuccess,handleFailure)
