// console.log('callbacks')

// console.log('First Hello World')
// console.log('Second Hello World')
// console.log('Third Hello World')

//callbacl - a simple function which being called in another function as argument

//Custom callbacks

// function testFunc(parameter){
//     console.log(parameter)

// }

// function newFunc(){
//     console.log('Hey this is new function')
// }
// testFunc(newFunc)

// setTimeout(() =>{
//     console.log('Testing')
// }, 3000)

// console.log('First Hello World')
// setTimeout(() =>{
//     console.log('Second Hello World')
// }, 3000)
// console.log('Third Hello World')

// console.log('First Hello World')
// function callworld(){
//     console.log('Second Hello World')
// }
// setTimeout(callworld, 3000)
// console.log('Third Hello World')

//Hoisting

// let myname = "Umair"
// console.log(myname)    //var - Hoisting key word (Hoested)

 //Arrow function

//  const sayHi = () =>{

//  }
// setInterval(() =>{
//     console.log('Hey This is setInterval')
// }, 1000)

let time = document.querySelector('.time')
    console.log(time)



 setInterval(() =>{
    let myDate = new Date()
    let hours = myDate.getHours()
    let min = myDate.getMinutes()
    let sec = myDate.getSeconds()
    
    time.innerHTML = `${hours} : ${min} : ${sec}`
    
}, 1000)