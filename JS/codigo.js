const login = document.getElementById('btn-login');
const names = document.getElementById('DropdownFormName');
const password = document.getElementById('DropdownFormPassword');
const saludar = document.getElementById('saludar');

const cerrar = document.querySelector("#btn-cerrar-login");

login.addEventListener('click',validar);

function validar(){
    let form_nombre = names.value;
    
    localStorage.setItem('logeado', form_nombre);
    console.log(form_nombre);
 
     let nombre= localStorage.getItem('logeado');
     
     console.log(nombre);
     saludar.innerHTML = `¡Hola, ${nombre}`;
     
    }

const apellido = document.querySelector('#DropdownFormlastName');
const direccion = document.querySelector("#DropdownFormdirection");  
const names1 = document.getElementById('DropdownFormName1');
const password1 = document.getElementById('DropdownFormPassword1');
const email = document.getElementById('DropdownFormEmail1');
const btn_usuario = document.getElementById('btn-usuario')

btn_usuario.addEventListener('click',registrousuario);
      

function registrousuario(){
    const aUsuario={
        names1:names1.value,
        apellido: apellido.value,
        direccion:direccion.value,
        email: email.value,
        passworwd1:password1.value
        
    };window.location.href="../ES/cuenta.html"
    
    console.log(aUsuario);
    let jsonUsuario = localStorage.setItem("registro",JSON.stringify(aUsuario));
    // let usuario = localStorage.getItem("registro",JSON.parse(jsonUsuario));
    console.log(jsonUsuario);

    //console.log(aUsuario.apellido);
   
}


  
// function changepage(){
//     location.href="cuenta.html";
// }
    
// cerrar.addEventListener('click', cerrarLogin)
// function cerrarLogin(){
//     delete.localStorage.logeado
//     localStorage.clear();
//     localStorage.reload();
// }



// $('#login form').submit(function(){
//     var form_name =$('#name').val();
//     localStorage.setItem("resultado", form_name);
  
//   });

//   var nombre = localStorage.getItem('resultado');
//     if(nombre !=null && nombre != undefined){
//       $('#datosform').html('Bienvenid@, '+ nombre);
//       $('#login').hide();
//       $('#cerrar').click(function(){
//         localStorage.clear();
//         location.reload();
//       });

//     }





// function validar(){
// //addproducto
// let form_nombre = names.value;
// localStorage.setItem('logeado', form_nombre);
//    console.log(form_nombre);
//       let localname= localStorage.getItem('logeado');
//      console.log(localname);
    

// sessionStorage.setItem(localname); //ó sessionStorage[producto]=precio



// let saludar=document.getElementById('saludar');

// saludar.innerHTML='';

// for(let i=0;i<sessionStorage.length;i++){

//                 let clave =sessionStorage.key(i);

//                 let myname=sessionStorage.getItem(localname);

//                 saludar.innerHTML = myname +clave;
//                 }

// }

 

// function limpiarVista() {

// var datosDisponibles=document.getElementById('datosDisponibles');

// datosDisponibles.innerHTML='Limpiada vista. Los datos permanecen.';

// }

 

// function borrarTodo() {sessionStorage.clear(); mostrarDatos(); }

 

