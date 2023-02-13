let listaUsuario=[
    {
        idsuario:0,
        names1: "Administrador",
        apellido: "lastAdministrador",
        direccion: "Peñascal 25",
        email: "Zapaton@zapaton.com",
        passworwd1:"Admin"
    
    },
    {
        idsuario:1,
        names1: "usuario",
        apellido: "lastA",
        direccion: "Peñascal 25",
        email: "Zapaton@zapaton.com",
        passworwd1:"Admin"
    
    },
    {
        idsuario:1,
        names1: "Usuario",
        apellido: "lastA",
        direccion: "Calle victoria 25",
        email: "Zapaton@zapaton.com",
        passworwd1:"contraseña"
    
    },
    {
        idsuario:1,
        names1: "Usuario",
        apellido: "lastA",
        direccion: "Calle victoria 25",
        email: "Zapaton@zapaton.com",
        passworwd1:"contraseña"
    
    }
]
let jsonUsuario = JSON.stringify(listaUsuario);
let aUsuario = localStorage.getItem("registro");
 if (aUsuario==null){
    localStorage.setItem("registro",jsonUsuario);
    console.log(aUsuario);
 }
 let usuarioperfil= JSON.parse(localStorage.getItem("registro"))

 function logearse(){
    if(usuarioperfil ===null){
        return "No tienes cuenta, registrate"
    }
       return usuarioperfil;
 }
 function comprobarusuario(tunombre,imail){
    let hayusuario = false;
    for(let i=o; i<aUsuario.length; i++){
    if((tunombre == aUsuario[i].names1)&&(imail==aUsuario[i].email)){
         hayusuario= true;
        sessionStorage.setItem("usuario",JSON.stringify(aUsuario[i]))
    }

}return hayusuario;
 }

 const login = document.getElementById('btn-login');
const names = document.getElementById('DropdownFormName');
const email = document.getElementById('DropdownFormEmail');
const saludar = document.getElementById('saludar');

const cerrar = document.querySelector("#btn-cerrar-login");
if(login){
login.addEventListener('click',validar);
}
function validar(){

    let form_nombre = names.value;
    let form_email = email.value;
    let ok = false;

     ok = comprobarusuario(form_nombre,form_email)
    if(ok ===true){
        
        window.location.href="./ES/cuenta.html";
        saludar.innerHTML =`!Hola, ${form_nombre}`;
    }
}