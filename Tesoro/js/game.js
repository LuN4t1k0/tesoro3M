// alert("Listo para ejecutar el juego");

//definir el alto y el ancho de nuestro mapa
const WIDTH = 400;
const HEIGHT = 400;

//Generar el mapa del tesoro
let = {
  x: getRandomNumber(WIDTH),
  y: getRandomNumber(HEIGHT) 
};

//donde hizo clic el usuario 
let $map = document.getElementById("map");
let $distance = document.getElementById("distance");
let clicks = 0;

//funcion que nos muestre los resultado de los click, esto se debe mostrar en la capa vista

$map.addEventListener("click",function(e){
  clicks++;
  let distance = getDistance(e, tarjet);
  let distanceHint = getDistanceHint(distance);
})
