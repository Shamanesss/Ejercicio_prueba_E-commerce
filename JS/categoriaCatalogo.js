//Capturar caja que contiene los botones y cada id de los radios
let selector = document.getElementById("cajaRadioHombre");
let checkZapatillaHombre = document.getElementById("checkZapatillaHombre");
let checkBotasHombre = document.getElementById("checkBotasHombre");
let checkSandaliasHombre = document.getElementById("checkSandaliasHombre");
let checkTodo = document.getElementById("checkTodoHombre");

//Capturar cada caja donde se muestra el contenido hombre
let hombreZapatilla = document.querySelector(".hombreZapatilla");
let hombreZapatillaCard1 = document.querySelector(".hombreZapatillaCard1");
let hombreZapatillaCard2 = document.querySelector(".hombreZapatillaCard2");
let hombreZapatillaCard3 = document.querySelector(".hombreZapatillaCard3");
let hombreBotas = document.querySelector(".hombreBotas");
let hombreBotasCard = document.querySelector(".hombreBotasCard");
let hombreSandalias = document.querySelector(".hombreSandalias");
let hombreSandaliasCard = document.querySelector(".hombreSandaliasCard");

//checkZapatillaHombre.addEventListener("change", habilitar);

//checkZapatillaHombre.checked=false;

// ---------habilitar boton--------

//checkZapatillaHombre.checked= false;
// console.log(checkZapatillaHombre.checked);

selector.addEventListener("change", function (event) {
  // alert(event.target.id);

  let identificador = event.target.id;
  //alert(identificador);

  //const mostrado=document.getElementById(identificador);

  //alert(mostrado.index);

  cambiarEstado(identificador);
  console.log("captura id" + " " + identificador);
});

function cambiarEstado(identificador) {
  console.log(identificador);
  let pulsado = identificador;
  console.log("captura en funcion" + "" + +pulsado);

  switch (pulsado) {
    case "checkTodoHombre":
      //mostrar zapatillas
      hombreZapatilla.style.display = "block";
      hombreZapatillaCard1.style.display = "flex";
      hombreZapatillaCard2.style.display = "flex";
      hombreZapatillaCard3.style.display = "flex";
      //mostrar botas
      hombreBotas.style.display = "block";
      hombreBotasCard.style.display = "flex";
      //mostrar sandalias
      hombreSandalias.style.display = "block";
      hombreSandaliasCard.style.display = "flex";
      break;

    case "checkZapatillaHombre":
      //mostrar
      hombreZapatilla.style.display = "block";
      hombreZapatillaCard1.style.display = "flex";
      hombreZapatillaCard2.style.display = "flex";
      hombreZapatillaCard3.style.display = "flex";
      //ocultar
      hombreBotas.style.display = "none";
      hombreBotasCard.style.display = "none";
      hombreSandalias.style.display = "none";
      hombreSandaliasCard.style.display = "none";
      console.log(pulsado + "true");
      break;

    case "checkBotasHombre":
      //mostrar
      hombreBotas.style.display = "block";
      hombreBotasCard.style.display = "flex";
      //ocultar
      hombreZapatilla.style.display = "none";
      hombreZapatillaCard1.style.display = "none";
      hombreZapatillaCard2.style.display = "none";
      hombreZapatillaCard3.style.display = "none";
      hombreSandalias.style.display = "none";
      hombreSandaliasCard.style.display = "none";

      console.log(pulsado + "false");
      break;
    case "checkSandaliasHombre":
       //mostrar
       hombreSandalias.style.display = "block";
      hombreSandaliasCard.style.display = "flex";
      //ocultar
      hombreZapatilla.style.display = "none";
      hombreZapatillaCard1.style.display = "none";
      hombreZapatillaCard2.style.display = "none";
      hombreZapatillaCard3.style.display = "none";
      hombreBotas.style.display = "none";
      hombreBotasCard.style.display = "none";
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
