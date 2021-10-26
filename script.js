//[01]-------------------------//
const date = new Date();
const day = date.getDate()
const month = date.getMonth() + 1
const year = date.getFullYear()
console.log(`${day}/${month}/${year}`);

//[02]-------------------------//
console.log(new Date().toJSON().slice(0,10))

//[03]-------------------------//
console.log(new Date().toUTCString().slice(5,16))

