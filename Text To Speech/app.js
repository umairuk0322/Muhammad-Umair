// let text = document.getElementById("text");

// function speakBtn() {
//    let uttrance = new 
//    SpeechSynthesisUtterance(text.value);
//    speechSynthesis.speak(uttrance);
// }

let text = document.getElementById("text");

function speakBtn() {
    let uttrance = new 
    SpeechSynthesisUtterance(text.value);
    speechSynthesis.speak(uttrance);

}