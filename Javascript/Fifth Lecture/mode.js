let btn = document.getElementsByClassName('mode-btn')
console.log(btn[0])
let container = document.getElementsByClassName("container")
console.log(container[0])

function changeMode(bgColor){
    if (btn[0].innerHTML==="Enable Darkmode"){
        btn[0].innerHTML = "Enable Lightmode"
        container[0].style.backgroundColor = bgColor
        container[0].style.color = "white"
    }
    else{
        btn[0].innerHTML = "Enable Darkmode"
        container[0].style.backgroundColor = "white"
        container[0].style.color = "black"

    }

}
// let btn = document.querySelector('.mode-btn')
// console.log(btn)
// let container = document.getElementsByClassName("container")
// console.log(container)

// function changeMode(bgColor){
//     if (btn.innerHTML==="Enable Darkmode"){
//         btn.innerHTML = "Enable Lightmode"
//         container.style.backgroundColor = bgColor
//         container.style.color = "white"
//     }
//     else{
//         btn.innerHTML = "Enable Darkmode"
//         container.style.backgroundColor = "white"
//         container.style.color = "black"

//     }

// }
