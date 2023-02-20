

function startTime() {
     var today = new Date();
     var hr = today.getHours();
     var min = today.getMinutes();
     
     ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
     hr = (hr == 0) ? 12 : hr;
     hr = (hr > 12) ? hr - 12 : hr;
     //Add a zero in front of numbers<10
     hr = checkTime(hr);
     min = checkTime(min);
     
     document.getElementById("clock").innerHTML = hr + ":" + min + ":" +  " " + ap;
     
     var months = ['January ', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octuber', 'November', 'December'];
     var days = ['Sunday', 'Monday', 'Tuesday ', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
     var curWeekDay = days[today.getDay()];
     var curDay = today.getDate();
     var curMonth = months[today.getMonth()];
     var curYear = today.getFullYear();
     var date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
     document.getElementById("date").innerHTML = date;
     
     var time = setTimeout(function(){ startTime() }, 500);
 }
 
 function checkTime(i) {
     if (i < 10) {
         i = "0" + i;
     }
     return i;
 }
 
 
 
 window.onload = startTime();


//  PopUP


const modelbox = document.getElementById('modelbox');

setTimeout(function(){

  modelbox.style.display = "block";
}, 10000);


  function closemodel() {
    modelbox.style.display = "none"
  }


//<!-- ---------------------Validacion de formulario---------------------------------- -->

function validar() {
	var user = document.getElementById("name");
	var email = document.getElementById("email");
    // var expresion = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
    var mensaje = document.getElementById("mensaje");

	if(user.value.length == 0){
      alert("Debe ingresar el Usuario");
    	user.focus();
    	return false;
	}
	else if(email.value.length == 0) {
		alert("Por favor, ingrese su Email");
		email.focus();
		return false;
	}else if(mensaje.value == ""){
        mensaje.focus();
        alert("Escribe tu mensaje.");
        return false;
  
    }else {
    alert("Datos de formulario enviados exitosamente.");
    document.getElementById("myForm").reset();
	  return false;
	}
}



// function startTime(){
//     today=new Date();
//     h=today.getHours();
//     m=today.getMinutes();
//     s=today.getSeconds();
//     m=checkTime(m);
//     s=checkTime(s);
//     document.getElementById('reloj').innerHTML=h+":"+m+":"+s;
//     t=setTimeout('startTime()',500);}
//     function checkTime(i)
//     {if (i<10) {i="0" + i;}return i;}
//     window.onload=function(){startTime();}