// cambiar el id de saludar por saludarE

const saludarE = document.getElementById('saludarE')
let nombre= JSON.parse(localStorage.getItem('registro'));
 
if(nombre == null){
    nombre = '';

 }else{

 saludarE.innerHTML = `¡Hola, ${nombre.names1}!`;
 }