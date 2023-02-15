//Cambia el nombre del Id saludar por saludarcatalogo

const saludarcatalogo = document.getElementById('saludarcatalogo')
let nombre=JSON.parse(localStorage.getItem('registro'));
 
if(nombre == null){
    nombre = '';

 }else{

 saludarcatalogo.innerHTML = `¡Hola, ${nombre.names1}!`;
 }