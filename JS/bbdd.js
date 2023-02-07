let registrerUsuario =[
    {
    name:"",
    email:"",
    direccion:"",
    password:"",
    }
    
]
let datosUsarios =JSON.stringify(registrerUsuario);
console.log(listUsarios);

let usuario = localStorage.getItem("logeado");
if(usuario ==null){
    localStorage.setItem("logeado",datosUsarios);
}



