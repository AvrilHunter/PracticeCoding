const str = "Catsthis catt is a cat string"
const regex = /\bcat\b/ig
const test = regex.test(str)
console.log(test)
console.log(str.match(regex))