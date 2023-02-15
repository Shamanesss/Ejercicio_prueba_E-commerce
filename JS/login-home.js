const saludarInicio = document.getElementById('saludar-home')
let nombre= JSON.parse(localStorage.getItem('registro'));
 
if(nombre == null){
    nombre = '';

 }else{
 console.log(nombre.names1);

 saludarInicio.innerHTML = `¡Hola, ${nombre.names1}!`;
}