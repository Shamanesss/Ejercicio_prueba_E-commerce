    
      const listaZapatos = document.querySelector("#lista-carrito-factura tbody");



      cargarEventListeners();

    function cargarEventListeners(){
    document.addEventListener("DOMContentLoaded", leerLocalStorage);

    }





function obtenerProductoLocalStorage(){
    let zapatosLS;
    
    if(localStorage.getItem("zapatos")===null) {
        zapatosLS = [];
    }else{
        zapatosLS = JSON.parse(localStorage.getItem("zapatos"));
    }
    return zapatosLS;
}


function leerLocalStorage(){
    let zapatosLS;
    zapatosLS = obtenerProductoLocalStorage();

    zapatosLS.forEach(function(zapato){
      
        const row=document.createElement("tr");
        row.innerHTML=
        `
        <td>#</td>
        <td>${zapato.titulo}</td>
        <td>${zapato.precio}</td>
        <td>${zapato.precio}</td>
        `
        ;
        
        listaZapatos.appendChild(row);
    });
}


let nombreApellidoFactura = document.getElementById('nombreFactura');
let direccionFactura = document.getElementById("direccionFactura");
let emailFactura = document.getElementById("emailFactura");

let totalFactura = document.getElementById("total-en-factura");
let subtotalFactura = document.getElementById("subtotal-en-factura");
let ivaEnFactura = document.getElementById("IVA-en-factura");

let totalLS = JSON.parse(localStorage.getItem("totalCheckout"));
let iva = (totalLS * 21)/100;
let subtotal = totalLS - iva;

totalFactura.textContent ="€ " + totalLS +".00";
ivaEnFactura.textContent = "€ " + iva ;
subtotalFactura.textContent = "€ " + subtotal ;


obtenerUsuarioFactura();

function obtenerUsuarioFactura(){
    let datos_usuario = JSON.parse(localStorage.getItem("registro"));

   //comprobamos si hay algo en local storage
     if(localStorage.getItem("registro")===null){
         datos_usuario =[" "];
        console.log("que hay  aqui "+datos_usuario);
     }else{
    
    console.log("Obteniendo datos exitosamente"+datos_usuario)
   
     console.log(datos_usuario.names1);
   return datos_usuario;  
 }}


function mostrarInformacionUsuario(){
let datos_usuario = obtenerUsuarioFactura();


nombreApellidoFactura.textContent = datos_usuario.names1 + " " + datos_usuario.apellido;
direccionFactura.textContent =datos_usuario.direccion;
emailFactura.textContent = datos_usuario.email;

}

mostrarInformacionUsuario();




