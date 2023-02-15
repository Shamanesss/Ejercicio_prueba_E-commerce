
let cantidades = document.querySelectorAll(".cantidad-producto");
let precios = document.querySelectorAll(".carrito-pr-precio p");
let subtotales = document.querySelectorAll(".carrito-pr-subtotal p");
let borrar =document.querySelectorAll(".trash");


total(subtotales)

let cant, precio, sterge;

for (let i=0; i<cantidades.length; i++){
    cantidades[i].addEventListener("change", function(){
        cant=parseInt(cantidades[i].value);
        precio =parseInt((precios[i].textContent).slice(1));
        //let subtotal= subtotales[i];
        mi (cant , precio, subtotales[i])  ;  
        total(subtotales)
    })
};

function mi (cantidad, precio, subtotal){

let result = (cantidad * precio); 
subtotal.innerHTML = "$" + result;

//alert("el subtotal es" + subtotal)

}

function total (subtotales){
    let suma=0

    for(let j=0; j<subtotales.length; j++){
        suma =parseInt((subtotales[j].textContent).slice(1))+suma
    }

    let total= document.getElementById("total");
    total.innerHTML = "$" + suma ;
 
}


//  for (let k=0; k<cantidades.length; k++){
//      borrar[k].addEventListener("click", function(){
       
//      })
//  };

let vaciar = document.getElementById("vaciartodo")
while(vaciar.firstChild) {
    vaciar.removeChild(vaciar.firstChild);
}
