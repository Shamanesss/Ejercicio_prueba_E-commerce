const idiomas = document.querySelectorAll(".menu-banderas-idiomas");



cargarEventListenersMenuIdiomas();

function cargarEventListenersMenuIdiomas(){
          
          // cuando el elemento que hace clic contenga esta.... algo se ejecutara
          if(idiomas.target.classList.contains("bandera-es")){
              
              //Escalamos hacia arriba dos posiciones en los padres (Toda la info de la card)
              //zapato
             // const zapato= e.target.parentElement.parentElement;
              console.log("Espanol");
     
     
          } else{
               console.log("otro idioma");
          };
      }








// idiomas.forEach((idioma) => {

//      let espanol = document.querySelector(".menu-banderas .bandera-es");
//      espanol.addEventListener("click", function(event) {
//          alert("Bandera is clicked!");
     
// })

// })




// .addEventListener("click", function(event) {
//      alert("Submit button is clicked!");
//      event.preventDefault();



//1 Hay que declarar la variables de las banderas para cada idioma, 3 variables


// let check = document.querySelector(".check");


//2 Crear los event listeners

// check.addEventListener('click', idioma);


//3 Crear una funcion que se active al hacer click en cada bandera y toma una accion dependiendo de donde se hace click

// function idioma(){
//      let id = check.checked;

//      if (id == true){
//           location.href="ubicacion de archivo en ingles"
//      } else {
//           location.href("ubicaion archivo en español")
//      }
// }