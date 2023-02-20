let pedidos = document.getElementById('pedidos');
let imagen1 = document.getElementById('imagen1');
let imagen2 = document.getElementById('imagen2');
let imagen3 = document.getElementById('imagen3');
const compras =[
["#0967","Playera Black","80 €"],
["#1088","Sandalias Realax","250 €"],
["#2345","Botines Amazing","400 €"]
]



function numeropedidos(){


pedidos.innerHTML=` 
<div class="px-4 py-3 table-responsive" >
<h2>PEDIDOS</h2>
<table class="table aling-middle">
<thead>
  <tr>
    <th scope="col">Numero de pedido</th>
    <th scope="col">Imagen</th>
    <th scope="col">Producto</th>
    <th scope="col">Precio</th>
  </tr>
</thead>
<tbody>
  <tr>
    <th scope="row">${compras[0][0]}</th>
    <td id="imagen1"></td>
    <td>${compras[0][1]}</td>
    <td>${compras[0][2]}</td>
  </tr>
  <tr>
    <th scope="row">${compras[1][0]}</th>
    <td>${compras[1][1]}</td>
    <td>${compras[1][1]}</td>
    <td>${compras[1][2]}</td>
  </tr>
  <tr>
    <th scope="row">${compras[2][0]}</th>
    <td>${compras[2][1]}</td>
    <td>${compras[2][1]}</td>
    <td>${compras[2][2]}</td>
  </tr>
</tbody>
</table>
</div>`
}
numeropedidos();