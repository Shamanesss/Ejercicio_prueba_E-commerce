//CATEGORIAS HOMBRES
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

//CATEGORIAS HUJERES
//Capturar caja que contiene los botones y cada id de los radios
let selectorMujer = document.getElementById("cajaRadioMujer");
let checkZapatillaMujer = document.getElementById("checkZapatillaMujer");
let checkBotasMujer = document.getElementById("checkBotasMujer");
let checkSandaliasMujer = document.getElementById("checkSandaliasMujer");
let checkTodoMujer = document.getElementById("checkTodoMujer");

//Capturar cada caja donde se muestra el contenido hombre
let mujerZapatilla = document.querySelector(".mujerZapatilla");
let mujerZapatillaCard1 = document.querySelector(".mujerZapatillaCard1");
let mujerZapatillaCard2 = document.querySelector(".mujerZapatillaCard2");
let mujerZapatillaCard3 = document.querySelector(".mujerZapatillaCard3");
let mujerBotas = document.querySelector(".mujerBotas");
let mujerBotasCard = document.querySelector(".mujerBotasCard");
let mujerSandalias = document.querySelector(".mujerSandalias");
let mujerSandaliasCard = document.querySelector(".mujerSandaliasCard");

selectorMujer.addEventListener("change", function (event) {
  // alert(event.target.id);

  let identificadorMujer = event.target.id;
  // alert(identificadorMujer);

  //const mostrado=document.getElementById(identificador);

  //alert(mostrado.index);

  cambiarEstado(identificadorMujer);
  console.log("captura id" + " " + identificadorMujer);
});

function cambiarEstado(identificadorMujer) {
  //console.log(identificador);
  let pulsado = identificadorMujer;
  console.log("captura en funcion" + "" + +pulsado);

  switch (pulsado) {
    case "checkTodoMujer":
      //mostrar zapatillas
      mujerZapatilla.style.display = "block";
      mujerZapatillaCard1.style.display = "flex";
      mujerZapatillaCard2.style.display = "flex";
      mujerZapatillaCard3.style.display = "flex";

      //mostrar botas
      mujerBotas.style.display = "block";
      mujerBotasCard.style.display = "flex";
      //mostrar sandalias
      mujerSandalias.style.display = "block";
      mujerSandaliasCard.style.display = "flex";
      break;

    case "checkZapatillaMujer":
      //mostrar
      mujerZapatilla.style.display = "block";
      mujerZapatillaCard1.style.display = "flex";
      mujerZapatillaCard2.style.display = "flex";
      mujerZapatillaCard3.style.display = "flex";

      //ocultar
      mujerBotas.style.display = "none";
      mujerBotasCard.style.display = "none";
      mujerSandalias.style.display = "none";
      mujerSandaliasCard.style.display = "none";

      break;

    case "checkBotasMujer":
      //mostrar
      mujerBotas.style.display = "block";
      mujerBotasCard.style.display = "flex";

      //ocultar

      mujerSandalias.style.display = "none";
      mujerSandaliasCard.style.display = "none";
      mujerZapatilla.style.display = "none";
      mujerZapatillaCard1.style.display = "none";
      mujerZapatillaCard2.style.display = "none";
      mujerZapatillaCard3.style.display = "none";

      console.log(pulsado + "false");
      break;
    case "checkSandaliasMujer":
      //mostrar
      mujerSandalias.style.display = "block";
      mujerSandaliasCard.style.display = "flex";
      //ocultar
      mujerBotas.style.display = "none";
      mujerBotasCard.style.display = "none";
      mujerZapatilla.style.display = "none";
      mujerZapatillaCard1.style.display = "none";
      mujerZapatillaCard2.style.display = "none";
      mujerZapatillaCard3.style.display = "none";

      break;
  }
}
