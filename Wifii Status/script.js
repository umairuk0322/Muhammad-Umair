let statusInput = document.getElementById('statusupdate');

function updateStatus(){
    if(navigator.onLine){
        statusInput.innerHTML = "You are Connected to the Internet";
        statusInput.style.color = "green";
    }
    else{
        statusInput.innerHTML = "You are Disconnected from the Internet";
        statusInput.style.color = "red";
    }


}
updateStatus()

window.addEventListener('online', updateStatus);
window.addEventListener('offline', updateStatus);