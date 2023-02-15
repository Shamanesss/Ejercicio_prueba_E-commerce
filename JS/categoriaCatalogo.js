 let checkZapatillaHombre = document.getElementById("checkZapatillaHombre");
 let checkBotasHombre = document.getElementById("checkBotasHombre");
 let checkSandaliasHombre = document.getElementById("checkSandaliasHombre");

 let hombreZapatilla = document.querySelector(".hombreZapatilla");
 let hombreBotas = document.querySelector(".hombreBotas");
 let hombreSandalias = document.querySelector(".hombreSandalias");


 checkZapatillaHombre.addEventListener("change", habilitar);


 //checkZapatillaHombre.checked=false;
 

// ---------habilitar boton--------

//checkZapatillaHombre.checked= false;
console.log(checkZapatillaHombre.checked);

function habilitar(event) {
        console.log(checkZapatillaHombre.checked)
        let pulsado = checkZapatillaHombre.checked;
        console.log(pulsado);
        console.log(event);

        switch (pulsado) {
          case true:
              hombreZapatilla.style.backgroundColor = "red";
              console.log(pulsado + "true");
            break;
      
          case false:
              hombreZapatilla.style.backgroundColor = "blue";
              console.log(pulsado + "false");
            break;
        }
  
 
}






//  function estadoCheck(){
//      console.log(checkZapatillaHombre.checked)
//      let estado = checkZapatillaHombre.checked;
//      if(estado.checked){
//          console.log(checkZapatillaHombre)
//          hombreZapatilla.style.backgroundColor = "red";
        //  hombreZapatilla.style.display = "none";
        //  hombreBotas.style.display = "none";
        //  hombreSandalias.style.display = "none";
    //} }