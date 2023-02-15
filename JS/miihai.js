
let cantidades = document.querySelectorAll(".cantidad-producto");
let precios = document.querySelectorAll(".carrito-pr-precio p");
let subtotales = document.querySelectorAll(".carrito-pr-subtotal p");
let borrar =document.querySelectorAll(".trash");


let cant, precio, sterge;

for (let i=0; i<cantidades.length; i++){
    cantidades[i].addEventListener("change", function(){
        cant=parseInt(cantidades[i].value);
        precio =parseInt((precios[i].textContent).slice(1));
        mi (cant , precio, subtotales[i])  ;  
        total(subtotales)
    })
};

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
}




let vaciar = document.getElementById("vaciartodo")
vaciar.addEventListener("click",eliminarZapato)
//carrito.addEventListener("click",eliminarZapato);

function eliminarZapato(){
    
while(listaZapatos.firstChild){
    
    listaZapatos.removeChild(listaZapatos.firstChild);
   }
   
   vaciarLocalStorage();
  // return false;
  
function vaciarLocalStorage(){

    total(0);
    localStorage.clear();
    
}

}
