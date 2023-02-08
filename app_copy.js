// Copia de JS carrito


// Variables
// obtenemos el UL
const carrito = document.getElementById("carrito");
//contenedor div de todas las card de zapatos
const zapatos = document.getElementById("lista-zapatos");
// seleccionamos el Id y especificamente el tbody donde se agregara los productos
const listaZapatos = document.querySelector("#lista-carrito tbody");
//boton
const vaciarCarritoBtn = document.getElementById("vaciar-carrito");




// Listeners - pendientes al llamado
//paso 1
cargarEventListeners();

function cargarEventListeners(){
    //Dispara con el boton agregar carrito
    zapatos.addEventListener("click", comprarZapato);


    //paso 4
    //Cuando se elimina los objetos del carrito
    carrito.addEventListener("click",eliminarZapato);

    //Paso 5
    // vaciar carrito
    vaciarCarritoBtn.addEventListener("click", vaciarCarrito);

    // paso 7
    //Al cargar documento, mostrar local storage
    document.addEventListener("DOMContentLoaded", leerLocalStorage);
}



//Funciones

//continuar Paso 1
//leer el evento
// añade el zapato al carrito
function comprarZapato(e){
    e.preventDefault();
    // cuando el elemento que hace clic contenga esta.... algo se ejecutara
    if(e.target.classList.contains("agregar-carrito")){
        
        //Escalamos hacia arriba dos posiciones en los padres (Toda la info de la card)
        //zapato
        const zapato= e.target.parentElement.parentElement;
        
        //LOs datos que hemos seleccionado, los Enviamos a otra funcion
        //leerDatosZapato
        leerDatosZapato(zapato);
    };
}


//Paso 2
//Leer los datos del zapato o el producto
function leerDatosZapato(zapato){
    //leer todos los datos del zapato (crear objeto)
    const infoZapato={
        imagen: zapato.querySelector("img").src,
        titulo: zapato.querySelector("h5").textContent,
        precio: zapato.querySelector(".precio span").textContent,
        id: zapato.querySelector("a").getAttribute("data-id")
    }
    //console.log(infoZapato);

 // paso 3
 //Insertar los datos seleccionados en la tabla
    insertarCarrito(infoZapato);
}



//Muestra el zapato seleccionado en el carrito

function insertarCarrito(zapato){
    const row=document.createElement("tr");
    //Construiremos una plantilla 
    row.innerHTML=
    `
    <td> 
        <img src="${zapato.imagen}" width=100px >
    
    </td>
    <td> ${zapato.titulo}</td>
    <td> ${zapato.precio}</td>
    <td> <a href="#" class="borrar-producto" data-id="${zapato.id}">X</a></td>
    `;
    // arriba tambien se añadio una clase dinamicamente
    // añadir la informacion a la lista del carrito (imrimir dentro la lista)
    listaZapatos.appendChild(row);

    // parte 6  almacenar en local storage
    guardarProductoLocalStorage(zapato);
}



//continua paso 4
// Eliminando zapato del carrito en el DOM
//acceder al elemento con  e
function eliminarZapato(e){
    e.preventDefault();
    
    let zapato, zapatoId;
    //identificamos el enlace que tiene la clase borrar producto, en este caso la X
    if (e.target.classList.contains("borrar-producto")){
       // console.log(e.target.parentElement.parentElement);
       //eliminamos la card
       e.target.parentElement.parentElement.remove();
        zapato = e.target.parentElement.parentElement;
        zapatoId = zapato.querySelector("a").getAttribute("data-id");
        //console.log(zapatoId);

    }

    //paso 8  llamar funcion para eliminar del local storage al dar X
    eliminarProductoLocalStorage(zapatoId);

}



//continuar paso 5
//Elimina los productos del carrito en el DOM

function vaciarCarrito(){
    // forma lenta
   // listaZapatos.innerHTML = ""; 

   // forma recomendada
   // miestras siga habiendo elemento, lo recorro
   while(listaZapatos.firstChild){
    // lo que hace es ir eliminando el primer elemento mientras exista un primer elemento. hasta que quede vacio
    listaZapatos.removeChild(listaZapatos.firstChild);
   }
  
   

   // paso 9
   //vaciar local storage
   vaciarLocalStorage();
   return false;
   // Evitar salto de recarga
}

//continuar parte 6   almacenar al local storage

function guardarProductoLocalStorage(zapato){
    //console.log(zapato);
    let zapatos;
    //toma el valor de un arreglo con datos de local storage o vacio
    zapatos = obtenerProductoLocalStorage();
    //añadimos el zapato actual al hacer click
    zapatos.push(zapato);
    //almacenar
    localStorage.setItem("zapatos",JSON.stringify(zapatos));
}


//verificar que hay informacion en local storage y no repetir
function obtenerProductoLocalStorage(){
    let zapatosLS;

    //comprobamos si hay algo en local storage
    if(localStorage.getItem("zapatos")===null){
        zapatosLS = [];
    }else{
        // lo que viene lo convierte a un arreglo porque viene como string
        zapatosLS = JSON.parse(localStorage.getItem("zapatos"));
    }
    return zapatosLS;
}





//Imprime los zapatos de local storage en el carrito
function leerLocalStorage(){
    let zapatosLS;
    zapatosLS = obtenerProductoLocalStorage();

    //console.log(zapatosLS)
    //RECORRER EL RREGLO
    zapatosLS.forEach(function(zapato){
        //construir el template
        
        const row=document.createElement("tr");
        //Construiremos una plantilla para cada uno de los zapatos
        row.innerHTML=
        `
        <td> 
            <img src="${zapato.imagen}" width=100px >
        
        </td>
        <td> ${zapato.titulo}</td>
        <td> ${zapato.precio}</td>
        <td> <a href="#" class="borrar-producto" data-id="${zapato.id}">X</a></td>
        `;
        // arriba tambien se añadio una clase dinamicamente
        // añadir la informacion a la lista del carrito (imrimir dentro la lista)
        listaZapatos.appendChild(row);
    });
}



// continua paso 8   eliminar el producto de local storage por el ID

function eliminarProductoLocalStorage(zapato){
    //console.log(zapato);
    let zapatosLS;
    // obtenemos el arreglo de zapatos
    zapatosLS = obtenerProductoLocalStorage();

    //Iteramos comparando el ID del zapato borrado con los del LS    
    zapatosLS.forEach(function(zapatoLS, index){
        // si el zapato id de la iteracion actual es igual al zapato que estamos eliminando fuera de la funcion entonces eliminamos ese zapato...
        //console.log(zapato.id);
        if(zapatoLS.id === zapato){
            zapatosLS.splice(index,1);
        }
    });
    //console.log(zapatosLS);
    //añadimos el arreglo actual a storage
    localStorage.setItem("zapatos",JSON.stringify(zapatosLS));
}



// continua paso 9 -  elimina todos los zapatos de local storage
function vaciarLocalStorage(){
    localStorage.clear();
}


export {cargarEventListeners, comprarZapato, leerDatosZapato , insertarCarrito , eliminarZapato ,vaciarCarrito , guardarProductoLocalStorage, obtenerProductoLocalStorage,
    leerLocalStorage, eliminarProductoLocalStorage ,  vaciarLocalStorage}

