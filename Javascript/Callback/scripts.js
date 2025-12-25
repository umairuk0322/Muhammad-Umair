console.log("Hey, This is Umair")
console.log("What's Up")

setTimeout(() => {
    console.log("I am the Umair")
}, 2000)

console.log("Umair Khan")

const callback = (arg)=>{
    console.log(arg)

}
const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src; 
    sc.onload = callback("Umair");
    document.head.append(sc)
}


loadScript("	https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js", callback)
