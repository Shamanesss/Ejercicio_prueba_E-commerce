// Variables
const carrito = document.getElementById("carrito");
const cursos = document.getElementById("lista-cursos");
// seleccionamos el Id y especificamente el tbody donde se agregara los productos
const listaCursos = document.querySelector("#lista-carrito tbody");




// Listeners

cargarEventListeners();

function cargarEventListeners(){
    //Dispara con el boton agregar carrito
    cursos.addEventListener("click", comprarCurso);


    //paso 4
    //Cuando se elimina los objetos del carrito
    carrito.addEventListener("click",eliminarCurso);
}



//Funciones

//Paso 1
//leer el evento
// añade el curso al carrito
function comprarCurso(e){
    e.preventDefault();
    // cuando el elemento que hace clic contenga esta.... algo se ejecutara
    if(e.target.classList.contains("agregar-carrito")){
        
        //Escalamos hacia arriba dos posiciones en los padres (Toda la info de la card)
        const curso= e.target.parentElement.parentElement;
        
        //LOs datos que hemos seleccionado, los Enviamos a otra funcion
        leerDatosCurso(curso);
    };
}


//Paso 2
//Leer los datos del curso o el producto
function leerDatosCurso(curso){
    //leer todos los datos del curso (crear objeto)
    const infoCurso={
        imagen: curso.querySelector("img").src,
        titulo: curso.querySelector("h5").textContent,
        precio: curso.querySelector(".precio span").textContent,
        id: curso.querySelector("a").getAttribute("data-id")
    }
    //console.log(infoCurso);

 // paso 3
 //Insertar los datos seleccionados en la tabla
    insertarCarrito(infoCurso);
}


//Muestra el curso seleccionado en el carrito

function insertarCarrito(curso){
    const row=document.createElement("tr");
    //Construiremos una plantilla 
    row.innerHTML=
    `
    <td> 
        <img src="${curso.imagen}" width=100px >
    
    </td>
    <td> ${curso.titulo}</td>
    <td> ${curso.precio}</td>
    <td> <a href="#" class="borrar-producto" data-id="${curso.id}">X</a></td>
    `;

    // añadir la informacion a la lista del carrito (imrimir dentro la lista)
    listaCursos.appendChild(row);
}

//continua paso 4
// Eliminando curso del carrito en el DOM
//acceder al elemento con  e
function eliminarCurso(e){
    e.preventDefault();
    console.log("eliminado");

}