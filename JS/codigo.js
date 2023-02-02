const login = document.getElementById('btn-login');
const names = document.getElementById('DropdownFormName');
const password = document.getElementById('DropdownFormPassword');
const saludar = document.getElementById('saludar')


login.addEventListener('click',validar);

function validar(){
    let form_nombre = names.value;
    
    localStorage.setItem('logeado', form_nombre);
    console.log(form_nombre);
     let nombre= localStorage.getItem('logeado');
     console.log(nombre);
    
    // if(nombre!=null && nombre != undefined){
    //     saludar.innerHTML = nombre;
    // }
    saludar.innerHTML = "Hola "+nombre;
    }





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
