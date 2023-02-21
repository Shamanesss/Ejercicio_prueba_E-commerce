
let cantidades = document.querySelectorAll(".cantidad-producto");
let precios = document.querySelectorAll(".carrito-pr-precio p");
let subtotales = document.querySelectorAll(".carrito-pr-subtotal p");
let borrar =document.querySelectorAll(".trash");

//Subtotales

let cant, precio, sterge;

for (let i=0; i<cantidades.length; i++){
    if(cantidades[i]!=0){
        cant=parseInt(cantidades[i].value);
        precio =parseInt((precios[i].textContent).slice(1));
        mi (cant , precio, subtotales[i])  ;  
        total(subtotales)
        contador();
   }
   
    function contador(){
        cantidades[i].addEventListener("change", function (){
                 cant=parseInt(cantidades[i].value);
                 precio =parseInt((precios[i].textContent).slice(1));
                 mi (cant , precio, subtotales[i])  ;  
                 total(subtotales)
             })

    }
};

//Totales

function mi (cantidad, precio, subtotal){

let result = (cantidad * precio); 
subtotal.innerHTML = "$" + result;
}

function total (subtotales){
    var suma=0
    
    for(let j=0; j<subtotales.length; j++){
        suma =parseInt((subtotales[j].textContent).slice(1))+suma
    }

    var total= document.getElementById("total");
    total.innerHTML = "$" + suma ;
   console.log("adentro" + suma);
   totalPagar = suma;

   
   
}

localStorage.setItem("totalCheckout" , JSON.stringify(totalPagar));

//totalPagar = suma;
console.log(totalPagar);
 

let vaciar = document.getElementById("vaciartodo")
//vaciar.addEventListener("click",eliminarZapato)

vaciar.addEventListener("click",()=>{

 eliminarZapatoMihai() })


carrito.addEventListener("click",eliminarZapato);

 function eliminarZapatoMihai(){
    
 while(listaZapatos.firstChild){
    
     listaZapatos.removeChild(listaZapatos.firstChild);
    }
   
    vaciarLocalStorage();
    return false;
  
 function vaciarLocalStorage(){

     //total(0);
     localStorage.clear();
    
 }
 }



<<<<<<< HEAD
=======
 function eliminarZapato(e){

    
    let zapato, zapatoId;
    //identificamos el enlace que tiene la clase borrar producto, en este caso la X
    if (e.target.classList.contains("carrito-producto-delete")){
       // console.log(e.target.parentElement.parentElement);
       //eliminamos la card
       e.target.parentElement.parentElement.remove();
        zapato = e.target.parentElement.parentElement;
        zapatoId = zapato.querySelector("button").getAttribute("data-id");
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


>>>>>>> 49392c79c2a350b3990a78110285e816a3587c9a
function eliminarZapato2(id){
  let zapatosLS=[];
  zapatosLS = obtenerProductoLocalStorage();
  let nuevZapatos=[]
  for(let i=0; i<zapatosLS.length;i++){
    if(zapatosLS[i].id!=id){
      let p= zapatosLS[i]
      nuevZapatos.push(p)
    }
  }
  
  localStorage.setItem("zapatos",JSON.stringify(nuevZapatos))
}

//ALMACENAR CANTIDADES Y VALORES

let productosFactura = document.getElementById("contenidoAqui");

console.log(totalTotal);

