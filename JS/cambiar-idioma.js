


let idiomas = [document.querySelectorAll(".menu-banderas")];
idiomas.forEach((idioma) => {

     let espanol = document.querySelectorAll(".menu-banderas .bandera-es");
     espanol.addEventListener("click", cambioIdioma);

     function cambioIdioma(){
          console.log(espanol);
     }
})




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