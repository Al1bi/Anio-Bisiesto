import esBisiesto from "./esBisiesto";

const anio = document.querySelector("#anio-coso");
const div = document.querySelector("#resultado-div");
const button = document.querySelector("#check-button");

button.addEventListener("click", (event) => {
  event.preventDefault();

  var mensaje = "El anio " + anio.value;

  if(esBisiesto(anio.value)) mensaje += " es bisiesto";
  else mensaje += " no es bisiesto";

  div.innerHTML = "<p>" + mensaje + "</p>";
});
