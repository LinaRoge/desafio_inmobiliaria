import { propiedades_ventas } from "./propiedades.js"; //Importamos el arreglo del archivo propiedades.js

const cardConteiner = document.querySelector(".cards  "); //Obtenemos la información de la class declarada en mi HTML
let allCards = "";

for (let index = 0; index < propiedades_ventas.length; index++) {
  //Muestra solo todas propiedades

  allCards += `
    <div> 
   <img src="${propiedades_ventas[index].src}"> </img> 
    <h5> ${propiedades_ventas[index].nombre} </h5> 
    <p> ${propiedades_ventas[index].descripcion} </p>
    <p> <i class="fas fa-map-marker-alt"></i> ${
      propiedades_ventas[index].ubicacion
    } </p> 
    <p> <i class="fas fa-bed"></i> ${
      propiedades_ventas[index].habitaciones
    } Habitaciones  | <i class="fas fa-bath"></i> ${
    propiedades_ventas[index].banos
  } Baños </p>
    <p> <i class="fas fa-dollar-sign"></i>  ${
      propiedades_ventas[index].costo
    } </p>
    <p> <i class="fas fa-smoking-ban"></i> ${
      propiedades_ventas[index].smoke
        ? '<span style="color:green">Permitido fuma </span>'
        : '<span style="color:red">No se permite fumas</span>'
    }</p>
    <p> <i class="fa-solid fa-ban"></i> ${
      propiedades_ventas[index].pets
        ? '<span style="color:green"> Mascotas Permitidas</span>'
        : '<span style="color:red">No se permiten mascotas</span>'
    }</p>
    </div>`;
}
cardConteiner.innerHTML = allCards;
