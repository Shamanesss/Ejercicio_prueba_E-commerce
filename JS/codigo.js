const login = document.getElementById('btn-login');
const names = document.getElementById('DropdownFormName');
const password = document.getElementById('DropdownFormPassword');
const saludar = document.getElementById('saludar')
const cerrar = document.querySelector("#btn-cerrar-login");

login.addEventListener('click',validar);

function validar(mellamo){
    let form_nombre = names.value;
    
    localStorage.setItem('logeado', form_nombre);
    console.log(form_nombre);
 
     let nombre= localStorage.getItem('logeado');
     
     console.log(nombre);
     saludar.innerHTML = `¡Hola, Bienvenid@! ${nombre}`;
  
    }


function changepage(){
    location.href="cuenta.html";
}
    
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

 

