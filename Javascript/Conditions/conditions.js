// let content = document.getElementsByClassName("content")
// console.log(content[0])

let age = 18
let num2 = 20

let content = document.querySelector(".content")
console.log(content)

if(age>15 || !age<20){
    content.innerHTML = "You can vote can be careful"

}
else if(age>=20){
    content.innerHTML = "You can vote because you are a grown up adult"
}
else{
    content.innerHTML = "You can't vote"    
}
