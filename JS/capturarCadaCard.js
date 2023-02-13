//Adquirir variables

//captura la tarjeta
//const card = document.querySelector(".tarjetaCaptura");
//const btnSalvar = document.getElementById("botonSalvar");
//const clicBotonImagen = document.getElementById("clicBoton");
const contenedor=document.getElementById("lista-zapatos");



// // -----------------------Seleccionar cada objeto -----------
  contenedor.addEventListener("click", function(event){
   console.log(event.target);


   
    let elemento=event.target.parentNode;   
    console.log(elemento) ;    
    leerDatos(elemento);
    window.open('EspecificacionesNew.html');
   
 
 });

// -----------------------Seleccionar cada objeto -----------

//Clic al Boton
//  clicBotonImagen.addEventListener("click", function(){
//   leerDatos(card);
//   window.open('especificaciones.html');
//  });

//  btnSalvar.addEventListener("click", () => {
//   console.log("Captura objeto");
//   console.log(card);
//   leerDatos(card);
//  });

//Paso 2  card = se le asigna elemento
//Leer los datos del zapato o el producto
function leerDatos(card) {
  console.log("Entramos a leer");
  //console.log(card);
  //leer todos los datos de la card (crear objeto)
  const infoCard = {
    imagen: card.querySelector("img").src,
    titulo: card.querySelector("h5").textContent,
    descripcion: card.querySelector("p").textContent,
    precio: card.querySelector(".precio span").textContent,
  };

  //Mostrar valores individuales
  console.log("Mostrar contenido total");
  console.log(infoCard);
  console.log("Mostrar imagen");
  console.log(infoCard.imagen);
  console.log("Mostrar titulo");
  console.log(infoCard.titulo);
  console.log("Mostrar descripcion");
  console.log(infoCard.descripcion);
  console.log("Mostrar precio");
  console.log(infoCard.precio);

  localStorage.setItem("cardProducto",JSON.stringify(infoCard));
}

