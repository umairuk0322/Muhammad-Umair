//Dom - Document object module
//console.log('Testing')
//document.write('Testing')
//issue - bug
// let user = "Client"
// document.write(user)
// function changeRole(){
//     user = "Admin"
//     document.write(user)
// }
//Dom - Manipulation => Recommended Approch
// let content = document.getElementById("content")
// console.log(content)
// function changeContent(){
//     if (content.innerHTML ==="This is just a random content"){

//         content.innerHTML = "This is New content"
        
//     }

//     else{
//         content.innerHtml = "This is just a random content"
//     }
// }
//Read More / Show Less

//console.log("btn")

//console.log("Read")
let btn = document.getElementById("btn")
let content = document.getElementById("content")
function togglecontent(){
    if (content.innerHTML==="Read More"){
        btn.innerHTML = "Show Less"
        content.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis accusantium laboriosam fugiat tempora quod vel! Molestiae hic molestias doloremque at, nostrum, quod voluptatum vitae enim omnis, quis impedit saepe iste? Architecto modi sunt nisi, voluptatibus animi sequi nam asperiores quo soluta deleniti quisquam saepe officiis ullam rerum minima voluptas qui voluptate dolorem fugiat ipsam quibusdam. Nostrum, soluta? Nobis omnis asperiores explicabo optio molestiae odit. Nesciunt in exercitationem voluptas culpa doloremque sed quos alias ut laborum, fugiat, voluptates voluptatem earum accusantium saepe! Nihil, iste! Deserunt unde adipisci animi consequuntur fugiat quia fuga ipsum? Repellendus earum qui fugit neque pariatur ut laudantium.`
    }
    else{
        btn.innerHTML = "Read More"
        content.innerHTML = content.innerHtml.substring(0, 150)
    }
   
}


