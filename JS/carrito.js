// const productosEnCarrito = JSON.parse(localStorage.getItem(productosEnCarrito));

// const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
// const contenedorProductos = document.querySelector("#carrito-productos");
// const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
// const contenedorCarritoComprado = document.querySelector("#carrito-comprado");

// if (productosEnCarrito) {
// contenedorCarritoVacio.classList.add("disabled");
// } else {

// }

const nombre = document.getElementById('DropdownFormName1');
const apellido = document.getElementById('DropdownFormlastName');
const direccion = document.getElementById('DropdownFormNamedirection');
const email = document.getElementById('DropdownFormEmail1');
const boton = document.getElementById('btn-usuario');

boton.addEventListener('click',guardarUsuarioLocalStorage);

function guardarUsuarioLocalStorage(usuario){


    let usuarios;
    usuarios = obtenerUsuarioLocalStorage();
    usuarios.push(usuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    console.log(usuarios)
}
function obtenerUsuarioLocalStorage(){
    let usuarioLS;
    if(localStorage.getItem('usuario')===null){
        usuarioLS=[];
    }else{
        usuarioLS =JSON.parse(localStorage.getItem('usuarios'));
        
    }return usuarioLS;
}
function insertar(usuario) {
    guardarUsuarioLocalStorage(usuario);
}