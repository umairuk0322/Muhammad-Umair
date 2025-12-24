let hour = document.querySelector("#hour");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");
let ampm = document.querySelector("#ampm");

function updateClock() {
    let date = new Date();

    let ampmElement = date.getHours() >= 12 ? "pm" : "am";


    hour.innerHTML = date.getHours();
    min.innerHTML = date.getMinutes();
    sec.innerHTML = date.getSeconds();
    ampm.innerHTML = ampmElement;
}
setInterval(updateClock, 1000);
updateClock()