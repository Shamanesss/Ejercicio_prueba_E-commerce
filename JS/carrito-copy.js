// const productosEnCarrito = JSON.parse(localStorage.getItem(productosEnCarrito));

// const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
// const contenedorProductos = document.querySelector("#carrito-productos");
// const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
// const contenedorCarritoComprado = document.querySelector("#carrito-comprado");

// if (productosEnCarrito) {
// contenedorCarritoVacio.classList.add("disabled");
// } else {

// }

// const nombre = document.getElementById('DropdownFormName1');
// const apellido = document.getElementById('DropdownFormlastName');
// const direccion = document.getElementById('DropdownFormNamedirection');
// const email = document.getElementById('DropdownFormEmail1');
// const boton = document.getElementById('btn-usuario');

// boton.addEventListener('click',guardarUsuarioLocalStorage);

// function guardarUsuarioLocalStorage(usuario){


//     let usuarios;
//     usuarios = obtenerUsuarioLocalStorage();
//     usuarios.push(usuario);
//     localStorage.setItem('usuarios', JSON.stringify(usuarios));
//     console.log(usuarios)
// }
// function obtenerUsuarioLocalStorage(){
//     let usuarioLS;
//     if(localStorage.getItem('usuario')===null){
//         usuarioLS=[];
//     }else{
//         usuarioLS =JSON.parse(localStorage.getItem('usuarios'));
        
//     }return usuarioLS;
// }
// function insertar(usuario) {
//     guardarUsuarioLocalStorage(usuario);
// }

// function updatetotal () {
//     let carContent = document.getElementsByClassName("card")[0];
//     let cardBoxes = document.getElementsByClassName("card-body");
//     let total = 0;
//     for(var i=0; i< cardBoxes.length; i++){
//     let cartBox = cardBoxes[i]
//     let priceElement = cardBox.getElementsByClassName("carrito-pr-cantidad")[0];
//     let price = parseFloat(priceElement.innerText.replace("$",""));
//     let quantityElement = cardBox.getElementsByClassName("cantidad-producto")[0];
//     let quantity = quantityElement.value;
//     total = total + (price * quantity);
//     // if price contains some cents value
//     total = Math.round(total * 100) / 100;
//     }
//     document.getElementById("total")[0].innerText ="$" + "total" ;
// }

// let quantityInputs = document.getElementsByClassName("cantidad-producto")
// for(var i=0; i< quantityInputs.length; i++) {
//     let inputs = quantityInputs[i];
//     inputs.addEventListener("change", quantityChanged);
// }


// function quantityChanged(event){
//     let inputs = event.target
//     if(isNaN(input.value) || input.value <= 0){
//         input.value = 1
//     } 
//     updatetotal();
// }

let cantidad = document.querySelector(".cantidad-producto");
let precio = document.querySelector(".carrito-pr-precio p");
let subtotal = document.querySelector(".carrito-pr-subtotal p");


aa()

 cantidad.addEventListener('change',
    function(){
        aa()

  });


  function aa(){
    let cantidadSeleccionada = parseInt(cantidad.value);
    let precioProducto = parseInt((precio.textContent).slice(1));
    let subtotalPrecio = parseInt(subtotal.textContent);

    console.log(cantidadSeleccionada)
    console.log(precioProducto)
    console.log(subtotalPrecio)

    let suma = cantidadSeleccionada * precioProducto;

    subtotal.innerHTML="$"+suma;
    subtotal.value=suma;
  }

let tarjetas = [document.querySelectorAll("card")];
tarjetas.forEach((tarjeta) => {
 
})
