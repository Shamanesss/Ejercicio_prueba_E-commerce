// Variables
const carrito = document.getElementById("carrito");
const cursos = document.getElementById("lista-cursos");
// seleccionamos el Id y especificamente el tbody donde se agregara los productos
const listaCursos = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.getElementById("vaciar-carrito");




// Listeners

cargarEventListeners();

function cargarEventListeners(){
    //Dispara con el boton agregar carrito
    cursos.addEventListener("click", comprarCurso);


    //paso 4
    //Cuando se elimina los objetos del carrito
    carrito.addEventListener("click",eliminarCurso);

    //Paso 5
    // vaciar carrito
    vaciarCarritoBtn.addEventListener("click", vaciarCarrito);

    // paso 7
    //Al cargar documento, mostrar local storage
    document.addEventListener("DOMContentLoaded", leerLocalStorage);
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
    // arriba tambien se añadio una clase dinamicamente
    // añadir la informacion a la lista del carrito (imrimir dentro la lista)
    listaCursos.appendChild(row);

    // parte 6  almacenar en local storage
    guardarProductoLocalStorage(curso);
}

//continua paso 4
// Eliminando curso del carrito en el DOM
//acceder al elemento con  e
function eliminarCurso(e){
    e.preventDefault();
    
    let curso, cursoId;
    //identificamos el enlace que tiene la clase borrar producto, en este caso la X
    if (e.target.classList.contains("borrar-producto")){
       // console.log(e.target.parentElement.parentElement);
       //eliminamos la card
       e.target.parentElement.parentElement.remove();
        curso = e.target.parentElement.parentElement;
        cursoId = curso.querySelector("a").getAttribute("data-id");
        //console.log(cursoId);

    }

    //paso 8  llamar funcion para eliminar del local storage al dar X
    eliminarProductoLocalStorage(cursoId);

}

//continuar paso 5
//Elimina los productos del carrito en el DOM

function vaciarCarrito(){
    // forma lenta
   // listaCursos.innerHTML = ""; 

   // forma recomendada
   // miestras siga habiendo elemento, lo recorro
   while(listaCursos.firstChild){
    // lo que hace es ir eliminando el primer elemento mientras exista un primer elemento. hasta que quede vacio
        listaCursos.removeChild(listaCursos.firstChild);
   }
   return false;
   // Evitar salto de recarga
}

//continuar parte 6   almacenar al local storage

function guardarProductoLocalStorage(curso){
    //console.log(curso);
    let cursos;
    //toma el valor de un arreglo con datos de local storage o vacio
    cursos = obtenerProductoLocalStorage();
    //añadimos el curso actual al hacer click
    cursos.push(curso);
    //almacenar
    localStorage.setItem("cursos",JSON.stringify(cursos));
}


//verificar que hay informacion en local storage y no repetir
function obtenerProductoLocalStorage(){
    let cursosLS;

    //comprobamos si hay algo en local storage
    if(localStorage.getItem("cursos")===null){
        cursosLS = [];
    }else{
        // lo que viene lo convierte a un arreglo porque viene como string
        cursosLS = JSON.parse(localStorage.getItem("cursos"));
    }
    return cursosLS;
}

//Imprime los cursos de local storage en el carrito
function leerLocalStorage(){
    let cursosLS;
    cursosLS = obtenerProductoLocalStorage();

    //console.log(cursosLS)
    //RECORRER EL RREGLO
    cursosLS.forEach(function(curso){
        //construir el template
        
        const row=document.createElement("tr");
        //Construiremos una plantilla para cada uno de los cursos
        row.innerHTML=
        `
        <td> 
            <img src="${curso.imagen}" width=100px >
        
        </td>
        <td> ${curso.titulo}</td>
        <td> ${curso.precio}</td>
        <td> <a href="#" class="borrar-producto" data-id="${curso.id}">X</a></td>
        `;
        // arriba tambien se añadio una clase dinamicamente
        // añadir la informacion a la lista del carrito (imrimir dentro la lista)
        listaCursos.appendChild(row);
    });
}

// continua paso 8   eliminar el producto de local storage por el ID

function eliminarProductoLocalStorage(curso){
    //console.log(curso);
    let cursosLS;
    cursosLS = obtenerProductoLocalStorage();

    //buscar el id que se va a eliminar
    cursosLS.forEach(function(cursoLS, index){
        // si el curso id de la iteracion actual es igual al curso que estamos eliminando fuera de la funcion entonces eliminamos ese curso...
        //console.log(curso.id);
        if(cursoLS.id === curso){
            cursosLS.splice(index,1);
        }
    });
    //console.log(cursosLS);
    localStorage.setItem("cursos",JSON.stringify(cursosLS));
}