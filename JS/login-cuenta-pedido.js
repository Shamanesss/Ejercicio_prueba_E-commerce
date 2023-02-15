let pedidos = document.getElementById('pedidos');
const compras =[
["#0967","Playera Black","80 €"],
["#1088","Sandalias Realax","250 €"],
["#2345","Botines Amazing","400 €"]
]
console.log(compras[0]);
const img = new Image(100,200);
img.src="../img/imgZapatos/mujer/zapatillas/zapatillasMujer1.jpg"
document.body.appendChild(img)
console.log(img)

function numeropedidos(){


pedidos.innerHTML=` <table class="table">
<thead>
  <tr>
    <th scope="col">Numero de pedido</th>
    <th scope="col">imagen</th>
    <th scope="col">Producto</th>
    <th scope="col">Precio</th>
  </tr>
</thead>
<tbody>
  <tr>
    <th scope="row">${compras[0][0]}</th>
    <td>${compras[0][1]}</td>
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
</table>`
}
numeropedidos();