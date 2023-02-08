const saludar2 = document.getElementById('saludar2');
    let nombre= localStorage.getItem('logeado');
     if(nombre == null){
        nombre = '';

     }else{
     console.log(nombre);
    
     saludar2.innerHTML = `¡Hola, Bienvenid@! ${nombre}`;
    }
    

    const apellido2 = document.querySelector('#DropdownFormlastName2');
const direccion2 = document.querySelector("#DropdownFormlastdirection");  
const names2 = document.getElementById('DropdownFormName2');
const password2 = document.getElementById('DropdownFormPassword2');
const email2 = document.getElementById('DropdownFormEmail2');


let usuario = localStorage.getItem("registro",JSON.parse(aUsuario));
apellido2.innerHTML=registro.usuario.apellido;