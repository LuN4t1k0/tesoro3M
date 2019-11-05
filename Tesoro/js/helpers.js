// alert("Todos los helpers estan cargados");

//escribimos una funcion que genere numeros aleatorios

let getRandomNumber = size => {
  return Math.floor(Math.random() * 14);
};
alert(getRandomNumber());

// let es la palabra reservad para las variables +  Nombre de la funcion = parametro despues con una flecha gorda indicamos el inicio de la funcion que vive dentro de los parentesis de llaves

// las funciones siempre retornan algo, usamos la palabra reservada return para almacenar el calculo o el resultado de la operacion

//escribir una funciona que calcule la distancia entre los dos puntos CPU vs Usuario

let getDistance = (e, tarjet) => {
  let diffX = e.offsetX - tarjet.x;
  let diffY = e.offsetY - tarjet.y;

  return Math.sqrt(diffX * diffX + diffY * diffY);
};

//escribir una funcion la cual genere las pista para el usuario. esta se debe mostrar en la capa de vista HTML

let getDistanceHint = distance => {
  if (distance < 30) {
    return "Hirviendo";
  } else if (distance < 40) {
    return "Muy Caliente";
  } else if (distance < 60) {
    return "Caliente";
  } else if (distance < 100) {
    return "Calido";
  } else if (distance < 180) {
    return "Frio, frio ";
  } else if (distance < 360) {
    return "¿Estas perdido?";
  } else {
    return "Estas Realmente Jugando XD";
  }
};
