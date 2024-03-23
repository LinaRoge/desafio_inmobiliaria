import { propiedades_ventas, propiedades_alquileres } from "./propiedades.js";
const cardConteiner = document.querySelector(".cards  ");
let allCards = "";

for (let index = 0; index < 3; index++) {
  //Muestra solo 3 propiedades

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

const cardConteiner1 = document.querySelector(".cards1  ");
let allCards1 = "";

for (let index1 = 0; index1 < 3; index1++) {
  //propiedades_ventas.length //Muestra solo 3 propiedades

  allCards1 += `
    <div> 
   <img src="${propiedades_alquileres[index1].src}"> </img> 
    <h5> ${propiedades_alquileres[index1].nombre} </h5> 
    <p> ${propiedades_alquileres[index1].descripcion} </p>
    <p> <i class="fas fa-map-marker-alt"></i> ${
      propiedades_alquileres[index1].ubicacion
    } </p> 
    <p> <i class="fas fa-bed"></i> ${
      propiedades_alquileres[index1].habitaciones
    } Habitaciones  | <i class="fas fa-bath"></i> ${
    propiedades_alquileres[index1].banos
  } Baños </p>
    <p> <i class="fas fa-dollar-sign"></i>  ${
      propiedades_alquileres[index1].costo
    } </p>
    <p> <i class="fas fa-smoking-ban"></i> ${
      propiedades_alquileres[index1].smoke
        ? '<span style="color:green">Permitido fuma </span>'
        : '<span style="color:red">No se permite fumas</span>'
    }</p>
    <p> <i class="fa-solid fa-ban"></i> ${
      propiedades_alquileres[index1].pets
        ? '<span style="color:green"> Mascotas Permitidas</span>'
        : '<span style="color:red">No se permiten mascotas</span>'
    }</p>
    </div>`;
}

cardConteiner1.innerHTML = allCards1;
