const login = document.getElementById('btn-login');
const names = document.getElementById('DropdownFormName');
const password = document.getElementById('DropdownFormPassword');
const saludar = document.getElementById('saludar');
const error =document.getElementById('error')
const cerrar = document.querySelector("#btn-cerrar-login");
const formulario1 = document.getElementById('formulario1')
// login.addEventListener('click',validar);
formulario1.addEventListener('submit', e =>{
    e.preventDefault();
    login.addEventListener('click', validar);
  }); 
function validar(){

     let form_nombre = names.value;
     let form_password= password.value;
     if(form_nombre!=null && form_password !=undefined){
        return swal("Uppss!!  Usuario no encontrado","Por favor, Registrate" ,"error")
     
   
    }
    // localStorage.setItem('logeado', form_nombre);
    // console.log(form_nombre);
 
    //  let nombre= localStorage.getItem('logeado');
     
    //  console.log(nombre);
    //  saludar.innerHTML = `¡Hola, ${nombre}`;
     
    }

const apellido = document.querySelector('#DropdownFormlastName');
const direccion = document.querySelector("#DropdownFormdirection");  
const names1 = document.getElementById('DropdownFormName1');
const password1 = document.getElementById('DropdownFormPassword1');
const email = document.getElementById('DropdownFormEmail1');
const btn_usuario = document.getElementById('btn-usuario')
const formulario2 = document.getElementById('formulario2')
// btn_usuario.addEventListener('click',registrousuario);

    formulario2.addEventListener('submit', e =>{
       e.preventDefault();
     btn_usuario.addEventListener('click',registrousuario);
        
    });

function registrousuario(){
    const aUsuario={
        names1:names1.value,
        apellido: apellido.value,
        direccion:direccion.value,
        email: email.value,
        passwowd1:password1.value

    }; window.location.href="../ES/cuenta.html";
    
    console.log(aUsuario);
    let jsonUsuario = localStorage.setItem("registro",JSON.stringify(aUsuario));
    
    console.log(jsonUsuario);
    
    cargar();
     
    
}

function cargar(){
    let usuario =localStorage.getItem("registro",JSON.parse);
        if(usuario===null){
            usuario='';
        }else{
            saludar.innerHTML = `¡Hola, ${usuario.names1 }¡`
            console.log("no hago nada")
        }
}
let contrasena = document.querySelector('#DropdownFormPassword1');
let ojo = document.getElementById('ojo')

let ojo1 = document.getElementById('ojo1')
ojo.addEventListener('click', hacker);
ojo1.addEventListener('click', hacker);
function hacker(){
    if(contrasena.type == 'password'){
        contrasena.type = 'text';
     
        ojo.style.visibility="hidden";
        ojo1.style.visibility="visible";

    }else{
        contrasena.type = 'password';
        ojo1.style.visibility="hidden";
        ojo.style.visibility="visible";

    }
}
let contrasen = document.querySelector('#DropdownFormPassword');
let ojo2 = document.getElementById('ojo2')

let ojo3 = document.getElementById('ojo3')
ojo2.addEventListener('click', hackers);
ojo3.addEventListener('click', hackers);
function hackers(){
    if(contrasen.type == 'password'){
        contrasen.type = 'text';
     
        ojo2.style.visibility="hidden";
        ojo3.style.visibility="visible";

    }else{
        contrasen.type = 'password';
        ojo3.style.visibility="hidden";
        ojo2.style.visibility="visible";

    }
}


// function check() {
//     let clicau =document.querySelector('#dropdownCheck1');
    
//     if(clicau.checked){
//         document.querySelector('#btn-usuario').disabled= false;
//     }
//     else{
//         document.querySelector('#btn-usuario').disabled = true;
//     }

// }check();