const nav = document.getElementById("nav-links")
const icon = document.getElementById("bars")

function toggleMenu(){
if(nav.style.display==="none"){
    nav.style.display = "block";
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
    // switch to close icon
}
else{
        nav.style.display = "none"
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
        // switch back to menu icon
    }
}

