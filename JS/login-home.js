const saludarInicio = document.getElementById('saludar-home')
let nombre= localStorage.getItem('logeado');
 
 console.log(nombre);

 saludarInicio.innerHTML = `¡Hola, ${nombre}!`;