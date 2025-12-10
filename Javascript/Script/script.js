
  
  let dots = document.getElementById("dots");
  let moreText = document.getElementById("invisibletext");
  let invisibletext = document.getElementById("invisibletext");
  let btnText = document.getElementById("btn");
  
  


  document.getElementById("btn").onclick = function Read() {
    
  
    if(dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Invisible text";
    moreText.style.display = "inline";
  }
}


