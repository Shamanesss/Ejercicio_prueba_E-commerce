      // Variables
      // obtenemos el UL
      const carrito = document.getElementById("carrito");
      //contenedor div de todas las card de zapatos
      const zapatos = document.getElementById("lista-zapatos");
      // seleccionamos el Id y especificamente el tbody donde se agregara los productos
      const listaZapatos = document.querySelector("#lista-carrito-detalles tbody");
      //boton
      const vaciarCarritoBtn = document.getElementById("vaciar-carrito-detalles");


      cargarEventListeners();

//<!-- -----------------------OBTENER VALORES-------------------------------------- -->

//verificar que hay informacion en local storage y no repetir

    function cargarEventListeners(){

    //paso 4
    //Cuando se elimina los objetos del carrito
    carrito.addEventListener("click", eliminarZapato);

    //Paso 5
    // vaciar carrito
    vaciarCarritoBtn.addEventListener("click", vaciarCarrito);

    // paso 7
    //Al cargar documento, mostrar local storage
    document.addEventListener("DOMContentLoaded", leerLocalStorage);

    }





function obtenerProductoLocalStorage(){
    let zapatosLS;

    //comprobamos si hay algo en local storage
    if(localStorage.getItem("zapatos")===null){
        zapatosLS = [];
    }else{
        // lo que viene lo convierte a un arreglo porque viene como string
        zapatosLS = JSON.parse(localStorage.getItem("zapatos"));
    //console.log(zapatosLS);
    }
    return zapatosLS;
}


//<!-- ----------------------- MOSTRAR VALORES-------MODIFICAR PLANTILLA------------------------------- -->

    //Imprime los zapatos de local storage en el carrito
function leerLocalStorage(){
    let zapatosLS;
    zapatosLS = obtenerProductoLocalStorage();
    //console.log("leer"+zapatosLS);

    //console.log(zapatosLS)
    //RECORRER EL RREGLO
    zapatosLS.forEach(function(zapato){
        //construir el templateç
        //console.log("leer for"+zapato);
        //console.log(zapato.titulo);
        const row=document.createElement("tr");
        //Construiremos una plantilla para cada uno de los zapatos
        row.innerHTML=
        `
        <td>
            <img src="${zapato.imagen}" width=100px >

        </td>
        <td> ${zapato.titulo}</td>
        <td> ${zapato.precio}</td>
        <td> <a href="#" class="borrar-general borrar-producto-detalles" data-id="${zapato.id}">X</a>
        </td>`
        ;
        // arriba tambien se añadio una clase dinamicamente
        // añadir la informacion a la lista del carrito (imrimir dentro la lista)
        listaZapatos.appendChild(row);
    });
}

//continua paso 4
// Eliminando zapato del carrito en el DOM
//acceder al elemento con  e








function eliminarZapato(e){
    // e.preventDefault();

    let zapato, zapatoId;
    //identificamos el enlace que tiene la clase borrar producto, en este caso la X
    if (e.target.classList.contains("borrar-producto-detalles")){
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

   // Evitar salto de recarga
}

function vaciarLocalStorage(){
    localStorage.clear();
}


//<!-- -----------------------LEER FUNCION AUTOMATICAMENTE-------------------------------------- -->
// leerLocalStorage();