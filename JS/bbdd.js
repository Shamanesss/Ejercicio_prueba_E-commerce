const nombre = document.getElementById('DropdownFormName1');
const apellido = document.getElementById('DropdownFormlastName');
const direccion = document.getElementById('DropdownFormdirection');
const email = document.getElementById('DropdownFormEmail1');
const boton = document.getElementById('btn-usuario');
let registrerUsuario =[
    {
    name:"pepe",
    email:"",
    direccion:"",
    password:"",
    }
    
]

let datosUsarios =JSON.stringify(registrerUsuario);
console.log(datosUsarios);
localStorage.setItem("registro",datosUsarios);
let usuario = localStorage.getItem("registro");
// let usuariojson= JSON.parse(usuario);
// console.log(usuario);


let insertdata =[];
const tunombre = document.getElementById('tunombre');
const segundonombre = document.getElementById('segundonombre');
const calle = document.getElementById('calle');
const correo = document.getElementById('correo');

boton.addEventListener('click',dataregister());
function dataregister(){
    if(usuario!=null){
    usuario = JSON.parse(usuario);
    console.log(usuario);
   let nombre1=(nombre.value);
    let apellido1=(apellido.value);
   let email1=(email.value);
   let direccion1=(direccion.value);

}else{
    alert('no hay entradas')
} 
// tunombre.innerHTML = nombre1;
// segundonombre.innerHTML = apellido1

 }

