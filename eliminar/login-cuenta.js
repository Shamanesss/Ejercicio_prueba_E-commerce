const saludar2 = document.getElementById('saludar2');
    let nombre= localStorage.getItem('logeado');
     if(nombre == null){
        nombre = '';

     }else{
     console.log(nombre);
    
     saludar2.innerHTML = `¡Hola, Bienvenid@! ${nombre}`;
    }
    

    const apellido = document.querySelector('#DropdownFormlastName');
    const direccion = document.querySelector("#DropdownFormdirection");  
    const names1 = document.getElementById('DropdownFormName1');
    const password1 = document.getElementById('DropdownFormPassword1');
    const email = document.getElementById('DropdownFormEmail1');
    const btn_usuario = document.getElementById('btn-usuario');
    
    
    obtenerUsuario();
    
    function obtenerUsuario(){
        let datos_usuario;
    
    //     //comprobamos si hay algo en local storage
         if(localStorage.getItem("registro")===null){
             datos_usuario = [''];
            console.log("que hay aqui "+usuario);
         }else{
        datos_usuario = JSON.parse(localStorage.getItem("registro"));
        console.log("else"+typeof datos_usuario)
       }
      
       return datos_usuario;  
     }
    
     function imprimirDatos(){
    
      const containerRegister = document.getElementById("containerRegister");
    datos_usuario =obtenerUsuario();
    console.log(datos_usuario + "esto que es")
    
    containerRegister.innerHTML =   `  <div class="col-7 mx-auto datospersonales p-5 ">
                  
                  <h2 class="text-center">DATOS PERSONALES</h2>
                     <form class="px-4 py-3 ">
                     
                       <div class="mb-3">
                           <label for="DropdownFormName2" class="form-label">Nombre</label>
                           <input type="text" class="form-control" id="DropdownFormName2" disabled placeholder="${datos_usuario.names1}">
                         </div>
                         <div class="mb-3">
                           <label for="DropdownFormlastName" class="form-label" >Apellidos</label>
                           <input type="text" class="form-control" id="DropdownFormlastName2"  disabled placeholder="${datos_usuario.apellido}">
                         </div>
                         <div class="mb-3">
                           <label for="DropdownFormlastaddress" class="form-label" disable>Direccion</label>
                           <input type="text" class="form-control" id="DropdownFormlastaddress"  disabled placeholder="${datos_usuario.direccion}">
                         </div>
                       <div class="mb-3">
                         <label for="DropdownFormEmail1" class="form-label" disabled>Email</label>
                         <input type="email" class="form-control" id="DropdownFormEmail2" disabled placeholder="${datos_usuario.email}">
                       </div>
                       <div class="mb-3">
                         <label for="DropdownFormPassword1" class="form-label"readonly>Contraseña</label>
                         <input type="password" class="form-control" id="DropdownFormPassword2" disabled placeholder=${datos_usuario.password1}>
                       </div>
                     
                 </div> `
       console.log(datos_usuario.apellido);
      
      }imprimirDatos();
      
      
    

      let btn_cerrar = document.getElementById('btn-cerrar-login')
      btn_cerrar.addEventListener('click', cerrarLogin)
      function cerrarLogin(){
        
      console.log("he hecho click")
      delete localStorage.registro;
           localStorage.clear();
           location.reload();
           
        
           

 }