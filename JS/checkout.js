const imgArray = [
    "../img/zapatoMihai50.png",
    "../img/zapatomujer4_60.png",
    "../img/zapatoMihai2.png",
    "../img/zapatoMihai3.png",
    "../img/zapatoMihai4.png"
]
const img = document.getElementById("slide")
let i=0
const slideShow = () => {
    img.src = imgArray[i]
    i = (i < imgArray.length - 1) ? i+1 : 0
}

const interval = () => {
    setInterval(slideShow, 1500)
}


// acceptar condiciones

 let input = document.getElementById("dropdownCheck");
 let boton = document.getElementById("boton");

 boton.disabled = true;
    
 input.addEventListener("change",(e) => {
    if(input.value === "checked") {
        boton.disabled = false;
    }else {
        boton.disabled =true;
    }
})
