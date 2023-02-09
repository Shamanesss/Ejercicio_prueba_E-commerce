const saludar2 = document.getElementById('saludar2');
    let nombre= localStorage.getItem('logeado');
     if(nombre == null){
        nombre = '';

     }else{
     console.log(nombre);
    
     saludar2.innerHTML = `¡Hola, Bienvenid@! ${nombre}`;
    }
    

