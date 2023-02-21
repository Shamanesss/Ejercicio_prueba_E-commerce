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
        debugger
        boton.disabled = false;
    }else {
        boton.disabled = true;
    }
})



//Capturar datos pagina de registo
// vamos a capturar los datos para cogerlos del local storage

    let apellidoCheck = document.getElementById('apellido');
    let direccionCheck = document.getElementById("direccion");  
    let nombreCheck = document.getElementById('nombre');
    let emailCheck = document.getElementById('email');
   
    obtenerUsuario();
    
    function obtenerUsuario(){
        
        let datos_usuario = JSON.parse(localStorage.getItem("registro"));
        
       //comprobamos si hay algo en local storage
         if(localStorage.getItem("registro")===null){
             datos_usuario =[" "];
            console.log("que hay  aqui "+datos_usuario);
         }else{
        
       // console.log("Obteniendo datos exitosamente"+datos_usuario)
       
         console.log(datos_usuario.names1);
       return datos_usuario;  
     }}


function mostrarInformacionUsuario(){
    let datos_usuario = obtenerUsuario();
    // console.log(datos_usuario.names1);
    // console.log(datos_usuario.apellido);
    // console.log(datos_usuario.direccion);
    // console.log(datos_usuario.email);

    nombreCheck.value=datos_usuario.names1;
    apellidoCheck.value=datos_usuario.apellido;
    direccionCheck.value=datos_usuario.direccion;
    emailCheck.value=datos_usuario.email;
   
}

mostrarInformacionUsuario();


   