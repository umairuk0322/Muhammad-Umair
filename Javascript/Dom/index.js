let btn = document.getElementById("btn")
let content = document.getElementById("content")
let fulltext = content.innerHTML;


function toggleContent(){
    if(btn.innerHTML==="Read More"){
        btn.innerHTML = "Show Less"
        content.innerHTML = fulltext;
    }
    else{
        btn.innerHTML = "Read More"
        content.innerHTML = content.innerHTML.substring(0, 11)
       }
       
    

    
}
toggleContent()
