const saludarInicio = document.getElementById('saludar-home')
let nombre= localStorage.getItem('logeado');
 
if(nombre == null){
    nombre = '';

 }else{
 console.log(nombre);

 saludarInicio.innerHTML = `¡Hola, ${nombre}!`;
}