// let content = document.getElementById("content")
// function chanheRole(){
//     if(content.innerHTML==="This is random content"){
//         content.innerHTML = "This is new content"

//     }
//     else{
//         content.innerHTML = "This is random content"

//     }

    
// }

let btn = document.getElementById("btn")
let content = document.getElementById("content")
function toggleContent(){
    if(btn.innerHTML==="Read More"){
        btn.innerHTML = "Show Less"
        content.innerHTML = content.innerHTML.substring(0, 1000)
    }
    else{
        btn.innerHTML = "Show Less"
        btn.innerHTML = "Read More"
        content.innerHTML = content.innerHTML.substring(0, 11)
        
    }
}
getElementById()

