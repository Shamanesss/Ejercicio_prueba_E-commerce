
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

