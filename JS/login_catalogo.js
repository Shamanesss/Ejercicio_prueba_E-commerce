//Cambia el nombre del Id saludar por saludarcatalogo

const saludarcatalogo = document.getElementById('saludarcatalogo')
let nombre= localStorage.getItem('logeado');
 
if(nombre == null){
    nombre = '';

 }else{
 console.log(nombre);

 saludarcatalogo.innerHTML = `¡Hola, ${nombre}!`;
 }