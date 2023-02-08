// cambiar el id de saludar por saludarE

const saludarE = document.getElementById('saludarE')
let nombre= localStorage.getItem('logeado');
 
if(nombre == null){
    nombre = '';

 }else{
 console.log(nombre);

 saludarE.innerHTML = `¡Hola, ${nombre}!`;
 }