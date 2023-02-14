const formulario1 =document.getElementById('formulario1');
const formulario2 = document.getElementById('formulario2');
const input1 = document.querySelectorAll('#formulario1 input');
const input2 = document.querySelectorAll('#formulario2 input');
const expresiones = {
	DropdownFormName: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	DropdownFormEmail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}
const validarFormulario1 =(e)=>{
switch(e.target.name){
    case ("DropdownFormName"):
        if(expresiones.DropdownFormName.test(e.target.value)){

        }else{
     
        }
    break;
    case ("DropdownFormEmail"):
        
    break;
    case ("DropdownFormPassword"):
        
    break;
}
}
input1.forEach((input)=>{
    input.addEventListener('keyup',validarFormulario1);
    input.addEventListener('blur',validarFormulario1);

});
formulario1.addEventListener('click',(e)=>{
    e.preventDefault();
})

