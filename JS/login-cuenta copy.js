const saludar2 = document.getElementById('saludar2');
    // let nombre= localStorage.getItem('logeado');
    //  if(nombre == null){
    //     nombre = '';

    //  }else{
    //  console.log(nombre);
    
    //  saludar2.innerHTML = `¡Hola, Bienvenid@! ${nombre}`;
    // }
    

    const apellido = document.querySelector('#DropdownFormlastName');
    const direccion = document.querySelector("#DropdownFormdirection");  
    const names1 = document.getElementById('DropdownFormName1');
    const password1 = document.getElementById('DropdownFormPassword1');
    const email = document.getElementById('DropdownFormEmail1');
    const btn_usuario = document.getElementById('btn-usuario');
    
    
    obtenerUsuario();
    
    function obtenerUsuario(){
        let datos_usuario = JSON.parse(localStorage.getItem("registro"));
    
       //comprobamos si hay algo en local storage
         if(localStorage.getItem("registro")===null){
             datos_usuario =[" "];
            console.log("que hay  aqui "+datos_usuario);
         }else{
        
        console.log("else"+typeof datos_usuario)
       
      
       return datos_usuario;  
     }}
    
     function imprimirDatos(){
    
      const containerRegister = document.getElementById("containerRegister");
    datos_usuario =obtenerUsuario();
    console.log(datos_usuario + "esto que es")
    saludar2.innerHTML=`¡Hola ${datos_usuario.names1}!`;
    containerRegister.innerHTML =   `   <div class=" datospersonales bd-exampledropdown-menu mx-auto form-color col-lg-7 col-md-8" >
    <form class="px-5 py-3 needs-validation "  id="formulario2">
      <h3 class="text-center pb-3">Registro</h3>
      <div class="mb-3 ">
          <label for="DropdownFormName1" class="form-label">Nombre</label>
          <input type="text" class="form-control" id="DropdownFormName1" disabled placeholder="${datos_usuario.names1}">
      </div>
      <div class="mb-3">
          <label for="DropdownFormlastname" class="form-label">Apellido</label>
          <input type="text" class="form-control" id="DropdownFormlastName" disabled placeholder="${datos_usuario.apellido}">
      </div>
      <div class="mb-3">
          <label for="DropdownFormdirection" class="form-label">Direccion</label>
          <input type="text" class="form-control" id="DropdownFormdirection" disabled placeholder="${datos_usuario.direccion}">
      </div>
      <div class="mb-3">
        <label for="DropdownFormEmail1" class="form-label">Correo Electronico</label>
        <input type="email" class="form-control" id="DropdownFormEmail1" disabled placeholder="${datos_usuario.email}">
      </div>
      <div class="mb-3">
        <label for="DropdownFormPassword1" class="form-label">Contraseña</label>
        <input type="password" class="form-control mb-5" id="DropdownFormPassword1" disabled value="${datos_usuario.password1}">
      </div>
      
      
    </form>
  </div>`
    //` 
    //  <div class="col-7 mx-auto datospersonales p-5 ">
                  
    //               <h2 class="text-center">DATOS PERSONALES</h2>
    //                  <form class="px-4 py-3 ">
                     
    //                    <div class="mb-3">
    //                        <label for="DropdownFormName2" class="form-label">Nombre</label>
    //                        <input type="text" class="form-control" id="DropdownFormName2" disabled placeholder="${datos_usuario.names1}">
    //                      </div>
    //                      <div class="mb-3">
    //                        <label for="DropdownFormlastName" class="form-label" >Apellidos</label>
    //                        <input type="text" class="form-control" id="DropdownFormlastName2"  disabled placeholder="${datos_usuario.apellido}">
    //                      </div>
    //                      <div class="mb-3">
    //                        <label for="DropdownFormlastaddress" class="form-label" disable>Direccion</label>
    //                        <input type="text" class="form-control" id="DropdownFormlastaddress"  disabled placeholder="${datos_usuario.direccion}">
    //                      </div>
    //                    <div class="mb-3">
    //                      <label for="DropdownFormEmail1" class="form-label" disabled>Email</label>
    //                      <input type="email" class="form-control" id="DropdownFormEmail2" disabled placeholder="${datos_usuario.email}">
    //                    </div>
    //                    <div class="mb-3">
    //                      <label for="DropdownFormPassword1" class="form-label"readonly>Contraseña</label>
    //                      <input type="password" class="form-control" id="DropdownFormPassword2" disabled value=${datos_usuario.password1}>
    //                    </div>
                     
    //              </div> 
    // `
       
      
      }
      imprimirDatos();
let pedidos = document.getElementById('pedidos');
let imagen1 = document.getElementById('imagen1');
let imagen2 = document.getElementById('imagen2');
let imagen3 = document.getElementById('imagen3');
const compras =[
["#0967","Playera Black","80 €"],
["#1088","Sandalias Realax","250 €"],
["#2345","Botines Amazing","400 €"]
]



function numeropedidos(){


pedidos.innerHTML=` 
<div class="px-4 py-3 " >
<h2>PEDIDOS</h2>
<table class="table ">
<thead>
  <tr>
    <th scope="col">Numero de pedido</th>
    <th scope="col">Imagen</th>
    <th class="text-center"scope="col">Producto</th>
    <th scope="col">Precio</th>
  </tr>
</thead>
<tbody class="align-middle ">
  <tr>
    <th scope="row">${compras[0][0]}</th>
    <td id="imagen1"></td>
    <td class="text-center">${compras[0][1]}</td>
    <td>${compras[0][2]}</td>
  </tr>
  <tr>
    <th scope="row">${compras[1][0]}</th>
    <td id="imagen2"></td>
    <td class="text-center">${compras[1][1]}</td>
    <td>${compras[1][2]}</td>
  </tr>
  <tr>
    <th scope="row">${compras[2][0]}</th>
    <td id="imagen3"></td>
    <td class="text-center">${compras[2][1]}</td>
    <td>${compras[2][2]}</td>
  </tr>
</tbody>
</table>
</div>`
}
numeropedidos();
    

      let btn_cerrar = document.getElementById('btn-cerrar-login')
      btn_cerrar.addEventListener('click', cerrarLogin)
      function cerrarLogin(){
        
      console.log("he hecho click")
      delete localStorage.registro;
           localStorage.clear();
           location.reload();
           
        
           

 }